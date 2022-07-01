// Current Day in heading
var dateHeading = $('#currentDay');
var todayIs = moment().format('LLLL');
dateHeading.text(todayIs);

// Text description area
var allTextarea = $('.description');

var currentHour = moment().format('H');

// var currentHour = moment().set('hour' ,10);
var hourBlock = $('time');

var btn9 = $('#btn1');
var btn10 = $('#btn2');
var btn11 = $('#btn3');
var btn12 = $('#btn4');
var btn1 = $('#btn5');
var btn2 = $('#btn6');
var btn3 = $('#btn7');
var btn4 = $('#btn8');
var btn5 = $('#btn9');
// Text area color changing 
var text9 = $('#text9am');
var text10 = $('#text10am');
var text11 = $('#text11am');
var text12 = $('#text12pm');
var text1 = $('#text1pm');
var text2 = $('#text2pm');
var text3 = $('#text3pm');
var text4 = $('#text4pm');
var text5 = $('#text5pm');

function checkTime(time, textContainer){
    if(time>currentHour){
        textContainer.addClass('future')
    }else if (time<currentHour){
        textContainer.addClass('past')
    }else{textContainer.addClass('present')}
};
checkTime(9, text9)
checkTime(10, text10)
checkTime(11, text11)
checkTime(12, text12)
checkTime(13, text1)
checkTime(14, text2)
checkTime(15, text3)
checkTime(16, text4)
checkTime(17, text5)


$('.btn').on('click', function(event){
    // event.stopPropagation();
    var targetButton =event.target;
    var savedContent = $(this).siblings('textarea').val()
    console.log(targetButton);
    localStorage.setItem(targetButton.id, savedContent)
})

function initializeTasks(){

}