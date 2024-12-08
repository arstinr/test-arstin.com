async function initializeVideo() {
    try {
        // Fetch the video list
        const response = await fetch('./videos.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        if (!data.videos || !data.videos.length) {
            throw new Error('No videos found in videos.json');
        }

        // Get random video from the list
        const randomIndex = Math.floor(Math.random() * data.videos.length);
        const videoPath = data.videos[randomIndex];
        
        // Set the video source
        const videoElement = document.getElementById('background-video');
        if (!videoElement) {
            throw new Error('Video element not found');
        }

        videoElement.src = videoPath;
        
        // Handle video loading error
        videoElement.onerror = () => {
            console.error('Error loading video:', videoPath);
        };

        // Log successful video load
        videoElement.onloadeddata = () => {
            console.log('Video loaded successfully:', videoPath);
        };

    } catch (error) {
        console.error('Error initializing video:', error);
    }
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', initializeVideo); 