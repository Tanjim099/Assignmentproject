function countVowels(name) {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;

  for (let i = 0; i < name.length; i++) {
    if (vowels.includes(name[i])) {
      vowelCount++;
    }
  }

  return vowelCount;
}

const name = "John Smith";
const numVowels = countVowels(name);

console.log(numVowels); // Output: 2
