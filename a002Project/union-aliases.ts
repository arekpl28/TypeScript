type Combinable = number | string
type ConversionDescription = 'as-number' | 'as-text'

function combine(
  input1: Combinable,
  input2: Combinable,
  resultType: ConversionDescription
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
    result = +input1 + +input2
  } else {
    result = input1.toString() + input2.toString()
  }
  return result
  // if (resultType === 'as-number') {
  //   return parseFloat(result)
  // } else {

  //   return result.toString()
  // }
}

const combinedAges = combine(30, 60, 'as-number')
console.log(combinedAges)

const combinedStringsAges = combine("30", "60", 'as-number')
console.log(combinedStringsAges)

const combinedNames = combine("Max", "Anna", 'as-text')
console.log(combinedNames)