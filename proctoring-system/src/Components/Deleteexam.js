import SideNavbar from "./SideNavbar"
import '../ComponentCSS/SideNavbar.css'
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";

const DeleteExam = () => {

    let { eid } = useParams();
    let [exams, setexams] = useState([]);
    const handlDelete = async () => {
        const res = await fetch('http://localhost:8080/api/exam/de/' + eid, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'

            },
         
        })

        const data = await res.json();
        console.log(data);
        alert("Exam Deleted successfully");
    }


    const GetExam = async () => {

        const res = await fetch('http://localhost:8080/api/exam/vpe/' + eid, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'

            },
        })

        const data = await res.json();
        setexams(data)
    }
    useEffect(() => {
  
        GetExam()
    }, [])
    return (
        <div className='dashboard'>
            <SideNavbar />
            <div className='dashboard-app'>


                <div className='dashboard-content'>
                    <div className='container'>
                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-2 mb-0  f4">Delete Exam</p>
                        </div>
                        {
                            exams.map((itm, idx) => {
                                return (
                                    <form key={idx}>
                                        <div className="form-outline mb-4 ">
                                            <h5 className="tl pl1 ">Title for Exam:</h5>
                                            <input
                                                type="text"
                                                id="form1Example13"
                                                className="form-control form-control-lg "
                                                // placeholder={itm.title}
                                                value={itm.title}
                                                readOnly
                                           
                                            />

                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <h5 className="tl pl1 ">Duration for Exam(mins):</h5>
                                                    <input
                                                        type="number"
                                                        id="form3Example1m"
                                                        className="form-control form-control-lg"
                                                        placeholder={itm.duration.toString().slice(11, 16) + " (hh : mm)"}
                                                        // value={itm.duration.toString().slice(11, 16)}
                                                        readOnly
                                                        min={1}
                                                        // onChange={(val) => {
                                                        //     setduration(val.target.value)

                                                        // }}
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <h5 className="tl pl1 ">Total Marks for Exam:</h5>
                                                    <input
                                                        type="number"
                                                        id="form3Example1n"
                                                        className="form-control form-control-lg"
                                                        // placeholder={itm.totalMarks}
                                                        value={itm.totalMarks}
                                                        readOnly
                                                        min={0}
                                                        // onChange={(val) => {
                                                        //     setmarks(val.target.value)

                                                        // }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mh7 mv2">
                                            <Link to='/dashboard' style={{ textDecoration: 'none' }}>
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
                                            <Link to='/view-exam' style={{ textDecoration: 'none' }}>
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
export default DeleteExam