const loadPins = (boardId) => {
    return new Promise((resolve, reject) => {
        $.get("../db/pins.json")
        .done ((data) => {
            resolve(data.pins.filter(pin => pin.board_id == boardId))
        })
        .fail((error) => {
            reject(error);
        })
    })
};

const loadPinOnBoards = (boards) => {
    return new Promise ((resolve, reject) => {
        $.get("../db/pins.json")
        .done((data) => {
            const boardsWithPins = boards.map(board => {
                const matchingPins = data.pins.filter(pin => pin.board_id == board.id);
                board.pins = matchingPins;
                return board;
            });
            resolve(boardsWithPins);

        })
        .fail((error) => {
            reject("error loadPinOnBoards",error)
        })
    })
}
export default {loadPins, loadPinOnBoards}