const { GRID_SIZE } = require('./constants');

module.exports = {
    gameLoop,
    createGameState
}


function createGameState(){
    return {
        player1: {
            id: 0,
            pieces: {
                1: 0,
                2: -1,
                3: -1,
                4: -1,
                5: -1
            },
            dice_val: 0,
            pieces_saved: 0,
            pieces_capures: 0,
            pieces_availiable: 5,
            colour: "#F03C69",
        },
        active: true,
    }
}

function gameLoop(state, movePieceVal){
    if(!state){
        return;
    }

    const playerOne = state.player1;
    playerOne.pieces[1] += movePieceVal;
    if(playerOne.pieces[1]>29){
        playerOne.pieces[1]=0;
    } 
}
