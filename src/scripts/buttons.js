// import style from '../styles/style.css'
let buttonsContainer =       document.createElement('div')
let moveButtonsContainer =   document.createElement('div')

let higherButtonUp =         document.createElement('button')

let middleButtonsContainer = document.createElement('div')
let middleButtonLeft =       document.createElement('button')
let middleButtonRight =      document.createElement('button')

let buttomButtonDown =       document.createElement('button')


buttonsContainer.classList.add('buttonsContainer')
moveButtonsContainer.classList.add('moveButtonsContainer')
middleButtonsContainer.classList.add('middleButtonsContainer')


higherButtonUp.innerHTML    = 'up'
middleButtonLeft.innerHTML  = 'left'
middleButtonRight.innerHTML = 'right'
buttomButtonDown.innerHTML  = 'down'

buttonsContainer.append(moveButtonsContainer)

moveButtonsContainer.append(higherButtonUp)

moveButtonsContainer.append(middleButtonsContainer)
middleButtonsContainer.append(middleButtonLeft)
middleButtonsContainer.append(middleButtonRight)

// moveButtonsContainer.append(buttomButtonDown)

export { buttonsContainer as buttons }