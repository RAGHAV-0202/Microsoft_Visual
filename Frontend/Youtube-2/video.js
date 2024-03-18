var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
const api_key = "AIzaSyC9Jdf7e6g-8_c21p_lucNFKLjfN4HKqTE"

    // This function creates an <iframe> (and YouTube player)
    // after the API code downloads.
let videoId = "VlDTMIgGbRo"


function onYouTubeIframeAPIReady() {
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

    function onPlayerReady(event) {
      console.log('Player is ready');
      event.target.playVideo();
    }

    function onPlayerStateChange(event) {
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






function info_btn_click(e) {
    let elem = e.target.parentElement;
    let btn_pressed = elem.classList[0];
    

    if(e.target.parentElement.classList.contains("like-dislike")){
      elem = elem.children[0]
      btn_pressed = elem.classList[1]; 
    }

    elem = elem.children[0]
    btn_pressed = elem.classList[1]
    if(e.target.classList.contains("dislike2")){
      btn_pressed = "dislike"
    }

    if (elem.classList.contains("unfilled")) {
        document.querySelector("." + btn_pressed).style.fontVariationSettings = "'FILL' 1";
        elem.classList.remove("unfilled");
        elem.classList.add("filled");
    } else {
        document.querySelector("." + btn_pressed).style.fontVariationSettings = "'FILL' 0";
        elem.classList.remove("filled");
        elem.classList.add("unfilled");
    }
}



async function getVideos() {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=53&regionCode=US&videoCategoryId=0&key=${api_key}`);
        const data = await response.json();
    console.log(data);
  for(var i = 0 ; i < data.items.length ; i++){
    createRVideos(data.items[i])
  }

}




function createRVideos(data){
  let thumb_url ; 
    if(!data.snippet.thumbnails.maxres){
      thumb_url = (data.snippet.thumbnails.high.url);
    }else{
      thumb_url = (data.snippet.thumbnails.maxres.url);
    }
    const title = (data.snippet.title)
    const channel_name = (data.snippet.channelTitle); // channel
    let views = (data.statistics.viewCount)//views
    let viewsformatted ; 
    if(views > 1000000){
        viewsformatted = Math.floor(views/1000000) + "M"
    }else if (views > 1000){
        viewsformatted = Math.floor(views/1000) + "K"
    }
    const ago = (timeSince(data.snippet.publishedAt))

  const newDiv = document.createElement("div");
  newDiv.innerHTML = `<div class="recommended-video">
                <div class="left">
                <img src="${thumb_url}">
                </div>
                <div class="right">
                    <p class="r_title">${title}</p>
                    <p class="r_channel_name">${channel_name}</p>
                    <p class="r_stats">${viewsformatted} Views · ${ago}</p>
                </div>
            </div>`
    
  document.querySelector(".vid-right").appendChild(newDiv)
}

function timeSince(dateString) {
    const date = new Date(dateString);
    const seconds = Math.floor((new Date() - date) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
        return `${interval} years ago`;
    }

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return `${interval} months ago`;
    }

    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        return `${interval} day${interval > 1 ? 's' : ''} ago`;
    }

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        return `${interval} hour${interval > 1 ? 's' : ''} ago`;
    }

    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return `${interval} minute${interval > 1 ? 's' : ''} ago`;
    }

    return `${Math.floor(seconds)} second${Math.floor(seconds) !== 1 ? 's' : ''} ago`;
}