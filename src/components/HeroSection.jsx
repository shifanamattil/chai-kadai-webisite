import React from "react";
import "./HeroSection.css";
import juiceImage from "../assets/juice.png"; // Replace with actual juice image path
import chickenImage from "../assets/chicken1.png"; // Replace with actual chicken image path
// import food1 from "../assets/food1.jpg";
// import food2 from "../assets/food2.jpg"; // Replace with actual food images
// import food3 from "../assets/food3.jpg";
// import food4 from "../assets/food4.jpg";




function HeroSection() {
    return (
        <div className="hero">
            <div className="starting-section">
                <div className="hero-content">
                    <p className="subheading">SPECIAL FOR YOUR BEST CHOICE</p>
                    <h1 className="heading">
                        DELICIOUS FOOD <br />
                        NEAR YOUR TOWN
                    </h1>
                    <p className="description">
                        Welcome to our Chai Kadai, where every dish tells a story and every bite is an adventure at our food website.
                    </p>
                    <button className="get-started-btn">Get Started</button>
                </div>
                <div className="hero-images">
                    <img src={juiceImage} alt="Juice" className="juice-img" />
                    <img src={chickenImage} alt="Chicken" className="chicken-img" />
                </div>
            </div>
            <div className="flowing-background"></div>
            {/* SVG Divider */}
            {/* <div className="svg-divider">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#000000"
                        fillOpacity="1"
                        d="M0,128L6.2,144C12.3,160,25,192,37,181.3C49.2,171,62,117,74,106.7C86.2,96,98,128,111,122.7C123.1,117,135,75,148,58.7C160,43,172,53,185,74.7C196.9,96,209,128,222,149.3C233.8,171,246,181,258,154.7C270.8,128,283,64,295,74.7C307.7,85,320,171,332,176C344.6,181,357,107,369,112C381.5,117,394,203,406,197.3C418.5,192,431,96,443,90.7C455.4,85,468,171,480,218.7C492.3,267,505,277,517,240C529.2,203,542,117,554,101.3C566.2,85,578,139,591,170.7C603.1,203,615,213,628,186.7C640,160,652,96,665,85.3C676.9,75,689,117,702,133.3C713.8,149,726,139,738,117.3C750.8,96,763,64,775,58.7C787.7,53,800,75,812,96C824.6,117,837,139,849,160C861.5,181,874,203,886,208C898.5,213,911,203,923,208C935.4,213,948,235,960,229.3C972.3,224,985,192,997,149.3C1009.2,107,1022,53,1034,53.3C1046.2,53,1058,107,1071,154.7C1083.1,203,1095,245,1108,266.7C1120,288,1132,288,1145,282.7C1156.9,277,1169,267,1182,224C1193.8,181,1206,107,1218,80C1230.8,53,1243,75,1255,122.7C1267.7,171,1280,245,1292,277.3C1304.6,309,1317,299,1329,256C1341.5,213,1354,139,1366,128C1378.5,117,1391,171,1403,186.7C1415.4,203,1428,181,1434,170.7L1440,160L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"
                    ></path>
                </svg>
            </div> */}

            {/* Are You Hungry Section */}
            {/* <div className="are-you-hungry">
                <h2>ARE YOU HUNGRY?</h2>
                <div className="food-items">
                    <div className="food-card">
                        <img src={food1} alt="Fresh Strawberry Juice" />
                        <h3>Fresh Strawberry Juice</h3>
                        <p>⭐⭐⭐⭐⭐</p>
                    </div>
                    <div className="food-card">

                        <img src={food2} alt="Multi Loaded Burger" />
                        <h3>Multi Loaded Burger</h3>
                        <p>⭐⭐⭐⭐⭐</p>

                    </div>
                    <div className="food-card">
                        <img src={food3} alt="Full Chicken Tandoori" />
                        <h3>Full Chicken Tandoori</h3>
                        <p>⭐⭐⭐⭐⭐</p>
                    </div>
                    <div className="food-card">
                        <img src={food4} alt="Full Chicken Tandoori" />
                        <h3>Full Chicken Tandoori</h3>
                        <p>⭐⭐⭐⭐⭐</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default HeroSection;