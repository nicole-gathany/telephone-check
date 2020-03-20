function telephoneCheck(str) {
  let result = true;
  let digits = str.split("").filter(x => Number.isInteger(parseInt(x, 10)))
    .length;
  if (digits > 11 || digits < 10) {
    result = false;
  } else if (digits === 11 && str.split("")[0] !== "1") {
    result = false;
  }
  let whereBrackets = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "(") whereBrackets.push(i);
    if (str.charAt(i) === ")") {
      whereBrackets.push(i);
    }
  }

  console.log(whereBrackets);
  if (whereBrackets.length !== 0 && whereBrackets.length !== 2) {
    result = false;
  }
  if (whereBrackets.length === 2) {
    if (whereBrackets.reduce((a, b) => b - a) > 4) {
      result = false;
    }
  }

  return result;
}

console.log(telephoneCheck("1 555-555-5555") + " should return true.");
console.log(telephoneCheck("1 (555) 555-5555") + " should return true.");
console.log(telephoneCheck("5555555555") + " should return true.");
console.log(telephoneCheck("555-555-5555") + " should return true.");
console.log(telephoneCheck("(555)555-5555") + "  should return true.");
console.log(telephoneCheck("1(555)555-5555") + " should return true.");
console.log(telephoneCheck("555-5555") + " should return false.");
console.log(telephoneCheck("5555555") + "  should return false.");
console.log(telephoneCheck("1 555)555-5555") + " should return false.");
console.log(telephoneCheck("1 555 555 5555") + " should return true.");
console.log(telephoneCheck("1 456 789 4444") + " should return true.");
console.log(telephoneCheck("123**&!!asdf#") + " should return false.");
console.log(telephoneCheck("55555555") + "  should return false.");
console.log(telephoneCheck("(6054756961)") + "  should return false");
console.log(telephoneCheck("2 (757) 622-7382") + "  should return false.");
console.log(telephoneCheck("0 (757) 622-7382") + "  should return false.");
console.log(telephoneCheck("-1 (757) 622-7382") + " should return false");
console.log(telephoneCheck("2 757 622-7382") + "  should return false.");
console.log(telephoneCheck("10 (757) 622-7382") + " should return false.");
console.log(telephoneCheck("27576227382") + " should return false.");
