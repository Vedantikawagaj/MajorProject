import SideNavbar from "./SideNavbar"
import '../ComponentCSS/SideNavbar.css'
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";

const CreateExam = () => {
    // let {user} = useParams();
    const [title, settitle] = useState('');
    const [duration, setduration] = useState(0);
    const [marks, setmarks] = useState(0);
 
    
    const handleExamCreation = async () => {
        
        const res = await fetch('http://localhost:8080/api/exam/ge/' + user.id, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                "title": title,
                "duration": duration * 1000*60,
                "totalMarks": marks
            })
        })

        const data = await res.json();
        console.log(data)
        alert("Exam created successfully");
    }
    const [user,setuser]=useState({});
    useEffect(() => {
        const getuserdata=()=>{
            const stringUser = localStorage.getItem('user');
            setuser(JSON.parse(stringUser));
        }
        getuserdata();
    }, [])
    return (
        <div className='dashboard'>
            <SideNavbar />
            <div className='dashboard-app'>


                <div className='dashboard-content'>
                    <div className='container'>
                    {/* <h5>{userid}</h5> */}
                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-2 mb-0  f4">Create New Exam</p>
                        </div>
                        <form>
                            <div className="form-outline mb-4 ">
                                <h5 className="tl pl1 ">Enter Title for Exam:</h5>
                                <input
                                    type="text"
                                    id="form1Example13"
                                    className="form-control form-control-lg "
                                    placeholder="Title"
                                    value={title}
                                    onChange={(val) => {
                                        settitle(val.target.value)

                                    }}
                                />

                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <h5 className="tl pl1 ">Enter Duration for Exam(mins):</h5>
                                        <input
                                            type="number"
                                            id="form3Example1m"
                                            className="form-control form-control-lg"
                                            placeholder="Duration"
                                            value={duration}
                                            min={1}
                                            onChange={(val) => {
                                                setduration(val.target.value)

                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <h5 className="tl pl1 ">Enter Total Marks for Exam:</h5>
                                        <input
                                            type="number"
                                            id="form3Example1n"
                                            className="form-control form-control-lg"
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
                                        className="btn btn-coloe btn-lg btn-block justify-center items-center-l grow"
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