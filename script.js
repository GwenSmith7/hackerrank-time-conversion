"use strict";

function timeConversion(s) {
  // does it contain AM or PM

  if (s.includes("AM")) {
    // remove the AM text
    let amTime = s.slice(0, s.length - 2);

    if (s.substring(0, 2) === "12") {
      // remove the first two charcters
      amTime = amTime.substring(2, amTime.length);

      // add 00 instead in the first two positions
      return "00" + amTime;
    } else {
      return amTime;
    }

    // console.log(amTime);
  } else if (s.includes("PM")) {
    // remove the PM text
    let pmTime = s.slice(0, s.length - 2);

    if (s.substring(0, 2) === "12") {
      // no need to change anything here if the first 2 characters are equal to 12
      return pmTime;
    } else {
      // get the characters in the first two positions
      let newStr = s.substring(0, 2);

      // add 12 to get the 24 hour time
      newStr = Number(newStr) + 12;

      // console.log(newStr)

      // remove the first two characters from the string
      pmTime = pmTime.substring(2, pmTime.length);

      // return the 24 hour time in the first two positions with the rest of the string
      return newStr + pmTime;
    }
  } // end if statement that checks for AM or PM
} // end the function
