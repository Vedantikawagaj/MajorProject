import * as faceapi from 'face-api.js';
import React, { useEffect } from 'react';
import '../ComponentCSS/faceapi.css';
import Webcam from "react-webcam";

function FaceApi() {

  //   const [modelsLoaded, setModelsLoaded] = React.useState(false);
  // const [captureVideo, setCaptureVideo] = React.useState(false);
  // const video = document.getElementById('video')
  // const videoRef = React.useRef();

  // const canvasRef = React.useRef();

  // React.useEffect(() => {
  //   const loadModels = async () => {
  //     const MODEL_URL = process.env.PUBLIC_URL + '/models';

  //     Promise.all([
  //       faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
  //       faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
  //       faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
  //       faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
  //     ]).then(startVideo);
  //     // console.log(MODEL_URL)
  //     // startVideo()

  //   }
  //   loadModels();
  //   // handleVideoOnPlay();
  // }, []);

  // const startVideo = () => {
  //   setCaptureVideo(true);
  //   navigator.mediaDevices
  //     .getUserMedia({ video: { width: 200 } })
  //     .then(stream => {
  //       let video = videoRef.current;
  //       video.srcObject = stream;
  //       video.play();
  //     })
  //     .catch(err => {
  //       console.error("error:", err);
  //     });
  //   handleVideoOnPlay()
  // }
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const videoConstraints = {
      width: 445,
      height: 200,
      facingMode: "user"
  };
  const handleVideoOnPlay = () => {
    setInterval(async () => {
      // if (canvasRef && canvasRef.current) {
      //   canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);
      //   const displaySize = {
      //     width: 200,
      //     height: 200
      //   }

      //   faceapi.matchDimensions(canvasRef.current, displaySize);

      //   const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();


      //   const resizedDetections = faceapi.resizeResults(detections, displaySize);

      //   canvasRef && canvasRef.current && canvasRef.current.getContext('2d').clearRect(0, 0, 200, 200);
      //   canvasRef && canvasRef.current && faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
      //   // console.log(detections.length)
      //   if (detections.length > 1) {
      //     // alert("More than one person detected")
      //     console.log("More than one person detected")
      //   }
      //   else if (detections.length === 0) {
      //     // alert("No Person Found on camera")
      //     console.log("No Person Found on camera")
      //   }
      // }
      const imageSrc = webcamRef.current.getScreenshot();
      // setImgSrc(imageSrc);
      // var d1 = imageSrc.toDataURL("image/png");
      var res = imageSrc.replace("data:image/png;base64,", "");
      // console.log(imageSrc)
      const result = await fetch('http://127.0.0.1:5000/video_feed', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                "ssimage": res,
                
           
            })
        })

        const data = await result.json();
        console.log(data)
      // setImgSrc(res);
    }, 4000)
  }
  useEffect(() => {
    handleVideoOnPlay()
  }, [webcamRef])

  return (
    <div>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
        {/* <video id='video-element' ref={videoRef} width="440" height="200" autoPlay muted/>
      <canvas ref={canvasRef} style={{ position: 'absolute' }} /> */}
        <Webcam
          audio={false}
          ref={webcamRef}
          height={200}
          width={445}
          videoConstraints={videoConstraints}
          screenshotFormat="image/png"
          // screenshotFormat="image/jpeg"
          mirrored={true}

        />
      </div>
    </div>
  );
}

export default FaceApi;