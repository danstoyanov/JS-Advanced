function calculate(first, second, third) {
  let sum;
  let average;

  sum = first.length + second.length + third.length;
  average = Math.floor(sum / 3);

  console.log(sum);
  console.log(average);
}

calculate("chocolate", "ice cream", "cake");
calculate("pasta", "5", "22.3");

// 'chocolate', 'ice cream', 'cake'
// 'chocolate', 'ice cream', 'cake'
