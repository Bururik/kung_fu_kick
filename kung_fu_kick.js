
var kung_fu_kick = (nme=5, dis=5, tween="5", dir="L") => {
    //checks thrid argument to see if it's a string
      if (typeof tween == "string" ? "continue" : console.log("you must input a string for the third argument"));
    //checks fourth argument to see if its a string
      if (typeof dir == "string" ? "continue" : console.log("you must input a string for the fourth argument"));
    //checks to make sure you input correct "kick" direction
      if (dir.toLowerCase() != "l" && dir.toLowerCase() != "r"){
        console.log("Please input a direction to kick the enemy in...");
      }
    //The "kick" directions of L-left or R-right
      switch (dir.toLowerCase()){
        case "l":
          console.log(nme + tween.repeat(dis));
          break;
        case "r":
           console.log(tween.repeat(dis) + nme);
           break;
        // default:
        //    console.log("Please input a direction to kick the enemy in...");
        //    break;
        }
};

module.exports.kung_fu_kick = kung_fu_kick


// das tetsing: kung_fu_kick(2,3,'q','n');
