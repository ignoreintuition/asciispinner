# Ascii Spinner

What a fabulous spinner. 

Ascii Spinner is a simple spinner that you can add to any application to indicate progress with very little overhead.  

How to use:

```JavaScript
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
```

Spinner object takes two parameters:

1st Parameter: Spinner type
* 0: round spinner
* 1: Vertical rectangular spinner
* 2: Horizontal rectangular spinner

2nd Parameter: function to pass the spinner

Once the spinner is created it can be toggled on and off using the start and stop function
