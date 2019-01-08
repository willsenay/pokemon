d3.csv("../data/gen1.csv", function(error, pokeData){
    if (error) return console.warn(error);

    console.table(pokeData.slice(0,5));
    console.log(pokeData);

    var names = pokeData.map(data => data.Name);
    var ids = pokeData.map(data => data.ID);
    var Type1 = pokeData.map(data => data.Type1)
    console.log("names", names);

    pokeData.forEach(function(d){
        d3.select("body")
          .select("div")
          .select("table")
          .select("tbody")
          .append("tr")
          .append("td")
          .attr("align", "center")
          .append("img")
          .attr("src", "../imgs/"+d.ID+".png")
    });
    
    d3.select("body")
      .select("div")
      .select("table")
      .select("tbody")
      .selectAll("tr")
      .append("td")
      .attr("class", "text-center align-middle")
      .attr("id", "pokeName");

    names.forEach(function(d){
        d3.select("#pokeName")
          .attr("id", null)
          .text(d);
    });

    d3.select("body")
      .select("div")
      .select("table")
      .select("tbody")
      .selectAll("tr")
      .append("td")
      .attr("class", "text-center align-middle")
      .attr("id", "pokeID");

    ids.forEach(function(d){
        d3.select("#pokeID")
          .attr("id", null)
          .text(d);
    });

    d3.select("body")
      .select("div")
      .select("table")
      .select("tbody")
      .selectAll("tr")
      .append("td")
      .attr("class", "text-center align-middle")
      .attr("id", "pokeType1");
    
      Type1.forEach(function(d){
      d3.select("#pokeType1")
        .attr("id", null)
        .text(d);
  });

});


