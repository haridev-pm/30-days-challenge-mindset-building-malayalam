// Plain Vanilla JS
// All the styling and layout is handled by HTML and CSS now.

document.addEventListener('DOMContentLoaded', () => {
  console.log("Vanilla JS Loaded! No React here.");

  // Mobile menu button logic
  const menuBtn = document.getElementById('menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      console.log('Menu button clicked');
      // Add menu toggle logic here
    });
  }

  // YouTube Video Click-to-Play logic
  const setupVideo = (containerId) => {
    const container = document.getElementById(containerId);
    if (container) {
      container.addEventListener('click', () => {
        const videoSrc = container.getAttribute('data-video');
        if (videoSrc) {
          container.innerHTML = `
            <iframe 
              width="100%" 
              height="100%" 
              src="${videoSrc}" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen>
            </iframe>
          `;
          container.classList.remove('cursor-pointer');
        }
      });
    }
  };

  setupVideo('yt-video-1');
  setupVideo('yt-video-2');
});
