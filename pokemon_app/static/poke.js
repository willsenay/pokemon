// Define SVG area dimensions
var svgWidth = 500;
var svgHeight = 255;

// Define the chart's margins as an object
var svg = d3.select("body")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("class", "bar-chart");

d3.csv("../data/gen1.csv", function(error,Data) {
    if (error) throw error;

    console.log(Data);

    Data.forEach(function(d){
        d.Attack = +d.Attack
        d.Defense = +d.Defense
        d.HP = +d.HP
        d.Sp_Atk = +d.Sp_Atk
        d.Sp_Def = +d.Sp_Def
        d.Speed = +d.Speed
    })
})