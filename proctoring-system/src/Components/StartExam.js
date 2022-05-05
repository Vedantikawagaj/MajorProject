import SideNavbar from "./SideNavbar"
import '../ComponentCSS/SideNavbar.css'
import { Link, useParams,useNavigate  } from "react-router-dom"
import { useState } from "react";

const StartExam = () => {
    const [examid, setexamid] = useState('');
    let history = useNavigate();

    const examsearch = async () => {

        const res = await fetch('http://localhost:8080/api/se', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                "eid": examid
           
            })
        })

        const data = await res.json();
        console.log(data)
        setexamid('');
        if(data.status===200)
            history(`/start-exam/${examid}`);

        else{
            alert("Exam not Found");
            history('/dashboard');
        }
        
    }

    return (
        <div className='dashboard'>
            <SideNavbar />
            <div className='dashboard-app'>


                <div className='dashboard-content'>
                    <div className='container'>
                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-2 mb-0  f4">Start Exam Page</p>
                        </div>
                        <form>
                            <div className="form-outline mb-4 ">
                                <h6 className="tl pl1 ">Please Enter Your Exam ID: </h6>
                                <input
                                    type="text"
                                    id="form1Example13"
                                    className="form-control form-control-lg "
                                    placeholder="Exam id"
                                    value={examid}
                                    onChange={(val) => {
                                        setexamid(val.target.value)

                                    }}
                                />

                            </div>

                            <div className="mh7 mv2">
                            <div type="submit" className="btn btn-primary btn-lg btn-block" onClick={examsearch}>Start Exam</div>

                            </div>




                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StartExam