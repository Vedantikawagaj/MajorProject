import SideNavbar from "./SideNavbar"
import '../ComponentCSS/SideNavbar.css'
import { Link, useParams } from "react-router-dom"
import { useState } from "react";

const AddStudents = () => {
    const [Email, setEmail] = useState('');
    let { eid } = useParams();

    const handleEmailCreation = async () => {

        const res = await fetch('http://localhost:8080/api/sendmail', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                "email": Email,
                "examid":eid
           
            })
        })

        const data = await res.json();
        console.log(data)
        setEmail('');
        alert("Email sent successfully");
    }

    return (
        <div className='dashboard'>
            <SideNavbar />
            <div className='dashboard-app'>


                <div className='dashboard-content'>
                    <div className='container'>
                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-2 mb-0  f4">Add Email Page</p>
                        </div>
                        <form>
                            <div className="form-outline mb-4 ">
                                <h6 className="tl pl1 ">Enter The email-id of the students :)</h6>
                                <input
                                    type="text"
                                    id="form1Example13"
                                    className="form-control form-control-lg "
                                    placeholder="Email"
                                    value={Email}
                                    onChange={(val) => {
                                        setEmail(val.target.value)

                                    }}
                                />

                            </div>

                            <div className="mh7 mv2">
                                <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                                    <button
                                        type="submit"
                                        className="btn btn-coloe btn-lg btn-block justify-center items-center-l grow"
                                        onClick={handleEmailCreation}
                                    >
                                        Send
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
export default AddStudents