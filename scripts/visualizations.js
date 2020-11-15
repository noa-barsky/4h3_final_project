google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawInVSExp);
function drawInVSExp() {
  var data = google.visualization.arrayToDataTable([
    ['Language', 'Speakers (in millions)'],
    ['German',  5.85],
    ['French',  1.66],
    ['Italian', 0.316],
    ['Romansh', 0.0791]
  ]);

  var options = {
    legend: 'none',
    pieSliceText: 'label',
    title: 'Swiss Language Use (100 degree rotation)',
    pieStartAngle: 100,
  };

  var chart = new google.visualization.PieChart(document.getElementById('inVSexp'));
  chart.draw(data, options);
}

function showChart(chart, button) {
  var chart = document.getElementById(chart);
  var button = document.getElementById(button);
  if (chart.style.visibility == "hidden") {
    chart.style.visibility = "visible";
    button.innerHTML = "Hide";
  } else {
    chart.style.visibility = "hidden";
    button.innerHTML = "Show";
  }
}
