document.querySelector('.menu').addEventListener('click',()=>{const nav=document.querySelector('nav');nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='82px';nav.style.left='0';nav.style.right='0';nav.style.padding='20px';nav.style.background='var(--paper)';nav.style.flexDirection='column';});


/* Only one performance video plays at a time */
document.querySelectorAll('.performance-video').forEach((video) => {
  video.addEventListener('play', () => {
    document.querySelectorAll('.performance-video').forEach((otherVideo) => {
      if (otherVideo !== video && !otherVideo.paused) {
        otherVideo.pause();
      }
    });
  });
});
