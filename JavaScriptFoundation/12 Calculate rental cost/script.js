function calculateRentalCost(numDays, carType) {
  let rentalCost = 0;

  switch(carType) {
    case "Economy":
      rentalCost = 4000;
      break;
    case "Midsize":
      rentalCost = 10000;
      break;
    case "Luxury":
      rentalCost = 20000;
      break;
    default:
      console.log("Invalid car type");
      return null;
  }

  const totalCost = rentalCost * numDays;
  return totalCost;
}
const totalCost = calculateRentalCost(5, "Midsize");
console.log("Total rental cost:", totalCost);
