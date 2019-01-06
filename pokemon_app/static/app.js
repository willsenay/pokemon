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

var svg = dimple.newSvg("#chartContainer", 8050, 400);

d3.csv("../data/gen1.csv", function (data) {
  var myChart = new dimple.chart(svg, data);
  myChart.setBounds(60, 30, 8000, 305)
  var x = myChart.addCategoryAxis("x", "Name");
  x.addOrderRule('Total', desc=true);
  myChart.addMeasureAxis("y", "Total");
  myChart.addSeries("Generation", dimple.plot.bar);
  myChart.addLegend(60, 10, 510, 20, "right");
  myChart.draw();
});


// var svg = dimple.newSvg("#chartContainer", 1050, 400);

// d3.csv("../data/test.csv", function (data) {
//   var myChart = new dimple.chart(svg, data);
//   myChart.setBounds(60, 30, 1000, 305)
//   var x = myChart.addCategoryAxis("x", "Name");
//   x.addOrderRule(''); // order by index
//   myChart.addMeasureAxis("y", "Stat");
//   myChart.addSeries("Stat_Name", dimple.plot.bar);
//   myChart.addLegend(60, 10, 510, 20, "right");
//   myChart.draw();
// });