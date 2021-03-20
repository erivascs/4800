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
                        <div className="list">
                            <div><Link to="/" className="link">Walmart</Link></div>
                            <div><Link to="/" className="link">Ralphs</Link></div>
                            <div><Link to="/" className="link">Food4Less</Link></div>
                        </div>
                    </div>
                    {/*Column 2 */}
                    <div className="column">
                        <h4>Get to Know Us</h4>
                        <div className="list">
                            <div><Link to="/" className="link">About Us</Link></div>
                            <div><Link to="/" className="link">Careers</Link></div>
                            <div><Link to="/" className="link">Blog</Link></div>
                        </div>
                    </div>
                    {/*Column 3 */}
                    <div className="column">
                        <h4>More Options</h4>
                        <div className="list">
                            <div><Link to="/" className="link">FAQs</Link></div>
                            <div><Link to="/" className="link">Gift Cards</Link></div>
                        </div>
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