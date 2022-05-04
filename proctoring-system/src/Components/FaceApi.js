import * as faceapi from 'face-api.js';
import React from 'react';
import '../ComponentCSS/faceapi.css';
function FaceApi() {

//   const [modelsLoaded, setModelsLoaded] = React.useState(false);
  const [captureVideo, setCaptureVideo] = React.useState(false);
  const video = document.getElementById('video')
  const videoRef = React.useRef();
//   const videoHeight = 200;
//   const videoWidth = 445;
  const canvasRef = React.useRef();

  React.useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = process.env.PUBLIC_URL + '/models';

      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      ]).then(startVideo);
      // console.log(MODEL_URL)
      // startVideo()

    }
    loadModels();
    // handleVideoOnPlay();
  }, []);
 
  const startVideo = () => {
    setCaptureVideo(true);
    navigator.mediaDevices
      .getUserMedia({ video: { width:200 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
      captureSnapshot()
      handleVideoOnPlay()
  }

  const handleVideoOnPlay = () => {
    setInterval(async () => {
      if (canvasRef && canvasRef.current) {
        canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);
        const displaySize = {
          width:200,
          height: 200
        }

        faceapi.matchDimensions(canvasRef.current, displaySize);

        const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();

        
        const resizedDetections = faceapi.resizeResults(detections, displaySize);

        canvasRef && canvasRef.current && canvasRef.current.getContext('2d').clearRect(0, 0,200, 200);
        canvasRef && canvasRef.current && faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
        // console.log(detections.length)
        if(detections.length > 1){
            // alert("More than one person detected")
            console.log("More than one person detected")
        }
        else if(detections.length === 0){
            // alert("No Person Found on camera")
            console.log("No Person Found on camera")
        }
      }
    }, 1000)
  }

  var stream = document.getElementById("stream");
  var capture = document.getElementById("capture");
  var cameraStream = null;
  var array = null;
  // var values = 0;
  // var length = null; 
  async function captureSnapshot() {
  
    // if( null != cameraStream ) 
    {
      var ctx = canvasRef.current.getContext('2d');
      var img = new Image();
      ctx.drawImage( stream, 0, 0, canvasRef.width, canvasRef.height );
      img.src = capture.toDataURL( "image/png" );
      img.width	= 340;
      var d1 = capture.toDataURL("image/png");
      var res = d1.replace("data:image/png;base64,", "");

        // var average = values / length;

        // console.log(average)
        // console.log(Math.round(average - 40));

        // if(average)
        {
            const res = await fetch('http://127.0.0.1:5000/video_feed', {
              method: 'post',
              headers: {
                  'Content-Type': 'application/json'

              },
              body: JSON.stringify( {'imgData':res})

          })

        const data = await res.json();
        console.log(data)
            // $.post("/video_feed",{
            //     data : {'imgData':res,'voice_db':average,'testid': tid}},
            //     function(data){
            //     console.log(data);
            //     });
        }

      } 
      setTimeout(captureSnapshot, 5000);
    } 
  
  return (
    <div>
      
      <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
      <video id='video-element' ref={videoRef} width="440" height="200" autoPlay muted/>
      <canvas id="capture" ref={canvasRef} style={{ position: 'absolute' }} />
      </div>
    </div>
  );
}

export default FaceApi;