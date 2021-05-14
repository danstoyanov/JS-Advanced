function output(input) {
  let inputValue = input;

  if (inputValue === "Monday") {
    console.log(1);
  } else if (inputValue == "Tuesday") {
    console.log(2);
  } else if (inputValue == "Wednesday") {
    console.log(3);
  } else if (inputValue == "Thursday") {
    console.log(4);
  } else if (inputValue == "Friday") {
    console.log(5);
  } else if (inputValue == "Saturday") {
    console.log(6);
  } else if (inputValue == "Sunday") {
    console.log(7);
  } else {
    console.log("error");
  }
}

output("Monday");
output("Friday");
output("Invalid");
