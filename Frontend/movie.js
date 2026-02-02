const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');
const movieTitle = urlParams.get('title');

const APILINK = 'http://localhost:8000/api/v1/movies/';

document.getElementById("movie-title").innerText = movieTitle;

// --- DELETED THE WEIRD "div_new" CODE BLOCK HERE ---

returnReviews(APILINK);

function returnReviews(url) {
    fetch(url + "id/" + movieId)
        .then(res => res.json())
        .then(function(data) {
            console.log(data);
            const reviews_div = document.getElementById("reviews-list");
            reviews_div.innerHTML = ""; // Clear list so it doesn't duplicate on reload

            if (data.reviews) {
                data.reviews.forEach(review => {
                    const div_card = document.createElement("div");
                    div_card.className = "review-card-item";
                    
                    div_card.innerHTML = `
                        <div class="card-content" id="${review._id}">
                            <p><strong>Review: </strong>${review.text}</p>
                            <p><strong>User: </strong>${review.name}</p>
                            <div class="review-actions">
                                <a href="#" onclick="editReview('${review._id}', '${review.text}', '${review.name}')">✏️ Edit</a> 
                                <a href="#" onclick="deleteReview('${review._id}')">🗑️ Delete</a>
                            </div>
                        </div>
                    `;
                    reviews_div.appendChild(div_card);
                });
            }
        });
}

function saveReview(reviewInputId, userInputId, id = "") {
    const review = document.getElementById(reviewInputId).value;
    const user = document.getElementById(userInputId).value;

    if (id) {
        // --- EDIT MODE (PUT) ---
        fetch(APILINK + "review", {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "review_id": id, "text": review, "user_id": "1234" }) 
        }).then(res => res.json())
          .then(res => {
              console.log(res);
              location.reload(); 
          });
    } else {
        // --- CREATE MODE (POST) ---
        fetch(APILINK + "review", {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "movie_id": movieId, "text": review, "name": user, "user_id": "1234" })
        }).then(res => res.json())
          .then(res => {
              console.log(res);
              location.reload();
          });
    }
}

function deleteReview(id) {
    fetch(APILINK + "review?id=" + id, { 
        method: 'DELETE',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "user_id": "1234" }) 
    }).then(res => res.json())
      .then(res => {
          console.log(res);
          location.reload();
      });
}

function editReview(id, review, user) {
    // 1. Find the specific card content div
    const element = document.getElementById(id);
    
    // 2. IDs for the new inputs
    const reviewInputId = "review" + id;
    const userInputId = "user" + id;

    // 3. Replace text with input boxes
    element.innerHTML = `
        <p><strong>Review: </strong>
            <input type="text" id="${reviewInputId}" value="${review}">
        </p>
        <p><strong>User: </strong>
            <input type="text" id="${userInputId}" value="${user}" disabled>
        </p>
        <p>
            <a href="#" onclick="saveReview('${reviewInputId}', '${userInputId}', '${id}')">💾 Save Changes</a>
            <a href="#" onclick="location.reload()" style="color: #9ca3af;">❌ Cancel</a>
        </p>
    `;
}