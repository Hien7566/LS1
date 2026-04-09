let s = "11111147g";
let ketQua = "";
let count = 1;

for (let i = 0; i < s.length; i++) {
  if (s[i] === s[i + 1]) {
    count++;
  } else {
    ketQua += count + s[i];
    count = 1;
  }
}

console.log(ketQua);
