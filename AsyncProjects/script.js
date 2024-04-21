const sayVipul = () => {
    console.log('Vipul');
}

const changeText = () => {
    document.querySelector('h1').innerHTML = 'Js Series';
}

const changeMe = setTimeout(changeText, 2000)

document.querySelector('#stop').addEventListener('click', () => {
    clearTimeout(changeMe)
    console.log('STOP');
})