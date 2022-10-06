import React from 'react'
import "../Style/contact/css/style.css"

const Contact = () => {
    return(
        <div>
            <section class="contact-area pt-80 pb-80">
                <div class="container">
                    <div class="row">
                        <div class="col-xl12 mb-60">
                            <div class="section-title text-center">
                                <h4>contact us</h4>
                                <p>You Can Contact Me !!</p>
                            </div>
                        </div>
                    </div>
                    <div class="row-input">
                        <div class="col-xl7">
                            <div class="contact-form">
                                <form action="">
                                    <input type="text" placeholder="Name" />
                                    <input type="text" placeholder="Subject" />
                                    <input type="email" placeholder="Email" />
                                    <textarea placeholder="Message"></textarea>
                                    <input type="submit" value="send" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl5">
                        <div class="contact-address">
                            <div class="single-contact">
                                <i class="fa-solid fa-location-dot"></i>
                                <h4>Address <span>Banasree Block-B, Road-5, House-21, Dhaka</span></h4>
                            </div>
                            <div class="single-contact">
                                <i class="fa-solid fa-square-phone"></i>
                                <h4>Phone<span>+880 1811178307<br/>+880 1611178307</span></h4>
                            </div>
                            <div class="single-contact">
                                <i class="fa-solid fa-envelope"></i>
                                <h4>Email<span>contact@afzal.com</span></h4>
                            </div>
                            {/* <div class="single-contact">
                                <i class="fa-solid fa-earth-asia"></i>
                                <h4>website<span>https://www.linkedin.com/in/afzal-swe/</span></h4>
                            </div> */}
                        </div>
                    </div>
                    {/* </div> */}
                    {/* <div class="button">
                        <center>
                            <span class="credit">Created By <a href="https://engrafzalhossen.com/afzal-swe">IDAB</a> | @ 2022 all right reserved.</span>
                        </center>
                    </div> */}
                </div>
            </section>
        </div>
    );
}
export default Contact;