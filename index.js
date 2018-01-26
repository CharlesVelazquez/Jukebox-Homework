//Object that has the songs source
var songs = {
	song0: {
		title: "Fairy Tail Main Theme Piano ver.",
		src: "file:///C:/Users/charl/School/Homework/Jukebox/audio/FAIRYTAILMainThemePiano.mp3"
	},
	song1: {
		title: "Fairy Tail Slow Main Theme",
		src: "file:///C:/Users/charl/School/Homework/Jukebox/audio/FairyTailSlowversionMainTheme.mp3"
	},
	song2: {
		title: "Otouto Mitaina Sonzai Piano Solo",
		src: "file:///C:/Users/charl/School/Homework/Jukebox/audio/OtoutoMitainaSonzaiPianoSolo.mp3"
	},
	song3: {
		title: "Yuujin Akunwo Watashino Bansoushani Ninmeishimasu",
		src: "file:///C:/Users/charl/School/Homework/Jukebox/audio/YuujinAkunwoWatashinoBansoushaniNinmeishimasu.mp3"
	}
}
//Declaring all the variables I need
var music = document.getElementById('Music')//audio element
var play = document.getElementById('Play')
var reverse = document.getElementById('Reverse')
var fastfoward = document.getElementById('Fastfoward')
var shuffle = document.getElementById('Shuffle')
var now_playing = document.getElementById('song_title')
var list = [];

//for loop to put songs source in the array
for (var i = 0; i <= Object.keys(songs).length - 1; i++) {
	list[i] = songs['song' + i]}
//end of for loop

music.src = (list[0].src)//putting the first song in the audio element
now_playing.innerHTML = list[0].title//setting title
music.play()//start playing song
play.style.backgroundImage = "url('images/Pause.png')" //setting the picture to pause since I'm playing the song manually

//My listeners
music.addEventListener("ended", fastfoward_song)
play.addEventListener ("click", play_song)
reverse.addEventListener ("click", reverse_song)
fastfoward.addEventListener ("click", fastfoward_song)
shuffle.addEventListener ("click", shuffle_song)
