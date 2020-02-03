$(() => {
  $("form").on("submit", event => {
    event.preventDefault();
    //const userInput = $("#search-box").val()
    const userInput = $('input[type="text"]').val();

    $.ajax({
      url: `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10221145922013074/search/${userInput}` //${userInput}
    }).then(
      data => {
        console.log(data);
        const $image = $('<div>').addClass('image');
        $('body').append($image);
        // $('image').attr(results[0].image.url);

        const $information = $('<div>').addClass('information');
        $('body').append($information);

        const $powerstats = $('<div>').addClass('powerstats');
        $('body').append($powerstats);

        // var content = data.results[0].powerstats;
        // $("#powerstats").append(content);
        //console.log(data);
      },
      () => {
        console.log("bad request");
      }
    );
  });
});
