// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const headquarters = 42; // Headquarters is on 42nd street
    return Math.abs(pickupLocation - headquarters);
}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // Free ride
    } else if (distance > 400 && distance <= 2000) {
        return (Math.round((distance - 400) * 0.02 * 100) / 100); // Two decimal places
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat rate for long trips
    } else {
        return "cannot travel that far"; // If distance exceeds 2500 feet
    }
}
