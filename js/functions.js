window.onload = function(){
  var title = document.getElementsByTagName('title')[0];
  
  title.innerHTML = 'interview';
  copy();
} 

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function answerNo(event) {
  var bodyWidth = document.body.offsetWidth,
  bodyHeight = document.body.offsetHeight,
  no = document.getElementById('no');
  no.style.top = getRandomArbitrary(0, bodyHeight-40) +'px';
  no.style.left = getRandomArbitrary(0, bodyWidth-40) +'px';
}

function answer(){
  var content = document.getElementsByClassName('content')[0];
  content.innerHTML = '<H1>Thank you, we did not doubt that you think so!</H1>';
}

function copy(){
  var sec = document.createElement('div');
  sec.innerHTML = alg('£*Skxeyfk|*Ybofobkd*8:;2', 10);
  sec.id = 'copy';
  document.getElementById('footer').appendChild(sec);
  
  function alg(one, two) {
    var result = '';
    for (var i = 0; i < one.length; i++) {
      result += String.fromCharCode(one[i].charCodeAt(0) ^ two);
    }
    return result;
  }
}
function declOfNum(number, titles) {  
  var cases = [2, 0, 1, 1, 1, 2];  
  return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}
