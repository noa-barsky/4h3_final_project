google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawInVSExp);
google.charts.setOnLoadCallback(drawExpBreakdown);
google.charts.setOnLoadCallback(drawIncomeBreakdown);


function showChart(chart, button) {
  var chart = document.getElementById(chart);
  var button = document.getElementById(button);
  if (chart.style.display == "none") {
    chart.style.display = "inline-block";
    button.innerHTML = "Hide";
  } else {
    chart.style.display = "none";
    button.innerHTML = "Show";
  }
}

function drawInVSExp() {
  var data = google.visualization.arrayToDataTable([
    ['Item', 'Amount (in dollars)'],
    ['Income',  700+700+80],
    ['Expenses',  85+275+450]
  ]);
  var options = {
    legend: 'none',
    pieSliceText: 'label',
    pieStartAngle: 100,
    slices: {
            0: { color: 'green' },
            1: { color: 'red' }
          },
    pieSliceTextStyle: {
            color: 'black',
          }
  };
  var chart = new google.visualization.PieChart(document.getElementById('inVSexp'));
  chart.draw(data, options);
}

function drawIncomeBreakdown() {
  var data = google.visualization.arrayToDataTable([
    ['Item', 'Amount (in dollars)'],
    ['Salary',  275],
    ['Textbook Sale',  85]
  ]);
  var options = {
    legend: 'none',
    pieSliceText: 'label',
    pieStartAngle: 100,
    pieSliceTextStyle: {
            color: 'black',
          },
    slices: {
            0: { color: 'green' },
            1: { color: 'blue' }
          },
  };
  var chart = new google.visualization.PieChart(document.getElementById('incomeBreakdown'));
  chart.draw(data, options);
}

function drawExpBreakdown() {
  var data = google.visualization.arrayToDataTable([
    ['Item', 'Amount (in dollars)'],
    ['Phone Bill',  85],
    ['Car Insurance',  275],
    ['Rent', 450]
  ]);
  var options = {
    legend: 'none',
    pieSliceText: 'label',
    pieStartAngle: 100,
    pieSliceTextStyle: {
            color: 'black',
          }
  };
  var chart = new google.visualization.PieChart(document.getElementById('expBreakdown'));
  chart.draw(data, options);
}