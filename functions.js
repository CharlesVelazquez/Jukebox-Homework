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

function play_song(){
	 if (music.paused){
        music.play();
        play.style.backgroundImage = "url('images/Pause.png')";
        for (var i = list.length - 1; i >= 0; i--) {
			if (music.src == list[i].src){
				now_playing.innerHTML = list[i].title
			}
		}
	}

    else{
        music.pause();
        play.style.backgroundImage = "url('images/Play.png')"
    }
}

function reverse_song(){
	
	for (var i = list.length - 1; i >= 0; i--) {
		
		if (music.src == list[i].src){
			if (i == 0){
				music.src = list[list.length - 1].src
			}
			else{
				music.src = list[i-1].src;
			}
			play_song()
			break
		}
	}
}

function fastfoward_song () {
	
	for (var i = 0; i <= list.length - 1; i++) {
		if (music.src == list[i].src){
			
			if (i == list.length - 1){
				
				music.src = list[0].src
			}
			else{
				music.src = list[i+1].src;
			}
			play_song()
			break
		}
	}
}

function shuffle_song() {
	list.shuffle()
	music.src = list[0].src
	music.play()
}