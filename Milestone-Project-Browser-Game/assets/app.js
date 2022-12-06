// making some variables
const choices = document.getElementsById[
    "cardChoice1","cardChoice2-1",
    "cardChoice2","cardChoice2-2",
    "cardChoice3","cardChoice2-3",
    "cardChoice4","cardChoice2-4",
    "cardChoice5","cardChoice2-5"
];
var seconds = 00;
var centiseconds = 00;
var appendSeconds = document.getElementById('seconds')
var appendCentiseconds = document.getElementById('centiseconds')
var images = [
    { 
        img: '../images/ant1.jpg'
    },
    {
        img: '../images/Dolphin.png'
    },
    {
        img: '../images/Frog.png'
    },
    {
        img: '../images/Panda.png'
    },
    {
        img: '../images/Wolf.png'
    },

];
var clone = images.slice(0);
var cards = images.concat(clone);

function shuffle(o){
    for(var j, x, i=o.length; i; j = Math.floor(Math.random() * i), 
    x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
shuffle(cards);



//passing an img into to grid
