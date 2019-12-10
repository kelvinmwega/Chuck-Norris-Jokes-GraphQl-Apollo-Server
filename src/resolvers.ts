import axios, { AxiosResponse } from "axios";

export default {
  Query: {
    categories: async (root: any, args: any, context: any, info: any) => {
      const response: AxiosResponse = await axios.get(
        "https://api.chucknorris.io/jokes/categories"
      );
      return response.data;
    },
    joke: async (root: any, args: any, context: any, info: any) => {
      const response: AxiosResponse = await axios.get(
        `https://api.chucknorris.io/jokes/random?category=${args.category}`
      );
      return response.data;
    }
  }
};
