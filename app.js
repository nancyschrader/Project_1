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
        var content = data.results[0].powerstats;
        $("#powerstats").append(content);
        //console.log(data);
      },
      () => {
        console.log("bad request");
      }
    );
    
  });
});
