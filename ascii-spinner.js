function Spinner(el, type) {
  var currFrame = 0,
    spinner = [
      ['◐', '◓', '◑', '◒'],
      ['▁', '▃', '▄', '▅', '▆', '▇', '█'],
      ['▏', '▎', '▍', '▌', '▋', '▊', '▉']
    ]
  active = true,
  stopEvent = new Event('stop'),
	startEvent = new Event('start');

  el.addEventListener('stop', e => active = false, false);
	el.addEventListener('start', e => active = true, false);

  var _stop = function() {
    el.dispatchEvent(stopEvent)
  }

  var _start = function() {
    el.dispatchEvent(startEvent)
  }

  setInterval(() => {
    if (active) {
      currFrame = (currFrame + 1) % spinner[type].length;
      el.innerHTML = spinner[type][currFrame];
    } else return 0;
  }, 250);

  return {
    stop: _stop,
		start: _start
  }
};
