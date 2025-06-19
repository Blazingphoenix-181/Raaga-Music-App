console.log("Welcome to The RAGA MUSIC PLAYER");

let SongIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songListContainer = document.getElementById('songList');

const songs = [
    { SongName: "Kasturi", filePath: "1.mp3", coverPath: "kasturi.jpeg", lyrics: "Kasturi si khushboo ho tum..." },
    { SongName: "Tera Fitoor", filePath: "2.mp3", coverPath: "tera fitoor.jpeg", lyrics: "Tera fitoor jab se chadh gaya re..." },
    { SongName: "Tum Hi Ho", filePath: "3.mp3", coverPath: "images.jpeg", lyrics: "Tum hi ho, ab tum hi ho..." },
    { SongName: "Tu Har Lamha", filePath: "4.mp3", coverPath: "tu har lamha.jpeg", lyrics: "Tu har lamha mein rehta hai..." },
    { SongName: "Pal", filePath: "5.mp3", coverPath: "pal.jpeg", lyrics: "Pal ek pal mein hi tham sa gaya..." },
    { SongName: "Khamosiyan", filePath: "6.mp3", coverPath: "khamosiyan.jpeg", lyrics: "Khamosiyan awaaz hai..." },
    { SongName: "Gerua", filePath: "7.mp3", coverPath: "gerua.jpeg", lyrics: "Rang de tu mohe gerua..." },
    { SongName: "Kesariya", filePath: "8.mp3", coverPath: "kesariya.jpeg", lyrics: "Kesariya tera ishq hai piya..." },
    { SongName: "Ae Dil Hai Mushkil", filePath: "9.mp3", coverPath: "ae dil hai muskil.jpeg", lyrics: "Ae dil hai mushkil jeena yahan..." },
    { SongName: "Mareez-E-Ishq", filePath: "10.mp3", coverPath: "mareez e ishq.jpeg", lyrics: "Main mareez-e-ishq hoon..." }
];

function loadSong(index) {
    audioElement.src = songs[index].filePath;
    document.getElementById('songCover').src = songs[index].coverPath;
    document.getElementById('songTitle').textContent = songs[index].SongName;
    document.getElementById('lyrics').textContent = songs[index].lyrics;
    audioElement.load();
}

songs.forEach((song, index) => {
    let div = document.createElement('div');
    div.className = 'song';
    div.innerHTML = `
        <img src="${song.coverPath}" alt="cover">
        <span>${song.SongName}</span>
    `;
    div.onclick = () => {
        SongIndex = index;
        loadSong(SongIndex);
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    };
    songListContainer.appendChild(div);
});

loadSong(SongIndex);

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
});

document.getElementById('next').addEventListener('click', () => {
    SongIndex = (SongIndex + 1) % songs.length;
    loadSong(SongIndex);
    audioElement.play();
});

document.getElementById('prev').addEventListener('click', () => {
    SongIndex = (SongIndex - 1 + songs.length) % songs.length;
    loadSong(SongIndex);
    audioElement.play();
});

audioElement.addEventListener('timeupdate', () => {
    myProgressBar.value = (audioElement.currentTime / audioElement.duration) * 100;
});

myProgressBar.addEventListener('input', () => {
    audioElement.currentTime = (myProgressBar.value / 100) * audioElement.duration;
});

function openModal(id) {
    document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}


window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};



