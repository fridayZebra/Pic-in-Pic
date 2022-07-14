const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Select media stream to pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (error) {
    //catch error
  }
}


button.addEventListener('click', async () => {
  // disable button on click
  button.disabled = true;
  // start pic in pic
  await videoElement.requestPictureInPicture();
  // reset button
  button.disabled = false;
});





// on load
selectMediaStream();