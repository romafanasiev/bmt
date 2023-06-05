var radius = 900;
var autoRotate = true;
var rotateSpeed = -30;
var imgWidth = 400;
var imgHeight = 400;

setTimeout(init, 100);

var obox = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImg = ospin.getElementsByClassName('card');
var cImg = ospin.getElementsByClassName('card_img');
var cButtons = ospin.getElementsByClassName('card_button');
var aVid = ospin.getElementsByTagName('video');
var aEle = [...aImg, ...aVid];

ospin.style.width = imgWidth + 'px';
ospin.style.height = imgHeight + 'px';

var ground = document.getElementById('ground');
ground.style.width = radius * 12 + 'px';
ground.style.height = radius * 12 + 'px';

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform =
      'rotateY(' +
      i * (360 / aEle.length) +
      'deg) translateZ(' +
      radius +
      'px)';
    aEle[i].style.transition = 'transform 1s';
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + 's';

    cImg[i].style.transform = 'rotateY(' + 0 + 'deg)';
    cImg[i].style.transition = 'transform 1s';
    cImg[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + 's';
  }
}

function applyTransform(obj) {
  if (tY > 180) tY = 180;
  if (tY < 0) tY = 0;

  obj.style.transform = 'rotateX(' + -tY + 'deg) rotateY(' + tX + 'deg)';
}

function playSpin(yes) {
  ospin.style.animationPlayState = yes ? 'running' : 'paused';
}

var sX,
  sY,
  nX,
  nY,
  desX = 0,
  desY = 0,
  tX = 0,
  tY = 10;

if (autoRotate) {
  var animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
  ospin.style.animation = `${animationName} ${Math.abs(
    rotateSpeed
  )}s infinite linear`;
}

// if (bgMusicURL) {
//   document.getElementById('music-container').innerHTML += `
// <audio src="${bgMusicURL}" ${bgMusicControls? 'controls': ''} autoplay loop>
// <p>If you are reading this, it is because your browser does not support the audio element.</p>
// </audio>
// `;
// }

// document.onpointerdown = function (e) {
//   clearInterval(obox.timer);
//   e = e || window.event;
//   var sX = e.clientX,
//     sY = e.clientY;

//   this.onpointermove = function (e) {
//     e = e || window.event;
//     var nX = e.clientX,
//       nY = e.clientY;
//     desX = nX - sX;
//     desY = nY - sY;
//     tX += desX * 0.1;
//     tY += desY * 0.1;
//     applyTransform(obox);
//     sX = nX;
//     sY = nY;
//   };

// this.onpointerup = function (e) {
//   obox.timer = setInterval(function () {
//     desX *= 0.95;
//     desY *= 0.95;
//     tX += desX * 0.1;
//     tY += desY * 0.1;
//     applyTransform(obox);
//     playSpin(false);
//     if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
//       clearInterval(obox.timer);
//       playSpin(true);
//     }
//   }, 17);
//   this.onpointermove = this.onpointerup = null;
// };

//   return false;
// };

// document.onmousewheel = function (e) {
//   e = e || window.event;
//   var d = e.wheelDelta / 20 || -e.detail;
//   radius += d;
//   init(1);
// };

// const cards = document.querySelectorAll('.card');

// console.log(cards);

// cards.forEach((item) => {
//   item.addEventListener('pointerenter', (e) => {
//     console.log(item);
//   });
// });

