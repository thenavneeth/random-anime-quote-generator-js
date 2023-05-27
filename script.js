function getRandomAnimeQuote() {
  var quoteContainer = document.getElementById("quoteContainer");
  quoteContainer.innerHTML = "Loading...";

  fetch("https://animechan.vercel.app/api/random")
    .then(function(response)
     {
      return response.json();
    })
    .then(function(data) {
      var quoteText = data.quote;
      var animeTitle = data.anime;
      var characterName = data.character;

      quoteContainer.innerHTML = "";
      var quoteElement = document.createElement("p");
      quoteElement.textContent = `"${quoteText}"`;
      quoteContainer.appendChild(quoteElement);

      var detailsElement = document.createElement("p");
      detailsElement.innerHTML = `Anime: ${animeTitle}<br>Character: ${characterName}`;
      quoteContainer.appendChild(detailsElement);
    })
    .catch(function(error) {
      console.log("Error: " + error);
      quoteContainer.innerHTML = "Error occurred while fetching the quote.";
    });
}
