function Spinner(type, fn) {
  var frame = 0,
    spinnerType = [
      ['◐', '◓', '◑', '◒'],
      ['▁', '▃', '▄', '▅', '▆', '▇', '█'],
      ['▏', '▎', '▍', '▌', '▋', '▊', '▉']
    ],
    spinner = null;

  var _stop = () => {
    fn('')
    clearInterval(spinner);
    spinner = null;
  }

  var _start = () => {
    if (spinner) return 0;
    spinner = setInterval(() => {
      frame = (frame + 1) % spinnerType[type].length;
      fn(spinnerType[type][frame]);
    }, 250);
  }

  return {
    stop: _stop,
		start: _start
  };
};
