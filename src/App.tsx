import React, { useState, useEffect, Fragment } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "./common/components/Card";
import Loading from "./common/components/Loading";
import Header from "./common/layout/Header";
import SearchInput from "./common/components/SearchInput";
import NoDataFound from "./common/components/NoDataFound";
import useDebounce from "./hooks/useDebounce";
import UserData from "./types/user";
import { getMany } from "./services/users";
import "./globalStyles/index.css";

const App: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [tempUser, setTempUsers] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [isSearch, setIsSearch] = useState(false);
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
            setTempUsers(datas);
            setIsLoading(false);
          }
      } catch (error) {
        setIsLoading(false);
      }
    };
    
    fetchUsers();
  }, []);

  useEffect(() => {
    let filteredUsers = tempUser;
    if (debouncedSearch) {
        filteredUsers = tempUser.filter(user =>
        user.name?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        user.company?.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }
    
    setUsers(filteredUsers);
    setIsSearch(false);
  }, [debouncedSearch, tempUser]);

  const handleFilteredUsers = (value: string) => {
    setSearchValue(value);
    setIsSearch(true);
  };
  
  return (
    <Fragment>
      <Container className="container">
        <Header />
        <SearchInput onSearch={handleFilteredUsers} />
        {isLoading || isSearch ? (
          <Loading />
        ) : (
          <div>
            {users.length > 0 ? (
                <Grid container spacing={2}>
                  {users && users.map((user: UserData, index: number) => (
                    <Card 
                      key={user.id}
                      index={index} 
                      users={users} //in case reference data for filter  
                      userLogin={user?.login} 
                    />
                  ))}
                </Grid>
              ) : (
                <NoDataFound />
              )
            }
          </div>
        )}
      </Container>
    </Fragment>
  );
};

export default App;
