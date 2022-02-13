
import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../ComponentCSS/SideNavbar.css'
import Dashboard from './Dashboard';
// import '../ComponentJS/SideNavbarJS'
const SideNavbar = () => {
    var [examclassname, setexamclassname] = useState("dashboard-nav-dropdown");
    var [quesclassname, setquesclassname] = useState("dashboard-nav-dropdown");
    var [showExam, setshowExam] = useState(false);
    var [showQuestion, setshowQuestion] = useState(false);
    // var [showDashboard, setshowDashboard] = useState(true)
    const toggleExam = () => {
        setshowExam(!showExam);
        if (showExam) {
            setexamclassname("dashboard-nav-dropdown show ")
        }
        else {
            setexamclassname("dashboard-nav-dropdown ")
        }
        console.log(examclassname);
    }
    const toggleQuestion = () => {
        setshowQuestion(!showQuestion);
        if (showQuestion) {
            setquesclassname("dashboard-nav-dropdown show ")
        }
        else {
            setquesclassname("dashboard-nav-dropdown ")
        }
        console.log(quesclassname);
    }
    // const handleDashboard = () => {
    //     setshow(!show);
    // }
    return (

        <div className="dashboard-nav">
            <header>
                <h4 className="brand-logo grow">
                    <i className="	fas fa-bullseye"></i> <span>PROCTOROR</span></h4></header>

            <nav className="dashboard-nav-list">
                <Link style={{ textDecoration: 'none' }} to='/dashboard'>
                    <h6 className="dashboard-nav-item">
                        <i className="fas fa-home"></i>
                        Dashboard
                        
                    </h6>
                </Link>


                <a className="dashboard-nav-item">
                    <i className="fas fa-video"></i>
                        Monitor Exam
                    </a>

                <div className={examclassname}>
                    <a onClick={toggleExam} className="dashboard-nav-item dashboard-nav-dropdown-toggle ">
                        <i className="fas fa-plus"></i>
                            Examination
                        </a>

                    <div className='dashboard-nav-dropdown-menu'>
                        <Link style={{ textDecoration: 'none' }} to="/create-exam">
                            <h6 className="dashboard-nav-dropdown-item">
                                <i className="fas fa-plus mr2"></i>
                                Create Exam
                            </h6>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to='/view-exam'>
                        <h6 className="dashboard-nav-dropdown-item">
                            <i className="fas fa-eye mr2"></i>
                                View Exam
                            </h6>
                        </Link>
                        

                    </div>
                </div>

                <div className={quesclassname}>
                    <a onClick={toggleQuestion} className="dashboard-nav-item dashboard-nav-dropdown-toggle ">
                        <i className="fa fa-question"></i>
                            Questions
                        </a>

                    <div className='dashboard-nav-dropdown-menu'>
                        <Link style={{ textDecoration: 'none' }} to='/exam-dashboard'>
                            <h6 className="dashboard-nav-dropdown-item">
                                <i className="fas fa-plus mr2"></i>
                                Add Question
                            </h6>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to='/view-questions'>
                        <h6 className="dashboard-nav-dropdown-item">
                            <i className="fas fa-eye mr2"></i>
                                View Questions
                            </h6>
                        </Link>
                        

                    </div>
                </div>

                <a className="dashboard-nav-item active">
                    <i className="fas fa-clipboard"></i>
                        Publish Result
                    </a>

                {/* <div className='dashboard-nav-dropdown'><a className="dashboard-nav-item dashboard-nav-dropdown-toggle"><i className="fas fa-users"></i> Users </a>
                        <div className='dashboard-nav-dropdown-menu'>
                            <a className="dashboard-nav-dropdown-item">
                                All
                            </a>

                            <a className="dashboard-nav-dropdown-item">
                                Subscribed
                            </a>

                            <a className="dashboard-nav-dropdown-item">
                                Non-subscribed
                            </a>

                            <a className="dashboard-nav-dropdown-item">
                                Banned
                            </a>

                            <a className="dashboard-nav-dropdown-item">
                                New
                            </a>
                        </div>
                    </div> */}


                <a className="dashboard-nav-item">
                    <i className="fas fa-cogs"></i>
                        Settings
                    </a>

                <div className="nav-item-divider"></div>

                <a className="dashboard-nav-item">
                    <i className="fas fa-sign-out-alt"></i>
                        Logout
                    </a>

            </nav>
        </div>

    )
}

export default SideNavbar