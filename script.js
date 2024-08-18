document.addEventListener("DOMContentLoaded", () => {
  const seatSelect = document.getElementById("seat-type");
  const peopleSelect = document.getElementById("number-of-people");
  const costDiv = document.querySelector(".cost");
  const seatPrices = {
    "Section A - 10,000 INR": 10000,
    "Section B - 7,000 INR": 7000,
    "Section C - 5,000 INR": 5000,
  };
  function updateCost() {
    const selectedSeat = seatSelect.value;
    const numberOfPeople = parseInt(peopleSelect.value, 10);
    const seatCost = seatPrices[selectedSeat] || 0;
    const totalCost = seatCost * numberOfPeople;
    costDiv.textContent = `Total Cost: ${totalCost} INR`;
  }
  seatSelect.addEventListener("change", updateCost);
  peopleSelect.addEventListener("change", updateCost);
  updateCost();
});
