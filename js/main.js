const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello World",
      numberImg: "",
      srcImg: "",
      imgDisplay: "d-none",
    };
  },

  methods: {
    printImage() {
      if (this.numberImg <= 5 && this.numberImg >= 1) {
        this.imgDisplay = "d-inline-block";
        console.log(this.numberImg);
        let srcImage = "./img/0" + this.numberImg + ".webp";
        console.log(srcImage);
        this.srcImg = srcImage;
      } else {
        alert("Inserire un numero da 1 a 5");
      }
    },
  },
}).mount("#app");
