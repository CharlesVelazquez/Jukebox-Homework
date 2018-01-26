Array.prototype.shuffle = function() {
    var input = this;
    for (var i = input.length-1; i >=0; i--) {
    	var randomIndex = Math.floor(Math.random()*(i+1)); 
   		var itemAtIndex = input[randomIndex]; 
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}     

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
function play_song(){
	 if (music.paused){
        music.play();
        play.style.backgroundImage = "url('images/Pause.png')"
    }
    else{
        music.pause();
        play.style.backgroundImage = "url('images/Play.png')"
    }
}

function reverse_song(){
	
	for (var i = list.length - 1; i >= 0; i--) {
		
		if (music.src == list[i]){
			if (i == 0){
				music.src = list[list.length - 1]
			}
			else{
				music.src = list[i-1];
			}
			play_song()
			break
		}
	}
}

function fastfoward_song () {
	
	for (var i = 0; i <= list.length - 1; i++) {
		if (music.src == list[i]){
			
			if (i == list.length - 1){
				
				music.src = list[0]
			}
			else{
				music.src = list[i+1];
			}
			play_song()
			break
		}
	}
}

function shuffle_song() {
	list.shuffle()
	music.src = list[0]
	music.play()
}