

const fileInput = document.getElementById('video-input');
const video = document.getElementById('video-container');

document.getElementById('load-video').addEventListener('click', function(){

    const fileUrl = window.URL.createObjectURL(fileInput.files[0]);

    video.src = fileUrl;

});