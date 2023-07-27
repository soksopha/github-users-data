import axios from "axios";

export interface UserData {
  id: number;
  login: string;
  company: string;
  html_url: string;
  name?: string;
  avatar_url?: any;
  following?: number;
  followers?: number;
}

export async function getMany(): Promise<UserData[]> {
  try {
    const response = await axios.get<UserData[]>("https://api.github.com/users", {
      params: {
        per_page: 25
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getOne(user: UserData): Promise<UserData> {
  try {
    const response = await axios.get<UserData>(`https://api.github.com/users/${user.login}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
