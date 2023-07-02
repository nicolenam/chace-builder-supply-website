import "../styles/About.scss";
import Support from './Support';
import Payment from './Payment';

import Text from "./Text";

const About = () =>{
    return(
        <>
        <section className="about">
            <div className="aboutContainer">
                <h1>Chace Building Supply</h1>
            </div>
            <div className="location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.2245495232055!2d-71.934847640827!3d41.93102598816592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e42773292aa979%3A0x5276ec279c3b0a1c!2s90%20Somers%20Turnpike%2C%20Putnam%2C%20CT%2006260%2C%20USA!5e0!3m2!1sen!2sca!4v1688266538456!5m2!1sen!2sca" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="locationDetails">
                    <h2>Location</h2>
                    <div class="sc-bdfBwQ sc-gbHxpA cIKpxU hjQVrM"><div><p class="sc-hOqqkJ cWGOwq">Chace Building Supply</p><p class="sc-hOqqkJ cWGOwt">90 Somers Turnpike</p><p class="sc-hOqqkJ cWGOwt">Woodstock, CT 06281</p></div><div><p class="sc-hOqqkJ cWGOwt">Phone: 1 (437) 747-8473</p><a href="mailto:info@chacebuildingsupply.com"><p color="#12856e" class="sc-hOqqkJ hsIUPC">info@chacebuildingsupply.com</p></a></div><div><p class="sc-hOqqkJ cWGOwq">Store Hours</p><p class="sc-hOqqkJ cWGOwt">Mon-Fri 8 AM - 4 PM</p><p class="sc-hOqqkJ cWGOwt">Sat 9 AM - 12 PM</p><p class="sc-hOqqkJ cWGOwt">Sun CLOSED</p></div><a class="sc-cjHJEj kQbLAY"><p color="#12856e" class="sc-hOqqkJ hsIUPC">Change Location</p></a></div>
                </div>
            </div>
        </section>
        <Support />
        <Payment />
        <Text />
        </>
    )
}

export default About;