console.log('%c HI', 'color: firebrick')

//challenge 1

document.addEventListener("DOMContentLoaded", ()=>{
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imgContainer = document.getElementById("dog-image-container");
            data.message.forEach(imgUrl => {
                const img = document.createElement("img");
                img.src = imgUrl;
                img.alt = "A Dog Image";
                imgContainer.appendChild(img);
            });
        })

        .catch(error => console.log("Error fetching images:", error));

});

//challenge 2 

document.addEventListener("DOMContentLoaded", () => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breedList = document.getElementById("dog-breeds");
            Object.keys(data.message).forEach(breed => {
                const li = document.createElement("li");
                li.textContent = breed;
                breedList.appendChild(li);
            });
        })
        .catch(error => console.log("Error fetching breeds:", error));
});

//challenge 3

document.addEventListener("DOMContentLoaded", () => {
    const breedList = document.getElementById("dog-breeds");

    breedList.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            event.target.style.color = "blue"; // Change to any color you like
        }
    });
});


//challenge 4 
document.addEventListener("DOMContentLoaded", () => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    let breeds = [];

    // Fetch and store breeds
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            breeds = Object.keys(data.message);
            displayBreeds(breeds);
        })
        .catch(error => console.log("Error fetching breeds:", error));

    // Function to display filtered breeds
    function displayBreeds(breedArray) {
        const breedList = document.getElementById("dog-breeds");
        breedList.innerHTML = "";
        breedArray.forEach(breed => {
            const li = document.createElement("li");
            li.textContent = breed;
            breedList.appendChild(li);
        });
    }

    // Filter breeds when dropdown changes
    document.getElementById("breed-dropdown").addEventListener("change", (event) => {
        const selectedLetter = event.target.value;
        const filteredBreeds = breeds.filter(breed => breed.startsWith(selectedLetter));
        displayBreeds(filteredBreeds);
    });
});
