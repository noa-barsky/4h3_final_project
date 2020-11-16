google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawInVSExp);
google.charts.setOnLoadCallback(drawExpBreakdown);
google.charts.setOnLoadCallback(drawIncomeBreakdown);
google.charts.setOnLoadCallback(drawMotorcycleSavings);
google.charts.setOnLoadCallback(drawWinterCoatSavings);

function showChart(chart, button) {
  var chart = document.getElementById(chart);
  var button = document.getElementById(button);
  if (chart.style.display == "none") {
    chart.style.display = "contents";
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
            0: { color: '#82E6C2' },
            1: { color: '#FF7F7F' }
          },
    pieSliceTextStyle: {
            color: '#4C4C4C',
            fontSize: 15,
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
            color: '#4C4C4C',
            fontSize: 15,
          },
    slices: {
            0: { color: '#82E6C2' },
            1: { color: '#C1C1FF' }
          }
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
            color: '#4C4C4C',
            fontSize: 15,
          },
    slices: {
            0: { color: '#82E6C2' },
            1: { color: '#C1C1FF' },
            2: { color: '#FFC966'}
        }
  };
  var chart = new google.visualization.PieChart(document.getElementById('expBreakdown'));
  chart.draw(data, options);
}

function drawMotorcycleSavings() {
  var data = google.visualization.arrayToDataTable([
    ['Item', 'Amount (in dollars)'],
    ['Saved',  2000],
    ['Remaining',  1500]
  ]);
  var options = {
    legend: 'none',
    pieSliceText: 'label',
    pieStartAngle: 100,
    pieSliceTextStyle: {
            color: '#4C4C4C',
            fontSize: 15,
          },
    slices: {
            0: { color: '#82E6C2' },
            1: { color: '#C1C1FF' }
          },
  };
  var chart = new google.visualization.PieChart(document.getElementById('motorcycleSavings'));
  chart.draw(data, options);
}

function drawWinterCoatSavings() {
  var data = google.visualization.arrayToDataTable([
    ['Item', 'Amount (in dollars)'],
    ['Saved',  350],
    ['Remaining',  150]
  ]);
  var options = {
    legend: 'none',
    pieSliceText: 'label',
    pieStartAngle: 100,
    pieSliceTextStyle: {
            color: '#4C4C4C',
            fontSize: 15,
          },
    slices: {
            0: { color: '#82E6C2' },
            1: { color: '#C1C1FF' }
          },
  };
  var chart = new google.visualization.PieChart(document.getElementById('winterCoatSavings'));
  chart.draw(data, options);
}