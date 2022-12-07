document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const board = document.querySelector('#board');

  const head = new Head(board);
  const apple = new Apple(board);

  body.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
      head.currentDirection = 'left';
      // bodyPart.currentDirection = 'left';
    }
  })

  body.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowRight') {
      head.currentDirection = 'right';
      // bodyPart.currentDirection = 'right';
    }
  })

  body.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowUp') {
      head.currentDirection = 'up';
      // bodyPart.currentDirection = 'up';
    }
  })

  body.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowDown') {
      head.currentDirection = 'down';
      // bodyPart.currentDirection = 'down';
    }
  })

  // const bodyPart = new Body(board);

  setInterval(() => {
    // if the head overlaps the apple
    if (head.node.style.left === apple.node.style.left && head.node.style.top === apple.node.style.top) {
      // move the apple to a random location
      apple.node.style.left = `${(apple.random(0, 13) * 50)}px`;
      apple.node.style.top = `${(apple.random(0, 13) * 50)}px`;

      // create a new bodyPart
      const newBodyPart = new Body(board);
      // attach it to the tail
      // bodyPart.appendChild(newBodyPart);

      bodyPart.length += 1;
      bodyPart.node.style.left = head.node.style.left;
      bodyPart.node.style.top = head.node.style.top;
    }
  }, 300);

})