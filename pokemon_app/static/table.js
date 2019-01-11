// DATA TABLE ----------------------------------------------------------------
function makeDataTable(){
  
  d3.json("/poke-api", function(error, pokeData){
     
    if (error) return console.warn(error);
    
    // IMAGES -----------------------------
    pokeData.forEach(function(d){
      d3.select("body")
        .select("div")
        .select("table")
        .select("tbody")
        .append("tr")
        .append("td")
        .attr("class", "align-middle")
        .append("img")
        .attr("src", "../static/imgs/"+d.ID+".png")
        .attr("id", "click"+d.ID);
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
    
    // TYPE 1 -------------------------------
    d3.select("body")
      .select("div")
      .select("table")
      .select("tbody")
      .selectAll("tr")
      .append("td")
      .attr("class", "text-center align-middle")
      .attr("id", "pokeType1");
    
    pokeData.forEach(function(d){
      d3.select("#pokeType1")
        .attr("id", d.Type_1)
        .text(d.Type_1);
    }); 

    // TYPE 2 ------------------------------------
    d3.select("body")
      .select("div")
      .select("table")
      .select("tbody")
      .selectAll("tr")
      .append("td")
      .attr("class", "text-center align-middle")
      .attr("id", "pokeType2");
    
    pokeData.forEach(function(d){
      d3.select("#pokeType2")
        .attr("id", d.Type_2)
        .text(d.Type_2);
    }); 
  
    // RADAR -----------------------------------
    d3.select("body")
      .select("div")
      .select("table")
      .select("tbody")
      .selectAll("tr")
      .append("td")
      .attr("class", "wide")
      .append("canvas")
      .attr("id", "myChart");

    pokeData.forEach(function(d){
      d3.select("#myChart")
        .attr("id", "myChart"+d.ID);
    });  
  });
};

// RADAR CHART ------------------------------------------------------------------------------
function createRadarChart() {
  
  d3.json("/poke-api", function(error, pokeData){
  
    for (let i = 1; i < pokeData.length+1; i++) {
    
      if (error) return console.warn(error);

      var hps = pokeData.map(d => d.HP);
      var atks = pokeData.map(d => d.Attack);
      var defs = pokeData.map(d => d.Defense);
      var spAtks = pokeData.map(d => d.Sp_Atk);
      var spDefs = pokeData.map(d => d.Sp_Def);
      var speeds = pokeData.map(d => d.Speed);

      var baseStats = [hps[i-1], atks[i-1], defs[i-1], spAtks[i-1], spDefs[i-1], speeds[i-1]];
  
      var ctx = document.getElementById('myChart'+i).getContext('2d');
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
            data: baseStats,
          }]
        },
    
        // Configuration options go here
        options: {
          scale: {
            ticks: {
                min: 1,
                max: 250
            }
          },
          legend: {
            display: false
          }
        }
      });
    };
  });
};
  

// SET UP JQUERY DATATABLES -------------------------------------------------------------------
function dataTableFancy(){
  $('#myTable').dataTable()
};

// WAIT 1 SECOND FUNCTIONS --------------------------------------------------------------
function waitSecond(){
  setTimeout(createRadarChart,1000);
  setTimeout(dataTableFancy,3000);
};

// INIT FUNCTION ---------------------------------------------------------------------------------
function init(){
  makeDataTable();
  waitSecond();
};

// RUN INIT ------------------------------------------------------------------------------------
init();


