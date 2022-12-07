class Head {
  constructor(board) {
    this.board = board;
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'head');
    this.node.setAttribute('src', 'assets/mossHead.png')
    board.appendChild(this.node);

    this.currentDirection = null;
    this.SPEED = 300;

    this.node.style.top = 0;
    this.node.style.left = 0;

    this.bodySize = 0;
    this.headPositions = [];
    this.bodies = [];

    setTimeout(this.move.bind(this), this.SPEED);
  }

  move() {
    const moveTimeoutID = setTimeout(this.move.bind(this), this.SPEED);
    const head = this.node;
    const direction = this.currentDirection;
    // const apple = document.getElementById('apple');
    let topPosition = Number(head.style.top.replace('px', ''));
    let leftPosition = Number(head.style.left.replace('px', ''));

    if (direction === 'right') {
      head.style.left = `${(leftPosition += 50)}px`;
    }
    if (direction === 'down') {
      head.style.top = `${(topPosition += 50)}px`;
    }
    if (direction === 'left') {
      head.style.left = `${(leftPosition -= 50)}px`;
    }
    if (direction === 'up') {
      head.style.top = `${(topPosition -= 50)}px`;
    }

    if (parseInt(head.style.top) < 0 || parseInt(head.style.top) === 700) {
      alert('Game Over');
    }
    if (parseInt(head.style.left) < 0 || parseInt(head.style.left) === 700) {
      alert('Game Over');
    }

    const apple = document.getElementById('apple');
    const applePosition = {
      top: Number(apple.style.top.replace('px', '')),
      left: Number(apple.style.left.replace('px', ''))
    }

    if (topPosition === applePosition.top && leftPosition === applePosition.left) {
      apple.remove();
      let newApple = new Apple(this.board);

      while (newApple.node.style.top === `${topPosition}px` && newApple.node.style.left === `${leftPosition}px`) {
        newApple.node.remove();
        newApple = new Apple(this.board)
      }

      const body = new Body(this.board);
      this.bodies.push(body);
      this.bodySize += 1;
    }
    
    this.headPositions.unshift({ top: topPosition, left: leftPosition });
    
    if (this.headPositions.length > this.bodySize + 1) {
      this.headPositions.pop();
    }

    // if (this.bodySize > 0) this.moveBodies(moveTimeoutID);

    if (leftPosition >= 700 || topPosition >= 700 || leftPosition < 0 || topPosition < 0) {

    }


    // setTimeout(this.move.bind(this), this.SPEED);
  }
}