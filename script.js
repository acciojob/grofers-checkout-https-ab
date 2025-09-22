const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
    const prices = document.querySelectorAll(".price");
	let totalPrice = 0;

	prices.forEach(priceElement => {
		totalPrice = totalPrice + parseFloat(priceElement.textContent);
	})

	const totalRow = document.createElement("tr");
	const labelCell = document.createElement("td");

	labelCell.textContent = "Total Price";
	labelCell.setAttribute("colspan", 1);
	totalRow.appendChild(labelCell);

	let totalCell = document.createElement
};

getSumBtn.addEventListener("click", getSum);

