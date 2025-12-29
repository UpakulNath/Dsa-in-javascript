// for (let i = 0; i <= 4; i++){
//     let row = ""
//     for (let j = 0; j <= 4; j++){
//         row+="* "

//     }
//     console.log(row);

// }

// for (let row = 0; row <= 4; row++){
//     let r = ""
//     for (let col = 0; col <= row; col++){
//         r+="* "
//     }
//     console.log(r);

// }

// for (let row = 1; row <= 5; row++) {
//     let r = ""
//     for (let col = 1; col <= row; col++) {
//         r += `${col} `
//     }
//     console.log(r);
// }

// for (let row = 1; row <= 5; row++){
//     let r = ""
//     for (let col = 0; col < row; col++){
//         r+=`${row}`
//     }
//     console.log(r);
// }

// for (let row = 0; row <= 4; row++){
//     let r = ''
//     for (let col = 4; col >= row; col--){
//         r += '* '
//     }
//     console.log(r);

// }

/*let rows = 5; // change this to increase/decrease pyramid height

for (let row = 0; row < rows; row++) {
  let line = "";

  // leading spaces (rows - row - 1)
  for (let s = 0; s < rows - row - 1; s++) {
    line += " ";
  }

  // stars: 2*row + 1
  let stars = 2 * row + 1;
  for (let k = 0; k < stars; k++) {
    line += "*";
  }

  console.log(line);
}
*/

/*for (let row = 0; row < rows; row++) {
  let line = "";

  // leading spaces (rows - row - 1)
  for (let s = 0; s < rows - row - 1; s++) {
    line += " ";
  }

  // stars: 2*row + 1
  let stars = 2 * row + 1;
  for (let k = 0; k < stars; k++) {
    line += "*";
  }

  console.log(line);
}
*/

/*for (let row = 5; row >= 1; row--) {
  let line = "";
  let stars = 2 * row - 1;

  for (let s = 0; s < 5 - row; s++) {
    line += " ";
  }
  for (let k = 0; k < stars; k++) {
    line += "*";
  }
  console.log(line);
}
*/

/*
for (let row = 0; row < 5; row++){
  let line = ""

  for (let s = 0; s < 5 - row - 1; s++){
    line+=" "
  }

  let stars = 2 * row + 1

  for (let k = 0; k < stars; k++){
    line += "*"
  }

  console.log(line);
  
}

for (let row = 5; row > 0; row--){
  let line = ""

  for (let s = 0; s < 5 - row; s++){
    line += " "
  }

  let stars = 2 * row - 1

  for (let star = 0; star < stars; star++){
    line += "*"
  }
  console.log(line);
  
}
*/

/*
for (let row = 1; row <= 5; row++){
  let line = ""

  for (let star = 0; star < row; star++){
    line += "*"
  }
  console.log(line);
  
}

for (let row = 4; row > 0; row--){
  let line = ""

  for (let star = 0; star < row; star++){
    line += "*"
  }

  console.log(line);
  
}
*/

/*
let rows = 5
for (let row = 1; row <= rows; row++){
  let line = ""

  for (let col = 1; col <= row; col++){
    if (row % 2 !== 0 && col ===1) {
      line += "1";
    } else if(col === row){
      line += "1"
    } else if ((row % 2 !== 0 && col % 2 !== 0) || (row % 2 === 0 && col % 2 === 0)) {
       line += "1";
    } else {
      line+="0"
    }
     
  }
  console.log(line);
  
}
*/
//another logic to print the pattern => if row + col is even print 1 else print 0

/*
let rows = 4;

for (let row = 1; row <= rows; row++) {
  let line = "";

  // Left side 1 → row
  for (let col = 1; col <= row; col++) {
    line += col;
  }

  // Middle spaces
  let spaces = 2 * (rows - row);
  for (let s = 1; s <= spaces; s++) {
    line += " ";
  }

  // Right side row → 1
  for (let col = row; col >= 1; col--) {
    line += col;
  }

  console.log(line);
}
*/

/*
let count = 1
for (let row = 1; row <= 5; row++){
  let line = ""

  for (let col = 0; col < row; col++){
    line += `${count} `
    count++
  }

  console.log(line);
  
}
*/

/*
let rows = 5;
for (let row = 1; row <= 5; row++) {
  let line = "";
  for (let col = 0; col < row; col++) {
    let char = 65;
    line += `${String.fromCharCode(char + col)} `;
  }
  console.log(line);
}
*/

/*
let rows = 5
for (let row = 0; row < rows; row++){
  let line = ""

    let char = 65
  for (let col = 5; col > row; col--){
    line += `${String.fromCharCode(char++)} `
  }

  console.log(line);
  
}
*/

/*
let rows = 4;

for (let row = 1; row <= rows; row++) {
  let line = "";

  // leading spaces (rows - row)
  for (let s = 0; s < rows - row; s++) {
    line += " ";
  }

  const base = 65; // 'A'.charCodeAt(0)

  // ascending letters: A, B, C, ...
  for (let c = 0; c < row; c++) {
    line += String.fromCharCode(base + c);
  }

  // descending letters: ... C, B, A (skip the middle character)
  for (let c = row - 2; c >= 0; c--) {
    line += String.fromCharCode(base + c);
  }

  console.log(line);
}
*/

/*
let rows = 5

for (let row = 1; row <= rows; row++){
  let line = ""

  let base = 65 + (rows - 1)
  
  for (let c = base + 1 - row; c <= base; c++){
    line += `${String.fromCharCode(c)} `
  }

  console.log(line);
  
  
}
*/

/*
const rows = 5;

// top half: wide -> narrow
for (let row = 0; row < rows; row++) {
  let line = "";

  // left block of stars (decreasing)
  for (let col = 0; col < rows - row; col++) {
    line += "*";
  }

  // middle gap (increases each row). using two spaces to match your original look
  for (let s = 0; s < row; s++) {
    line += "  ";
  }

  // right block of stars (same as left)
  for (let col = 0; col < rows - row; col++) {
    line += "*";
  }

  console.log(line);
}

// bottom half: narrow -> wide
for (let row = 0; row < rows; row++) {
  let line = "";

  // left block of stars (increasing)
  for (let col = 0; col <= row; col++) {
    line += "*";
  }

  // middle gap (decreases each row)
  for (let s = 0; s < rows - row - 1; s++) {
    line += "  ";
  }

  // right block of stars (same as left)
  for (let col = 0; col <= row; col++) {
    line += "*";
  }

  console.log(line);
}
*/

/*
let rows = 5

for (let row = 0; row < 5; row++) {
  let line = ""

  for (let col = 0; col <= row; col++) {
    line += "*"
  }

  for (let s = 0; s < rows - row - 1; s++){
    line += "  "
  }

  for (let col = 0; col <= row; col++) {
    line += "*";
  }  
  console.log(line);
  
}

for (let row = 0; row < rows; row++){
  let line = ""

  for (let col = 0; col < rows - row - 1; col++){
    line += "*"
  }

  for (let s = 0; s <= row; s++){
    line += "  "
  }

  for (let col = 0; col < rows - row - 1; col++) {
    line += "*";
  }

  console.log(line);
  
}
*/

let rows = 7

for (let row = 0; row < rows; row++) {
  let line = ""

  for (let col = 0; col < rows; col++) {
    let outerEl = rows - 3 - row

    


    console.log(line);
  
  }
}
