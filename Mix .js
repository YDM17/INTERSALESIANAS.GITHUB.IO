const playlist = [
    'Pa la Selección La T y La M.mp3', 
    'musica2.mp3', 
    'musica3.mp3'  
];

const audioPlayer = document.getElementById('audio-player');


let currentTrack = 0;


function loadTrack(trackIndex) {
    audioPlayer.src = playlist[trackIndex];  
    audioPlayer.play(); 
}


loadTrack(currentTrack);


audioPlayer.onended = function() {
  
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
};
