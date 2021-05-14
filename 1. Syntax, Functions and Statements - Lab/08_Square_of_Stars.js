function print(number) {
  if (number === 1) {
    console.log("*");
  } else {
    let currArr = [];

    for (let i = 0; i < number; i++) {
      currArr.push("*");
    }

    for (let y = 0; y < number; y++) {
      console.log(currArr.join(" "));
    }
  }
}

print(2);
