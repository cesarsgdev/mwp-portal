export const useAPI = () => {
  class Fetch {
    constructor() {
      this.baseUrl = "/api/";
      this.token = localStorage.getItem("token");
      this.headers = {
        "Content-Type": "application/json",
        "x-access-token": this.token,
      };
    }

    createQuery(params) {
      let query = "";
      if (params) {
        query = Object.keys(params).map((key) => `${key}=${params[key]}`);
        query = query.join("&");
      }
      console.log(query);
      return query;
    }

    options(method, payload) {
      const options = {
        method: method || "GET",
        headers: this.headers,
        body: JSON.stringify(payload) || null,
      };
      return options;
    }

    async getWebsites(filters) {
      const websites = await fetch(
        `${this.baseUrl}/websites?${this.createQuery(filters)}`,
        this.options()
      );
      const data = await websites.json();
      console.log(data);
      return data.data;
    }
  }

  return new Fetch();
};
