console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Maula Ya Salli - Sami Yusuf ft. Qasida Burda Shareef ( Slowed & Reverb)]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Maher Zain - Rahmatun Lil’Alameen (Official Music Video) ماهر زين - رحمةٌ للعالمين ]", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Maher Zain - Ya Nabi Salam Alayka (Arabic) ｜ ماهر زين - يا نبي سلام عليك ｜ Official Music Video]", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "HUMOOD - KUN ANTA (كن أنت) - [VOCALS ONLY  SLOWED  REVERB]]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Coke Studio Special ｜ Asma-ul-Husna ｜ The 99 Names ｜ Atif Aslam", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Allah Hu Allah Hu | Atif Aslam | Ramzan 2024", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Muhammad Nabina (Perfect Version) | Slowed + Reverb | Arabic Nasheed", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Sami Yusuf Hasbi Rabbi", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tajdar-e-Haram | Atif Aslam | Coke Studio Season 8 ", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Coke Studio Season 12 | Wohi Khuda Hai | Atif Aslam", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})