import axios from "axios";
import { getURl } from "./core";
import UserData from "../types/user";

const PER_PAGE = 4;

export async function getMany(): Promise<UserData[]> {
  try {
    const response = await axios.get<UserData[]>(`${getURl()}/users`, {
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
    const response = await axios.get<UserData>(`${getURl()}/users/${userName}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
