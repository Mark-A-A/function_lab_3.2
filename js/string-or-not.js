var var1 = document.getElementById("variable1");
var var2;

function stringTest ( variable ) {
    if ( typeof variable === "string" ) {
      console.log("This variable is a string")
      var2 = "This is a string";
      //return true;
    } else {
      console.log( "This variable is not a string")
      var2 = "This is not a string";
      //return false;
    };


document.getElementById("output1")= var2;

};

