// Current Day in heading
var dateHeading = $('#currentDay');
var todayIs = moment().format('LL');
dateHeading.text(todayIs);

// Text description area
var allTextarea = $('.description');
var currentHour = moment().format('H');
// var currentHour = moment().set('hour' ,10);
var hourBlock = $('time');
// console.log(hourBlock);
// console.log(currentHour);
// console.log(hourBlock[0].dateTime);
console.log(currentHour)
for(let i = 0; i< hourBlock.length; i++){
  
    console.log(hourBlock[i].dateTime);
    if(hourBlock[i].dateTime > currentHour){
        allTextarea.addClass('future')
    }
    if(hourBlock[i].dateTime < currentHour){
        allTextarea.addClass('past')
    }
    if(hourBlock[i].dateTime == currentHour){
        allTextarea.addClass('present')
    }
};

var btn9 = $('#btn1');
var btn10 = $('#btn1');
var btn11 = $('#btn1');
var btn12 = $('#btn1');
var btn1 = $('#btn1');
var btn12 = $('#btn1');
var btn3 = $('#btn1');
var btn4 = $('#btn1');
var btn5 = $('#btn1');

$('.container').on('click', function(event){
    event.stopPropagation();
    var targetButton =event.target;
    console.log(targetButton);
    localStorage.setItem(targetButton.id, targetButton.value)
})
