$(document).ready(function(){
$("button").click(function(){
$.post("https://data.sparkfun.com/input/zDg6Lg5gnXiAjWYM97Rj?private_key=Yy1aM1A1ZzsqwWDbrY7w",
{
blink_count: $("#test").val()
},
function(data){
alert("Data: " + $("#test").val() + " sent to sparkfun");
});
});
});
