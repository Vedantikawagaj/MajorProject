
import React, { useEffect } from 'react';
import '../ComponentCSS/faceapi.css';
import Webcam from "react-webcam";

function FaceApi() {

 
  const webcamRef = React.useRef(null);
  const videoConstraints = {
      width: 445,
      height: 200,
      facingMode: "user"
  };
  const handleVideoOnPlay = () => {
    setInterval(async () => {
      
      const imageSrc = webcamRef.current.getScreenshot();
      
      var res = imageSrc.replace("data:image/png;base64,", "");
      
      const result = await fetch('http://127.0.0.1:5000/video_feed', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                "ssimage": res,
            })
        })

        // const data = await result.json();
      
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