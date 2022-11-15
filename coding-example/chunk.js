function chunk (array, length) { 

    var chunkarr = [], 
        i = 0, 
        n = array.length; 
  
    while (i < n) { 
      chunkarr.push(array.slice(i, i += length)); 
    } 
  
    return chunkarr; 
  } 
  console.log(chunk([1,2,3,4,5,6,6,7],3))