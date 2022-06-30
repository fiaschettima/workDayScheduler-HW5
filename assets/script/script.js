// Current Day in heading
var dateHeading = $('#currentDay');
todayIs = moment().format('LL');
dateHeading.text(todayIs);

// Text description area
var allTextarea = $('.description');
var currentHour = moment().format('H');
console.log(moment().hour());
console.log(currentHour);