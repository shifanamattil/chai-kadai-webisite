import React from "react";
import "./Section2.css";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import food4 from "../assets/food4.jpg";
import food5 from "../assets/curry.jpg";
import food6 from "../assets/fish items.jpg";
import food7 from "../assets/meals.jpg";
import food8 from "../assets/prouns.jpg";



function Section2() {
    return (
        <div className="are-you-hungry">
            <h2>ARE YOU HUNGRY?</h2>
            <div className="food-items">
                <div className="food-card">
                    <img src={food5} alt="Fish curry" />
                    <h3>Fish curry</h3>
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
                <div className="food-card">
                    <img src={food6} alt="Fresh Strawberry Juice" />
                    <h3>Fish</h3>
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
                <div className="food-card">
                    <img src={food7} alt="Fresh Strawberry Juice" />
                    <h3>Meals</h3>
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
                <div className="food-card">
                    <img src={food8} alt="Fresh Strawberry Juice" />
                    <h3>Prawns</h3>
                    <p>⭐⭐⭐⭐⭐</p>
                </div>

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
        </div>

    );
}



export default Section2