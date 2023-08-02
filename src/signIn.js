import { Link } from "react-router-dom"
export default function SignIn() {

    return (
        <>
            <div className="sign">

                <Link to="/">
                  <img src="logo.svg" alt=""></img>
                </Link>
                <div className="form">
                    <p className="sn">Sign In</p>
                    <form>
                        <input type="text" placeholder="Email or phone number"></input>
                        <input type="password" placeholder="Password"></input>
                        <input type="submit" value="Sign In" className="btn"></input>
                        <div className="check">
                            <div className="cr">
                                <input type="checkbox"></input>Remember me
                            </div>
                            <p>Need help?</p>
                        </div>
                    </form>
                    <div className="ns">
                        <div className="new">
                            <p style={{color: 'gray',marginRight: 4}}>New to Netflix?</p>
                            <p> Sign up now</p>
                        </div>
                        <div className="goog">
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. <p>Learn more</p>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <div className="foot">
                        Question? Contact Us
                    </div>
                </div>
            </div>
        </>

    )
}