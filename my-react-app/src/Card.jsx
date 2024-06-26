// In jsx class is reserved keyword , className is used 
import profilePic from "./assets/profile.jpg"
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic}alt="profile picture"></img>
            <h2 className="card-title">Kirito</h2>
            <p className="card-text">I Study comp sci and play video Games</p>
        </div>
    );
}

export default Card