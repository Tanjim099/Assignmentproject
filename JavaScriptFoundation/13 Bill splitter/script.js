function calculateBill(costPerDish, numPeopleSharing) {
  const totalCost = costPerDish * numPeopleSharing;
  const billPerPerson = totalCost / numPeopleSharing;
  return { totalBill: totalCost, billPerPerson: billPerPerson };
}
calculateBill(12, 2);