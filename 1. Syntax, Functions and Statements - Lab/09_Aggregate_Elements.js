function calculation(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  console.log(sum);

  let inverseValue = 0;

  for (let x = 0; x < array.length; x++) {
    inverseValue += 1 / array[x];
  }

  console.log(inverseValue);

  let concatValue = "";

  for (let y = 0; y < array.length; y++) {
    concatValue += array[y];
  }

  console.log(concatValue);
}

calculation([1, 2, 3]);
calculation([2, 4, 8, 16]);
