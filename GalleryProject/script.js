// Convert NodeList to an array
const img = document.querySelectorAll('.img');

img.forEach((item) => {
    item.addEventListener('mouseover', (e) => {
        const imges = e.target
        imges.style.height = '400px'
        imges.style.width = '400px'
        imges.style.transition = 'all 0.2s ease-in-out';
    })

    item.addEventListener('mouseleave', (e) => {
        const imges = e.target
        imges.style.height = '300px'
        imges.style.width = '300px'
        imges.style.transition = 'all 0.2s ease-in-out';
    })
})

console.log(img);

