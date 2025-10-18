import React from "react";
import logo from '../images/Logo .svg';

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt="Company Logo" />
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div>
                    <h3>Important links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Services</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 123 Jaipur, Rajasthan</li>
                        <li>Phone: <br/> +91 935264XXXX</li>
                        <li>Email: <br/> littleLemon@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;