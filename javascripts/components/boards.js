import boardsData from "../data/boardsData.js";
import pins from "./pins.js";

const writeBoards = (boards) => {
    let domstring = '';
    boards.forEach(board => {
        domstring += `
        <div class="board-card p-2" id="${board.id}">
            <img class="card-img-top" src="./db/default-img.jpeg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${board.name}</h5>
                <p class="card-text">42 Pins</p>
            </div>
        </div>`
    });
    $("#user-boards").html(domstring);
};

const boardReturn = () => {
    $("#toBoardsBtn").on("click", (e) => {
        $("#boards-page").show();
        $("#pins-page").hide(); 
    })
};

const bindEvents = () => {
    $("#user-boards").on("click", ".board-card", (e) => {
       const clickedBoardId = ($(e.target).closest(".board-card").attr('id'));
       $("#boards-page").hide();
       $("#pins-page").show();
       pins.initPins(clickedBoardId);
    })
    boardReturn();
};

const init = () => {
    boardsData.loadBoards().then((boards) => {
        writeBoards(boards);
        bindEvents();
    }).catch((error) => {
        console.error(error);
    })
};



export default {init};