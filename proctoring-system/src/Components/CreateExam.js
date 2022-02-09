import SideNavbar from "./SideNavbar"
import '../ComponentCSS/SideNavbar.css'
import { Link } from "react-router-dom"
import { useState } from "react";

const CreateExam = () => {
    const [title, settitle] = useState('');
    const [duration, setduration] = useState();
    const [marks, setmarks] = useState();
    const [userid, setuserid] = useState(201);
    const handleExamCreation = async () => {
        const res = await fetch('http://localhost:8080/api/exam/ge/' + userid, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                "title": title,
                "duration": duration * 1000,
                "marks": marks
            })
        })

        const data = await res.json();
        alert("Exam created successfully");
    }

    return (
        <div className='dashboard'>
            <SideNavbar />
            <div className='dashboard-app'>


                <div className='dashboard-content'>
                    <div className='container'>
                        <div class="divider d-flex align-items-center my-4">
                            <p class="text-center fw-bold mx-2 mb-0  f4">Create New Exam</p>
                        </div>
                        <form>
                            <div class="form-outline mb-4 ">
                                <h5 class="tl pl1 ">Enter Title for Exam:</h5>
                                <input
                                    type="text"
                                    id="form1Example13"
                                    class="form-control form-control-lg "
                                    placeholder="Title"
                                    value={title}
                                    onChange={(val) => {
                                        settitle(val.target.value)

                                    }}
                                />

                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <div class="form-outline">
                                        <h5 class="tl pl1 ">Enter Duration for Exam(mins):</h5>
                                        <input
                                            type="number"
                                            id="form3Example1m"
                                            class="form-control form-control-lg"
                                            placeholder="Duration"
                                            value={duration}
                                            min={1}
                                            onChange={(val) => {
                                                setduration(val.target.value)

                                            }}
                                        />
                                    </div>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <div class="form-outline">
                                        <h5 class="tl pl1 ">Enter Total Marks for Exam:</h5>
                                        <input
                                            type="number"
                                            id="form3Example1n"
                                            class="form-control form-control-lg"
                                            placeholder="Marks"
                                            value={marks}
                                            min={0}
                                            onChange={(val) => {
                                                setmarks(val.target.value)

                                            }}
                                        />
                                    </div>
                                </div>
                            </div>





                            
                                <div className="mh7">
                                <Link to='/dashboard' style={{ textDecoration: 'none' }}>
                                    <button
                                        type="submit"
                                        class="btn btn-coloe btn-lg btn-block justify-center items-center-l grow"
                                        onClick={handleExamCreation}
                                    >
                                        Create Exam
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
export default CreateExam