const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt the user to select a media stream,pass to videoElement,then play
async function selectMediaStream() {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }catch(error){
        console.log('got error',error)

    }
    button.addEventListener('click', async()=>{
        //  disabled button
        button.disabled = true;
        // start picture-in-picturte
        await videoElement.requestPictureInPicture();
        //reset button
        button.disabled = false; 
    })
}
selectMediaStream();



