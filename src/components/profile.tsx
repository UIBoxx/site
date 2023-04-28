import "../CSS/main.css";
import pp from "../assets/pp.jpg";

function MyProfile() {
  return (
    <div className="profile-body">
      <div className="profile-card">
        <div className="card-img">
          <img src={pp} />
        </div>

        <div className="desc">
          <h6 className="primary-text">Prabin Bhatt</h6>
          <h6 className="secondary-text">Frontend Developer</h6>
        </div>
        <a href="mailto: contact@prabinbhatt.com.np"><button className="primary-text">Hire Me</button></a>
      </div>
    </div>
  );
}

export default MyProfile;
