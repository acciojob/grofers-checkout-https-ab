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

	let totalCell = document.createElement("td");
    totalCell.textContent = totalPrice;

    totalRow.appendChild(totalCell);

    const table = document.querySelector("table");
    table.appendChild(totalRow);

	const ansElement = document.createElement("div");
	ansElement.id = "ans";
	ansElement.textContent = `Total Price: Rs ${totalPrice.toFixed(2)}`;
	document.body.appendChild(ansElement);
};

getSumBtn.addEventListener("click", getSum);

