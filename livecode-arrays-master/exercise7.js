//Exercide7//

const concatArray = colorsArray1.concat(colorsArray2);
const alphabeticalArray = concatArray.sort()
console.log(alphabeticalArray);

for (let i=0; i < alphabeticalArray.length; i++) {
   if (alphabeticalArray[i] === alphabeticalArray[i + 1]) {
       colorsArray.push(alphabeticalArray[i])
   }
}