import './right.css';
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { BiCartAlt } from "react-icons/bi";
import Profile from './profile.webp';
import { RiHome4Line } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import Filters from './Fiters';
import Card from './Card';
import Img1 from './img.png';
import React, { useState } from 'react';





const Right = () => {
    const [isEng, setisEng] = useState(false);
    const handleEngClick = () => {
        setisEng(!isEng);
    };
    const engColour = isEng ? 'rgb(226, 217, 235)' : 'white';
    const [isList, setisList] = useState(false);
    const handleListClick = () => {
        setisList(!isList);
    };
    const listColour = isList ? 'rgb(226, 217, 235)' : 'white';
    const [isCart, setisCart] = useState(false);
    const handleCartClick = () => {
        setisCart(!isCart);
    };
    const cartColour = isCart ? 'rgb(226, 217, 235)' : 'white';
    return (
        <div className="rightAppContainer">
            <div className="headContainer">
                <div className='inputContainer'>
                    <div className='inputDiv'>
                        <div className='searchTag'>
                            <CiSearch />
                        </div>
                        <input className='inputTag' placeholder='search among 1000+ products' />
                        <button className='searchButton'>
                            <div className='closeTag'>
                                <IoMdClose />

                            </div>
                        </button>
                    </div>
                </div>
                <div className='socialDiv' >
                    <div className='engDiv' onClick={handleEngClick} style={{backgroundColor:engColour}}>
                        <div className='textDiv'>
                            ENG
                        </div>
                        <div className='imgDiv'>
                            <AiOutlineGlobal />
                        </div>
                    </div>
                    <div className='engDiv' onClick={handleListClick} style={{backgroundColor:listColour}}>
                        <div className='textDiv'>
                            Wishlist
                        </div>
                        <div className='imgDiv'>
                            <CiHeart />
                        </div>

                    </div>
                    <div className='engDiv' onClick={handleCartClick} style={{backgroundColor:cartColour}}>
                        <div className='textDiv'>
                            Your Cart
                        </div>
                        <div className='imgDiv'>
                            <BiCartAlt />
                        </div>

                    </div>
                    <div className='imgDiv1'>
                        <img className='profileImg' src={Profile} />
                    </div>

                </div>
            </div>
            <div className='bodyMainContainer'>
                <div className="bodyContainer">
                    <div className='pathContainer'>
                        <div className='homeImg'>
                            <RiHome4Line />
                        </div>
                        <div className='mainPath'>

                            Main Page

                        </div>
                        <FaAngleRight />
                        <div className='mainPath'>
                            Category

                        </div>
                        <FaAngleRight />
                        <div className='mainPath'>

                            Sweatshirt

                        </div>



                    </div>
                    <div className='tittleDiv'>
                        <div className='leftName'>
                            <div className='tittleText'>
                                <h1>Sweatshirt</h1>
                            </div>
                            <div className='tagsAll'>
                                <div className='filterTags'>
                                    <Filters text="Oversize" />
                                </div>
                                <div className='filterTags'>
                                    <Filters text="Multicolour" />
                                </div>
                                <div className='filterTags'>
                                    <Filters text="XXL" />
                                </div>
                            </div>
                        </div>
                        <div className='rightName'>
                            <div className='bodyInputDiv'>
                                <input className='bodyInput' placeholder='search by most popular' />
                                <BiMenuAltRight />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cardContainer'>
                    <Card tittle="Line-Pattern Zipper Sweatshirt" price="200" image={Img1} />
                    <Card tittle="Line-Pattern Zipper Sweatshirt" price="200" image={Img1} />
                    <Card tittle="Line-Pattern Zipper Sweatshirt" price="200" image={Img1} />
                    <Card tittle="Line-Pattern Zipper Sweatshirt" price="200" image={Img1} />
                    <Card tittle="Line-Pattern Zipper Sweatshirt" price="200" image={Img1} />
                    <Card tittle="Line-Pattern Zipper Sweatshirt" price="200" image={Img1} />
                    <Card tittle="Line-Pattern Zipper Sweatshirt" price="200" image={Img1} />
                    <Card tittle="Line-Pattern Zipper Sweatshirt" price="200" image={Img1} />
                    <Card tittle="Line-Pattern Zipper Sweatshirt" price="200" image={Img1} />
                </div>
                <div className='footerConainer'>
                    <div className='footerDiv'>
                        <button className='footerButton'>
                            previous
                        </button>
                        <button className='footerButton'>
                            1
                        </button>
                        <button className='footerButton'>
                            2
                        </button>
                        <button className='footerButton one'>
                            3
                        </button>
                        <button className='footerButton one'>
                            4
                        </button>
                        <button className='footerButton one'>
                            5
                        </button>
                        <button className='footerButton one'>
                            ...
                        </button>
                        <button className='footerButton one'>
                            20
                        </button>
                        <button className='footerButton'>
                            next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Right;