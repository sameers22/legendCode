import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/restaurant_hero.jpg'; // Ensure this image exists in assets
import mapImage from '../assets/map.jpg'; // Placeholder for the location map
import dish1 from '../assets/dish1.jpg';
import dish2 from '../assets/dish2.jpg';
import dish3 from '../assets/dish3.jpg';

const Home = () => {
    return (
        <div className="home-page">
            {/* Navigation Bar */}
            <nav className="navbar">
                <div className="logo">
                    <Link to="/">🍽 Legend Cookhouse</Link>
                </div>
                <ul className="nav-links">
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/account">Account</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/legendfamily">Legend Family</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>

            {/* Hero Section */}
            <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="hero-text">
                    <h1>Welcome to Legend Cookhouse</h1>
                    <p>Bringing authentic flavors to your table. Experience culinary excellence.</p>
                    <div className="buttons">
                        <Link to="/menu" className="btn">Explore Menu</Link>
                        <Link to="/contact" className="btn btn-alt">Reserve a Table</Link>
                    </div>
                </div>
            </div>

            {/* Our Story Section */}
            <section className="our-story">
                <h2>Our Story</h2>
                <p>Legend Cookhouse is where tradition meets innovation. Our chefs craft exquisite dishes with bold flavors and fresh ingredients.</p>
            </section>

            {/* Featured Dishes Section */}
            <section className="featured-section">
                <h2>Menu Highlights</h2>
                <div className="featured-grid">
                    <div className="dish">
                        <img src={dish1} alt="Signature Spiced Chicken" />
                        <h3>Signature Spiced Chicken</h3>
                    </div>
                    <div className="dish">
                        <img src={dish2} alt="Gourmet Shrimp Delight" />
                        <h3>Gourmet Shrimp Delight</h3>
                    </div>
                    <div className="dish">
                        <img src={dish3} alt="Chef’s Special Rice Bowl" />
                        <h3>Chef’s Special Rice Bowl</h3>
                    </div>
                </div>
                <Link to="/menu" className="btn">View Full Menu</Link>
            </section>

            {/* Visit Us Section */}
            <section className="visit-us">
                <h2>Visit Us</h2>
                <p>Come and experience our flavors in person! Find us at:</p>
                <p><strong>Legend Cookhouse, 123 Food Street, Your City</strong></p>
                <img src={mapImage} alt="Restaurant Location" className="map" />
                <Link to="/contact" className="btn">Get Directions</Link>
            </section>

            {/* Customer Testimonials */}
            <section className="testimonials">
                <h2>What Our Customers Say</h2>
                <div className="testimonial">
                    <p>"Amazing food and great atmosphere. A must-visit spot!"</p>
                    <strong>- John Doe</strong>
                </div>
                <div className="testimonial">
                    <p>"The best dining experience I've had in a long time. Highly recommend!"</p>
                    <strong>- Jane Smith</strong>
                </div>
            </section>

            {/* Social Media Section */}
            <section className="social-media">
                <h2>Follow Us</h2>
                <p>Stay updated with our latest offers and events!</p>
                <div className="social-icons">
                    <a href="https://facebook.com/legendcookhouse" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
                    <a href="https://instagram.com/legendcookhouse" target="_blank" rel="noopener noreferrer">📷 Instagram</a>
                    <a href="https://tiktok.com/@legendcookhouse" target="_blank" rel="noopener noreferrer">🎵 TikTok</a>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2025 Legend Cookhouse. All rights reserved.</p>
            </footer>

            {/* Styles */}
            <style jsx>{`
                .home-page {
                    font-family: Arial, sans-serif;
                    text-align: center;
                }
                .navbar {
                    display: flex;
                    justify-content: space-between;
                    padding: 1rem 2rem;
                    background-color: #222;
                    color: white;
                }
                .nav-links {
                    list-style: none;
                    display: flex;
                    gap: 15px;
                }
                .nav-links li a {
                    color: white;
                    text-decoration: none;
                    font-size: 1rem;
                }
                .hero {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 400px;
                    background-size: cover;
                    background-position: center;
                    color: white;
                    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
                }
                .featured-section, .visit-us, .testimonials, .social-media {
                    padding: 2rem;
                    background-color: #f8f8f8;
                }
                .featured-grid {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                }
                .dish img, .map {
                    width: 200px;
                    height: 150px;
                    border-radius: 10px;
                }
                .testimonial {
                    background-color: #f0f0f0;
                    padding: 1rem;
                    margin: 10px auto;
                    max-width: 400px;
                    border-radius: 10px;
                }
                .social-icons a {
                    display: inline-block;
                    margin: 0 10px;
                    text-decoration: none;
                    color: #d35400;
                }
                .footer {
                    background-color: #222;
                    color: white;
                    padding: 1rem;
                    margin-top: 20px;
                }
            `}</style>
        </div>
    );
};

export default Home;
