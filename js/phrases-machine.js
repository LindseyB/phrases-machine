var phrases = [
	{ english: "A Piece of Cake", translation: "It is a simple task", difficulty: 7 },
	{ english: "A Chip on Your Shoulder", translation: "Your shoulders on the chip", difficulty: 5 },
	{ english: "A Dime a Dozen", translation: "10 cent coin 1 dozen", difficulty: 5 },
	{ english: "An Arm and a Leg", translation: "Arms and legs", difficulty: 8 },
	{ english: "A Fool and His Money are Soon Parted", translation: "As soon as a fool's gold is to say goodbye", difficulty: 8},
	{ english: "All Greek To Me", translation: "I in all Greece", difficulty: 3 },
	{ english: "Back to Square One", translation: "start over from the beginning", difficulty: 3 },
	{ english: "Back To the Drawing Board", translation: "Back drawing board-to-", difficulty: 1 },
	{ english: "Barking Up The Wrong Tree", translation: "Wrong is barking up a tree.", difficulty: 2 },
	{ english: "Beating Around the Bush", translation: "Abundant talent", difficulty: 10 },
	{ english: "Beating a Dead Horse", translation: "I hit a Dead Horse", difficulty: 2 },
	{ english: "Between a Rock and a Hard Place", translation: "The Rock and the hard place of between", difficulty: 1 },
	{ english: "Burst Your Bubble", translation: "I break your dreams", difficulty: 9 },
	{ english: "Birds of a Feather Flock Together", translation: "Birds of a feather gathering", difficulty: 3 },
	{ english: "Close But No Cigar", translation: "Close However anyone cigar", difficulty: 5 },
	{ english: "Cup Of Joe", translation: "Joe's Cup", difficulty: 2 },
	{ english: "Curiosity Killed The Cat", translation: "Curiosity that caused the problem - curiosity becomes the basis for the problem.", difficulty: 8 },
	{ english: "Cry Over Spilt Milk", translation: "That's going to come back to haunt those who mourn.", difficulty: 9 },
	{ english: "Cut To The Chase", translation: "I go down to business", difficulty: 7 },
	{ english: "Don't Count Your Chickens Before They Hatch", translation: "They are in front of the hatching of chicks don't count", difficulty: 7 },
	{ english: "Down To The Wire", translation: "And down the wire", difficulty: 2 },
	{ english: "Dropping Like Flies", translation: "As the flies drop-", difficulty: 5 },
	{ english: "Drive Me Nuts", translation: "I drive the nut", difficulty: 5 },
	{ english: "Don't Look a Gift Horse In The Mouth", translation: "Gift of mouth do not look at a horse", difficulty: 4 },
	{ english: "Drawing a Blank", translation: "An empty Draw", difficulty: 3 },
	{ english: "Down To Earth", translation: "It is sensible", difficulty: 10 },
	{ english: "Down For The Count", translation: "Down and a count", difficulty: 4 },
	{ english: "Down And Out", translation: "Been knocked down", difficulty: 6 },
	{ english: "Every Cloud Has a Silver Lining", translation: "All clouds have a silver lining", difficulty: 1 },
	{ english: "Everything But The Kitchen Sink", translation: "All kitchen sinks", difficulty: 5 },
	{ english: "Easy As Pie", translation: "Easy as a pie chart", difficulty: 1 },
	{ english: "Eat My Hat", translation: "I am eating hat", difficulty: 2 },
	{ english: "Elephant in the Room", translation: "like an elephant in the Room - it has a serious problem - despite the fact that they make it easier for you to take from or the other if that is good or not to do things that you want to ignore", difficulty: 2 },
	{ english: "Flea Market", translation: "City of Fleas", difficulty: 5 },
	{ english: "Foaming At The Mouth", translation: "Blew bubbles from the mouth", difficulty: 5 },
	{ english: "Fool's Gold", translation: "Pyrite", difficulty: 2 },
	{ english: "Fish Out Of Water", translation: "The fish out of the water", difficulty: 2 },
	{ english: "Fit as a Fiddle", translation: "I was very energetic", difficulty: 10 },
	{ english: "Go For Broke", translation: "For bankruptcy", difficulty: 5 },
	{ english: "Go Out On a Limb", translation: "And went out on a limb", difficulty: 2 },
	{ english: "Goody Two-Shoes", translation: "Two goody-Shoes", difficulty: 2 },
	{ english: "Greased Lightning", translation: "Lightning oiled", difficulty: 4 },
	{ english: "Give a Man a Fish", translation: "Give the person who fish", difficulty: 5 },
	{ english: "Hands Down", translation: "By far", difficulty: 9 },
	{ english: "Happy as a Clam", translation: "Very happy", difficulty: 10 },
	{ english: "Head Over Heels", translation: "upside down", difficulty: 9 },
	{ english: "Heads Up", translation: "Looked up", difficulty: 5 },
	{ english: "Hear Hear", translation: "Heard", difficulty: 9 },
	{ english: "High And Dry", translation: "being stranded on the shore", difficulty: 10 },
	{ english: "Hard Pill to Swallow", translation: "Swallow the difficult pill", difficulty: 2 },
	{ english: "Hit Below The Belt", translation: "Attacking below the belt", difficulty: 2 },
	{ english: "I Smell a Rat", translation: "I have to smell the rat", difficulty: 4 },
	{ english: "It's Not All It's Cracked Up To Be", translation: "It is not at all of it has entered the up crack for", difficulty: 8 },
	{ english: "If You Can't Stand the Heat - Get Out of the Kitchen", translation: "If you do not stand the heat - it is out of the kitchen", difficulty: 5 },
	{ english: "It's Not Brain Surgery", translation: "It's up to the brain surgery is not in", difficulty: 8 },
	{ english: "In the Red", translation: "The deficit", difficulty: 10 },
	{ english: "In a Pickle", translation: "In pickles", difficulty: 2 },
	{ english: "Jaws of Life", translation: "between teeth life", difficulty: 5 },
	{ english: "Jig Is Up", translation: "It's over", difficulty: 10 },
	{ english: "Jack of All Trades Master of None", translation: "No guru Jack of all transactions", difficulty: 8 },
	{ english: "Jumping the Gun", translation: "Start incorrectly can cause", difficulty: 10 },
	{ english: "Keep Your Shirt On", translation: "I keep the top of the shirt", difficulty: 8 },
	{ english: "Keep On Truckin'", translation: "I continue tracking", difficulty: 9 },
	{ english: "Keep Your Eyes Peeled", translation: "Peeled and keep your eye", difficulty: 5 },
	{ english: "Knock Your Socks Off", translation: "Knock your socks", difficulty: 3 },
	{ english: "Know the Ropes", translation: "Hang you know", difficulty: 9 },
	{ english: "Knuckle Down", translation: "Down knuckle", difficulty: 1 },
	{ english: "Like Father Like Son", translation: "The frogs like son - the son is a resemblance to the parent", difficulty: 5 },
	{ english: "Let Her Rip", translation: "She let rip", difficulty: 7 },
	{ english: "Lickety Split", translation: "Provides full speed power split", difficulty: 9 },
	{ english: "Long In The Tooth", translation: "The length of the teeth", difficulty: 5 },
	{ english: "Lovey Dovey", translation: "lovey Love love", difficulty: 8 },
	{ english: "Money Doesn't Grow On Trees", translation: "money growth in the tree does not have", difficulty: 5 },
	{ english: "Man of Few Words", translation: "Some of the men of the word", difficulty: 6 },
	{ english: "Mountain Out of a Molehill", translation: "Among the mountain of molehill", difficulty: 5 },
	{ english: "My Cup of Tea", translation: "My tea cup", difficulty: 5 },
	{ english: "No Ifs - Ands - or Buts", translation: "The Ifs Ands - or doesn't work", difficulty: 5 },
	{ english: "Needle In a Haystack", translation: "Needle in the Hay", difficulty: 3 },
	{ english: "No-Brainer", translation: "Anyone do not have to come up with likely", difficulty: 9 },
	{ english: "No Questions Asked", translation: "No I was asked questions", difficulty: 7 },
	{ english: "Not My Cup of Tea", translation: "No tea my cup", difficulty: 6 },
	{ english: "Not the Sharpest Tool in the Shed", translation: "In one of the huts in the sharpest tool does not have", difficulty: 5 },
	{ english: "Neck and Neck", translation: "In the tight race", difficulty: 4 },
	{ english: "On Cloud Nine", translation: "Dreams in heaven", difficulty: 9 },
	{ english: "Off One's Base", translation: "One of the base off", difficulty: 8 },
	{ english: "Old One-Two", translation: "Old 1-2 finish", difficulty: 7 },
	{ english: "On the Ropes", translation: "In ropes", difficulty: 6 },
	{ english: "Plot Thickens", translation: "The plot thickened", difficulty: 1 },
	{ english: "Playing Possum", translation: "Play the possum", difficulty: 1 },
	{ english: "Poke Fun At", translation: "I poke fun", difficulty: 2 },
	{ english: "Put a Sock In It", translation: "Put the socks", difficulty: 4 },
	{ english: "Par For the Course", translation: "Of course for permission", difficulty: 10 },
	{ english: "Photo Finish", translation: "Photo finishing", difficulty: 1 },
	{ english: "Quick On the Draw", translation: "Quick draw", difficulty: 2 },
	{ english: "Quality Time", translation: "Dense time - work to devote to busy parents of their children is less quality time", difficulty: 9 },
	{ english: "Ride Him Cowboy!", translation: "He will ride cowboy!", difficulty: 5 },
	{ english: "Raining Cats and Dogs", translation: "Cats and dogs raining", difficulty: 2 },
	{ english: "Read 'Em and Weep", translation: "Read Em burst into tears", difficulty: 3 },
	{ english: "Right Off the Bat", translation: "In the bat right off", difficulty: 3 },
	{ english: "Roll With the Punches", translation: "punch and the role", difficulty: 6 },
	{ english: "Ring Any Bells?", translation: "All the bell ring?", difficulty: 7 },
	{ english: "Right Out of the Gate", translation: "As soon as the gate", difficulty: 8 },
	{ english: "Ships Passing In the Night", translation: "Over night ship", difficulty: 9 },
	{ english: "Scot-free", translation: "Acquitted", difficulty: 10 },
	{ english: "Son of a Gun", translation: "Hard nut to crack", difficulty: 10 },
	{ english: "Shot In the Dark", translation: "Guesswork", difficulty: 10 },
	{ english: "Swinging For the Fences", translation: "The swing for the fence", difficulty: 1 },
	{ english: "Talk the Talk", translation: "Talk Talk", difficulty: 2 },
	{ english: "Top Drawer", translation: "Highest peak", difficulty: 10 },
	{ english: "Tough It Out", translation: "Out it tough", difficulty: 2 },
	{ english: "Two Down - One to Go", translation: "Two down - move to 1", difficulty: 3 },
	{ english: "There's No I in Team", translation: "It is not in the team?", difficulty: 8 },
	{ english: "Under Your Nose", translation: "The bottom of your nose", difficulty: 6 },
	{ english: "Under the Weather", translation: "The climate is not easy - and the palace color", difficulty: 9 },
	{ english: "Up In Arms", translation: "Ready to battle", difficulty: 7 },
	{ english: "When the Rubber Hits the Road", translation: "When you move the rubber", difficulty: 7 },
	{ english: "Wake Up Call", translation: "Morning Call", difficulty: 4 },
	{ english: "What Goes Up Must Come Down", translation: "What does it come down to rise", difficulty: 9 },
	{ english: "Wild Goose Chase", translation: "wild geese chase", difficulty: 1 },
	{ english: "Wouldn't Harm a Fly", translation: "I don't think you want to fly toward him was", difficulty: 9 },
	{ english: "What Am I - Chopped Liver?", translation: "I am certain chopped liver?", difficulty: 3 },
	{ english: "Yadda Yadda", translation: "Cooing", difficulty: 10 },
	{ english: "You Can't Teach an Old Dog New Tricks", translation: "teach an old dog new tricks is that you can do not", difficulty: 3 },
	{ english: "You Can't Judge a Book By Its Cover",  translation: "You can not judge the book from its packaging", difficulty: 4 }
];

var points = 0;
var hints = 3;
var difficulty;
var phrase;

$("h1").fitText(1, { maxFontSize: '90px' });

$("input[type='submit']").click(function(){
	check_guess();
});

$("input[type='button']").click(function(){
	if(hints > 0){
		hints--;
		difficulty -= (Math.floor(phrase.difficulty/3) + 1);

		if(difficulty <= 0) { difficulty = 1; }

		$('#difficulty').text(difficulty);
		$('#hints-display').text(hints);

		var letters = _.sample($('input:not([type="submit"]):not([type="button"]):not([disabled])'), phrase.english.length/3);
		_.each(letters, function(letter){
			$(letter).val(phrase.english.charAt($(letter).data('index')));
			letter.disabled = true;
		});
	}
});

function setNewPhrase() {
	phrase = _.sample(phrases);
	difficulty = phrase.difficulty;
	hints = 3;

	$('h2').text(phrase.translation);
	$('#difficulty').text(phrase.difficulty);
	$('#hints-display').text(hints);
	$("#main").text("");

	_.each(phrase.english, function(chr, index){
		var input = document.createElement("input");
		$(input).attr("maxlength", '1');
		$(input).data("index", index);

		if (/[^\w]/.test(chr)) {
			input.value = chr;
			input.disabled = true;
		}
		$("#main").append(input);
	});

	$("input").first().focus();

	$('input:not([type="submit"]):not([type="button"])').keydown(function(e) {
		if (e.which == 8) { // backspace
			$(this).val("");
			var element = $(this).prev('input');
			while (element.prop('disabled')) {
				element = element.prev('input');
			}
			element.focus();
			$(element).val("");
		} else if (e.which == 13) { // enter
			check_guess();
		} else {
			// push to next element
			$(this).val(String.fromCharCode(e.which));
			var element = $(this).next('input');
			while (element.prop('disabled')) {
				element = element.next('input');
			}
			element.focus();
		}

		return false;
	});

	$('input:not([type="submit"]):not([type="button"])').on('click', function() {
	    this.value = '';
	});
}

function check_guess() {
	var solved = true;
	$('input:not([type="submit"]):not([type="button"])').each(function(index){

		if (index == phrase.english.length) { return; }

		if(this.value.toLowerCase() == phrase.english.charAt(index).toLowerCase()) {
			this.disabled = true;
		} else {
			solved = false;
		}
	});

	if(solved) {
		points += phrase.difficulty;
		$('#score-display').text(points);
		setNewPhrase();
	}
}

setNewPhrase();



