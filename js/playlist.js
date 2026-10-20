
const songs = [
    "Espresso",
    "Blinding Lights",
    "One Kiss",
    "Levitating",
    "Summertime Sadness Remix"
];

const playlist = document.getElementById("playlist");

for (const song of songs) {
    const item = document.createElement("li");
    item.textContent = song;

    if (song.includes("Remix")) {
        item.textContent += " 🎧 (Remix)";
    }

    playlist.appendChild(item);
}
