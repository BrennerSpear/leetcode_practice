var mergeTwo = function (left, right) {
  // var merged = Array(left.length + right.length).fill(undefined)
  var merged = left.concat(right)
  var i = 0
  var leftIndex = 0
  var rightIndex = 0

  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      merged[i] = left[leftIndex]
      leftIndex++
    }
    else {
      merged[i] = right[rightIndex]
      rightIndex++
    }
    i++
  }
  while(leftIndex < left.length) {
    merged[i] = left[leftIndex]
    leftIndex++
    i++
  }

  return merged
}

var a = [1,3,5,7,9]
var b = [2,4,6,8,10]

var c = mergeTwo(a,b)
console.log(c)