import { useEffect, useState } from 'react'
import '../ComponentCSS/SideNavbar.css'
import SideNavbar from './SideNavbar'
const Dashboard = () => {
    const [user,setuser]=useState({});
    useEffect(() => {
         const getuserdata=async()=>{
            const stringUser = await localStorage.getItem('user');
            setuser(JSON.parse(stringUser));
            console.log(JSON.parse(stringUser))
        }
        getuserdata();
    }, [])
    return (
        <div className='dashboard'>
        <SideNavbar />
        <div className='dashboard-app'>


            <div className='dashboard-content'>
                <div className='container'>
                    <div className='card'>

                        <div className='card-header'>
                            <h1>Welcome back {user.firstname} {user.lastname}</h1>
                        </div>

                        {
                            user.roles && 
                            <div className='card-body'>
                            <p>Your account type is: {user.roles[0]}</p>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Dashboard