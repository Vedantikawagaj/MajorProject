import { useParams } from "react-router-dom"

const Center = ()=>{
    let {status,message} = useParams()
    return(
        <>
        <h5>
            {status}
        </h5>
        <h5>
            {message}
        </h5>
        </>
    )
}

export default Center