// extractValue
function extractValue(arr, key){
  return arr.reduce(function(acc, obj){
    acc.push(obj[key]);
    return acc;
  }, []);
}


// vowelCount
function vowelCount(str){
  const vowels = "aeiou";

  return str.toLowerCase().split("").reduce(function(acc, char){
    if(vowels.includes(char)){
      acc[char] = (acc[char] || 0) + 1;
    }
    return acc;
  }, {});
}


// addKeyAndValue
function addKeyAndValue(arr, key, value){
  return arr.reduce(function(acc, obj){
    obj[key] = value;
    acc.push(obj);
    return acc;
  }, []);
}


// partition
function partition(arr, callback){
  return arr.reduce(function(acc, val){
    if(callback(val)){
      acc[0].push(val);
    } else {
      acc[1].push(val);
    }
    return acc;
  }, [[], []]);
}
