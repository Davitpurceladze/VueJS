const app = Vue.createApp({
  data() {
    return {
      firstOutPut: "",
      secondOutPut: "",
      confirmedOutPut: "",
    };
  },
  methods: {
    getSecondOutPut(event) {
      this.secondOutPut = event.target.value;
    },
    confirmSecondOutPut() {
      this.confirmedOutPut = this.secondOutPut;
    },
    getFirstOutPut(event) {
      this.firstOutPut = event.target.value;
    },
    alert() {
      alert("Hello there");
    },
  },
});

app.mount("#assignment");
