import Form from "./form"
export default function Navbar() {

    return (
        <div className="navbar" >
            <div className="img-bg">
                <img src="bg.jpg" alt="" />
            </div>
            <div className="img-cover">
                <div className="img-content">
                    <div className="img-text">
                        <p className="bigText"> Unlimited movies, TV shows, and more</p>
                        <p className="medText"> Watch anywhere. Cancel anytime.</p>
                        <p className="medText"> Ready to watch? Enter your email to create or restart your membership.</p>
                    </div>
                    <Form />
                </div>

            </div>
        </div>

    )
}                                               