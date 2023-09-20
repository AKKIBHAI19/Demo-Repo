function calculateBMI(weight, height) {
    if (weightKg <= 0 || heightM <= 0) {
      return "please provide positive weight and height";
    }
  
    const bmi = weight / (height * height);
    return bmi.toFixed(2);
  }
  
  // Example usage:
  const weight = 70;  // Weight in kilograms
  const height = 1.75;  // Height in meters
  
  const bmi = calculateBMI(weight, height);
  console.log("BMI:", bmi);