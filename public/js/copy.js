
const COPY = '../icons/copy.json'

const copy = document.getElementById('copyButton')

// eslint-disable-next-line no-unused-vars, no-undef
const doCopy = bodymovin.loadAnimation({
  container: copy,
  remderer: 'svg',
  loop: false,
  autoplay: false,
  path: COPY,
  mode: 'cursor'
})

copy.addEventListener('click', (e) => {
  doCopy.play()
})
