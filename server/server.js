const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
});
 
const {createGameState, gameLoop} = require('./game')
const {FRAME_RATE} = require('./constants')



io.on('connection', client => {

    const state = createGameState();
    client.on('keydown', handleKeyDown);
    var r=0;
    function handleKeyDown(keyCode){
        try{
            keyCode = parseInt(keyCode);
            if(keyCode==13){
                console.log("Roll Dice");
                r=5;
                gameLoop(state, r)
                client.emit('gameState', JSON.stringify(state))
            }
        }catch(e){
            console.error(e);
            return;
        }
    }


    startGameInterval(client, state, r);
});


function startGameInterval(client, state, moves_forward) {
    const intervalId = setInterval(() => {
      const winner = gameLoop(state, moves_forward);
      
      if (!winner) {
        client.emit('gameState', JSON.stringify(state))
      } else {
        client.emit('gameOver');
        clearInterval(intervalId);
      }
    }, 1000 / FRAME_RATE);
}


httpServer.listen(3000);


