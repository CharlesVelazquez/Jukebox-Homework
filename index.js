var songs = {
	song0: {
		title: "test",
		src: "file:///C:/Users/charl/School/Homework/Jukebox/audio/FAIRYTAILMainThemePiano.mp3"
	},
	song1: {
		title: {},
		src: "file:///C:/Users/charl/School/Homework/Jukebox/audio/FairyTailSlowversionMainTheme.mp3"
	},
	song2: {
		title: {},
		src: "file:///C:/Users/charl/School/Homework/Jukebox/audio/OtoutoMitainaSonzaiPianoSolo.mp3"
	},
	song3: {
		title: {},
		src: "file:///C:/Users/charl/School/Homework/Jukebox/audio/YuujinAkunwoWatashinoBansoushaniNinmeishimasu.mp3"
	}
}

var list = [];

for (var i = 0; i <= Object.keys(songs).length - 1; i++) {
	console.log(i)
	list[i] = songs['song' + i]['src']
}

console.log (list)

var play = document.getElementById('Play')
var reverse = document.getElementById('Reverse')
var fastfoward = document.getElementById('Fastfoward')
var shuffle = document.getElementById('Shuffle')

var music = document.getElementById('Music')
music.src = (songs.song0.src)
play.addEventListener ("click", function (){
	 if (music.paused){
        music.play();
        play.style.backgroundImage = "url('images/Pause.png')"
    }
    else{
        music.pause();
        play.style.backgroundImage = "url('images/Play.png')"
    }
})

reverse.addEventListener ("click", function (){
	for (var i = list.length - 1; i >= 0; i--) {
		console.log (i)
		if (music.src == list[i]){
			if (i == 0){
				console.log('if ' + i)
				music.src = list[list.length - 1]
				if (music.play){
				play.dispatchEvent(mouse_click)
				}
			}
			else{
				if (music.play) {
					play.dispatchEvent(mouse_click)
				}
				console.log('else')
				music.src = list[i-1]
				play.dispatchEvent(mouse_click)
				break
			}
		}
	}

})

shuffle.addEventListener ("click", function (){

})

 function progressBar() { 
                var music = document.getElementById('Music'); 
                //get current time in seconds
                var elapsedTime = Math.round(music.currentTime);
                //update the progress bar
                if (canvas.getContext) {
                    var ctx = canvas.getContext("2d");
                    //clear canvas before painting
                    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
                    ctx.fillStyle = "rgb(255,0,0)";
                    var fWidth = (elapsedTime / music.duration) * (canvas.clientWidth);
                    if (fWidth > 0) {
                        ctx.fillRect(0, 0, fWidth, canvas.clientHeight);
                    }
                }
            }

music.addEventListener("timeupdate", progressBar, true);
music.play()
var mouse_click = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });
music.addEventListener("ended", evoke_fastfoward)
function evoke_fastfoward(){
	console.log('executed')
	//fastfoward.dispatchEvent(mouse_click)
}

fastfoward.addEventListener ("click", function (){
	for (var i = 0; i <= list.length - 1; i++) {
		console.log (i)
		if (music.src == list[i]){
			if (i == list.length - 1){
				console.log('if ' + i)
				music.src = list[0]
				if (music.pause){
					console.log('music if');
					play.dispatchEvent(mouse_click)
				}
				console.log('2nd if')
			}
			else{
				if (music.pause) {
					console.log('music else');
					play.dispatchEvent(mouse_click)
				}
			console.log('else');
			music.src = list[i+1];
			play.dispatchEvent(mouse_click);
			break
			}
		}
	}
})