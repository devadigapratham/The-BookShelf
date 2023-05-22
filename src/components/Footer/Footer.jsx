import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    Connecting avid readers for peer-to-peer book lending and selling. Discover, borrow, and share stories within our vibrant community. Join us in celebrating the joy of reading and building connections through the power of books.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            PES University Electronic City Campus, Konappana Agrahara, Electronic City, Bengaluru, Karnataka-560100
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 0471 272 0261</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: sample@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Genres</div>
                    <span className="text">Mystery/Thriller</span>
                    <span className="text">Fantasy</span>
                    <span className="text">Romance</span>
                    <span className="text">Science Fiction</span>
                    <span className="text">Historical Fiction</span>
                    <span className="text">Self-help</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        The BookShelf, Created 2023 - Enriching Minds, One Book at a Time
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
