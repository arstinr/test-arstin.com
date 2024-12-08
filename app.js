async function initializeVideo() {
    try {
        console.log('Starting video initialization...'); // Debug log
        
        // Try with and without the /public prefix
        let response;
        try {
            response = await fetch('/videos.json');
            if (!response.ok) {
                response = await fetch('/public/videos.json');
            }
        } catch (e) {
            console.error('Fetch failed:', e);
            throw e;
        }

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Loaded videos data:', data); // Debug log
        
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

        // Try both with and without /public prefix
        const fullPath = videoPath.startsWith('/') ? videoPath : '/' + videoPath;
        console.log('Attempting to load video from:', fullPath); // Debug log
        
        videoElement.src = fullPath;
        
        videoElement.onerror = (e) => {
            console.error('Video loading error:', e);
            // Try alternative path with /public prefix
            const altPath = '/public' + fullPath;
            console.log('Trying alternative path:', altPath);
            videoElement.src = altPath;
        };

        videoElement.onloadeddata = () => {
            console.log('Video loaded successfully from:', videoElement.src);
        };

    } catch (error) {
        console.error('Error initializing video:', error.message);
    }
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', initializeVideo); 