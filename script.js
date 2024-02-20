let SongAudio = document.getElementById('SongAudio');
let SongAudioRange = document.getElementById('SongAudioRange');
let cntl = document.getElementById('cntl');

SongAudio.onloadedmetadata = function(){
    SongAudioRange.max = SongAudio.duration;
    SongAudioRange.value = SongAudio.currentTime;
}
cntl.addEventListener('click',(e)=>{
    console.log("Click");
    if(cntl.classList.contains('fa-play')){
        SongAudio.play();
        cntl.classList.remove('fa-play');
        cntl.classList.add('fa-pause');
    }
    else{
        SongAudio.pause();
        cntl.classList.remove('fa-pause');
        cntl.classList.add('fa-play');
    }
},false);
if(SongAudio.play()){
    setInterval(()=>{
        SongAudioRange.value = SongAudio.currentTime;  
    },500);
}
SongAudioRange.addEventListener('click',(e)=>{
    SongAudio.play();
    SongAudio.currentTime = SongAudioRange.value;
    cntl.classList.remove('fa-play');
    cntl.classList.add('fa-pause');
},false)
