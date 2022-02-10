import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../ComponentCSS/QuestionDashboard.css'
import '../ComponentCSS/SideNavbar.css'
import SideNavbar from './SideNavbar'
import { Link } from "react-router-dom"
const QuestionDashboard = () => {
    let { eid } = useParams();
    let [questions, setquestions] = useState([]);
    const handleViewQuestion = async () => {

        const res = await fetch('http://localhost:8080/api/question/vq/' + eid, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'

            },

        })

        const data = await res.json();
        setquestions(data);
        // alert("Exam created successfully");
        // console.log(data);


    }
    useEffect(() => {
        handleViewQuestion()
    }, [])
    return (

        <div className='dashboard'>
            <SideNavbar />
            <div className='dashboard-app'>
                {/* <div className='dashboard-content'> */}
                <div className='container'>
                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-2 mb-0  f4">Question Dashboard</p>
                    </div>

                    {questions.map((item, idx) => {
                        return (


                            <div className="container1 mt-sm-5 my-1" key={idx}>

                                <div className="question ml-sm-5 pl-sm-5 pt-2">
                                    <div className="py-2 mb3 b f4"><b>Question:-  <span className='ml3'>{item.question}</span></b></div>
                                    <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <label className="options">{item.a}  <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <label className="options">{item.b}  <span className="checkmark"></span>
                                                </label>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">

                                                <label className="options">{item.c}  <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="col-md-6 mb-4">


                                                <label className="options">{item.d}  <span className="checkmark"></span>
                                                </label>
                                            </div>

                                        </div>


                                        <span className='b tl'>Correct Ans:</span><span className='ml3'>{item.ans}</span>


                                    </div>
                                </div>
                                {/* <div className="d-flex align-items-center pt-3"> */}
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                    <div className="mh4 mv2">
                                            <Link to='/dashboard' style={{ textDecoration: 'none' }}>
                                                <button
                                                    type="submit"
                                                    className="btn btn-update btn-lg btn-block justify-center items-center-l grow"
                                                // onClick={handlDelete}
                                                >
                                                    Update 
                                                </button>
                                            </Link>
                                        </div>

                                       
                                    </div>

                                    <div className="col-md-6 mb-4">
                                    <div className="mh4 mv2">
                                            <Link to='/view-exam' style={{ textDecoration: 'none' }}>
                                                <button
                                                    type="submit"
                                                    className="btn btn-cancel btn-lg btn-block justify-center items-center-l grow"
                                               
                                                >
                                                    Delete
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>



                                {/* </div> */}
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
        // </div>
    )
}

export default QuestionDashboard