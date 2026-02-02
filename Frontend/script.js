const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cf2c7e1dadb586e61c831ac09b27e6c0&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=cf2c7e1dadb586e61c831ac09b27e6c0&query=';

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovie(APILINK);

function returnMovie(url) {
  fetch(url)
    .then(res => res.json())
    .then(function(data) {
      console.log(data.results);

      // create one row container
      const div_row = document.createElement("div");
      div_row.setAttribute("class", "row");

      data.results.forEach(element => {
        const div_card = document.createElement("div");
        div_card.setAttribute("class", "card");

        const div_column = document.createElement("div");
        div_column.setAttribute("class", "column");

        const image = document.createElement("img");
        image.setAttribute("class", "thumbnail");
        
        // Handle missing images
        if(element.poster_path) {
            image.src = IMG_PATH + element.poster_path;
        } else {
            image.src = "https://via.placeholder.com/300x450?text=No+Image";
        }

        const title = document.createElement("h3");
        title.setAttribute("class", "title");
        title.innerHTML = `${element.title}`;

        // --- NEW CODE: REVIEWS LINK ---
        const reviewLink = document.createElement("a");
        reviewLink.setAttribute("class", "review-link");
        // Pass the ID and Title in the URL so the next page knows what to load
        reviewLink.href = `movie.html?id=${element.id}&title=${encodeURIComponent(element.title)}`;
        reviewLink.innerText = "View Reviews";
        // ------------------------------

        const center = document.createElement("center");

        center.appendChild(image);
        div_card.appendChild(center);
        div_card.appendChild(title);
        div_card.appendChild(reviewLink); // Add the link to the card
        div_column.appendChild(div_card);

        div_row.appendChild(div_column);
      });

      // finally, add the row (containing all movies) to main
      main.appendChild(div_row);
    });
}


form.addEventListener("submit", (e) => {e.preventDefault();
    main.innerHTML = "";

    const searchTerm = search.value;

    if(searchTerm) {
        returnMovie(SEARCHAPI + searchTerm);
        search.value = "";
    }
});