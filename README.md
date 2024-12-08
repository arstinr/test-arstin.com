# Full Screen Video Background Project

A simple web application that displays full-screen video backgrounds, randomly selected from a collection.

## Local Development

1. Clone this repository
2. Place your video files in the `public/videos` directory
3. Update `public/videos.json` to include the paths to your videos
4. Serve the project using a local server (e.g., Live Server in VS Code)

## Adding/Removing Videos

1. Add your MP4 video files to the `public/videos` directory
2. Update `public/videos.json` to include the new video paths:
   ```json
   {
     "videos": [
       "/videos/your-new-video.mp4",
       "/videos/another-video.mp4"
     ]
   }
   ```

## Deployment

This project can be deployed to Vercel:
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy 