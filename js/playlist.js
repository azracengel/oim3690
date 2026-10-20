
const songs = [
    "Espresso",
    "Blinding Lights",
    "One Kiss",
    "Levitating",
    "Summertime Sadness Remix"
];

// Get elements from the HTML page
const playlist = document.getElementById("playlist");
const songInput = document.getElementById("song-input");
const addButton = document.getElementById("add-song");
const songCount = document.getElementById("song-count");

// Display all songs using a for...of loop
function displaySongs() {
    playlist.innerHTML = "";

    for (const song of songs) {
        const item = document.createElement("li");
        item.textContent = song;

        // Mark songs containing "Remix"
        if (song.includes("Remix")) {
            item.textContent += " 🎧 (Remix)";
        }

        playlist.appendChild(item);
    }

    // Update the total number of songs
    songCount.textContent = "Total songs: " + songs.length;
}

// Add a song when the button is clicked
addButton.addEventListener("click", function() {
    const newSong = songInput.value.trim();

    if (newSong !== "") {
        songs.push(newSong);
        displaySongs();
        songInput.value = "";
    }
});

// Show the original five songs
displaySongs();
