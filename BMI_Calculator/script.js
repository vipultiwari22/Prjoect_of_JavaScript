const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const height = parseInt(document.querySelector('#Height').value)
    const weight = parseInt(document.querySelector('#Weight').value)
    const result = document.querySelector('.result')
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `please give a valid height ${height}`
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `please give a valid weight ${weight}`
    } else {
        const BMI = (weight / ((height * height) / 10000).toFixed(3))
        //  Show the reslut
        result.innerHTML = `<span>${BMI}</span>`
    }
})