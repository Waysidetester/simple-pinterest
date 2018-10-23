const loadPins = (boardId) => {
    return new Promise((resolve, reject) => {
        $.get("../db/pins.json")
        .done ((data) => {
            resolve(data.pins.filter(pin => pin.board_id == boardId))
            console.log(data.pins.filter(pin => pin.board_id == boardId));
        })
        .fail((error) => {
            reject(error);
        })
    })
};

export default {loadPins}