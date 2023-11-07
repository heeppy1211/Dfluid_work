import axios from 'axios';
import '../css/App.css';
import '../css/common.css';
import icn1 from '../images/icn-paperplane.png';
import { useEffect, useState } from 'react';

function NewsletterBox() { 


    return (
        <section className="sec02">
            <h2 className="h2">Sed ut perspiciatis unde omnis</h2>
            <div className="conts">
                There are many variations of passages of Lorem Ipsum available, 
                but the majority have suffered alteration in some form, by injected humour, 
                or randomised words which don't look even slightly believable. 
                If you are going to use a passage of Lorem Ipsum, 
                you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
            </div>
            <p className='sub'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
                by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, 
                you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
            </p>
            <div className="newsletter-wrap">
                <h3 className="h3">Subscribe to our newsletter</h3>
                <form>
                    <div className="email-input-container">
                        <div className="email-input-wrap is-err">
                            <input type="email" name='email' className="email-input" placeholder="Enter your email"/>
                            <button className="send-btn">
                                <img src={icn1} className='icn-paperplane'/>
                            </button>
                            <p className="text-err">Please enter a valid email!</p>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default NewsletterBox;
