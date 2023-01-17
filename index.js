function hasTargetSum(array, target) {
  for (i= 0; i < array.length; i++){
    for(j= 1 + i; j < array.length; j++){
      if(array[i]+ array[j]=== target){
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n3)
*/

/* 
  Add your pseudocode here
  for every iteration let i start at index 0, while i is less than the length of the array, incrementing by one each iteration
    for every iteration let j start at index 1 (j= i+1), while j is less than the length of the array, incrementing by one each iteration
    if i + j === target return true
  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
