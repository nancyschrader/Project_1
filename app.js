$(() => {
    
  
      $.ajax({
        url: "https://superheroapi.com/api/10221145922013074/14/powerstats"
      }).then(
        (data) => {
          console.log(data);
        },
        () => {
          console.log("bad request");
        }
      );
  });
  