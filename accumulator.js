function Accumulator(startingValue) {
  this.value = startingValue,
  this.read = function() {
    let num = +prompt('value', '');
    this.value += num;
  }
}

