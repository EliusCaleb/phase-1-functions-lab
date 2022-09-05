// Code your solution in this file!

function distanceFromHqInBlocks(location) {
  const hq = 42;
  const numberOfBlocks = location < 42 ? hq - location : location - hq;
   return numberOfBlocks;
}
console.log (distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));
  

//
function  distanceFromHqInFeet(location) {
   const distanceInFeet = 264;
   const feetNo = distanceFromHqInBlocks(location) * distanceInFeet
   return feetNo; 
}
    

function   distanceTravelledInFeet(start , venue){
     const destination =  start< venue ?  (venue- start) * 264 : (start-venue) * 264;
     return destination;   
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