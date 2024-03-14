// Variables

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
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  testArray.forEach(callback);
  function callback(d) {
    return (d = d * 2);
  }

  //   for (let a of testArray) {
  //     console.log(a);
  //   }

  //   for (let a in testArray) {
  //     console.log(testArray[a]);
  //   }

  const result = testArray.map(function (element) {
    return element * 2000;
  });

  console.log("New Array", result);
}

// Truthy & Falsy Value
{
  // 0, NULL, Undefined, "", False
  //   if (!null) {
  //     console.log("Falsy value");
  //   } else {
  //     console.log("Truthy Value");
  //   }
}
