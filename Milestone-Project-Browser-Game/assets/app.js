// making some variables
let choices = document.getElementById['container'];
var currentPair =[];
var winCount = 0;
var seconds = 00;
var centiseconds = 00;
var appendSeconds = document.getElementById('seconds')
var appendCentiseconds = document.getElementById('centiseconds')
var images = [];
var clone = images.slice(0);
var cards = images.concat(clone);

function shuffle(o){
    for(var j, x, i=o.length; i; j = Math.floor(Math.random() * i), 
    x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
shuffle(cards);

for (var i =0; i<cards.length; i++) {
    card =document.createElement('div');
    card.dataset.item = cards[i];
    card.dataset.view = 'card';
    choices.appendChild();

    card.onclick = function () {
        if (this.className != 'flipped' && this.className != 'correct') {
            this.className = 'flipped';
            var result = this.dataset.item;
            resultsArray.push(result);
            clearTimer(timerStart)
            timerStart = setInterval(setTimer, 10);
        }

        if (currentPair.length > 1) {
            if (currentPair[0] === currentPair[1]) {
                checkChoice('correct')
                winCount ++;
                win();
                currentPair = [];
            } else {
                check('reverse');
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

var winCount = function () {
    if(winCount === 5) {
        clearTimer(timerStart);
        Text.innerHTML = 'You finished in' + seconds + ':' + centiseconds;
    }
}

function startTimer () {
    centiseconds++; 
      
    if(centiseconds < 9){
      appendCentiseconds.innerHTML = "0" + centiseconds;
    }
      
    if (centiseconds > 9){
      appendCentiseconds.innerHTML = centiseconds;
        
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


//passing an img into to grid
