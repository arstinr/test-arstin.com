document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('bgVideo');

    fetch('/public/videos.json')
        .then(response => response.json())
        .then(data => {
            const videos = data.videos;
            const randomVideo = videos[Math.floor(Math.random() * videos.length)];
            videoElement.src = randomVideo;
            videoElement.play().catch(error => {
                console.error('Error attempting to play video:', error);
            });
        })
        .catch(error => {
            console.error('Error fetching video list:', error);
        });
});

