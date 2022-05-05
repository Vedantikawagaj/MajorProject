
import React, { useEffect, useState } from 'react';
import '../ComponentCSS/faceapi.css';
import Webcam from "react-webcam";

function FaceApi(props) {

 
  const webcamRef = React.useRef(null);
  const videoConstraints = {
      width: 445,
      height: 200,
      facingMode: "user"
  };
  const getuserdata=async(res)=>{
    const stringUser = await localStorage.getItem('user');
    // console.log(JSON.parse(stringUser).id);
    // console.log(result)

    const log = await fetch('http://localhost:8080/api/post-log', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
              "uid": JSON.parse(stringUser).id,
              "eye": res.eye,
              "head_move_1": res.head_move_1,
              "head_move_2": res.head_move_2,
              "mob": res.mob,
              "person": res.person,
              "timestamp": new Date(),
              "examid": props.examid
            })
        })
    
  }
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

        const data = await result.json();
        console.log(data)
        getuserdata(data);
        // console.log(user)
        

        // console.log(user)
    }, 4000)
  }
  const [user,setuser]=useState({});
  
  useEffect(() => {
   
    
    handleVideoOnPlay()
  }, [webcamRef])

  return (
    <div>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>

        <Webcam
          audio={false}
          ref={webcamRef}
          height={200}
          width={445}
          videoConstraints={videoConstraints}
          screenshotFormat="image/png"
          mirrored={true}

        />
      </div>
    </div>
  );
}

export default FaceApi;