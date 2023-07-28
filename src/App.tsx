import React, { useState, useEffect } from "react";
import Card from "./common/components/Card";
import Loading from "./common/components/Loading";
import Header from "./common/layout/Header";
import SearchInput from "./common/components/SearchInput";
import useDebounce from "./hooks/useDebounce";
import UserData from "./services/userData";
import { getMany } from "./services/users";
import "./globalStyles/index.css";

const App: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [tempUser, setTemUsers] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebounce(searchValue, 300);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
          const response = await getMany();
          if (response) {
            const datas = response.map((user: UserData) => {
                return {
                  id: user.id,
                  login: user.login,
                  company: "",
                  html_url: "",
                  name: "",
                  avatar_url: "",
                  following: 0,
                  followers: 0
                };
              });
            
            setUsers(datas);
            setTemUsers(datas);
            setIsLoading(false);
          }
      } catch (error) {
        console.error("Failed to fetch users:", error);
        setIsLoading(false);
      }
    };
    
    fetchUsers();
  }, []);

  useEffect(() => {
    const filteredUsers = tempUser.filter(user =>
        user.name?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        user.company?.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    setUsers(filteredUsers);
  }, [debouncedSearch, tempUser]);

  const handleFilteredUsers = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <SearchInput onSearch={handleFilteredUsers} />
      </div>
      <div className="container center">
        {isLoading ? (
          <Loading />
        ) : (
           <div className="card-container">
            {users.map((user: UserData, index: number) => (
              <Card 
                index={index} 
                users={users} 
                user={user} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
