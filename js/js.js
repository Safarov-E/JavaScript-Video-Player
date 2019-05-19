document.querySelector('#play').onclick = play;
document.querySelector('#pause').onclick = pause;
document.querySelector('#stop').onclick = stop;
document.querySelector('#speed-up').onclick = speedUp;
document.querySelector('#speed-down').onclick = speedDown;
document.querySelector('#speed-normal').onclick = speedNormal;
document.querySelector('#volume').oninput = videoVolume;

let video, display, progress;

video = document.querySelector('#video-player');
progress = document.querySelector('#progress');
video.ontimeupdate = progressUpdate;
progress.onclick = videoRewin;

function play() {
	video.play();
}
function pause() {
	video.pause();
}
function stop() {
	video.pause();
	video.currentTime = 0;  // Сбрасывает время в видео, в данном случае до нуля
}
function speedUp() {
	video.play(); 
	video.playbackRate = 2; // скорость увеличения
}
function speedDown() {
	video.play(); 
	video.playbackRate = 0.5; // скорость увеличения
}
function speedNormal() {
	video.play(); 
	video.playbackRate = 1;
}
function videoVolume() {
	let v = this.value;
	video.volume = v / 100;
}
function progressUpdate() {
	let d = video.duration;
	let c = video.currentTime;
	progress.value = (100 * c) /d; 
}
function videoRewin() {
	let w = this.offsetWidth;
	let o = event.offsetX;
	this.value = 100 * o / w;
	video.pause();
	video.currentTime = video.duration* (o/w);
	video.play();
}