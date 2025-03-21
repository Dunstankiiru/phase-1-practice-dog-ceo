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

})''