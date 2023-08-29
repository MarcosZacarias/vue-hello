const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello World",
      srcImg: "./img/01.webp",
    };
  },
}).mount("#app");
