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

  const aa = testArray.forEach(callback);
  console.log(aa);
  function callback(d) {
    return (d = d * 2);
  }

  console.log(testArray);
}
