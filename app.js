document.querySelectorAll('.talk-card').forEach((card) => {
  const button = card.querySelector('.video-load');
  const shell = card.querySelector('.video-shell');
  const videoId = card.dataset.videoId;

  button.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?rel=0&modestbranding=1&autoplay=1`;
    iframe.title = button.getAttribute('aria-label') || 'Public YouTube video';
    iframe.loading = 'lazy';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    shell.replaceChildren(iframe);
  }, { once: true });
});
