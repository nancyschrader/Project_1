$(() => {
  $("form").on("submit", event => {
    event.preventDefault();
    
    const userInput = $('input[type="text"]').val();

    $.ajax({
      url: `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10221145922013074/search/${userInput}` //${userInput}
    }).then(data => {
      console.log(data);

      let name = data.results[0].name;
      let strength = data.results[0].powerstats.strength;
      let intel = data.results[0].powerstats.intelligence;
      let speed = data.results[0].powerstats.speed;
      let combat = data.results[0].powerstats.combat;
      let power = data.results[0].powerstats.power;

      let image = data.results[0].image.url;

      let final_image = $("<img>")
        .attr("src", image)
        .addClass("newImage");

      $("body")
        .append(`<h2>${name}</h2>`)
        .append(final_image)
        .append(
          "<p>Strength : " +
            strength +
            "<br /> Intelligence : " +
            intel +
            "<br /> Speed: " +
            speed +
            "<br /> Combat: " +
            combat +
            "<br /> Power: " +
            power +
            "<br /></p>"
        );
    });
  });

});
