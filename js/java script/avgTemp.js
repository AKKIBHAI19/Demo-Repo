function calculateAverageTemperature() {
    // hourly temperatures for 24 hours
    const temp1 = 72;
    const temp2 = 75;
    const temp3 = 78;
    const temp4 = 76;
    const temp5 = 71;
    const temp6 = 70;
    const temp7 = 68;
    const temp8 = 79;
    const temp9 = 78;
    const temp10 = 78;
    const temp11 = 56;
    const temp12 = 68;
    const temp13 = 77;
    const temp14 = 72;
    const temp15 = 73;
    const temp16 = 76;
    const temp17 = 75;
    const temp18 = 70;
    const temp19 = 75;
    const temp20 = 77;
    const temp21 = 72;
    const temp22 = 78;
    const temp23 = 70;
    const temp24 = 74;
    

    // Calculate the sum of temperatures
    const sum = temp1 + temp2 + temp3 + temp4 + temp5 + temp6 + temp7 + temp8 + temp9 + temp10 + temp11 + temp12 + temp13 + temp14 + temp15 + temp16 + temp17 + temp18 + temp19 + temp20 + temp21 + temp22 + temp23 + temp24;

    // Calculate the average temperature
    const average = sum / 24; // hardcoded for 24 hourly temperatures

    return average;
}

const averageTemp = calculateAverageTemperature();
console.log(`The average temperature for 24 hours is ${averageTemp.toFixed(2)} degrees.`);