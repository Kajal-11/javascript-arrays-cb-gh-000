var chocolateBars= ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var array1 = array;
  array1 = array1.unshift(element);
  return array1;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  var array1 = array;
  array1 = array1.push(element);
  return array1
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}
