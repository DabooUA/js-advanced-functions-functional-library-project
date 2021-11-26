const inputType = function(collection){
  return collection instanceof Array
    ? collection.slice()
    : Object.values(collection);
};

const myEach = function (collection, callback){
  const newCollection = inputType(collection);
  for (let i = 0; i < newCollection.length; i++){
    callback(newCollection[i]);
  }
  return collection;
};

const myMap = function(collection, callback){
  const newCollection = inputType(collection);
  const newArray = [];
  for (let i = 0; i < newCollection.length; i++){
    newArray.push(callback(newCollection[i]));
  }
  return newArray;
}

const myReduce = function(collection, callback, acc){
  let newCollection = inputType(collection);
    if (!acc){
      acc = newCollection[0];
      newCollection = newCollection.slice(1);
    }
 
  for (let i = 0; i < newCollection.length; i++){
    acc = callback(acc, newCollection[i], newCollection);
  }
  return acc;
};

const myFind = function(collection, predicate){
  const newCollection = inputType(collection);
  for (let i = 0; i < newCollection.length; i++){
    if (predicate(newCollection[i]))
    return newCollection[i];
  }
  return undefined;
};

const myFilter = function(collection, predicate){
  const newCollection = inputType(collection);
  const newArray = [];
  for (let i = 0; i < newCollection.length; i++){
    if (predicate(newCollection[i])) newArray.push(newCollection[i]);
  }
  return newArray;
};

const mySize = function(collection){
  const newCollection = inputType(collection);
  return newCollection.length;
};

const myFirst = function(arr, stop = false){
  return stop ? arr.slice(0, stop) : arr[0];
}

const myLast = function(arr, start = false){
  return start
    ? arr.slice(arr.length - start, arr.length)
    : arr[arr.length - 1];
};

const myKeys = function (obj){
  const keys = [];
  for (let key in obj){
    keys.push(key);
  }
  return keys;
}

const myValues = function (obj){
  const values = [];
  for (let value in obj){
    values.push(obj[value]);
  }
  return values;
}