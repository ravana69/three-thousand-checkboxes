var n;
var p;
var x = 0;
var bool;
var checkThings;

$('input[type="checkbox"]').change(function() {
  clearInterval(checkThings);
  x = 0;
  var i = $(this).index()+1;
  var bool = $(this).prop('checked');
  checkThings = setInterval(function(){ 
    x++;
    p = i - x;
    n = i + x;
    $('input[type="checkbox"]:nth-child('+p+')').prop('checked',bool);
    $('input[type="checkbox"]:nth-child('+n+')').prop('checked',bool);
  }, 10);
});