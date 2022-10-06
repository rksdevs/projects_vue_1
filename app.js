// console.log("Hi Mom!");

const app = Vue.createApp({
  //data,function
  //   template: "<h2>Hi Mon, I'm learning vue!</h2>",

  data() {
    return {
      title: "Hi, Mom! I'm learning Vue",
      work: "I'm a developer",
      where: "I work from India",
      since: 2022,
      showLocation: true,
    };
  },
  methods: {
    changeWhere(title) {
      this.where = title;
    },
    showWhere() {
      this.showLocation = !this.showLocation;
    },
  },
});

app.mount("#app");
