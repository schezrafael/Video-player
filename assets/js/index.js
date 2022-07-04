const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')
const $progress = document.querySelector('#progress')


$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)

$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)
$progress.addEventListener('input', handleInput)

function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    // console.log('Boton play')
}

function handlePause() {
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
    // console.log('boton pause')
}

function handleBackward() {
    // console.log('atras 1s')
    $video.currentTime = $video.currentTime - 1
}

function handleForward() {
    // console.log('adelante 1s')
    $video.currentTime = $video.currentTime + 1
}

function handleLoaded() {
    $progress.max = $video.duration
    // console.log('cargo el video', $video.duration)
}

function handleTimeUpdate() {
    // console.log($video.currentTime)
    $progress.value = $video.currentTime
}


function handleInput() {
    // console.log($progress.value)
    $video.currentTime = $progress.value
}
