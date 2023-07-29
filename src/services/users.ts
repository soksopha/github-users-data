import axios from "axios";
import UserData from "../types/user";

const GITHUB_API_BASE_URL = "https://api.github.com";
const PER_PAGE = 25;

export async function getMany(): Promise<UserData[]> {
  try {
    const response = await axios.get<UserData[]>(`${GITHUB_API_BASE_URL}/users`, {
      params: {
        per_page: PER_PAGE
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getOne(userName: string): Promise<UserData> {
  try {
    const response = await axios.get<UserData>(`${GITHUB_API_BASE_URL}/users/${userName}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
