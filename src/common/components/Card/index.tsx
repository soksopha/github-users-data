import React, { memo, useEffect, useState } from "react";
import { UserData, getOne } from "../../../services/users";
import "./style.css";

interface CardProps {
  user: UserData;
  index: number;
  users: UserData[];
}

const Card: React.FC<CardProps> = memo(({
  user,
  index,
  users
}) => {
  const defaultAvatar = "../../../git-hub.png";
  const [data, setData] = useState(user);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await getOne(user.login);
        users[index].name = result.name;
        setData(result);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  });

  return (
    <div className="card-item">
        <div className="cover"></div>
        <div className="card-img-wrapper">
          <img src={data.avatar_url || defaultAvatar} alt="" />
        </div>
      <div className="title-wrapper">
          <div className="card-title">
            <h1>{data.name || "N/A"}</h1>
          </div>
          <div className="card-position">
            <p>{data.company || "N/A"}</p>
          </div>
      </div>
      <div className="card-footer">
          <div className="box-wrapper">
              <div className="count">{data.followers}</div>
              <div className="box-text">Followers</div>
          </div>   
          <div className="box-wrapper">
              <div className="count">{data.following}</div>
              <div className="box-text">Following</div>
          </div>  
      </div>
    </div>
  );
});

export default Card;


