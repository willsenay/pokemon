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
        
  // IDs------------------------------------
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
});
