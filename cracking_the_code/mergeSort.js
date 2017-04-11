var mergeSort = function(array, tempArray, low, high) {

  var tempArray = tempArray || []
  var low = low || 0
  var high = high || array.length
  var middle = Math.ceil((high+low) / 2)

  if(high - low < 2) {
    return 
  }

  mergeSort(array, tempArray, low, middle) //left
  mergeSort(array, tempArray, middle, high) //right
  merge(array, tempArray, low, middle, high)

  return array
}


var merge = function(array, tempArray, low, middle, high) {
  for(var i=low; i < high; i++) {
    tempArray[i] = array[i]
  }

  var leftCurr = low
  var rightCurr = middle

  var current = low

  while(leftCurr < middle && rightCurr < high) {
    if(tempArray[leftCurr] < tempArray[rightCurr]) {
      array[current] = tempArray[leftCurr]
      leftCurr++
    }
    else {
      array[current] = tempArray[rightCurr]
      rightCurr++
    }
    current++
  }
  while(leftCurr < middle) {
    array[current] = tempArray[leftCurr]
    leftCurr++
    current++
  }
}


var a = [6,7,5,4,1,9,8,2,3]

var sorted = mergeSort(a)
console.log(sorted)