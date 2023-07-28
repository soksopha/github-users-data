import React, { memo, useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from '@mui/material/Avatar';
import { styled } from "@mui/material/styles";
import { getOne } from "../../../services/users";
import UserData from "../../../types/user";
import "./index.css";

interface CardProps {
  user: UserData;
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

const Card: React.FC<CardProps> = memo(({
  user,
  users,
  index
}) => {
  const [data, setData] = useState(user);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await getOne(user.login);
        users[index].name = result.name;
        users[index].company = result.company;
        
        setData(result);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const defaultAvatar = "../../../git-hub.png";

  return (
    <Grid key={index} item lg={3} xl={3} md={3} sm={6} xs={12}>
      <Item key={index}>
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
    </Grid>
  );
});

export default Card;


