//calling the function checkspeed
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
//if statement to print ok if speed is less than 70
    if (speed <= speedLimit) {
        console.log("Ok");
    }
//else statement that prints points 2 
     else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log(`Demerit points: ${demeritPoints}`);
//prints license suspend if driver gets more than 12 points

        if (demeritPoints >= 12) {
            console.log("License suspended");
        }
    }
}

checkSpeed(80);  

