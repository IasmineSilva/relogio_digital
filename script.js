function clock(){
  var h = new Date().getHours().toString().padStart(2, '0');
  var m = new Date().getMinutes().toString().padStart(2, '0');
  var s = new Date().getSeconds().toString().padStart(2, '0');

  document.getElementById("hour").innerHTML = h;
  document.getElementById("minutes").innerHTML = m;
  document.getElementById("seconds").innerHTML = s;
}

var interval = setInterval(clock, 1000);
