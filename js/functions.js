document.querySelector('#dice img').addEventListener('click',() => {

    const randomNumber = Math.floor(Math.random() * 6) + 1
    const imagePath = './images/' + randomNumber + '.png'
    const diceImage = document.querySelector('#dice img')
    diceImage.src = imagePath

})