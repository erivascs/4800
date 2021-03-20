import React from 'react'
import './css/Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    {/*Column 1 */}
                    <div className="column">
                        <h4>Top Grocery Stores</h4>
                        <ul className="list">
                            <li><Link to="/" className="link">Walmart</Link></li>
                            <li><Link to="/" className="link">Ralphs</Link></li>
                            <li><Link to="/" className="link">Food4Less</Link></li>
                        </ul>
                    </div>
                    {/*Column 2 */}
                    <div className="column">
                        <h4>Get to Know Us</h4>
                        <ul className="list2">
                            <li><Link to="/" className="link">About Us</Link></li>
                            <li><Link to="/" className="link">Careers</Link></li>
                            <li><Link to="/" className="link">Blog</Link></li>
                        </ul>
                    </div>
                    {/*Column 3 */}
                    <div className="column">
                        <h4>More Options</h4>
                        <ul className="list3">
                            <li><Link to="/" className="link">FAQs</Link></li>
                            <li><Link to="/" className="link">Gift Cards</Link></li>
                        </ul>
                    </div>
                    {/*Column 4 */}
                    <div className="column">
                        <h4>Mobile App</h4>
                        <div className="googlePlay"></div>
                        <div className="appStore"></div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="column2">
                        &copy;{new Date().getFullYear()} Wiggly Worms LLC | All rights reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Footer;