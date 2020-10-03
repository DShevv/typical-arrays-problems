
exports.min = function min (array) { 
  var min
  try {
    if (array.length != 0) {
      min =  Math.min.apply(Math,array);
    }
    else{
      throw Error
    }
    
  } catch (error) {
    min = 0
  }
  
  
  return min
}

exports.max = function max (array) {
  var max
  try {
    if (array.length != 0) {
      max =  Math.max.apply(Math,array);
    }
    else{
      throw Error
    }
  } catch (error) {
    max = 0
  }
  return max
}

exports.avg = function avg (array) {
  try {
    var avg
    if (array.length != 0) {
      avg = array.reduce((a,b) => a + b, 0)/array.length
    }
    else{
      throw Error
    }
    
  } catch (error) {
    avg = 0
  }
  return avg
}
