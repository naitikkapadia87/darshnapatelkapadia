$('#example').countdown({
    date: '12/23/2020 00:00:00'
    // date: '11/20/2020 00:00:00'
}, function () {
    // alert('Merry Christmas!');
    var marriedIndicator = 'images/laurel-5.png';
    if($('#married-status').attr('src') === marriedIndicator){
    	return;
    }

    $('#married-status').attr('src', marriedIndicator);
});