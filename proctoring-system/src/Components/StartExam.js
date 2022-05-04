import SideNavbar from "./SideNavbar"
import '../ComponentCSS/SideNavbar.css'
import { Link, useParams } from "react-router-dom"
import { useState } from "react";

const StartExam = () => {
    const [examid, setexamid] = useState('');
    

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
                                <h6 className="tl pl1 ">Please Enter Your Exam ID </h6>
                                <input
                                    type="text"
                                    id="form1Example13"
                                    className="form-control form-control-lg "
                                    placeholder="examid"
                                    value={examid}
                                    onChange={(val) => {
                                        setexamid(val.target.value)

                                    }}
                                />

                            </div>

                            <div className="mh7 mv2">
                                <Link to={`/start-exam/${examid}`} style={{ textDecoration: 'none' }}>
                                    <button
                                        type="submit"
                                        className="btn btn-coloe btn-lg btn-block justify-center items-center-l grow"
                                        onClick={examsearch}
                                    >
                                        Start Test
                                    </button>
                                </Link>
                            </div>




                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StartExam