var svg = dimple.newSvg("#chartContainer", 8050, 400);
svg.attr("id", "svgId");

function totalStats(){

  $("#svgId").empty();

  d3.csv("../data/gen1.csv", function (data) {
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(60, 30, 8000, 305)
    var x = myChart.addCategoryAxis("x", "Name");
    x.addOrderRule('Total', desc=true);
    myChart.addMeasureAxis("y", "Total");
    myChart.addSeries("Generation", dimple.plot.bar);
    myChart.draw();
  });

}

function attackStats(){

  $("#svgId").empty();

  d3.csv("../data/gen1.csv", function (data) {
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(60, 30, 8000, 305)
    var x = myChart.addCategoryAxis("x", "Name");
    x.addOrderRule('Attack', desc=true);
    myChart.addMeasureAxis("y", "Attack");
    myChart.addSeries("Generation", dimple.plot.bar);
    myChart.draw();
  });

}

function defenseStats(){

  $("#svgId").empty();

  d3.csv("../data/gen1.csv", function (data) {
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(60, 30, 8000, 305)
    var x = myChart.addCategoryAxis("x", "Name");
    x.addOrderRule('Defense', desc=true);
    myChart.addMeasureAxis("y", "Defense");
    myChart.addSeries("Generation", dimple.plot.bar);
    myChart.draw();
  });

}

function hpStats(){

  $("#svgId").empty();

  d3.csv("../data/gen1.csv", function (data) {
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(60, 30, 8000, 305)
    var x = myChart.addCategoryAxis("x", "Name");
    x.addOrderRule('HP', desc=true);
    myChart.addMeasureAxis("y", "HP");
    myChart.addSeries("Generation", dimple.plot.bar);
    myChart.draw();
  });

}

function speedStats(){

  $("#svgId").empty();

  d3.csv("../data/gen1.csv", function (data) {
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(60, 30, 8000, 305)
    var x = myChart.addCategoryAxis("x", "Name");
    x.addOrderRule('Speed', desc=true);
    myChart.addMeasureAxis("y", "Speed");
    myChart.addSeries("Generation", dimple.plot.bar);
    myChart.draw();
  });

}

function spAttackStats(){

  $("#svgId").empty();

  d3.csv("../data/gen1.csv", function (data) {
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(60, 30, 8000, 305)
    var x = myChart.addCategoryAxis("x", "Name");
    x.addOrderRule('Sp_Atk', desc=true);
    myChart.addMeasureAxis("y", "Sp_Atk");
    myChart.addSeries("Generation", dimple.plot.bar);
    myChart.draw();
  });

}

function spDefenseStats(){

  $("#svgId").empty();

  d3.csv("../data/gen1.csv", function (data) {
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(60, 30, 8000, 305)
    var x = myChart.addCategoryAxis("x", "Name");
    x.addOrderRule('Sp_Def', desc=true);
    myChart.addMeasureAxis("y", "Sp_Def");
    myChart.addSeries("Generation", dimple.plot.bar);
    myChart.draw();
  });

}

totalStats();