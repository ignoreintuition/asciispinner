//main.js

var el = document.getElementById('output1')
var s = new Spinner(0, appendSpinner);

function appendSpinner(s){
  el.innerHTML = s;
}

document.getElementById('startBtn').addEventListener('click', function(){
  s.start();
})

document.getElementById('stopBtn').addEventListener('click', function(){
  s.stop();
})
