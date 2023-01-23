function prime(num) {
    if (num <= 1) {
      return false;
    } else {
      for (let i = 2; i < num; i++) {
        if (num % i == 0) {
          return false;
        }
      }
      // console.log(num);
      return true;
     
    }
  }

  let arr = [1,2,3,4,5,6,7,8,9];
  let array =[];
  arr.forEach(function (ele) {
    const isPrime = prime(ele);
    if (isPrime) {
    array.push(ele)
     
    }
    
  }
  )
  console.log(array);
  prime()