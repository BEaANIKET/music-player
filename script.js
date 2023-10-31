
// initllise the varible


let audioElement = new Audio('song/7.mp3');
// audioElement.play();
// let ganna=new Audio('song/1.mp3');

let index=1;
let masterPlay=document.getElementById('masterPlay');
let myPrograssBar=document.getElementById('myProgressbar');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let songNameidx=document.getElementById('songName');
// let playSongButtom=;

let songs = [
    {songName: "Tere Hawaale Laal Singh Chaddha", filePath: "song/1.mp3", coverPath: "cover/covers1.jpg"},
    {songName: "JAWAN: Chaleya (Hindi) ", filePath: "song/2.mp3", coverPath: "cover/covers2.jpg"},
    {songName: "MOVIE: Dhokha Song ", filePath: "song/3.mp3", coverPath: "cover/covers3.jpg"},
    {songName: "Phir Aur Kya Chahiye", filePath: "song/4.mp3", coverPath: "cover/covers4.jpg"},
    {songName: "despicito somg mp3", filePath: "song/5.mp3", coverPath: "cover/covers5.jpg"},
    {songName: "Dhundhala Mp3 Talwiinder", filePath: "song/6.mp3", coverPath: "cover/covers6.jpg"},
    {songName: "Barish Me Tum Mp3", filePath: "song/7.mp3", coverPath: "cover/covers7.jpg"},
    {songName: "BTS - Dynamite 320- Mp3 ", filePath: "song/8.mp3", coverPath: "cover/covers8.jpg"},
    {songName: "Baby Calm Down Mp3 Rema ", filePath: "song/9.mp3", coverPath: "cover/covers9.jpg"},
    {songName: "Sigma Rule Mp3 Dior ", filePath: "song/10.mp3", coverPath: "cover/covers10.jpg"},
    
]

songItem.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByTagName("span")[0].innerText=songs[i].songName;
})

// play pause using playbottom

// handle Play/Pause;

masterPlay.addEventListener('click',()=>{
    
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
            gif.style.opacity=1;

        }
        else{
            audioElement.pause();
            masterPlay.classList.remove('fa-pause');
            masterPlay.classList.add('fa-play');
            gif.style.opacity=0;
            makeAllPlay();
        }
    
})
// listen to Event;

audioElement.addEventListener('timeupdate',()=>{
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myPrograssBar.value =progress;
})

myPrograssBar.addEventListener('change',()=>{
    audioElement.currentTime=(myPrograssBar.value*audioElement.duration )/100;
})

const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause');
            element.classList.add('fa-play');  
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click',(e) =>{
        if(audioElement.paused && audioElement.currentTime<=0){
            console.log("Int first condtion");
            makeAllPlay();
            index=parseInt(e.target.id);
            console.log(index);
            audioElement.src=`song/${index}.mp3`;
            songNameidx.innerText=songs[index-1].songName;
            audioElement.currentTime=0;
            e.target.classList.remove('fa-play');
            e.target.classList.add('fa-pause');
            audioElement.play();
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
            gif.style.opacity=1;
        }
        else if(audioElement.paused && audioElement.currentTime>0){
            console.log("Int secong condtion");
            console.log(index,parseInt(e.target.id));
            if(index==parseInt(e.target.id)){
                e.target.classList.remove('fa-play');
                e.target.classList.add('fa-pause');
                songNameidx.innerText=songs[index-1].songName;
                audioElement.play();
                masterPlay.classList.remove('fa-play');
                masterPlay.classList.add('fa-pause');
                gif.style.opacity=1;
            }
            else{
                
                makeAllPlay();
                index=parseInt(e.target.id);
                audioElement.src=`song/${index}.mp3`;
                e.target.classList.remove('fa-play');
                e.target.classList.add('fa-pause');
                songNameidx.innerText=songs[index-1].songName;
                audioElement.play();
                masterPlay.classList.remove('fa-play');
                masterPlay.classList.add('fa-pause');
                gif.style.opacity=1;
            }

        }

        else if(audioElement.played){
            if(index!=parseInt(e.target.id)){
                makeAllPlay();
                e.target.classList.remove('fa-play');
                e.target.classList.add('fa-pause');
                index=parseInt(e.target.id);
                audioElement.src=`song/${index}.mp3`;
                songNameidx.innerText=songs[index-1].songName;
                audioElement.play();
            }
            else{
                console.log("Int else condtion");
                e.target.classList.remove('fa-pause');
                e.target.classList.add('fa-play');
                audioElement.pause();
                masterPlay.classList.remove('fa-pause');
                masterPlay.classList.add('fa-play');
                gif.style.opacity=0;
            }
        }
       
            
    })
})

document.getElementById('previous').addEventListener('click',()=>{
    console.log("hello");
    if(index==1){
        index=10;
    }
    else{
        index-=1;
    }
    audioElement.src=`song/${index}.mp3`;
    songNameidx.innerText=songs[index-1].songName;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity=1;
})
document.getElementById('forward').addEventListener('click',()=>{
    console.log("hello");
    if(index==10){
        index=1;
    }
    else{
        index+=1;
    }
    audioElement.src=`song/${index}.mp3`;
    songNameidx.innerText=songs[index-1].songName;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity=1;
}) 