$(() => {
  $("form").on("submit", event => {
    event.preventDefault();
    //const userInput = $("#search-box").val()
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
          "<p>Strength : "+strength+
            "<br /> Intelligence : " +intel+
            "<br /> Speed: " +speed+
            "<br /> Combat: " +combat+
            "<br /> Power: " +power+"<br /></p>"
        );

      // .append("Combat: " + combat + "<br />")
      // .append("Power: " + power + "<br />");

      // $("<div>").addClass("name").append(`<h2>${name}</h2>`);
      // console.log("Name : " + data.results[0].name);
      // console.log("Name : " + data.results[0]);
    });
  });
});
// const nancyTest = () => {
//   let $image = $("<div>").addClass("image");
//   $(".wrapper").append($image);
// };

// let $image = $("<div>").addClass("image");
// $('.wrapper').append($image);

// // $('image').attr(results[0].image.url);
// let $name = $("<div").addClass("name");
// $("body").append($name);

// let $information = $("<div>").addClass("information");
// $("body").append($information);

// let $powerstats = $("<div>").addClass("powerstats");
// $("body").append($powerstats);

// let this_image = $("image").attr('src', results[0].image.url);

// $('body').append(this_image)

// var image = '${results[0].image.url}';

// var information = '${results[0].biography}';

// var powerstats = '${results[0].powerstats}';
// var name = '${results[0].name}';

// $('.image').html(image);
// $('.name').html(text);
// $('.information').html(text);
// $('.powerstats').html(text);

// $("#results").append(name);
//$("#result").html(data);

// var content = data.results[0].powerstats;
// $("#powerstats").append(content);
//console.log(data);
