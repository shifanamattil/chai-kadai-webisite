import React from "react";
import "./Feedback.css";

import girl from "../assets/img_testi_five_left_png.png";
import girl1 from "../assets/girl1.jpeg";
import girl2 from "../assets/girl2.jpeg";
import girl3 from "../assets/girl3.jpeg";

import juice from "../assets/img_testi_five_right_png (1).png"
import orange from "../assets/orange-decor.png";
import customer from "../assets/costomer-decor.png";
import strawberry from "../assets/strawberryy.png"


const FeedbackSection = () => {
    return (
        <div className="feedback-section">
            <div className="title-container">
                <h5 className="small-title">CUSTOMER FEEDBACK</h5>
                <h2 className="feedback-title">WE'VE LOT'S OFF HAPPY CUSTOMER <br /> EXPLORE OUR FEEDBACK</h2>
                
            </div>

            <div className="feedback-container">

                <div className="left-section">
                    <img
                        src={girl} alt="Customer" className="customer-img"/>
                    <div className="orange-decor">
                        <img src={orange} alt="Orange" />
                    </div>
                    <div className="customer-decor">
                        <img src={customer} alt="customer-iamge" />
                    </div>
                </div>


                <div className="middle-section">
                    <div className="profile-icons">
                        <img src={girl1} alt="Icon 1" />
                        <img src={girl2} alt="Icon 2" />
                        <img src={girl3} alt="Icon 3" />
                    </div>
                    <div className="feedback-text">
                        <p>
                            Renowned for its versatility in the kitchen Red can <br />be prepared
                            various ways from simple steaming <br />boiling to elaborate
                            preparations such
                        </p>
                        <span className="customer-name">SALVADOR I. BURTON</span>
                        <span className="customer-role">Customer</span>
                    </div>
                    <div className="pagination">
                        <span className="dot active"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>


                <div className="right-section">
                    <img
                        src={juice}
                        alt="Juice"
                        className="juice"
                    />
                    <div className="strawberry-decor">
                        <img src={strawberry} alt="" className="strawberry" />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default FeedbackSection;
