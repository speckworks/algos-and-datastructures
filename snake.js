class Snake {
  constructor(x, y){
    this.coordinates = [new SnakePart(x,y)]
  }
}

class SnakePart {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.element = document.createElement('div')
    this.element.style = `top: ${y * 10}; left: ${x * 10}; background: red`
    this.element.class = 'snakePart'
    let dom = document.getElementsByClassName('gameScreen')[0]
    dom.appendChild(this.element)
  }
}

class Apple {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

let snake = new Snake(1,1)

// direction (x, y)
// let apple = Apple(random x, random y) // within 0-x and 0-y

let checkPosition = (head) => {
  if (head.x > areaX || head.x < 0 || head.y > areaY || head.y < 0) {
    return false
  }
  for (let body in snake.coordinates) {
    if (body.x === head.x && body.y === head.y) {
      return false
    }
  }
  return true
}

// let makeApple = () => {
//   let newApple = new Apple(randomX, randomy)
//   while (!checkPosition(newApple)) {
//     newApple = new Apple(randomX, randomY)
//   }
// }

let interval = () => {
  let newHead = newHead(snake.coordinates[0], direction)
  if (checkPosition(newHead)) {
    return 'Game Over'
  } else {
    snake.coordinates.unshift(newHead)
    if (newHead.x === apple.x && newHead.y === apple.y) {
      makeApple()
    } else {
      snake.coordinates.pop()
    }
  }
}

let newHead = (head, direction) => {
  return {
    x: head.x + direction.x,
    y: head.y + direction.y
  }
}

let direction = (event) => {
  switch (event.key) {
    case "ArrowUp":
      return {
        x: 0,
        y: 1
      }
    break
    case "ArrowDown":
      return {
        x: 0,
        y: -1
      }
    break
    case "ArrowLeft":
      return {
        x: -1,
        y: 0
      }
    break
    case "ArrowRight":
      return {
        x: 1,
        y: 0
      }
    break
  }
}
