var var1 = 1;
var var2 = "Mark";
var var3;

function stringTest ( variable ) {
    if ( typeof variable === "string" ) {
      console.log("This variable is a string")
      return true;
    } else {
      console.log( "This variable is not a string")
      return false;
    };
};


stringTest (var1);