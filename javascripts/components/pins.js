import pinsData from "../data/pinsData.js";

const writePins = (pins) => {
    let domstring = '';
    pins.forEach(pin => {
        domstring += `
        <div class="board-card p-2" id="${pin.id}">
            <img class="card-img-top" src="${pin.image_url}" alt="Card image cap">
            <a href="${pin.link}" target="_blank">link</a>
        </div>`
    });
    $("#pins-on-board").html(domstring);
};

const initPins = (boardId) => {
    pinsData.loadPins(boardId).then((pins) => {
        writePins(pins);
    });
};

export default {initPins};