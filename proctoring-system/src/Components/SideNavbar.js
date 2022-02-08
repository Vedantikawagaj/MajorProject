
import { useState } from 'react'
import '../ComponentCSS/SideNavbar.css'
// import '../ComponentJS/SideNavbarJS'
const SideNavbar = () => {
    var [classname, setclassname] = useState("dashboard-nav-dropdown");

    var [show, setshow] = useState(false);

    const handleshow = () => {
        setshow(!show);
        if (show) {
            setclassname("dashboard-nav-dropdown show ")
        }
        else {
            setclassname("dashboard-nav-dropdown ")
        }
        console.log(classname);
    }


    return (
        <div className='dashboard'>
            <div className="dashboard-nav">
                <header><a className="menu-toggle"><i className="fas fa-bars"></i></a>
                    <a className="brand-logo">
                        <i className="	fas fa-bullseye"></i> <span>PROCTOROR</span></a></header>

                <nav className="dashboard-nav-list">
                    <a className="dashboard-nav-item">
                        <i className="fas fa-home"></i>
                        Home
                    </a>
                    <a className="dashboard-nav-item">
                        <i className="fas fa-user"></i>
                        Profile
                    </a>

                    <a className="dashboard-nav-item">
                        <i className="fas fa-video"></i>
                        Monitor Exam
                    </a>
             
                    <div className={classname}>
                        <a onClick={handleshow} className="dashboard-nav-item dashboard-nav-dropdown-toggle ">
                            <i className="fas fa-plus"></i>
                            Examination
                        </a>

                        <div className='dashboard-nav-dropdown-menu'>
                            <a className="dashboard-nav-dropdown-item">
                                <i className="fas fa-plus mr2"></i>
                                Create Exam
                            </a>

                            <a className="dashboard-nav-dropdown-item">
                                <i className="fas fa-eye mr2"></i>
                                View Exam
                            </a>

                            <a className="dashboard-nav-dropdown-item">
                                <i className="fas fa-pencil-alt mr2"></i>
                                Update Exam
                            </a>

                            <a className="dashboard-nav-dropdown-item">
                                <i className="fas fa-trash mr2"></i>
                                Delete Exam
                            </a>
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
            <div className='dashboard-app'>
                <header className='dashboard-toolbar'>
                    <a className="menu-toggle">
                        <i className="fas fa-bars"></i>
                    </a>
                </header>

                <div className='dashboard-content'>
                    <div className='container'>
                        <div className='card'>
                            
                            <div className='card-header'>
                                <h1>Welcome back Jim</h1>
                            </div>

                            <div className='card-body'>
                                <p>Your account type is: Administrator</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNavbar