import SideNavbar from "./SideNavbar"
import '../ComponentCSS/SideNavbar.css'
import { Link } from "react-router-dom"
import { useState } from "react";

const CreateExam = () => {
    const [title, settitle] = useState('');
    const [duration, setduration] = useState(0);
    const [marks, setmarks] = useState(0);
    const handleExamCreation = async () => {
        const res = await fetch('http://localhost:8080/api/exam/ge', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                "title": title,
                "duration": duration*1000,
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
                        <form>
                            <div class="form-outline mb-4 ">

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
                                        <input
                                            type="number"
                                            id="form3Example1m"
                                            class="form-control form-control-lg"
                                            placeholder="Duration"
                                        value={duration}
                                        onChange={(val) => {
                                            setduration(val.target.value)

                                        }}
                                        />
                                    </div>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <div class="form-outline">
                                        <input
                                            type="number"
                                            id="form3Example1n"
                                            class="form-control form-control-lg"
                                            placeholder="Marks"
                                        value={marks}
                                        onChange={(val) => {
                                            setmarks(val.target.value)

                                        }}
                                        />
                                    </div>
                                </div>
                            </div>





                            <Link to='/dashboard'>
                                <button
                                    type="submit"
                                    class="btn btn-primary btn-lg btn-block"
                                onClick={handleExamCreation}
                                >
                                    Create Exam
                                        </button>
                            </Link>





                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateExam