import React, { useState, useEffect } from "react";
import Card from "./common/components/Card";
// import SearchInput from "./common/components/SearchInput";
import Spinner from "./common/components/Spinner";
import Header from "./common/layout/Header";
import { getMany, getOne, UserData } from "./services/users";
import "./app.css";

const App: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getMany();
        if (response) {
          const usersWithFullNames = await Promise.all(
            response.map(async (user: UserData) => {
              const userResponse = await getOne(user);
              return userResponse;
            })
          );
          setUsers(usersWithFullNames);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Failed to fetch users:", error);
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <Header />
      {/* <SearchInput onSearch={(value) => console.log(value)} /> */}
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="card-container">
            {users.map((user: UserData, index: number) => (
              <Card
                avatar={user.avatar_url}
                numberFollowing={user.following}
                numberFollower={user.followers}
                key={index}
                fullName={user.login}
                companyName={user.company}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;