console.log("connected")

function addRow(id) {
    let name = prompt("Name: ");
    let amount = prompt("Amount: ");
    document.getElementById(`${id}`).innerHTML += rowTemplate(name, amount);
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