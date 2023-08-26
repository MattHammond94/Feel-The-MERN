export const SNAKE_SPEED = 2;
const snakeBody = [
  { x: 10, y: 11 },
  { x: 11, y: 11 },
  { x: 12, y: 11 }
]

export function update() {
  console.log('Update Snake')
}

export function draw(gameBoard) {
  console.log('Draw Snake')
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.x
    snakeElement.style.gridColumntart = segment.y
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  })
}