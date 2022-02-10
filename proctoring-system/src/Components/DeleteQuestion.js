import SideNavbar from "./SideNavbar"
import '../ComponentCSS/SideNavbar.css'
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";

const DeleteQuestion = () => {
    let { qid } = useParams();
    let [questions, setquestions] = useState([]);
    const handlDelete = async () => {
        const res = await fetch('http://localhost:8080/api/question/dq/' + qid, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'

            },
           
        })

        const data = await res.json();
        console.log(data);
        alert("Question deleted successfully");
    }


    const GetQuestion = async () => {

        const res = await fetch('http://localhost:8080/api/question/vpq/' + qid, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'

            },

        })

        const data = await res.json();
        setquestions(data)
        console.log(data);


    }
    useEffect(() => {

        GetQuestion()
    }, [])
    return (
        <div className='dashboard'>
            <SideNavbar />
            <div className='dashboard-app'>


                <div className='dashboard-content'>
                    <div className='container'>
                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-2 mb-0  f4">Confirm Delete Question</p>
                        </div>

                        {questions.map((item, idx) => {
                            return (


                                <form>
                                    <div className="form-outline mb-4 ">
                                        <h6 className="tl pl1 ">Enter The Question</h6>
                                        <input
                                            type="text"
                                            id="form1Example13"
                                            className="form-control form-control-lg "
                                            value={item.question}
                                            readOnly
                                            
                                        />

                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">


                                            <div className="form-outline">
                                                <h6 className="tl pl1 ">Enter Option A</h6>
                                                <input
                                                    type="text"
                                                    id="form1Example13"
                                                    className="form-control form-control-lg "
                                                    value={item.a}
      
                                                    readOnly
                                                />

                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">

                                            <div className="form-outline">
                                                <h6 className="tl pl1 ">Enter Option B</h6>
                                                <input
                                                    type="text"
                                                    id="form1Example13"
                                                    className="form-control form-control-lg "
                                                    value={item.b}
      
                                                    readOnly
                                                />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">


                                            <div className="form-outline">
                                                <h6 className="tl pl1 ">Enter Option C</h6>
                                                <input
                                                    type="text"
                                                    id="form1Example13"
                                                    className="form-control form-control-lg "
                                                    value={item.c}
      
                                                    readOnly
                                                />

                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <h6 className="tl pl1 ">Enter Option D</h6>
                                                <input
                                                    type="text"
                                                    id="form1Example13"
                                                    className="form-control form-control-lg "
                                                    value={item.d}
      
                                                    readOnly
                                                />

                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">

                                        <div className="col-md-6 mb-4">

                                            <div className="form-outline ">
                                                <h6 className="tl pl1 ">Enter Correct Answer</h6>
                                                <input
                                                    type="text"
                                                    id="form1Example13"
                                                    className="form-control form-control-lg "
                                                    value={item.ans}
    
                                                    readOnly
                                                />

                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <h6 className="tl pl1 ">Enter Weightage</h6>
                                                <input
                                                    type="number"
                                                    id="form3Example1n"
                                                    className="form-control form-control-lg"
                                                    value={item.marks}
  
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mh7 mv2">
                                            <Link to='/view-questions' style={{ textDecoration: 'none' }}>
                                                <button
                                                    type="submit"
                                                    className="btn btn-coloe btn-lg btn-block justify-center items-center-l grow"
                                                onClick={handlDelete}
                                                >
                                                    Proceed 
                                                </button>
                                            </Link>
                                        </div>

                                        <div className="mh7 mv2">
                                            <Link to='/view-questions' style={{ textDecoration: 'none' }}>
                                                <button
                                                    type="submit"
                                                    className="btn btn-cancel btn-lg btn-block justify-center items-center-l grow"
                                               
                                                >
                                                    Cancel and Return
                                                </button>
                                            </Link>
                                        </div>


                                </form>
                            )

                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DeleteQuestion