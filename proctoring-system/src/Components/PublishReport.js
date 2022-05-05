import { useEffect, useState } from 'react'
import '../ComponentCSS/SideNavbar.css'
import SideNavbar from './SideNavbar'
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
const PublishReport = () => {
    const [logs, setlogs] = useState([]);
    let { eid } = useParams();
    useEffect(() => {
        const getlogs = async () => {
            const log = await fetch('http://localhost:8080/api/view-log', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({

                    "eid": eid
                })
            })
            const data = await log.json();
            setlogs(data)
        }
        getlogs();
    }, [])
    return (
        <div className='dashboard'>
            <SideNavbar />
            <div className='dashboard-app'>


                <div className='dashboard-content'>
                    <div className='container'>
                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-2 mb-0  f4">Report Log for Exam id: {eid}</p>
                        </div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Log id</th>
                                    <th>Time Stamp</th>
                                    <th>User id</th>
                                    <th>Eye</th>
                                    <th>Head Move 1</th>
                                    <th>Head Move 2</th>
                                    <th>Mobile</th>
                                    <th>Person</th>
                                </tr>
                            </thead>
                            <tbody>
                                {logs && logs.map((item, idx) => {
                                    return (
                                        <tr>
                                            <td>{item._id}</td>
                                            <td>{item.timestamp}</td>
                                            <td>{item.userid}</td>
                                            <td>{item.eye}</td>
                                            <td>{item.head_move_1}</td>
                                            <td>{item.head_move_2}</td>
                                            <td>{item.mob}</td>
                                            <td>{item.person}</td>
                                        </tr>
                                    )
                                })

                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PublishReport