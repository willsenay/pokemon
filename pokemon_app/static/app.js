// DIMPLE EXAMPLE

// var svg = dimple.newSvg("#chartContainer", 590, 400);

// d3.tsv("../data/example_data.tsv", function (data) {
//   var myChart = new dimple.chart(svg, data);
//   myChart.setBounds(60, 30, 510, 305)
//   var x = myChart.addCategoryAxis("x", "Month");
//   x.addOrderRule("Date");
//   myChart.addMeasureAxis("y", "Unit Sales");
//   myChart.addSeries("Channel", dimple.plot.bar);
//   myChart.addLegend(60, 10, 510, 20, "right");
//   myChart.draw();
// });

var svg = dimple.newSvg("#chartContainer", 10500, 400);

d3.csv("../data/stats_clean.csv", function (data) {
  var myChart = new dimple.chart(svg, data);
  myChart.setBounds(60, 30, 10000, 305)
  var x = myChart.addCategoryAxis("x", "Name");
  x.addOrderRule(''); // order by index
  myChart.addMeasureAxis("y", "Total");
  var flter = myChart.addSeries("Generation", dimple.plot.bar);
  flter.addOrderRule("Generation", desc=true);
  myChart.addLegend(60, 10, 510, 20, "right");
  myChart.draw();
});