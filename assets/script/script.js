// Current Day in heading
var dateHeading = $('#currentDay');
todayIs = moment().format('LL');
dateHeading.text(todayIs);

// Text description area
var allTextarea = $('.description');
var currentHour = moment().format('H');
var hourBlock = $('time');
// console.log(hourBlock);
// console.log(currentHour);
// console.log(hourBlock[0].dateTime);

for(let i = 0; i< hourBlock.length; i++){
  
    console.log(hourBlock[i].dateTime);
    if(hourBlock[i].dateTime === currentHour){
        allTextarea.addClass('present')
    }
    if(hourBlock[i].dateTime > currentHour){
        allTextarea.addClass('future')
    }
    if(hourBlock[i].dateTime < currentHour){
        allTextarea.addClass('past')
    }
}
