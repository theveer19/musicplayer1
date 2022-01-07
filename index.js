audio=document.getElementById('audio')
nextBtn=document.getElementById('next')
playBtn=document.getElementById('play')
prevBtn=document.getElementById('prev')
title=document.getElementById('title')


songs=['music1','music2','music3']


function loadsong(song){
    title.innerHTML=song
    audio.src='music/'+song+'.mp3'
}
i=2
loadsong(songs[i])
function playsong(){
    audio.play()

}
function pausesong(){
    audio.pause()
}

t=1
playBtn.addEventListener('click',()=>{
    if(t==1){
        playsong()
        t=0
    }
    else{
        pausesong()
        t=1
    }
})

function nextSong(){
    i++
    if(i>songs.length-1){
        i=0
    }

    loadsong(songs[i])
    audio.play()
}
nextBtn.addEventListener('click',nextSong)


function prevSong(){
    i--
    if(i<0){
        i=songs.length-1
    }
    loadsong(songs[i])
    audio.play()
}
prevBtn.addEventListener('click',prevSong)
