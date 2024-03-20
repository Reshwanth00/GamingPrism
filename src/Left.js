import './left.css';
import logo from './logo.png';
import { AiTwotoneDelete } from "react-icons/ai";
import React, { useState } from 'react';


const Left = () => {
    const [isOne, setisOne] = useState(false);
    const HandleOne = () => {
        setisOne(!isOne);
    };
    const one = isOne ? 'rgb(131, 45, 217)' : 'grey';

    const [isTwo, setisTwo] = useState(false);
    const HandleTwo = () => {
        setisTwo(!isTwo);
    };
    const two = isTwo ? 'rgb(131, 45, 217)' : 'grey';

    const [isThree, setisThree] = useState(false);
    const HandleThree = () => {
        setisThree(!isThree);
    };
    const three = isThree ? 'rgb(131, 45, 217)' : 'grey';


    const [isFour, setisFour] = useState(false);
    const HandleFour = () => {
        setisFour(!isFour);
    };
    const four = isFour ? 'rgb(131, 45, 217)' : 'grey';

    const [isFive, setisFive] = useState(false);
    const HandleFive = () => {
        setisFive(!isFive);
    };
    const five = isFive ? 'rgb(131, 45, 217)' : 'grey';

    const [isSix, setisSix] = useState(false);
    const HandleSix = () => {
        setisSix(!isSix);
    };
    const six = isSix ? 'rgb(131, 45, 217)' : 'grey';


    return (
        <div className="leftAppContainer">
            <div className="headContainer">
                <div className='topContainer'>
                    <div className='logoContainer'>
                        <img src={logo} className='logoImg' />
                    </div>
                    <div className='companyContainer'>
                        lapak<b>baju</b>
                    </div>

                </div>

            </div>
            <div className='leftBodyContainer'>
                <div className='categoryContainer'>
                    <div className='leftTittleContainer'>
                        Category
                    </div>
                    <div className='catItem'>
                        <div className='catHolder'>
                            <div className='catItems' onClick={HandleOne} style={{ color: one }}>
                                T-Shirt
                            </div>
                            <div className='catItems' onClick={HandleTwo} style={{ color: two }}>
                                Sweatshirt
                            </div>
                            <div className='catItems' onClick={HandleThree} style={{ color: three }}>
                                Dress
                            </div>
                            <div className='catItems' onClick={HandleFour} style={{ color: four }}>
                                Pants and Shirts
                            </div>
                            <div className='catItems' onClick={HandleFive} style={{ color: five }}>
                                Swimsuit
                            </div>
                            <div className='catItems' onClick={HandleSix} style={{ color: six }}>
                                Stuff and Accessories
                            </div>
                        </div>
                    </div>
                </div>
                <div className='divider'>

                </div>

                <div className='filterContainer'>
                    <div className='leftTittleContainer'>
                        Filter by:
                    </div>
                    <div className='typeContainer'>
                        <div className='typeText'>
                            Type
                        </div>
                        <div className='typeItems'>
                            <div className='typeHolder'>
                                <div className='typeItem'>
                                    <div className='checkType'>
                                        <input type="checkbox" className='box' />
                                    </div>
                                    <div className='typeList'>
                                        Basic

                                    </div>
                                </div>
                                <div className='typeItem'>
                                    <div className='checkType'>
                                        <input type="checkbox" className='box' />
                                    </div>
                                    <div className='typeList'>
                                        Pattern

                                    </div>
                                </div>
                                <div className='typeItem'>
                                    <div className='checkType'>
                                        <input type="checkbox" className='box' />
                                    </div>
                                    <div className='typeList'>
                                        Hoodie

                                    </div>
                                </div>
                                <div className='typeItem'>
                                    <div className='checkType'>
                                        <input type="checkbox" className='box' />
                                    </div>
                                    <div className='typeList'>
                                        Zipper

                                    </div>
                                </div>
                                <div className='typeItem'>
                                    <div className='checkType'>
                                        <input type="checkbox" className='box' />
                                    </div>
                                    <div className='typeList'>
                                        Oversize
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='typeContainer'>
                        <div className='typeText'>
                            Colour
                        </div>
                        <div className='typeItems'>
                            <div className='typeHolder'>
                                <div className='typeItem'>
                                    <div className='checkType'>
                                        <input type="checkbox" className='box' />
                                    </div>
                                    <div className='typeList'>
                                        Black
                                        <div className='colourBoxdiv'>

                                        </div>
                                    </div>
                                </div>
                                <div className='typeItem'>
                                    <div className='checkType'>
                                        <input type="checkbox" className='box' />
                                    </div>
                                    <div className='typeList'>
                                        Red
                                        <div className='colourBoxdiv'>

                                        </div>
                                    </div>
                                </div>
                                <div className='typeItem'>
                                    <div className='checkType'>
                                        <input type="checkbox" className='box' />
                                    </div>
                                    <div className='typeList'>
                                        Brown
                                        <div className='colourBoxdiv'>

                                        </div>
                                    </div>
                                </div>
                                <div className='typeItem'>
                                    <div className='checkType'>
                                        <input type="checkbox" className='box' />
                                    </div>
                                    <div className='typeList'>
                                        Multicolour
                                        <div className='colourBoxdiv'>

                                        </div>
                                    </div>
                                </div>
                                <div className='typeItem'>
                                    <div className='checkType'>
                                        <input type="checkbox" className='box' />
                                    </div>
                                    <div className='typeList'>
                                        Gray
                                        <div className='colourBoxdiv'>

                                        </div>
                                    </div>
                                </div>

                                <div className='typeItem'>
                                    <div className='checkType'>
                                        <input type="checkbox" className='box' />
                                    </div>
                                    <div className='typeList'>
                                        Blue
                                        <div className='colourBoxdiv'>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='typeContainer'>
                        <div className='typeText'>
                            Size
                        </div>
                        <div className='typeItems'>
                            <div className='typeHolder'>
                                <div className='typeItem'>
                                    <div className='checkType'>
                                        <input type="checkbox" className='box' />
                                    </div>
                                    <div className='typeList'>
                                        Small

                                    </div>
                                </div>
                                <div className='typeItem'>
                                    <div className='checkType'>
                                        <input type="checkbox" className='box' />
                                    </div>
                                    <div className='typeList'>
                                        Medium

                                    </div>
                                </div>
                                <div className='typeItem'>
                                    <div className='checkType'>
                                        <input type="checkbox" className='box' />
                                    </div>
                                    <div className='typeList'>
                                        Large

                                    </div>
                                </div>
                                <div className='typeItem'>
                                    <div className='checkType'>
                                        <input type="checkbox" className='box' />
                                    </div>
                                    <div className='typeList'>
                                        XXL

                                    </div>
                                </div>
                                <div className='typeItem'>
                                    <div className='checkType'>
                                        <input type="checkbox" className='box' />
                                    </div>
                                    <div className='typeList'>
                                        XXL
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='typeContainer'>
                        <div className='typeText'>
                            Price
                        </div>
                        <div className='typeItems'>
                            <div className='typeHolder'>
                                <div className='typeItem'>
                                    <div className='checkType'>
                                        <input type="checkbox" className='box' />
                                    </div>
                                    <div className='typeList'>
                                        1000₹
                                    </div>
                                </div>
                                <div className='typeItem'>
                                    <div className='checkType'>
                                        <input type="checkbox" className='box' />
                                    </div>
                                    <div className='typeList'>
                                        2000₹
                                    </div>
                                </div>
                                <div className='typeItem'>
                                    <div className='checkType'>
                                        <input type="checkbox" className='box' />
                                    </div>
                                    <div className='typeList'>
                                        3000₹
                                    </div>
                                </div>
                                <div className='typeItem'>
                                    <div className='checkType'>
                                        <input type="checkbox" className='box' />
                                    </div>
                                    <div className='typeList'>
                                        4000₹
                                    </div>
                                </div>
                                <div className='typeItem'>
                                    <div className='checkType'>
                                        <input type="checkbox" className='box' />
                                    </div>
                                    <div className='typeList'>
                                        5000₹
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='applyContainer'>
                    <div className='applyDiv'>
                        <button className='applyButton'>
                            Apply
                        </button>
                    </div>
                    <div className='deleteDiv'>
                        <button className='deleteButton'>
                            <AiTwotoneDelete />

                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Left;