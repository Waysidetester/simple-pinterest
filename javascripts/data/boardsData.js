const loadBoards = () => {
    return new Promise((resolve, reject) => {
        $.get("../db/boards.json")
        .done((data) => {
            console.log(data.boards)
            resolve(data.boards)
        })
        .fail((error) => {
            reject(error);
        })
    });
}

export default {loadBoards};