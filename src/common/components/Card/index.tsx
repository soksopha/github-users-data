import React from "react";
import "./style.css";

interface CardProps {
  avatar?: string;
  fullName?: string;
  companyName?: string;
  numberFollower?: number;
  numberFollowing?: number;
}

const Card: React.FC<CardProps> = ({
  avatar,
  fullName,
  companyName,
  numberFollower,
  numberFollowing
}) => {
  const defaultAvatar = "../../../git-hub.png";
  
  return (
    <div className="card-item">
        <div className="cover"></div>
        <div className="card-img-wrapper">
          <img src={avatar || defaultAvatar} alt="" />
        </div>
      <div className="title-wrapper">
          <div className="card-title">
            <h1>{fullName || "N/A"}</h1>
          </div>
          <div className="card-position">
            <p>{companyName || "N/A"}</p>
          </div>
      </div>
      <div className="card-footer">
          <div className="box-wrapper">
              <div className="count">{numberFollower}</div>
              <div className="box-text">Followers</div>
          </div>   
          <div className="box-wrapper">
              <div className="count">{numberFollowing}</div>
              <div className="box-text">Following</div>
          </div>  
      </div>
    </div>
  );
};

Card.defaultProps = {
  numberFollower: 0,
  numberFollowing: 0
};

export default Card;


