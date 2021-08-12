import './SplashPage.css'
import curling from '../../images/man-curling.jpg'
import cleaning from '../../images/girl-cleaning-weight.jpg'
import kettle from '../../images/work-out-in-a-gym-in-a-mask-sunday-edit.jpg'
import plank from '../../images/guy-running-in-place.jpg'


function Homepage(){

    return(
    <div className="bg-container">
        <div className="bg-text"></div>
        <div className="splash-search">
            <input className="search-input" type="text" placeholder="Find an exercise for you" />
            <button className="search-btn">Search</button>
        </div>
        <div className="splash-footer">
            <div className="splash-footer-container">
                <h2 className="splash-header" color="red">
                    Find the Best Exercise for You
                </h2>
                <div className="splash-footer-img-container">
                    <div className="splash-footer-img-box">
                        <img className="splash-footer-img" src={curling}/>
                        <p>Bicep Curl</p>
                    </div>
                    <div className="splash-footer-img-box">
                        <img className="splash-footer-img" src={cleaning}/>
                        <p>Cleans</p>
                    </div>
                    <div className="splash-footer-img-box">
                        <img className="splash-footer-img" src={kettle}/>
                        <p>Kettlebell Swing</p>
                    </div>
                    <div className="splash-footer-img-box">
                        <img className="splash-footer-img" src={plank}/>
                        <p>Running Plank</p>
                    </div>
                </div>
            </div>

        </div>
    </div>

    )
}

export default Homepage
