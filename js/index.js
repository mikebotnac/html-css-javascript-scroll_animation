var i = 0;
var h = document.body.scrollHeight;
addEventListener('scroll', () => {
  var y = window.scrollY;
  if (y == 908) { i = 1 }
  if (i == 0) {
    document.getElementById('Cashew').style.top = `calc(40% - ${334 - 140 * y / h}px)`;
    document.getElementById('Cashew').style.transform = `rotate(${-90 + 90 * y / h}deg)`;
    document.getElementById('Cheese2').style.top = `calc(40% - ${218 - 40 * y / h}px)`;
    document.getElementById('Cheese2').style.transform = `rotate(${-30 + 30 * y / h}deg)`;
    document.getElementById('Cashew2').style.top = `calc(40% - ${137 - 55 * y / h}px)`;
    document.getElementById('Cracker').style.top = `calc(40% + ${152 - 100 * y / h}px)`;
    document.getElementById('Cracker').style.transform = `rotate(${90 - 90 * y / h}deg)`;
    document.getElementById('Bread').style.top = `calc(40% + ${403 - 180 * y / h}px)`;
  }
});