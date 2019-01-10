// DATA TABLE ----------------------------------------------------------------
function makeDataTable(){
  
  d3.json("/poke-api", function(error, pokeData){
     
    if (error) return console.warn(error);
  
    console.table(pokeData.slice(0,5));
    console.log(pokeData);
    
    // IMAGES -----------------------------
    pokeData.forEach(function(d){
      d3.select("body")
        .select("div")
        .select("table")
        .select("tbody")
        .append("tr")
        .append("td")
        .attr("align", "center")
        .append("img")
        .attr("src", "../static/imgs/"+d.ID+".png")
        .attr("id", "click"+d.ID)
        // .on("click", function() {console.log("clicked")})
        ;
    });
    
    // NAMES ------------------------------
    d3.select("body")
      .select("div")
      .select("table")
      .select("tbody")
      .selectAll("tr")
      .append("td")
      .attr("class", "text-center align-middle")
      .attr("id", "pokeName");
        
    pokeData.forEach(function(d){
      d3.select("#pokeName")
        .attr("id", null)
        .text(d.Name);
    });
          
    // IDs ------------------------------------
    d3.select("body")
      .select("div")
      .select("table")
      .select("tbody")
      .selectAll("tr")
      .append("td")
      .attr("class", "text-center align-middle")
      .attr("id", "pokeID");
        
    pokeData.forEach(function(d){
      d3.select("#pokeID")
      .attr("id", null)
      .text(d.ID);
    });     
  
    // RADAR -----------------------------------
    d3.select("body")
      .select("div")
      .select("table")
      .select("tbody")
      .selectAll("tr")
      .append("td")
      .append("canvas")
      .attr("id", "myChart")
  
  });
};

// RADAR CHART ------------------------------------------------------------------------------
function createRadarChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'radar',
  
      // The data for our dataset
      data: {
          labels: ["HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed"],
          datasets: [{
              label: "Base Stat Value",
              borderColor: 'rgb(0, 0, 0)',
              backgroundColor: 'rgb(0, 0, 0, .5)',
              data: [45, 49, 49, 65, 65, 45],
          }]
      },
  
      // Configuration options go here
      options: {
          scale: {
              ticks: {
                  min: 1,
                  max: 255
              }
          }
      }
  });
};

// SET UP JQUERY DATATABLES -------------------------------------------------------------------
function dataTableFancy(){
  $('#myTable').dataTable()
}

// INIT FUNCTION ---------------------------------------------------------------------------------
function init(){
  makeDataTable();
  setTimeout(createRadarChart,1000);
  setTimeout(dataTableFancy,1000);
};

// RUN INIT ------------------------------------------------------------------------------------
init();


