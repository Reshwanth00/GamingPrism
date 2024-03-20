import { IoMdClose } from "react-icons/io";
import './filters.css';
const Filters = (props) => {
    return (
        <div className="filterApp">
            <div className="textContent">
                {props.text}
            </div>
            <IoMdClose/>
            
        </div>
    )
}

export default Filters;