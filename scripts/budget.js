let total = 0;

function addRow(id) {
    let name = prompt("Name: ");
    let amount = prompt("Amount: ");
    document.getElementById(`${id}`).innerHTML += rowTemplate(name, amount);
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

function rowTemplate(name, amount) {
    // date code: https://tecadmin.net/get-current-date-time-javascript/

    
    let today = new Date();
    let date = today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear();
    return `<tr>
                <td>${name}</td>
                <td>${amount}</td>
                <td>${date}</td>
            </tr>`;

}