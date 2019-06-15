var chocolateBars= ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var array1 = array;
  array1.unshift(element);
  return array1
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element);
}

function addElementToEndOfArray(array, element){
  var array1 = array.push(element);
  return array1
}

function destructivelyAddElementToEndOfArray(array, element){
  return array.push(element);
}
