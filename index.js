// 1. String Mirror
// solution #1 - using onclick attribute ///////////////////////////////////
// const stringMirror = () => {
//     const userInput = document.querySelector("#mirror-input").value; // grab input
//     const pTag = document.querySelector("#mirror-output"); // grab destination
//     pTag.textContent = userInput; // update destination with input
//   };

// solution #2 ///////////////////////////////////
const btn1 = document.querySelector("#mirror-button"); // grab element

const stringMirror = () => {
    const userInput = document.querySelector("#mirror-input").value; // grab input
    const pTag = document.querySelector("#mirror-output"); // grab destination
    pTag.textContent = userInput; // update destination with input
};

btn1.addEventListener("click", stringMirror); // pass in function as argument

// solution #3 ///////////////////////////////////
// const stringMirror = () => {
//     const userInput = document.querySelector("#mirror-input").value; // grab input
//     const pTag = document.querySelector("#mirror-output"); // grab destination
//     pTag.textContent = userInput; // update destination with input
//   };

//   const btn1 = document.querySelector("#mirror-button"); // grab element

//   btn1.addEventListener("click", () => {
//       stringMirror(); // invoke the function
//   });

// 2. String Uppercaser
// solution #1 - using onclick attribute ///////////////////////////////////
// const stringUppercaser = () => {
//   const userInput = document.querySelector("#uppercaser-input").value;
//   const pTag = document.querySelector("#uppercaser-output");
//   pTag.textContent = userInput.toUpperCase();
// };

// solution #2 - using addEventListener method to invoke a function /////////////////////////////
// const btn2 = document.querySelector("#uppercaser-button");

// const stringUppercaser = () => {
//   const userInput = document.querySelector("#uppercaser-input").value;
//   const pTag = document.querySelector("#uppercaser-output");
//   pTag.textContent = userInput.toUpperCase();
// };

// btn2.addEventListener("click", () => {
//   stringUppercaser();
// });

// solution #3 - passing a function as argument in an addEventListner ////////////////////////////////////////

const btn2 = document.querySelector("#uppercaser-button");

const stringUppercaser = () => {
  const userInput = document.querySelector("#uppercaser-input").value;
  const pTag = document.querySelector("#uppercaser-output");
  pTag.textContent = userInput.toUpperCase();
};

btn2.addEventListener("click", stringUppercaser)

// 3. Palindrome Detector
// solution #1 - using onclick attribute ///////////////////////////////////
// const palindromeDetector = () => {
//   const userInput = document.querySelector("#palindrome-input").value;
//   const targetElement = document.querySelector("#palindrome-output");
//   for (const char in userInput) {
//     if (userInput[char] !== userInput[userInput.length - 1 - char]) {
//       return (targetElement.innerText = `It is false that ${userInput} is a palindrome`);
//     }
//   }
//   return (targetElement.innerText = `It is true that ${userInput} is a palindrome`);
// };

// solution #2 - using addEventListener method to invoke a function /////////////////////////////
// const btn3 = document.querySelector("#palindrome-button");

// const palindromeDetector = () => {
//   const userInput = document.querySelector("#palindrome-input").value;
//   const targetElement = document.querySelector("#palindrome-output");
//   for (const char in userInput) {
//     if (userInput[char] !== userInput[userInput.length - 1 - char]) {
//       return (targetElement.innerText = `It is false that ${userInput} is a palindrome`);
//     }
//   }
//   return (targetElement.innerText = `It is true that ${userInput} is a palindrome`);
// };

// btn3.addEventListener("click", () => {
//   palindromeDetector();
// })

// solution #3 - passing a function as argument in an addEventListner ////////////////////////////////////////
const btn3 = document.querySelector("#palindrome-button");

const palindromeDetector = () => {
  const userInput = document.querySelector("#palindrome-input").value;
  const targetElement = document.querySelector("#palindrome-output");
  for (const char in userInput) {
    if (userInput[char] !== userInput[userInput.length - 1 - char]) {
      return (targetElement.innerText = `It is false that ${userInput} is a palindrome`);
    }
  }
  return (targetElement.innerText = `It is true that ${userInput} is a palindrome`);
};

btn3.addEventListener("click", palindromeDetector);


// 4. Even Checker
// solution #1 - using onclick attribute ///////////////////////////////////
// const evenChecker = () => {
//   const userInput = Number(document.querySelector("#even-checker-input").value);
//   const pTag = document.querySelector("#even-checker-output");
//   return userInput % 2 === 0
//     ? (pTag.textContent = `It is true that ${userInput} is even`)
//     : (pTag.textContent = `It is false that ${userInput} is even`);
// };
// solution #2 - using addEventListener method to invoke a function /////////////////////////////
// const btn4 = document.querySelector("#even-checker-button");

// const evenChecker = () => {
//   const userInput = Number(document.querySelector("#even-checker-input").value);
//   const pTag = document.querySelector("#even-checker-output");
//   return userInput % 2 === 0
//     ? (pTag.textContent = `It is true that ${userInput} is even`)
//     : (pTag.textContent = `It is false that ${userInput} is even`);
// };

// btn4.addEventListener("click", () => {
//   evenChecker();
// })

// solution #3 - passing a function as argument in an addEventListner ////////////////////////////////////////
const btn4 = document.querySelector("#even-checker-button");

const evenChecker = () => {
  const userInput = Number(document.querySelector("#even-checker-input").value);
  const pTag = document.querySelector("#even-checker-output");
  return userInput % 2 === 0
    ? (pTag.textContent = `It is true that ${userInput} is even`)
    : (pTag.textContent = `It is false that ${userInput} is even`);
};

btn4.addEventListener("click", evenChecker);

// 5. Number Doubler
// solution #1 - using onclick attribute ///////////////////////////////////
// const numberDoubler = () => {
//   const userInput = document.querySelector("#doubler-input").value;
//   const pTag = document.querySelector("#doubler-output");
//   pTag.textContent = userInput * 2;
// };

// solution #2 - passing a function as argument in an addEventListner ////////////////////////////////////////
// const btn5 = document.querySelector("#doubler-button")

// const numberDoubler = () => {
  //   const userInput = document.querySelector("#doubler-input").value;
  //   const pTag = document.querySelector("#doubler-output");
  //   pTag.textContent = userInput * 2;
  // };
  
  // btn5.addEventListener("click" , numberDoubler);
  
// solution #3 - using addEventListener method to invoke a function /////////////////////////////
const btn5 = document.querySelector("#doubler-button");

const numberDoubler = () => {
  const userInput = document.querySelector("#doubler-input").value;
  const pTag = document.querySelector("#doubler-output");
  pTag.textContent = userInput * 2;
};

btn5.addEventListener("click", () => {
  numberDoubler()
})

// 6. Average of Three Numbers
// solution #1 - using onclick attribute ///////////////////////////////////
// const averageOfThreeNumbers = () => {
//   const userInput1 = Number(document.querySelector("#average-input-1").value);
//   const userInput2 = Number(document.querySelector("#average-input-2").value);
//   const userInput3 = Number(document.querySelector("#average-input-3").value);
//   const pTag = document.querySelector("#average-output");
//   let average = Math.floor((userInput1 + userInput2 + userInput3) / 3);
//   pTag.textContent = `The average of ${userInput1}, ${userInput2}, and ${userInput3} is ${average}`;
// };

// solution #2 - using addEventListener method to invoke a function /////////////////////////////
const averageOfThreeNumbers = () => {
  const userInput1 = Number(document.querySelector("#average-input-1").value);
  const userInput2 = Number(document.querySelector("#average-input-2").value);
  const userInput3 = Number(document.querySelector("#average-input-3").value);
  const pTag = document.querySelector("#average-output");
  let average = Math.floor((userInput1 + userInput2 + userInput3) / 3);
  pTag.textContent = `The average of ${userInput1}, ${userInput2}, and ${userInput3} is ${average}`;
};

const btn6 = document.querySelector("#average-button");

btn6.addEventListener("click", () => {
  averageOfThreeNumbers();
})

// solution #3 - passing a function as argument in an addEventListner ////////////////////////////////////////
// const averageOfThreeNumbers = () => {
//   const userInput1 = Number(document.querySelector("#average-input-1").value);
//   const userInput2 = Number(document.querySelector("#average-input-2").value);
//   const userInput3 = Number(document.querySelector("#average-input-3").value);
//   const pTag = document.querySelector("#average-output");
//   let average = Math.floor((userInput1 + userInput2 + userInput3) / 3);
//   pTag.textContent = `The average of ${userInput1}, ${userInput2}, and ${userInput3} is ${average}`;
// };
// const btn6 = document.querySelector("#average-button");

btn6.addEventListener("click", averageOfThreeNumbers);

// Bonus: Vowel Remover
// solution #1 - using onclick attribute ///////////////////////////////////
// const vowelRemover = () => {
//   const userInput = document.querySelector("#vowel-remover-input").value;
//   const yCheckbox = document.querySelector("#y-is-vowel-checkbox"); // target the attribute "checked"
//   const pTag = document.querySelector("#vowel-remover-output");
//   const vowels = "aeiouAEIOU";
//   const yVowels = "aeiouyAEIOUY";
//   let str = "";
//   for (const char of userInput) {
//     if (!yVowels.includes(char) && yCheckbox.checked) {
//       str += char;
//     } else if (!vowels.includes(char) && !yCheckbox.checked) {
//       str += char;
//     }
//   }
//   pTag.textContent = str;
// };


// solution #2 - using addEventListener method to invoke a function /////////////////////////////
// const btnBonus = document.querySelector("#vowel-remover-button");

// const vowelRemover = () => {
//   const userInput = document.querySelector("#vowel-remover-input").value;
//   const yCheckbox = document.querySelector("#y-is-vowel-checkbox"); // target the attribute "checked"
//   const pTag = document.querySelector("#vowel-remover-output");
//   const vowels = "aeiouAEIOU";
//   const yVowels = "aeiouyAEIOUY";
//   let str = "";
//   for (const char of userInput) {
//     if (!yVowels.includes(char) && yCheckbox.checked) {
//       str += char;
//     } else if (!vowels.includes(char) && !yCheckbox.checked) {
//       str += char;
//     }
//   }
//   pTag.textContent = str;
// };

// btnBonus.addEventListener("click", vowelRemover);



// solution #3 - passing a function as argument in an addEventListner ////////////////////////////////////////
const btnBonus = document.querySelector("#vowel-remover-button");

const vowelRemover = () => {
  const userInput = document.querySelector("#vowel-remover-input").value;
  const yCheckbox = document.querySelector("#y-is-vowel-checkbox"); // target the attribute "checked"
  const pTag = document.querySelector("#vowel-remover-output");
  const vowels = "aeiouAEIOU";
  const yVowels = "aeiouyAEIOUY";
  let str = "";
  for (const char of userInput) {
    if (!yVowels.includes(char) && yCheckbox.checked) {
      str += char;
    } else if (!vowels.includes(char) && !yCheckbox.checked) {
      str += char;
    }
  }
  pTag.textContent = str;
};

btnBonus.addEventListener("click", () => {
  vowelRemover();
});
