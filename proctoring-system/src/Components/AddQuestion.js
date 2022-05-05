import SideNavbar from "./SideNavbar"
import '../ComponentCSS/SideNavbar.css'
import { Link, useParams } from "react-router-dom"
import { useState } from "react";

const AddQuestion = () => {
    let { eid } = useParams();
    const [question, setquestion] = useState('');
    const [opta, setopta] = useState('');
    const [optb, setoptb] = useState('');
    const [optc, setoptc] = useState('');
    const [optd, setoptd] = useState('');
    const [cans, setcans] = useState('');
    const [marks, setmarks] = useState();

    const handleQuestionCreation = async () => {

        const res = await fetch('http://localhost:8080/api/question/gq', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                "examid": eid,
                "question": question,
                "a": opta,
                "b": optb,
                "c": optc,
                "d": optd,
                "ans": cans,
                "marks": marks
            })
        })

        // const data = await res.json();
        setquestion('');
        setcans('');
        setopta('');
        setoptb('');
        setoptc('');
        setoptd('');
        setmarks(0);
        alert("Question added successfully");
    }

    return (
        <div className='dashboard'>
            <SideNavbar />
            <div className='dashboard-app'>


                <div className='dashboard-content'>
                    <div className='container'>
                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-2 mb-0  f4">Add New Question</p>
                        </div>
                        <form>
                            <div className="form-outline mb-4 ">
                                <h6 className="tl pl1 ">Enter The Question</h6>
                                <input
                                    type="text"
                                    id="form1Example13"
                                    className="form-control form-control-lg "
                                    placeholder="Question"
                                    value={question}
                                    onChange={(val) => {
                                        setquestion(val.target.value)

                                    }}
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
                                            placeholder="Option A"
                                            value={opta}
                                            onChange={(val) => {
                                                setopta(val.target.value)

                                            }}
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
                                            placeholder="Option B"
                                            value={optb}
                                            onChange={(val) => {
                                                setoptb(val.target.value)

                                            }}
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
                                            placeholder="Option C"
                                            value={optc}
                                            onChange={(val) => {
                                                setoptc(val.target.value)

                                            }}
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
                                            placeholder="Option D"
                                            value={optd}
                                            onChange={(val) => {
                                                setoptd(val.target.value)

                                            }}
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
                                            placeholder="Correct Answer"
                                            value={cans}
                                            onChange={(val) => {
                                                setcans(val.target.value)

                                            }}
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
                            <div className="mh7 mv2">
                                <Link to='/view-questions' style={{ textDecoration: 'none' }}>
                                    <button
                                        type="submit"
                                        className="btn btn-coloe btn-lg btn-block justify-center items-center-l grow"
                                        onClick={handleQuestionCreation}
                                    >
                                        Save and Review
                                                </button>
                                </Link>
                            </div>

                            <div className="mh7 mv2">
                                <Link to={`/add-question/${eid}`} style={{ textDecoration: 'none' }}>
                                    <button
                                        type="submit"
                                        className="btn btn-cancel btn-lg btn-block justify-center items-center-l grow"
                                        onClick={handleQuestionCreation}
                                    >
                                        Save and Add next
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
export default AddQuestion