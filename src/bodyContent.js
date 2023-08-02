import Frequent from "./frequent"
export default function BodyContent() {

    return (
        <>
            <div className="body">
                <div className="bodyCover">
                    <div className="tv-text">
                        <p className="fn">Enjoy on your TV</p>
                        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div>
                    <div className="tv-play">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="bodyCover">
                    <div className="tv-text">
                        <p className="fn">Download your shows to watch offline</p>
                        <p>Save your favorites easily and always have something to watch.</p>
                    </div>
                    <div className="tv-play">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="bodyCover">
                    <div className="tv-text">
                        <p className="fn">Watch everywhere</p>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="bodyCover">
                    <div className="tv-text">
                        <p className="fn">Create profile for kids</p>
                        <p>Send kids on adventures with their favorite characters in a space made just for them free with your membership.</p>
                    </div>
                    <div className="tv-play">
                        <img src="https://occ-0-5542-300.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55" alt="" />
                    </div>
                </div>
            </div>
           <Frequent/>
        </>

    )
}