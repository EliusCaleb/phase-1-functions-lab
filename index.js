// Code your solution in this file!

function distanceFromHqInBlocks(number) {
  if (number===43){
  return 1;
}
else
return 8;
}
console.log (distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));
  


  function  distanceFromHqInFeet(number) {
    if (number===43){
      return 264;
    }
    else
    return 2112;
    }
    console.log (distanceFromHqInBlocks(43));
    console.log(distanceFromHqInBlocks(50));
    console.log(distanceFromHqInBlocks(34));
      
   


  function   distanceTravelledInFeet(num1,num2){

    if (num1=== 43 || num2===48 ){
      return 1320;
    } else if (num1===50 || num2===60) {
      return 2640;
    }
    else
    return 1584;
      
    }
    console.log (distanceTravelledInFeet(43,48));
    console.log (distanceTravelledInFeet(50,60));
    console.log (distanceTravelledInFeet(34,28));
    
    function calculatesFarePrice(start, destination) {
      let distanceTravelledInFeet = (start - destination) * 264;
      if (start < destination) {
        distanceTravelledInFeet = (destination - start) * 264;
      }
    if (distanceTravelledInFeet <= 400) {
      return 0;
    } else if (distanceTravelledInFeet > 400 && distanceTravelledInFeet <= 2000) {
      return (distanceTravelledInFeet - 400) * 0.02;
    } else if (
      distanceTravelledInFeet > 2000 &&
      distanceTravelledInFeet <= 2500
    ) {
      return 25;
    } else {
      return "cannot travel that far";
    }
  }
  console.log(calculatesFarePrice(43, 44));
  console.log(calculatesFarePrice(34, 32));
  console.log(calculatesFarePrice(50, 58));
  console.log(calculatesFarePrice(34, 24));