import Link from "next/link"
import Header from "../components/Header"
import Footer from '../components/Footer'

export default function developmentPrograms() {
    return (
        <>
            <Header />
            <section className='content-section'>
                <h1 className="title title-large">Development Programs</h1>
                <div className="container container-green">
                    <h2>Winter 2022/Spring 2023</h2>
                    <br />
                    <h3>Winter/Spring Segment Starts November 7th 2022 until April 15th 2023</h3>
                    <br />
                    <p> Trainings are held at the Sandbar in SLC</p>
                    <br />
                    <h4>Benefits of PBU DEV:</h4>
                    <br />
                    <ul>
                        <li>AVP Silver Membership reimbursed</li>
                        <li>Gear</li>
                        <li>Personal workout program</li>
                        <li>Internal rankings for cash prizes and bonuses at the end of the segment</li>
                        <li>Training camps </li>
                        <li>Actvites & events</li>
                        <li>Inter-squad tournaments</li>
                        <li>Sponsorship opportunities & Product Sponsorships</li>
                    </ul>
                </div>
                <div className="container container-blue">
                    <h3>Development Squad Part-Time</h3>
                        <br />
                    <p>A/AA/Open Level Training @ The Sandbar in SLC T or TH 6-8 AM</p>
                    <br />
                    <p>$120/Month</p>
                    <p>*Billed every 7th of the month*</p>
                    <br />
                    <button className="btn">Register</button>
                </div>
                <div className="container container-pink">
                    <h3>Developmental Squad Full-Time</h3>
                    <br />
                    <p>A/AA/Open Level Training @ The Sandbar in SLC T or TH 6-8 AM</p>
                    <br />
                    <p>$215/Month</p>
                    <p>*Billed every 7th of the month*</p>
                    <br />
                    <button className="btn">Register</button>
                </div> 
                <div className="container container-green">
                    <h3>Drop-in</h3>
                    <p>A/AA/Open Level Training @ The Sandbar in SLC T or TH 6-8 AM</p>
                    <br />
                    <p>$35/Day</p>
                    <br />
                    <button className="btn">Register</button>
                </div>
            </section>
            <Footer />
        </>
    )
}