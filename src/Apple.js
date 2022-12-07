class Apple {
  constructor (el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'apple');
    this.node.setAttribute('src', 'assets/mug.png')

    el.appendChild(this.node);

    this.node.style.left = `${(this.random(0, 13) * 50)}px`
    this.node.style.top = `${(this.random(0, 13) * 50)}px`
  }

  random (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}