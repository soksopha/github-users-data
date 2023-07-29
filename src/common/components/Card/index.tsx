import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import { getOne } from "../../../services/users";
import UserData from "../../../types/user";
import "./index.css";

interface CardProps {
  userLogin: string;
  users: UserData[];
  index: number;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  borderWidth: 0,
  color: theme.palette.text.secondary
}));

const Card: React.FC<CardProps> = ({
  userLogin,
  users,
  index
}) => {
  const [data, setData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (userLogin) {
          const result = await getOne(userLogin);
          users[index].name = result.name;
          users[index].company = result.company;
          
          //set specific key
          setData({
            id: result.id,
            login: result.login,
            company: result.company,
            html_url: result.html_url,
            name: result.name,
            avatar_url: result.avatar_url,
            following: result.following,
            followers: result.followers
          });
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, [userLogin, users, index]);

  const defaultAvatar = "../../../git-hub.png";
  
  if (!data) {
    return null;
  }
  
  return (
    <Grid item lg={3} xl={3} md={3} sm={6} xs={12} key={index}>
      <Link href={`${data.html_url}`} target="_blank" underline="none">
        <Item>
          <div className="card-item">
            <div className="cover"></div>
            <div className="card-img-wrapper">
              <Avatar
                alt={data.name}
                src={data.avatar_url || defaultAvatar}
                className="avartar-img"
              />
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
        </Item>
      </Link>
    </Grid>
  );
};

export default Card;
