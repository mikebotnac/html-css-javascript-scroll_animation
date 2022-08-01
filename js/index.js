var screenh = window.innerHeight;
var toph = document.querySelector('.topDev').clientHeight;
var h = document.querySelector('.main').clientHeight;
var i = 0;
var y = toph;

function animation() {
  if (y > toph) { i = 1; }
  if (y>(toph-screenh) && y<=toph && i == 0) {
    document.getElementById('Cashew').style.top = `calc(40% - ${192 + 58 * (toph - y) / toph}px)`;
    document.getElementById('Cashew').style.transform = `rotate(${-90 + 90 * y / toph}deg)`;
    document.getElementById('Cheese2').style.top = `calc(40% - ${175 + 25 * (toph - y) / toph}px)`;
    document.getElementById('Cheese2').style.transform = `rotate(${-30 + 30 * y / toph}deg)`;
    document.getElementById('Cashew2').style.top = `calc(40% - ${85 + 25 * (toph - y) / toph}px)`;
    document.getElementById('Cracker').style.top = `calc(40% + ${53 + 17 * (toph - y) / toph}px)`;
    document.getElementById('Cracker').style.transform = `rotate(${90 - 90 * y / toph}deg)`;
    document.getElementById('Bread').style.top = `calc(40% + ${223 + 47 * (toph - y) / toph}px)`;
  }
  if (y > (toph-screenh)) {
    document.getElementById('Cashew').style.transition = "0.5s";
    document.getElementById('Cheese2').style.transition = "0.5s";
    document.getElementById('Cashew2').style.transition = "0.5s";
    document.getElementById('Cracker').style.transition = "0.5s";
    document.getElementById('Bread').style.transition = "0.5s";
  }
}

animation();

addEventListener('scroll', () => {
  y = window.scrollY;
  animation();
});
