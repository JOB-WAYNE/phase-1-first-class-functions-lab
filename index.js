// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  }
   returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])


const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
 } 

returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier= function (multiplier) {
    return function (fare) {
        return fare*multiplier;
    }

}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = function(drivers, selector)
 {
    return selector(drivers);
  }
     


