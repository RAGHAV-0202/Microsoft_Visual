var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
const api_key = "AIzaSyC9Jdf7e6g-8_c21p_lucNFKLjfN4HKqTE"

    // This function creates an <iframe> (and YouTube player)
    // after the API code downloads.
    function onYouTubeIframeAPIReady() {
        // Create a new YouTube player instance
        var player = new YT.Player('player', {
          height: '100%',
          width: '100%',
          videoId: 'VlDTMIgGbRo', // Replace with your desired video ID
          playerVars: {
            'autoplay': 1, // Autoplay the video
            'controls': 1, // Hide player controls
            'modestbranding': 0, // Hide YouTube logo
            'rel': 0 // Prevent related videos from showing up after the video ends
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
  
        // This function will be called when the player is ready
        function onPlayerReady(event) {
          console.log('Player is ready');
          // You can perform additional actions here, such as playing the video
          event.target.playVideo();
        }
  
        // This function will be called when the player's state changes
        function onPlayerStateChange(event) {
          // You can handle different player states here (e.g., when the video ends)
          if (event.data === YT.PlayerState.ENDED) {
            console.log('Video has ended');
          }
        }
      }
      function onPlayerReady(event) {
        event.target.playVideo(); // Autoplay the video
      }
  
      function onPlayerStateChange(event) {
        if (event.data === YT.PlayerState.PAUSED) {
          document.getElementById('pause-overlay').style.display = 'none';
        } else {
          document.getElementById('pause-overlay').style.display = 'none';
        }
      }
