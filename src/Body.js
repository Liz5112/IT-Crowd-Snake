class Body {
  constructor(board) {
    this.board = board;
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'bodyPart');
    this.node.setAttribute('src', 'assets/mossHead.png')
    board.appendChild(this.node);

    this.length = 0;
    this.SPEED = 300;
    this.currentDirection = '';

    setTimeout(this.move.bind(this), this.SPEED);
  }

  move() {
    if (this.length > 0) {
      const body = this.node;
      const direction = this.currentDirection;

      let topPosition = Number(body.style.top.replace('px', ''));
      let leftPosition = Number(body.style.left.replace('px', ''));

      if (direction === 'right') {
        body.style.left = `${(leftPosition += 50)}px`;
      }
      if (direction === 'down') {
        body.style.top = `${(topPosition += 50)}px`;
      }
      if (direction === 'left') {
        body.style.left = `${(leftPosition -= 50)}px`;
      }
      if (direction === 'up') {
        body.style.top = `${(topPosition -= 50)}px`;
      }
    }
    setTimeout(this.move.bind(this), this.SPEED);
  }
}