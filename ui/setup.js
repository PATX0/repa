const vueApp = new Vue({
  el: "#app",
  data: {
    username: "",
    minutes: "",
    timeToRead: "",
  },
  methods: {
    submitInfo() {
      const api = axios.create({ baseURL: "http://178.62.238.173:8080" });
      api
        .post("/users", {
          username: this.username
        })
        .then(res => {
          console.log(res);
          location.replace(
            "file:///Users/miguelribeiro/Downloads/CodePen_Export_RwwezwY/src/index.html?index=" + res.data.data.id
          );
        });
    }
  }
});
