import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>Book Rent/Selling </h1>
                    <p>
                    Your platform for peer-to-peer book lending and selling. Connect with fellow readers, discover new titles, and share your favorite stories. Empowering book lovers to exchange knowledge and build a community through the love of literature. Join us in unlocking a world of literary connections and adventures
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
