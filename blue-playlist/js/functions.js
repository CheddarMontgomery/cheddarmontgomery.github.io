/*
	When the bandcamp link is pressed, stop all propagation so AmplitudeJS doesn't
	play the song.
*/
let bandcampLinks = document.getElementsByClassName('bandcamp-link');

for( var i = 0; i < bandcampLinks.length; i++ ){
	bandcampLinks[i].addEventListener('click', function(e){
		e.stopPropagation();
	});
}


let songElements = document.getElementsByClassName('song');

for( var i = 0; i < songElements.length; i++ ){
	/*
		Ensure that on mouseover, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseover', function(){
		this.style.backgroundColor = '#00A0FF';

		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#FFFFFF';

		if( !this.classList.contains('amplitude-active-song-container') ){
			this.querySelectorAll('.play-button-container')[0].style.display = 'block';
		}

		this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'none';
		this.querySelectorAll('img.bandcamp-white')[0].style.display = 'block';
		this.querySelectorAll('.song-duration')[0].style.color = '#FFFFFF';
	});

	/*
		Ensure that on mouseout, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseout', function(){
		this.style.backgroundColor = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#272726';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#607D8B';
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
		this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'block';
		this.querySelectorAll('img.bandcamp-white')[0].style.display = 'none';
		this.querySelectorAll('.song-duration')[0].style.color = '#607D8B';
	});

	/*
		Show and hide the play button container on the song when the song is clicked.
	*/
	songElements[i].addEventListener('click', function(){
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
	});
}

/*
	Initializes AmplitudeJS
*/
Amplitude.init({
	continue_next: true,
	"songs": [
		{
			"name": "Bee-Knot-May (feat PIE PIE)",
			"artist": "Guys Who Do Space Shit ALL DAY",
			"album": "Makin Space my Bitch and YOU CAN TOO",
			"url": "https://420fatbeats.s3.amazonaws.com/U+beeknotmay.mp3",
			"cover_art_url": "https://media.giphy.com/media/3osxYlXBzR0Auajn5C/giphy.gif"
		},
		{
			"name": "Snoday4buttplay",
			"artist": "Pizza Chrustmas",
			"album": "Ask The Chef",
			"url": "https://420fatbeats.s3.amazonaws.com/snoday4buttplay.mp3",
			"cover_art_url": "../album-art/ask-the-dust.jpg"
		},
		{
			"name": "Back2me",
			"artist": "wayback2",
			"album": "3.141592",
			"url": "https://420fatbeats.s3.amazonaws.com/u+back2me.mp3",
			"cover_art_url": "https://media.giphy.com/media/l1J9BNjq8Flf4XM40/giphy-downsized-large.gif"
		},
		{
			"name": "Elvis Hot potato pants",
			"artist": "Jamba Scrimpt",
			"album": "The Best Pizza will Always be Made in Hell",
			"url": "https://420fatbeats.s3.amazonaws.com/uelvishotpotatopants.mp3",
			"cover_art_url": "https://media.giphy.com/media/xT0xeotcZR7nNrlTck/giphy.gif"
		},
		{
			"name": "u readyo",
			"artist": "All Tribes Called Chrust",
			"album": "Keep Your Ovens Warm, Brothers",
			"url": "https://420fatbeats.s3.amazonaws.com/u+readyo5.mp3",
			"cover_art_url": "https://media.giphy.com/media/l2JhHKpKbwQELFOmY/giphy.gif"
		},
		{
			"name": "Danke Bear 6mix",
			"artist": "ty bear",
			"album": "Locked my Keys in the Space Station",
			"url": "https://420fatbeats.s3.amazonaws.com/u+danke+bear+6+remix.mp3",
			"cover_art_url": "https://media.giphy.com/media/4a7sWil1NZoRWymHJp/giphy.gif"
		},
		{
			"name": "OOO EEE AAA",
			"artist": "Lizard with a Lazer Gun",
			"album": "There's More Where I Came From",
			"url": "https://420fatbeats.s3.amazonaws.com/u+ooo+eee+aaa.mp3",
			"cover_art_url": "https://media.giphy.com/media/jtd6dzbJuEGYnP9QWv/giphy-downsized-large.gif"
		},
		
{			"name": "operationDesignator",
			"artist": "MACHINES",
			"album": "ROBITS",
			"url": "https://420fatbeats.s3.amazonaws.com/U+OPERATIONDESIGNATOR4.mp3",
			"cover_art_url": "https://media.giphy.com/media/3o6Ztb45EYezY9x9gQ/giphy.gif"
		},
		{
			"name": "Nah",
			"artist": "Nuh Uh Uh, ty bear",
			"album": "Seriously No",
			"url": "https://420fatbeats.s3.amazonaws.com/u+danke+bear+3.mp3",
			"cover_art_url": "https://media.giphy.com/media/xThuWlT47FLpqr1giY/giphy.gif"
		},
		{
			"name": "Spaceships Don't Have Brakes",
			"artist": "Neither do Bears",
			"album": "Black Hole Hibernation",
			"url": "https://420fatbeats.s3.amazonaws.com/u+spaceshipsdon'thavebrakes+TRU.mp3",
			"cover_art_url": "https://media.giphy.com/media/xTiTnt0GGd5p3HpDBC/giphy.gif"
		},
		
	],
	
	"autoplay": true
});
