import React, { useEffect, useState, memo } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import { getOne } from "../../services/users";
import { formatNumberToK } from "../../utils/helpers";
import SkeletonCard from "../Skeleton";
import UserData from "../../types/user";
import "./style.css";

interface CardProps {
  userLogin: string;
  users: UserData[];
  index: number;
}

const CardItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  borderWidth: 0
}));

const Card: React.FC<CardProps> = ({ userLogin, users, index }) => {
  const [data, setData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (userLogin) {
          const result = await getOne(userLogin);
          users[index].name = result.name;
          users[index].company = result.company;
          
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
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, [userLogin, users, index]);

  const defaultAvatarSrc = "../../../git-hub.png";
  
  if (!data || isLoading) {
    return <SkeletonCard />
  }
  
  return (
    <Grid item lg={3} xl={3} md={3} sm={6} xs={12} key={index}>
      <Link href={data.html_url} target="_blank" underline="none">
        <CardItem>
          <div className="card-item">
            <div className="cover"></div>
            <div className="card-img-wrapper">
              <Avatar
                alt={data.name}
                sizes="60"
                src={data.avatar_url || defaultAvatarSrc}
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
                    <div className="count">{formatNumberToK(data.followers)}</div>
                    <div className="box-text">Followers</div>
                </div>   
                <div className="box-wrapper">
                    <div className="count">{formatNumberToK(data.following)}</div>
                    <div className="box-text">Following</div>
                </div>  
            </div>
          </div>
        </CardItem>
      </Link>
    </Grid>
  );
};

export default memo(Card);
