// forEach

function doubleValues(arr){
  let newArr = [];
  arr.forEach(function(num){
    newArr.push(num * 2);
  });
  return newArr;
}

function onlyEvenValues(arr){
  let newArr = [];
  arr.forEach(function(num){
    if(num % 2 === 0){
      newArr.push(num);
    }
  });
  return newArr;
}

function showFirstAndLast(arr){
  let newArr = [];
  arr.forEach(function(word){
    newArr.push(word[0] + word[word.length - 1]);
  });
  return newArr;
}

function addKeyAndValue(arr, key, value){
  arr.forEach(function(obj){
    obj[key] = value;
  });
  return arr;
}

function vowelCount(str){
  let vowels = "aeiou";
  let result = {};

  str.toLowerCase().split("").forEach(function(letter){
    if(vowels.includes(letter)){
      if(result[letter]){
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  });

  return result;
}


// map

function doubleValuesWithMap(arr){
  return arr.map(function(num){
    return num * 2;
  });
}

function valTimesIndex(arr){
  return arr.map(function(num, i){
    return num * i;
  });
}

function extractKey(arr, key){
  return arr.map(function(obj){
    return obj[key];
  });
}

function extractFullName(arr){
  return arr.map(function(obj){
    return obj.first + " " + obj.last;
  });
}


// filter

function filterByValue(arr, key){
  return arr.filter(function(obj){
    return obj[key] !== undefined;
  });
}

function find(arr, value){
  return arr.filter(function(num){
    return num === value;
  })[0];
}

function findInObj(arr, key, value){
  return arr.filter(function(obj){
    return obj[key] === value;
  })[0];
}

function removeVowels(str){
  let vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .filter(function(letter){
      return !vowels.includes(letter);
    })
    .join("");
}

function doubleOddNumbers(arr){
  return arr
    .filter(function(num){
      return num % 2 !== 0;
    })
    .map(function(num){
      return num * 2;
    });
}
