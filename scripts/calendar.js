function showDetails(day,name,amt,income) {
    let appendTo = document.getElementById("calendar_details");

    if (income == "1") {
        appendTo.innerHTML = alertTemplate(name, amt, day, 'success')
    } else {
        appendTo.innerHTML = alertTemplate(name, amt, day, 'danger')
    }
}

function alertTemplate(name, amount, day, color){
    return `
    <div class="alert alert-${color}" role="alert" style="color: #4C4C4C;">
        November ${day}
        <br>
        ${name}: ${amount}
    </div>
    ` ;
}
