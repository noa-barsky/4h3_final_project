let total = 0;

function addRow(id) {
    let name = prompt("Name: ");
    let amount = prompt("Amount: ");
    let date = prompt("Date: ");
    document.getElementById(`${id}`).innerHTML += rowTemplate(name, amount, date);
    if (id === "incomeTable") {
        console.log("in income")
        if (amount.charAt(0) === "$") {
            let temp = amount.slice(1);
            total += parseInt(temp)
        } else {
            total += parseInt(amount)
        }
    } else if (id === "expenseTable") {
        if (amount.charAt(0) === "$") {
            let temp = amount.slice(1);
            total -= parseInt(temp)
        } else {
            total -= parseInt(amount)
        }
    }
    document.getElementById("budgetTotal").innerHTML = total
}

function rowTemplate(name, amount, date) {
    return `<tr>
                <td>${name}</td>
                <td>${amount}</td>
                <td>${date}</td>
            </tr>`;
}