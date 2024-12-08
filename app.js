async function initializeVideo() {
    try {
        // Use the correct path for videos.json
        const response = await fetch('/videos.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        console.log('Loaded videos:', data); // Debug log
        
        if (!data.videos || !data.videos.length) {
            throw new Error('No videos found in videos.json');
        }

        const randomIndex = Math.floor(Math.random() * data.videos.length);
        const videoPath = data.videos[randomIndex];
        
        console.log('Selected video path:', videoPath); // Debug log
        
        const videoElement = document.getElementById('background-video');
        if (!videoElement) {
            throw new Error('Video element not found');
        }

        // Make sure video path starts with forward slash
        videoElement.src = videoPath.startsWith('/') ? videoPath : '/' + videoPath;
        
        videoElement.onerror = (e) => {
            console.error('Video loading error:', e);
        };

        videoElement.onloadeddata = () => {
            console.log('Video loaded successfully');
        };

    } catch (error) {
        console.error('Error initializing video:', error.message);
    }
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', initializeVideo); 