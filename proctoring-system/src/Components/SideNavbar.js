
import '../ComponentCSS/SideNavbar.css'
// import '../ComponentJS/SideNavbarJS'
const SideNavbar = () => {
    
    return (
        <div class='dashboard'>
            <div class="dashboard-nav">
                <header><a href="#!" class="menu-toggle"><i class="fas fa-bars"></i></a><a href="#"
                    class="brand-logo"><i
                        class="	fas fa-bullseye"></i> <span>PROCTOROR</span></a></header>
                <nav class="dashboard-nav-list"><a href="#" class="dashboard-nav-item"><i class="fas fa-home"></i>
            Home </a>
            <a
                        href="#" class="dashboard-nav-item"><i class="fas fa-user"></i> Profile </a>
            <a
                        href="#" class="dashboard-nav-item active"><i class="fas fa-plus"></i> Create Exam
        </a>
        <a
                        href="#" class="dashboard-nav-item active"><i class="fas fa-eye"></i> View Exam
        </a>
        <a
                        href="#" class="dashboard-nav-item active"><i class="fas fa-pencil-alt"></i> Update Exam
        </a>
        <a
                        href="#" class="dashboard-nav-item active"><i class="fas fa-trash"></i> Delete Exam
        </a>
        <a
                        href="#" class="dashboard-nav-item"><i class="fas fa-video"></i> Monitor Exam </a>
                        <a
                        href="#" class="dashboard-nav-item active"><i class="fas fa-clipboard-check"></i> Publish Result
        </a>
                    <div class='dashboard-nav-dropdown'><a href="#!" class="dashboard-nav-item dashboard-nav-dropdown-toggle"><i
                        class="fas fa-photo-video"></i> Media </a>
                        <div class='dashboard-nav-dropdown-menu'><a href="#"
                            class="dashboard-nav-dropdown-item">All</a><a
                                href="#" class="dashboard-nav-dropdown-item">Recent</a><a
                                    href="#" class="dashboard-nav-dropdown-item">Images</a><a
                                        href="#" class="dashboard-nav-dropdown-item">Video</a></div>
                    </div>
                    <div class='dashboard-nav-dropdown'><a href="#!" class="dashboard-nav-item dashboard-nav-dropdown-toggle"><i
                        class="fas fa-users"></i> Users </a>
                        <div class='dashboard-nav-dropdown-menu'><a href="#"
                            class="dashboard-nav-dropdown-item">All</a><a
                                href="#" class="dashboard-nav-dropdown-item">Subscribed</a><a
                                    href="#"
                                    class="dashboard-nav-dropdown-item">Non-subscribed</a><a
                                        href="#" class="dashboard-nav-dropdown-item">Banned</a><a
                                            href="#" class="dashboard-nav-dropdown-item">New</a></div>
                    </div>
                    <div class='dashboard-nav-dropdown'><a href="#!" class="dashboard-nav-item dashboard-nav-dropdown-toggle"><i
                        class="fas fa-money-check-alt"></i> Payments </a>
                        <div class='dashboard-nav-dropdown-menu'><a href="#"
                            class="dashboard-nav-dropdown-item">All</a><a
                                href="#" class="dashboard-nav-dropdown-item">Recent</a><a
                                    href="#" class="dashboard-nav-dropdown-item"> Projections</a>
                        </div>
                    </div>
                    <a href="#" class="dashboard-nav-item"><i class="fas fa-cogs"></i> Settings </a>
                    <div class="nav-item-divider"></div>
                    <a
                        href="#" class="dashboard-nav-item"><i class="fas fa-sign-out-alt"></i> Logout </a>
                </nav>
            </div>
            <div class='dashboard-app'>
                <header class='dashboard-toolbar'><a href="#!" class="menu-toggle"><i class="fas fa-bars"></i></a></header>
                <div class='dashboard-content'>
                    <div class='container'>
                        <div class='card'>
                            <div class='card-header'>
                                <h1>Welcome back Jim</h1>
                            </div>
                            <div class='card-body'>
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