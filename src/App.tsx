import React, { useState, useEffect } from "react";
import Card from "./common/components/Card";
import Loading from "./common/components/Loading";
import Header from "./common/layout/Header";
import SearchInput from "./common/components/SearchInput";
import { getMany, getOne, UserData } from "./services/users";
import Enum from "./common/enums";
import "./globalStyles/style.css";

const App: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Check if the data is already cached in localStorage
        const cachedUsers = JSON.parse(localStorage.getItem(Enum.CACHED_USERS) || "[]");

        if (cachedUsers.length > 0) {
          setUsers(cachedUsers);
          setIsLoading(false);
        } else {
          const response = await getMany();
          if (response) {
            const usersWithFullNames = await Promise.all(
              response.map(async (user: UserData) => {
                const userResponse = await getOne(user.login);
                return userResponse;
              })
            );
            setUsers(usersWithFullNames);
            // Cache the fetched user data in localStorage 
            localStorage.setItem(Enum.CACHED_USERS, JSON.stringify(usersWithFullNames));
            setIsLoading(false);
          }
        }
      } catch (error) {
        console.error("Failed to fetch users:", error);
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = (search: string) => {
   
  }

  return (
    <div>
      <Header />
      <div className="container">
        <SearchInput onSearch={filteredUsers} />
      </div>
      <div className="container center">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="card-container">
            {users.map((user: UserData, index: number) => (
              <Card
                avatar={user.avatar_url}
                numberFollowing={user.following}
                numberFollower={user.followers}
                key={index}
                fullName={user.name}
                companyName={user.company}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
