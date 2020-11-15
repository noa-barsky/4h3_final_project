function showDetails(day,name,amt,income) {
    var view = document.getElementById("detailsView");
    var title = document.getElementById("detailsTitle");
    var text = document.getElementById("detailsBody");

    if (title.innerHTML == "November " + day) {
        if (view.style.display === "none") {
            view.style.display = "block";
        } else {
            view.style.display = "none";
        } 
    }

    title.innerHTML = "November " + day;
    text.innerHTML = name + ": " + amt;

    if (income == "1") {
        view.style.backgroundColor = "#5ced8f";
    } else {
        view.style.backgroundColor = "#f54242";
    }
}