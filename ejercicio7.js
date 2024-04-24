let n1 = 100;
let n2 = 120;

for (let i = Math.min(n1, n2); i <= Math.max(n1, n2); i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}