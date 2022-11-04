let locationOfHQ=42

function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return someValue>=locationOfHQ?someValue-locationOfHQ:locationOfHQ-someValue;
  }
function distanceFromHqInFeet(someValue) {
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return (distanceFromHqInBlocks(someValue))*264;
  }
function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return (start>=destination?start-destination:destination-start)*264;
  }
function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distance=distanceTravelledInFeet(start, destination)
    if (distance<=400){
        return 0
    } else if (distance<=2000){
        return (distance-400)*.02
    } else if (distance>2500){
        return 'cannot travel that far'
    } else if (distance>=2001){
        return 25
    } 
    }