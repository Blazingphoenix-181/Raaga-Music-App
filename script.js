console.log("Welcome to The RAGA MUSIC PLAYER");
let SongIndex=0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songs=[
    {SongName:"Kasturi" ,filePath:"1.mp3", coverPath:"kasturi.jpg"},
    {SongName:"Tera Fitoor",filePath: "2.mp3", coverPath:"tera fitoor.jpg"},
    {SongName:"Tum Hi Ho" ,filePath:"3.mp3", coverPath:"Tum Hi Ho.jpg"},
    {SongName:"Tu Har Lamha" ,filePath:"4.mp3", coverPath:"tu har lamha.jpeg"},
    {SongName:"Pal" ,filePath:"5.mp3", coverPath:"pal.jpg"},
    {SongName:"Khamosiyan" ,filePath:"6.mp3", coverPath:"khamosiyan.jpg"},
    {SongName:"Gerua" ,filePath:"7.mp3", coverPath:"gerua.jpg"},
    {SongName:"Kesriya" ,filePath:"8,mp3", coverPath:"kesariya.jpg"},
    {SongName:"Ae Dil Hai Muskil" ,filePath:"9.mp3", coverPath:"ae dil hai muskil.jpg"},
    {SongName:"Mareez-E-Ishq" ,filePath:"10.mp3", coverPath:"mareez-e-ishq.jpg"},
    
    
    
]
function loadSong(index) {
    audioElement.src = songs[index].filePath;
    audioElement.load();
}
loadSong(SongIndex);


// audioElement.play();

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play().then(() => {
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
      }).catch((error) => {
        console.error("Playback failed:", error);
      });
    } else {
      audioElement.pause();
      masterPlay.classList.remove('fa-pause-circle');
      masterPlay.classList.add('fa-play-circle');
    }
  });



let nextButton = document.getElementById('next');

nextButton.addEventListener('click', () => {
    SongIndex = (SongIndex + 1) % songs.length; 
    loadSong(SongIndex);
    audioElement.play().then(() => {
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

let prevButton = document.getElementById('prev');

prevButton.addEventListener('click', () => {
    SongIndex = (SongIndex - 1 + songs.length) % songs.length; 
    loadSong(SongIndex);
    audioElement.play().then(() => {
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});
// Update the seekbar as the song plays
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// Seek functionality when user changes the bar
myProgressBar.addEventListener('input', () => {
    audioElement.currentTime = (myProgressBar.value / 100) * audioElement.duration;
});

audioElement.addEventListener('loadedmetadata', () => {
    myProgressBar.disabled = false;
});
