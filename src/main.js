import "./css/index.css"

const bgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const bgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")

const logo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type){
    const cardColors = {
        visa: ["#436D99", "#2D57F2"],
        mastercard: ["#DF6F29", "#C69347"],
        default: ["black", "gray"],
    }

    bgColor01.setAttribute("fill", cardColors[type][0])
    bgColor02.setAttribute("fill", cardColors[type][1])
    logo.setAttribute("src", `cc-${type}.svg`)
}

setCardType("default")