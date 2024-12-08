async function initializeVideo() {
    try {
        console.log('Starting video initialization...');
        const response = await fetch('/public/videos.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Available videos:', data.videos); // Debug log
        
        const randomIndex = Math.floor(Math.random() * data.videos.length);
        const videoPath = data.videos[randomIndex];
        
        console.log('Trying to load video from:', videoPath); // Debug log
        
        const videoElement = document.getElementById('background-video');
        videoElement.src = videoPath;

    } catch (error) {
        console.error('Error:', error);
    }
}

document.addEventListener('DOMContentLoaded', initializeVideo); 