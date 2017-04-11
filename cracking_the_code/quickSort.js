
var quickSort = function(arr) {
  if(arr.length===0) {
    return arr
  }

  var left = []
  var right = []

  var pivot = Math.floor(arr.length/2)

  for(var i=0; i < arr.length; i++) {
    if(i === pivot) {

    }
    else if(arr[i] < arr[pivot]) {
      left.push(arr[i])
    }
    else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat(arr[pivot], quickSort(right))

}
var a = [2,4,3,1,7,5,6,9,8]

var b = quickSort(a)

console.log(b)