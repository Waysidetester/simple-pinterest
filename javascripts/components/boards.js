import boardsData from "../data/boardsData.js";
import pins from "./pins.js";
import pinsData from "../data/pinsData.js";

const writeBoards = (boards) => {
    let domstring = '';
    boards.forEach(board => {
        const boardImg = board.pins[0] ? board.pins[0].image_url : './db/default-img.jpeg'
        domstring += `
        <div class="board-card p-2" id="${board.id}">
            <img class="card-img-top" src="${boardImg}" alt="${board.name}">
            <div class="card-body">
                <h5 class="card-title">${board.name}</h5>
                <p class="card-text">${board.pins.length} pins</p>
            </div>
        </div>`
    });
    $("#user-boards").html(domstring);
};



const bindEvents = () => {
    $("#user-boards").on("click", ".board-card", (e) => {
       const clickedBoardId = ($(e.target).closest(".board-card").attr('id'));
       $("#boards-page").hide();
       $("#pins-page").show();
       pins.initPins(clickedBoardId);
    })
};

const init = () => {
    boardsData.loadBoards().then((boards) => {
        return pinsData.loadPinOnBoards(boards);
    }).then((boardsWithPins) => {
        writeBoards(boardsWithPins);
        bindEvents();
    }).catch((error) => {
        console.error(error);
    })
};

export default {init};