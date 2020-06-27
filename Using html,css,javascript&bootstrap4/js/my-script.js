var a = document.getElementById('redbutton');
a.onclick = function () {
    var div = document.getElementById('div-one');
    div.style.backgroundColor='red';

};

var b = document.getElementById('greenbutton');
b.onclick = function () {
var div2 = document.getElementById('div-one');
div2.style.backgroundColor = "green";
};
 var c = document.getElementById('bluebutton');
 c.onclick = function () {
    var div3 = document.getElementById('div-one');
    div3.style.backgroundColor = 'blue';
 };

 var d = document.getElementById('orangebutton');
 d.onclick = function () {
var div4 = document.getElementById('div-one');
div4.style.backgroundColor = 'orange';
 };

var g = document.getElementById('defaultbutton');
g.onclick = function () {
    var div7 = document.getElementById('div-one');
    div7.className = 'lol2';
};




 var f = document.getElementById('redbutton2');
 f.onmouseover = function () {
  var div6 = document.getElementById('div-two');
  div6.className = 'class-one';
 };

 var g = document.getElementById('greenbutton2');
 g.onmouseover = function () {
   var div7 = document.getElementById('div-two');
   div7.className = 'class-two';
 };

var g = document.getElementById('bluebutton2');
g.onmouseover = function () {
    var div7 = document.getElementById('div-two');
    div7.className = 'class-three';
};

var g = document.getElementById('orangebutton2');
g.onmouseover = function () {
    var div7 = document.getElementById('div-two');
    div7.className = 'class-four';
};

var g = document.getElementById('defaultbutton2');
g.onmouseover = function () {
    var div7 = document.getElementById('div-two');
    div7.className = 'lol';
};
