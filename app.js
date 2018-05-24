
var studyTopic;
var messages;
var colors = ["#f5a7ff", "#feffa0", "#b5ffaf", "#a6ddff", "#cb9aff" ];

var gifs = ['https://media2.giphy.com/media/KcmhtjgAAnuoM/200w.webp', 'https://media3.giphy.com/media/3ohc0WRlZ9YKJ8slpu/200w.webp', 'https://media0.giphy.com/media/htK5T83ptmn3G/200w.webp', 'https://media.giphy.com/media/mkZ78JB74isVO/giphy.gif', 'https://media.giphy.com/media/gxRtSPjkXgdR6/giphy.gif', 'https://media.giphy.com/media/11Im1l1hlDI1MI/giphy.gif', 'https://media.giphy.com/media/28dsTilfXThPa/giphy.gif', 'https://media.giphy.com/media/m2R4N23c1Y0Y8/giphy.gif', 'https://media.giphy.com/media/14vJZ6MnRvBaJa/giphy.gif','https://media.giphy.com/media/LHppJaeqcocmY/giphy.gif', 'https://media.giphy.com/media/Xoy7nxdABUOCQ/giphy.gif', 'https://media.giphy.com/media/uX4jVwE5tP35C/giphy.gif', 'https://media.giphy.com/media/dYDONC0npkCT6/giphy.gif', 'https://media.giphy.com/media/ryQDjtPSPfgeA/giphy.gif',	'https://media.giphy.com/media/tENMWKP1liXvO/giphy.gif', 'https://media.giphy.com/media/hqbVmiEpAhfhe/giphy.gif',	'https://media.giphy.com/media/KVlCVET2KEfrq/giphy.gif'
];

var backgroundColor = '#b5ffaf';
var gif;
var message;

var changeBackgroundColor = function() {
	backgroundColor = colors[Math.floor(Math.random()*colors.length)]
}

var changeGif = function() {
	gif = gifs[Math.floor(Math.random()*gifs.length)];
}

var changeMessage;

$('#reward-btn').click(function() {
	studyTopic = $('#study-topic')
	messages = [
		`you are so good at ${studyTopic.val()}`, 
		`you deserve a break from ${studyTopic.val()}! why not call nicole?`, 
		"you look really good today", 
		"you make the world a sunnier place", 
		`${studyTopic.val()} is dope and so are you`
		]
	changeMessage = function() {
		message = messages[Math.floor(Math.random()*messages.length)]
	}
	changeMessage()
	changeBackgroundColor()
	changeGif()
	if (studyTopic.val() == '') {
		$('#message').text('You need to do some study to get a reward!')
	} else {	
		$('#message').text(message)
		document.body.style.background = backgroundColor
		document.getElementById("gif").src = gif; 
	}
	
})

var path;

function onMouseDown(event) {
	// Create a new path and select it:
	path = new Path();
	path.strokeColor = '#00000';

	// Add a segment to the path where
	// you clicked:
	path.add(event.point);
}

function onMouseDrag(event) {
	// Every drag event, add a segment
	// to the path at the position of the mouse:
	path.add(event.point);
}

var squares = [ 228, 229, 230, 235, 236, 234, 258, 259, 260, 261, 262, 264, 265, 266, 267, 268,289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 352, 353, 354, 355, 356, 357, 358, 359, 360, 384, 385, 386, 387, 388, 389, 390, 416, 417, 418, 419, 420, 448, 449, 450, 480]
for (var i = 0; i < 961; i++) {
	if ( squares.includes(i)) {
		$("<div>").addClass("square").addClass("heart").appendTo('.container');
	} else {
		$("<div>").addClass("square").appendTo('.container');
	}
}
$('.square').mouseover(function() {
		$(this).addClass('clicked')
});

$('.heart').mouseover(function() {
	$(this).css('background', 'red')
});






