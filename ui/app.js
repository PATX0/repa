const vueApp = new Vue({
  el: "#app",
  data: {
    months: [],
    data: {},
    actualdays: [],
    today: ""
  },
  methods: {
    amIRead(month, day) {
      const something = this.actualdays.filter(date => {
        return month.name == date.split(" ")[0] && day == date.split(" ")[1];
      });

      return something.length > 0 ? true : false;
    },
    amIToday(month, day) {
      // console.log(month, day);
      // console.log(this.today);
      return month.name == this.today.split(" ")[0] && day == this.today.split(" ")[1] ? true : false;
    }
  },
  mounted() {
    let november = { name: "November", days: [] };
    november.days.length = 30;
    this.months.push(november);
    let december = { name: "December", days: [] };
    december.days.length = 31;
    this.months.push(december);
    let january = { name: "January", days: [] };
    january.days.length = 31;
    this.months.push(january);
    let february = { name: "February", days: [] };
    february.days.length = 28;
    this.months.push(february);
    let march = { name: "March", days: [] };
    march.days.length = 31;
    this.months.push(march);
    let april = { name: "April", days: [] };
    april.days.length = 30;
    this.months.push(april);

    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get("index");
    const urlToGet = "/users/" + index;

    const api = axios.create({ baseURL: "http://178.62.238.173:8080" });
    api
      .get(urlToGet, {
        username: this.username
      })
      .then(res => {
        this.data = res.data.data;
        console.log(this.data);
        this.actualdays = this.data.days_read.map(day => {
          return day.substring(0, day.length - 6);
        });

        this.today = this.data.today.substring(0, this.data.today.length - 6);
        console.log(this.today);
      });

    /* const data = {
      days_read: ["November 20, 2019", "November 27, 2019", "November 28, 2019"],
      streak: 3,
      time_read: "203:49",
      username: "Rita"
    };
    this.data = data; */
  }
});
