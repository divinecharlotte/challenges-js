function PrimeNumber(number) {
    if (number <= 1) {
      return false;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          return false;
        }
      }
      return true;
    }
  }
  
  function customSorting(arr) {
    //  arr = [3,6,2,4,7,9,5,8,1];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] < arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    //   console.log(arr);
    }
    let i = 0;
    while (i < arr.length) {
      if (PrimeNumber(arr[i])) {
        arr.splice(i, 1);
      } else {
        i++;
      }
   
    }
       console.log(arr);
    return arr;
  }

  customSorting([3,6,2,4,7,9,5,8,1])