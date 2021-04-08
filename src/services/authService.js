import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/auth";

export function login(credentials) {
  return http.post(apiEndPoint, credentials);
}
