//counting sheep
//input 3
//output "3: Another sheep jumps over the fence" "2: Another sheep jumps over the fence" "1: Another sheep jumps over the fence" "All sheep jumped over the fence"
console.log("1. Counting Sheep")
let num = 3;
function sheep(num){
  // base
  if(num == 0){
    console.log("All the sheep jumped over the fence");
  }
  //recursive
  else{
    console.log(`${num}:Another sheep jumps over the fence`);
    sheep(num - 1);
  }
}

sheep(num);

//Power Calculator
// powerCalculator(10,2) should return 100
//powerCalculator(10, -2) should return exponent should be >= 0
console.log("2. Power Calculator");
function powerCalculator(baseInt, exp){
  // base 
    if (exp < 0){
        return 'exponent should be >= 0';
    }
    // recursive 
    else if (exp === 0){
        return 1;
    } else{
        return baseInt * powerCalculator(baseInt, exp - 1);
    }
}

console.log(powerCalculator(10, 2)); // output: 100
console.log(powerCalculator(10, -2)); // 'exponent should be >= 0'

//Reverse String
console.log("3. Reverse String");

reverseString = (x) =>{
  if(x === ''){
    return '';
  }
  return reverseString(x.slice(1)) + x.charAt(0);
}
console.log(reverseString('newString'));

// nth Triangular Number
console.log("4. Triangular Number");
function triangleNumber(n){
  if(n === 1){
    return 1;
  }
  return n + triangleNumber(n - 1);
}
console.log(triangleNumber(8));

//String Splitter
//DON'T USE JS ARRAY'S SPLIT FUNCTION
//input: 02/20/2020
//output: ["02", "20", "2020"]
console.log("5. String Splitter");
function stringSplitter(string, sep){
  //base
  if (string.length === 0){
     return '';
     //recursive
  }else if (string[0] === sep){
    return stringSplitter(string.slice(1), sep);
  } else{
    return string[0] + stringSplitter(string.slice(1), sep);
    }
}

console.log(stringSplitter('02/20/2020', '/')) // 02202020

//Fibonacci
console.log("6. Fibonacci");
fibonacci = (num) =>{
  if(num <= 1){
    return num;
  }
  return fibonacci(num - 2) + fibonacci(num - 1);
}
console.log(fibonacci(7));

//Factorial
console.log("7. Factorial");
factorial = (n) =>{
  if(n === 1){
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

//Maze
//exit path RRDDLLDDRRRRRR
console.log("8. Maze");
let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
const findWayOut = function(maze, position=0, row=0, column=0, path=[], direction='S') {
  if(row >= maze.length || column >= maze[0].length) {
    return;
  }
  if(row < 0 || column < 0) {
    return;
  }
  path[position] = direction
  position++
  if(maze[row][column] === 'e') {
    console.log('We found the path.', path)
    return;
  }
  if(maze[row][column] === ' ') {
    maze[row][column] = 'V'
    findWayOut(maze, position, row, column - 1, path, 'L')
    findWayOut(maze, position, row, column + 1, path, 'R')
    findWayOut(maze, position, row - 1, column, path, 'U')
    findWayOut(maze, position, row + 1, column, path, 'D')
    maze[row][column] = ' '
  }
  position--
}

findWayOut(maze);


//Anagrams
console.log('10. Anagrams')
function anagram(word) {
    let results = []; // store the results in an array
    // base case
    if (word.length <= 1) {
        return [word];
    }
    const str = word.split(''); // splits word into an array of single letters
    // console.log('str =', str); 
    str.forEach((letter, idx) => {
        let charLeft = [...str.slice(0, idx), ...str.slice(idx + 1)].join('');
        const permutations = anagram(charLeft);
        permutations.forEach(permutation => {
            results.push(letter + permutation);
        });
    });
    return results;
}

console.log(anagram('east')); // returns 24 strings

//Organization chart 
console.log("11. Organization Chart")
const facebook = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: {},
        Kyle: {},
        Andra: {}
      },
      Zhao: {
        Richie: {},
        Sofia: {}
      }
    },
    Schrage: {
      VanDyck: {
        Sabrina: {},
        Michelle: {},
        Josh: {}
      },
      Swain: {
        Blanch: {},
        Tom: {},
        Joe: {}
      }
    },
    Sandberg: {
      Goler: {
        Eddie: {},
        Julie: {},
        Annie: {}
      },
      Hernandez: {
        Rowi: {},
        Inga: {},
        Morgan: {}
      },
      Moissinac: {
        Amy: {},
        Chuck: {},
        Vinni: {}
      },
      Kelley: {
        Eric: {},
        Ana: {},
        Wes: {}
      }
    }
  }
};

const orgChart = function (obj, indent = '') {
  let output = '';
  for (let key in obj) {
    // let indent = '  ';
    output = output + indent + key + '\n';
    output = output + orgChart(obj[key], indent+'     ');
  }
  return output;
};

console.log(orgChart({
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: {},
        Kyle: {},
        Andra: {}
      },
      Zhao: {
        Richie: {},
        Sofia: {}
      }
    },
    Schrage: {
      VanDyck: {
        Sabrina: {},
        Michelle: {},
        Josh: {}
      },
      Swain: {
        Blanch: {},
        Tom: {},
        Joe: {}
      }
    },
    Sandberg: {
      Goler: {
        Eddie: {},
        Julie: {},
        Annie: {}
      },
      Hernandez: {
        Rowi: {},
        Inga: {},
        Morgan: {}
      },
      Moissinac: {
        Amy: {},
        Chuck: {},
        Vinni: {}
      },
      Kelley: {
        Eric: {},
        Ana: {},
        Wes: {}
      }
    }
  }
}));

//Binary Representation
console.log("12. Binary Representation");
function binary(num) {
  if (num === 0) {
    return '0';
  }
  const dividedNum = Math.floor(num/2);
  const remainder = num % 2;
  if (dividedNum === 0) {
    return `${remainder}`;
  }
  return binary(dividedNum) + remainder.toString();
};

console.log(binary(3));
