// Variables

// Truthy & Falsy Value
{
  // 0, NULL, Undefined, "", False
  //   if (!null) {
  //     console.log("Falsy value");
  //   } else {
  //     console.log("Truthy Value");
  //   }
}

{
  // console.log(testingLet);
  // var testingVar = " Sgaar";
  // let testingLet = "Sagar";
  // const testingConst = "Sagar";
  // testFunction();
  // let testFunction = () => {
  //   console.log("test");
  // };
}
// Function

{
  // functionDeclaration();
  //   arrowFunction();

  function functionDeclaration() {
    console.log("Function Declaration");
  }

  // functionDeclaration();

  var functionExpression = function () {
    console.log("Function Expression");
  };

  // functionExpression();

  var arrowFunction = () => {
    console.log("Arrow Function");
  };

  // arrowFunction();
}

// Array
{
  let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // For Each Loop
  {
    // testArray.forEach(callback);
    // function callback(d) {
    //   return (d = d * 2);
    // }
  }

  // For Of Loop
  {
    //   for (let a of testArray) {
    //     console.log(a);
    //   }
  }

  // For In Loop
  {
    //   for (let a in testArray) {
    //     console.log(testArray[a]);
    //   }
  }

  //  Learn Map Method

  {
    // const result = [];
    // for (let i = 0; i < testArray.length - 2; i++) {
    //   result.push(testArray[i] * 1000);
    // }
    // testArray = testArray.map((element) => element * 3);
    // console.log("New Array", testArray);
    // const n = "test"
    // n.toUpperCase()
    // const names = ["Alice", "Bob", "Charlie", "John", "Deo"];
  }

  // Learn Filter Method

  {
    // const newArr = testArray.filter((element) => element % 2 == 0);
    // console.log("Filter", newArr);
  }

  // Learn Reduce Method

  {
    const sum = testArray.reduce(
      (previousValue, currentValue, index) =>
        index > 5 ? currentValue + previousValue : previousValue,
      1000
    );

    // console.log("Reduce", sum);
  }

  // Array Sort
  {
    // const sortingArray = [1, 2, 3, 4, 5, 55, 111, 22, 77, 9];
    // const result = sortingArray.sort((a, b) => {
    //   if (b < a) return -1;
    //   else if (b > a) return 1;
    //   else return 0;
    // });
    // console.log("Sorted", result);
  }
}

// Object
{
  const user = {
    name: "Sagar",
    age: 100,
    city: "Pune",
    hobbies: ["Reading", "Writing"],
    personalInfo: {
      homeTown: "Dhule",
      district: "Dhule",
    },
    123: "Number",
  };

  console.log("Object Example", user.hobbies[0]);
}
