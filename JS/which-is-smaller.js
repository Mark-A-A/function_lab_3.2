var var1 = 1;
var var2 = "Mark";
var var3 = 10;

function smallerOne ( variable1, variable2 ) {
    
    if (variable1 < variable2 ) {
      console.log(variable1 + " is the smaller one")
      
    } else if (variable2 < variable1) {
      console.log( variable2 + "is the smaller one")
    } else if (variable2 === variable1) {
      console.log( "They are equal")  
    } else {
      console.log( "I have no idea")
    };
    
};


smallerOne (var1, var3); //Should show smaller one in console