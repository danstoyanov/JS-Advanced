function sumOf(input1, input2) {
    let result = 0;
  
    let firstElement = Number(input1);
    let secondElement = Number(input2);
  
    for (let index = firstElement; index <= secondElement; index++) {
      result += index;
    }
  
    console.log(result);
  }

sumOf("1", "5");
sumOf("-8", "20");
