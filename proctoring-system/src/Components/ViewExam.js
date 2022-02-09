import '../ComponentCSS/ViewExam.css'
import '../ComponentCSS/SideNavbar.css'
import SideNavbar from './SideNavbar'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const ViewExam = () => {
    let [exams, setexams] = useState([]);
    const [userid, setuserid] = useState(201);
    const handleViewExam = async () => {

        const res = await fetch('http://localhost:8080/api/exam/ve/' + userid, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'

            },

        })

        const data = await res.json();
        setexams(data);
        // alert("Exam created successfully");
        // console.log(data);


    }
    useEffect(() => {
        handleViewExam()
    }, [])
    return (
        <div className='dashboard'>
            <SideNavbar />
            <div className='dashboard-app'>


                <div className='dashboard-content'>
                    <div class="container">
                        <div class="divider d-flex align-items-center my-4">
                            <p class="text-center fw-bold mx-2 mb-0  f4">Exam Section</p>
                        </div>
                        <div class="row">
                            {
                                // console.log(exams)
                                exams && exams.map((item, idx) => {
                                    return (
                                        <div class="col-lg-4">
                                            <div class="card card-margin">
                                                {/* <div class="card-header no-border">
                                                    <h5 class="card-title">MOM</h5>
                                                </div> */}
                                                <div class="card-body pt-0">
                                                    <div class="widget-49">
                                                        <div class="widget-49-title-wrapper pt3">
                                                            <div class="widget-49-date-primary">
                                                                <span class="widget-49-date-day">09</span>
                                                                <span class="widget-49-date-month">apr</span>
                                                            </div>
                                                            <div class="widget-49-meeting-info">
                                                                <span class="widget-49-pro-title b f-6">{item.title}</span>
                                                                {/* https://www.bootdey.com/snippets/view/events-card-widget#html */}
                                                            </div>
                                                        </div>

                                                        <div class="widget-49-meeting-info ma3">
                                                            <span class="widget-49-pro-title">
                                                                <span className="b pr1">
                                                                    Duration:-
                                                                </span>
                                                                {item.duration.toString().slice(11, 16)}
                                                            </span>
                                                        </div>
                                                        <div class="widget-49-meeting-info ma3">
                                                            <span class="widget-49-pro-title">
                                                                <span className="b pr1">
                                                                    Total Marks:-
                                                                </span>
                                                                {item.totalMarks}
                                                            </span>
                                                        </div>

                                                        <Link to='/dashboard' style={{ textDecoration: 'none' }}>
                                                            <button
                                                                type="submit"
                                                                class="btn btn-coloe btn-md btn-block justify-center items-center-l grow mv2 br4"
                                                            // onClick={handleExamCreation}
                                                            >
                                                                View Questions
                                    </button>
                                                        </Link>
                                                        <Link to='/dashboard' style={{ textDecoration: 'none' }}>
                                                            <button
                                                                type="submit"
                                                                class="btn btn-coloe btn-md btn-block justify-center items-center-l grow mv2 br4"
                                                            // onClick={handleExamCreation}
                                                            >
                                                                Update Exam
                                    </button>
                                                        </Link>
                                                        <Link to='/dashboard' style={{ textDecoration: 'none' }}>
                                                            <button
                                                                type="submit"
                                                                class="btn btn-coloe btn-md btn-block justify-center items-center-l grow mv2 br4"
                                                            // onClick={handleExamCreation}
                                                            >
                                                                Delete Exam
                                    </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewExam