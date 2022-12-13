// making some variables
let choices = document.getElementById('container');
var currentPair =[];
var winCount = 0;
var seconds = 00;
var tens = 00;
var Interval ;
var appendSeconds = document.getElementById('seconds')
var appendTens = document.getElementById('tens')
var images = ['./images/ant1.jpg','./images/Dolphin.png','./images/Snake.png','./images/ant1.jpg','./images/ant1.jpg'];
var clone = images.slice(0);
var cards = images.concat(clone);

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
shuffle(cards);

for (var i =0; i<cards.length; i++) {
    card = document.createElement('div');
    card.dataset.item = cards[i];
    card.dataset.view = 'card';
    choices.appendChild(card);

    card.onclick = function () {
        if (this.className != 'flipped' && this.className != 'correct') {
            this.className = 'flipped';
            var result = this.dataset.item;
            currentPair.push(result);
            clearInterval(Interval)
            Interval = setInterval(startTimer, 10);
        }

        if (currentPair.length > 1) {
            if (currentPair[0] === currentPair[1]) {
                checkChoice('correct')
                winCount ++;
                win();
                currentPair = [];
            } else {
                checkChoice('reverse');
                currentPair = [];
            } 

        }
    }
};

var checkChoice = function(className) {
    var x = document.getElementsByClassName('flipped')
    setTimeout(function(){
        for(var i = (x.length -1); i >= 0; i--){
            x[i].className = className;
        }
    },1000);
}

var win = function () {
    if(winCount === 5) {
        clearInterval(Interval);
        Text.innerHTML = 'You finished in' + seconds + ':' + tens;
    }
}

function startTimer () {
    tens++; 
      
    if(tens < 9){
      appendTens.innerHTML = "0" + tens;
    }
      
    if (tens > 9){
      appendTens.innerHTML = tens;
        
    } 
      
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
      
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
    
  }



