let currentIndex = 0;
const media = [
    "media/image1.jpg",
    "media/image2.jpg",
    "media/image3.jpg",
    "media/image4.jpg",
    "media/image5.jpg",
    "media/video1.mp4",
    "media/video2.mp4",
    "media/video3.mp4",
    "media/video4.mp4"
];
const captions = [
    "Okay! Ik I look pretty..Stop staring", "Come on, bruh ! I won't kill you.Smile, please?", "Nuvu taagi osthe future lo ilane tisukellala nenu ? HUH??", "Eh school nundi tappipoyi ochav?", "All hail the tiger?", 
    "Vc lo record cheyadam niku nachadu ga anduke chesa heee", "Enduku intha cute unav ??", "....", "Baane flex chestunav le kani.. Okati adagali...."
]; // Modify this list if necessary

document.getElementById("continueButton").addEventListener("click", () => {
    displayMedia();
    document.getElementById("continueButton").style.display = "none";
});

function displayMedia() {
    if (currentIndex < media.length) {
        let mediaElement = '';
        let mediaCaption = captions[currentIndex];

        // Check if it's an image or a video
        if (media[currentIndex].endsWith(".jpg") || media[currentIndex].endsWith(".png")) {
            mediaElement = `<img id="mediaDisplay" src="${media[currentIndex]}" alt="Media" />`;
        } else if (media[currentIndex].endsWith(".mp4")) {
            mediaElement = ` 
                <video id="mediaDisplay" width="600" height="400" loop autoplay muted>
                    <source src="${media[currentIndex]}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
        }

        // Render the media and next button
        document.querySelector(".container").innerHTML = `
            <div class="media-frame">
                ${mediaElement}
            </div>
            <div class="caption">
                <p>${mediaCaption}</p>
            </div>
            <button id="nextButton">Next</button>
        `;

        document.getElementById("nextButton").addEventListener("click", () => {
            currentIndex++;
            if (currentIndex < media.length) {
                displayMedia(); // Load the next media
            } else {
                // If no more media, show the final message
                document.querySelector(".container").innerHTML = `
                    <div class="media-frame">
                        <img id="mediaDisplay" src="media/what.gif" alt="What" />
                    </div>
                    <div class="caption">
                        <p>Will you be my Valentine?</p>
                    </div>
                    <button id="yesButton">Yes</button>
                    <button id="noButton">No</button>
                `;

                document.getElementById("yesButton").addEventListener("click", () => {
                    showLoveImage();
                });

                document.getElementById("noButton").addEventListener("click", () => {
                    // You can add a different response here or do nothing
                    document.querySelector(".container").innerHTML = `
                        <div class="media-frame">
                            <img id="mediaDisplay" src="media/sad.gif" alt="Sad" />
                        </div>
                        <div class="caption">
                            <p>Oh well... maybe next time!</p>
                        </div>
                    `;
                });
            }
        });
    }
}

function showLoveImage() {
    document.querySelector(".container").innerHTML = `
        <div class="media-frame">
            <img id="mediaDisplay" src="media/love.gif" alt="Love" />
        </div>
        <div class="caption">
            <p>Edo No chepe option unate ethukunav ga.<br>
             Anyways Happy valentines day dear...</p>
        </div>
    `;
}
