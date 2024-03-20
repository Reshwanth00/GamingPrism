import { CiHeart } from "react-icons/ci";
import { BiCartAlt } from "react-icons/bi";
import './card.css';

const Card = (props) => {
    return (
        <div className="mainDiv">
            <div className="imageCard">
                <div className="newDiv">
                    New
                </div>
                <div className="likeCont">
                    <CiHeart />
                </div>
                <div className="imageCardContainer">
                    <img src={props.image} className="imageReal" />
                </div>
            </div>
            <div className="bottomDiv">
                <div className="tittleCont">
                    {props.tittle}
                </div>
                <div className="lowLevel">
                    <div className="leffDiv">
                        <div className="priceDiv">
                            Price
                        </div>
                        <div className="Price">
                            {"₹" + props.price}
                        </div>
                    </div>
                    <div className="rigDiv">
                        <button className="buttonCard">
                            <BiCartAlt />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Card;