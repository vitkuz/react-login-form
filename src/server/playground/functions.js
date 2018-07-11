Array.prototype.findMin = function () {
  let min = 0;
  for(let i=0; i < this.length; i++) {
    if (this[min] - this[i] > 0 ) {
      min = i;
    }
  }
  return this[min];
};


const arr1 = [1,2,3,4];


console.log(arr1.findMin());