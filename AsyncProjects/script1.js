const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
let intervelId;

const startChangingColor = () => {
    const changeBgColor = () => {
        document.body.style.backgroundColor = randomColor()
    }

    if (!intervelId) {
        intervelId = setInterval(changeBgColor, 1000);
    }

}

const stopChangingColor = () => {
    clearInterval(intervelId)
    intervelId = null
}


document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)