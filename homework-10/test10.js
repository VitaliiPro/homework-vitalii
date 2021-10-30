function playSound(key) {
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    const Element = document.querySelector(`.key[data-key="${key}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    Element.classList.add('active');
  }
  const keys = document.querySelectorAll('.keys>div[data-key]');
  keys.forEach(key => {
    key.addEventListener('click', event => {
      playSound(event.currentTarget.dataset.key);
    })
    key.addEventListener('transitionend', event => {
      event.currentTarget.classList.remove('active');
    })
  })
  window.addEventListener('keydown', event => {
    playSound((event).keyCode);
  });