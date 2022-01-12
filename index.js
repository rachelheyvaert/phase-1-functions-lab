// Code your solution in this file!
//add console.logs to display arguments**
//Function 1
let hQ = 42;
function distanceFromHqInBlocks(location) {
    if (location < 42) {
        return hQ - location;
    } else {
        (location >= 42) //don't need
        return location - hQ
    }
}
//function 2
let feet = 264;
function distanceFromHqInFeet(location){
   return feet * distanceFromHqInBlocks(location);
}


//function 3
function distanceTravelledInFeet(start, destination) {
    console.log("this is the start argument:")
    if (start > destination) {
        return (start - destination) * feet
    } else {
        return (destination - start) * feet
    }

    console.log(start)
console.log("this is the destination argument")
console.log(destination)
}
  

//function 4
function calculatesFarePrice(start, destination){ 
    console.log(start, destination)
    let distance = distanceTravelledInFeet(start, destination);
    if ( distance <= 400) {
        return 0 }
    else if (distance > 400 && distance < 2000) {
        return ((distance - 400) * .02)
    }else if (distance >= 2001 && distance <= 2500) {
        return 25
    }else { return 'cannot travel that far'}
}