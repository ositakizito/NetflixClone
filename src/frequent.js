import { useState } from "react"
export default function Frequent() {

     const [show, setShow] = useState(false);
     const [show1, setShow1] = useState(false);
     const [show2, setShow2] = useState(false);
     const [show3, setShow3] = useState(false);
     const [show4, setShow4] = useState(false);
     const [show5, setShow5] = useState(false);
     
    return (
        <>
            <div className="body">
                <div className="bodyCover nt">
                    <div className="tv-text">
                        <p className="fn">Frequently Asked Questions</p>
                    </div>

                    <div className="covered">
                        <div className="navcover">
                            <div className="net">
                                What is Netflix?
                            </div>
                            <div className="font">
                                <button onClick={()=> setShow(!show)}><i className="fa fa-plus"></i></button>
                            </div>
                        </div>
                        { show && <div className="coverbelow">
                            <div className="coverText">
                                <p>Netflix is a streamingNetflix is a streamingNetflix is a streaming services</p>
                            </div>
                        </div>}
                     
                    </div>
                    <div className="covered">
                        <div className="navcover">
                            <div className="net">
                                How much does Netflix cost?
                            </div>
                            <div className="font">
                                <button onClick={()=> setShow1(!show1)}><i className="fa fa-plus"></i></button>
                            </div>
                        </div>
                        { show1 && <div className="coverbelow">
                            <div className="coverText">
                                <p>What Netflix on your smartphone,tablet,smartTV,laptop, or 
                                    streaming device, all for one fixed monthly fee. Plans range from #1,200 to #4,400 a month. No extra costs, no contracts. </p>
                            </div>
                        </div>}
                     
                    </div>
                    <div className="covered">
                        <div className="navcover">
                            <div className="net">
                                Where can i watch?
                            </div>
                            <div className="font">
                                <button onClick={()=> setShow2(!show2)}><i className="fa fa-plus"></i></button>
                            </div>
                        </div>
                        { show2 && <div className="coverbelow">
                            <div className="coverText">
                                <p>Watch anywhere, anytime. Sign in with your 
                                    Netflix account to watch instantly on the web at netflix.com 
                                    from your personal computer or device that offers the Netflix app, 
                                    including smart TVs, smartphones, tablets, streaming media players and 
                                    game consoles</p>
                                    <p style={{marginTop: '20px'}}>You can also download your favorite shows with the IOS, 
                                    Android, or windowa 10 app. Use downloads to watch while you're on the 
                                    go and without an internet connection. Take Netflix with you anywhere.</p>
                            </div>
                        </div>}
                     
                    </div>
                    <div className="covered">
                        <div className="navcover">
                            <div className="net">
                               How do i cancel?
                            </div>
                            <div className="font">
                                <button onClick={()=> setShow3(!show3)}><i className="fa fa-plus"></i></button>
                            </div>
                        </div>
                        { show3 && <div className="coverbelow">
                            <div className="coverText">
                                <p>Netflix is flexible. There are no pesky contracts and no commitments. 
                                    You can easily cancel your account online in two clicks. 
                                    There are no cancellation to fees - Start or stop your account anytime</p>
                            </div>
                        </div>}
                     
                    </div>
                    <div className="covered">
                        <div className="navcover">
                            <div className="net">
                                What can i watch on Netflix?
                            </div>
                            <div className="font">
                                <button onClick={()=> setShow4(!show4)}><i className="fa fa-plus"></i></button>
                            </div>
                        </div>
                        { show4 && <div className="coverbelow">
                            <div className="coverText">
                                <p>Netflix has an extensive library of feature films, documentaries, 
                                    TV shows, anime, award-wining Netflix originals, and more.
                                    Watch as much as you want, anytime you want
                                </p>
                            </div>
                        </div>}
                     
                    </div>
                    <div className="covered">
                        <div className="navcover">
                            <div className="net">
                                Is Netflix? good for Kids?
                            </div>
                            <div className="font">
                                <button onClick={()=> setShow5(!show5)}><i className="fa fa-plus"></i></button>
                            </div>
                        </div>
                        { show5 && <div className="coverbelow">
                            <div className="coverText">
                            <p>The Netflix kids experience is included n 
                                your membership to give parents control 
                                while kids enjoy family-friendly TV shows 
                                and movies in their own space</p>
                                    <p style={{marginTop: '20px'}}>Kids profiles come with PIN-protected 
                                    parental controls that let you restrict the maturity rating of 
                                    content kids can watch and block specific titles you don't 
                                    wants kids to see.</p>
                            </div>
                        </div>}
                     
                    </div>
                </div>
                <div className="form">
                    <p style={{marginBottom: 10}}>Ready to watch? enter your Email to create or restart your membeship</p>
                    
                    <input type="text" placeholder="Email address" />
                    <input type="submit" className="btn" value="Get Started" />
                </div>
            </div>
          
        </>
    )
}