import axios from "axios";
import { getHeaders } from "./core";

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
        per_page: 25,
      },
      headers: getHeaders(),
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getOne(user: UserData): Promise<UserData> {
  try {
    const response = await axios.get<UserData>(`https://api.github.com/users/${user.login}`, {
      headers: getHeaders(),
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
