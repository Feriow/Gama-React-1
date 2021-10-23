import axios from "axios";

export const jokeURL = axios.create({
  baseURL: "https://api.chucknorris.io/jokes/",
});

export const webhook = axios.create({
  baseURL: "https://webhook.site/a72a5abc-8e07-40d9-b88c-2e1e13a3e628",
});
