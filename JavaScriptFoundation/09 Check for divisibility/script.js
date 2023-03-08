const numbers = [3, 8, 9, 12, 18, 21, 24];

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  
  if (num % 3 !== 0 || num % 2 === 0) {
    continue;
  }
  
  console.log(num);
}
