const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//function reducer(){
    const totalBatteries = batteryBatches.reduce((accum, next) => accum + next);
    //return totalBatteries;
//}
//console.log(reducer());