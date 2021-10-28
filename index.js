const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(tutorials) {
  tutorials.map(callBack);
  


  function callBack(str) {                          //break each index into its own array
  
  
  let arrayStr = str.split(' ');
  // console.log(arrayStr)

  for (let i = 0; i < arrayStr.length; i++) {
    arrayStr[i] = arrayStr[i].charAt(0).toUpperCase() + arrayStr[i].slice(1);
  };
  //capitalize first letter
  let capitalString = arrayStr.join(' ')
  //join back to original
  //return it
  console.log(capitalString);
  return capitalString;
  
  }
}
titleCased(tutorials)








// function titleCased(tutorials) {
//   let finalTutorials = tutorials.map(callBack);
//   return finalTutorials;
// }

// function callBack(elementStr) {
//   //break each index into its own array
//   let arrayStr = elementStr.split(' ');
//   console.log(arrayStr)

//   // for (let i = 0; i < arrayStr.length; i++) {
//   //   arrayStr[i] = arrayStr[i].charAt(0).toUpperCase() + arrayStr[i].slice(1);
//   // };
//   // //capitalize first letter
//   //  let capitalString = arrayStr.join(' ')
//   // //join back to original
//   // //return it
//   // return capitalString;
// }