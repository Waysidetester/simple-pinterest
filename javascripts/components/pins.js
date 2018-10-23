import pinsData from "../data/pinsData.js";

const shortenLink = (full_url) => {
    const hostname = new URL(full_url).hostname;
    return hostname;
};

const writePins = (pins) => {
    let domstring = '';
    pins.forEach(pin => {
        domstring += `
        <div class="pin-card pcard align-self-start p-2" id="${pin.id}">
        <img class="card-img-top" src="${pin.image_url}" alt="Card image cap"/>
        <a href="${pin.link}" target="_blank"  class="p-2"><button type="button" class="btn btn-light">${shortenLink(pin.link)}</button></a>
        </div>`
    });
    $("#pins-on-board").html(domstring);
};

const initPins = (boardId) => {
    pinsData.loadPins(boardId).then((pins) => writePins(pins)).catch((error) => console.log("pins screwed up",error));
};

export default {initPins};