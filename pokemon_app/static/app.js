// DIMPLE SETUP ---------------------------------------
var svg = dimple.newSvg("#chartContainer", 8050, 400);
svg.attr("id", "svgId");

// TOTAL STATS ---------------------------------------
function totalStats(){

  $("#svgId").empty();

  d3.json("/poke-api", function (data) {
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(60, 30, 8000, 305)
    var x = myChart.addCategoryAxis("x", "Name");
    x.addOrderRule('Total', desc=true);
    myChart.addMeasureAxis("y", "Total");
    myChart.addSeries("", dimple.plot.bar);
    myChart.draw();
  });
}

// ATTACK STATS -----------------------------------------
function attackStats(){

  $("#svgId").empty();

  d3.json("/poke-api", function (data) {
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(60, 30, 8000, 305)
    var x = myChart.addCategoryAxis("x", "Name");
    x.addOrderRule('Attack', desc=true);
    myChart.addMeasureAxis("y", "Attack");
    myChart.addSeries("", dimple.plot.bar);
    myChart.draw();
  });
}

// DEFENSE STATS -------------------------------------------
function defenseStats(){

  $("#svgId").empty();

  d3.json("/poke-api", function (data) {
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(60, 30, 8000, 305)
    var x = myChart.addCategoryAxis("x", "Name");
    x.addOrderRule('Defense', desc=true);
    myChart.addMeasureAxis("y", "Defense");
    myChart.addSeries("", dimple.plot.bar);
    myChart.draw();
  });
}

// HP STATS --------------------------------------------
function hpStats(){

  $("#svgId").empty();

  d3.json("/poke-api", function (data) {
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(60, 30, 8000, 305)
    var x = myChart.addCategoryAxis("x", "Name");
    x.addOrderRule('HP', desc=true);
    myChart.addMeasureAxis("y", "HP");
    myChart.addSeries("", dimple.plot.bar);
    myChart.draw();
  });
}

// SPEED STATS -------------------------------------
function speedStats(){

  $("#svgId").empty();

  d3.json("/poke-api", function (data) {
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(60, 30, 8000, 305)
    var x = myChart.addCategoryAxis("x", "Name");
    x.addOrderRule('Speed', desc=true);
    myChart.addMeasureAxis("y", "Speed");
    myChart.addSeries("", dimple.plot.bar);
    myChart.draw();
  });
}

// SP ATTACK STATS -------------------------------------
function spAttackStats(){

  $("#svgId").empty();

  d3.json("/poke-api", function (data) {
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(60, 30, 8000, 305)
    var x = myChart.addCategoryAxis("x", "Name");
    x.addOrderRule('Sp_Atk', desc=true);
    myChart.addMeasureAxis("y", "Sp_Atk");
    myChart.addSeries("", dimple.plot.bar);
    myChart.draw();
  });
}

// SP DEFENSE STATS ------------------------------------
function spDefenseStats(){

  $("#svgId").empty();

  d3.json("/poke-api", function (data) {
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(60, 30, 8000, 305)
    var x = myChart.addCategoryAxis("x", "Name");
    x.addOrderRule('Sp_Def', desc=true);
    myChart.addMeasureAxis("y", "Sp_Def");
    myChart.addSeries("", dimple.plot.bar);
    myChart.draw();
  });
}

// run total stats as default graph --------
function init(){
  totalStats();
};

init();