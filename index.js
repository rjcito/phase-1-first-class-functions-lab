const returnFirstTwoDrivers = function (driver){
    driver = ['Sally', 'Bob', 'Freddy', 'Claudia'];
    return driver.slice(0,2);
}

const returnLastTwoDrivers = function (driver){
    driver = ['Sally', 'Bob', 'Freddy', 'Claudia'];
    return driver.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(someInteger){
    return function fareMultiplier(someFare){
    return someInteger * someFare;
    }
        
    
}
function fareDoubler(fare){
    const someVariable = createFareMultiplier(fare);
    return  fare * 2;
}

function fareTripler(fare){
    const anotherVariable = createFareMultiplier(fare);
    return fare * 3;
}

function selectDifferentDrivers(arrayOfDrivers,someFunction){
    arrayOfDrivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
    return someFunction(arrayOfDrivers);
    
}