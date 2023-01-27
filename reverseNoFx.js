function reverse(array) {

    let left = 0;
    let right = array.length - 1;
  
    while (left < right) {
  
      // Swap the elements with temp variable
      let temp = array[left];
      array[left] = array[right];
      array[right] = temp;
  
      // Move indices to the middle
      left++;
      right--;
    }
    console.log(array);
  }
reverse([1,2,3,4,5,6,7,8,9])