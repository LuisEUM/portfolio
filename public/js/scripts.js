// const HELP = '/icons/help.json'
// const SIMPLEARROW = '/icons/arrorForGousty.json'
// const PLAYANDPAUSE = '/icons/playPause.json'
// const DOWNARROWS = '/icons/downArrows.json'
// const YESBUTTON = '/icons/yesButton.json'
// const NOTBUTTON = '/icons/noButton.json'
const SETTINGS = '../icons/settings.json'

//  Botones animados
// let info = document.querySelector('.buttonInfo');
// let showInfo = bodymovin.loadAnimation({
//   container: info,
//   remderer: 'svg',
//   loop: true,
//   autoplay: false,
//   path: HELP,
//   mode:"cursor",
// })

//   info.addEventListener('click', (e) => {
//       showInfo.play();
//       setTimeout(() => {
//       showInfo.stop();

//       }, 1500);
//     });

// let animationArrowGousty = bodymovin.loadAnimation({
//   container: document.getElementById('gousty-arrow'),
//   remderer: 'svg',
//   loop: true,
//   autoplay: true,
//   path: SIMPLEARROW
// })

// let iconPlay = document.querySelector('.buttonPlayAndPause')
// let playButton = bodymovin.loadAnimation({
//   container: iconPlay,
//   remderer: 'svg',
//   loop: false,
//   autoplay: false,
//   path: PLAYANDPAUSE,
//   mode:"cursor",
// })

// var directionMenu = 1;
//     iconPlay.addEventListener('click', (e) => {
//       playButton.setDirection(directionMenu);
//       playButton.play();
//       directionMenu = -directionMenu;
//       iconPlay.classList.toggle('pause')
//       iconPlay.classList.toggle('play')
//       game.stop()

//       if(iconPlay.classList.contains('play') === true){
//         let tutorialSection = document.getElementById('tutorial-canvas')
//         tutorialSection.classList.add('hiddenStart')
//         let gameSection = document.getElementById('canvas')
//         gameSection.classList.remove('hiddenStart')
//         game.start()
//       } else {
//         game.stop()
//       }
//     });

//   reload.addEventListener('click', (e) => {
//       doReload.play();
//       setTimeout(() => {
//         location.reload();
//       }, 1000);
//     });

// let animation = bodymovin.loadAnimation({
//     container: document.getElementById('downArrow'),
//     remderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: DOWNARROWS,
// })

// eslint-disable-next-line no-unused-vars, no-undef
const settingsButton = bodymovin.loadAnimation({
  container: document.getElementById('settingsButton'),
  remderer: 'svg',
  loop: true,
  autoplay: true,
  path: SETTINGS
})

// let animationNoButton = bodymovin.loadAnimation({
//     container: document.getElementById('noButton'),
//     remderer: 'svg',
//     loop: false,
//     autoplay: false,
//     path: NOTBUTTON,
// },
// )

// const element = document.getElementById("noButton");
// element.addEventListener("click", noButton);

// function noButton() {
//     animationNoButton.play= true
//       alert('Really?!... Are you sure?:(')
// }
