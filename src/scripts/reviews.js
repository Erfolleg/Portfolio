import Vue from "vue";


Vue.component("reviews-component", {
  template: "#reviews",
  data() {
    return {
      reviews: [],
      strafe: 0
    };
  },
  methods: {
    slide(derection) {
      const slider = this.$refs["reviews-slider"];
      const elemWidth = slider.getBoundingClientRect().width;
      const oneItemWidth = slider.firstElementChild.getBoundingClientRect()
        .width;
      const itemInView = 2;

      const availableWidth =
        oneItemWidth * (slider.children.length - itemInView);

      switch (derection) {
        case "next":
          if (Math.abs(this.strafe) <= availableWidth) {
            this.strafe += elemWidth;
          }
          break;

        case "prev":
          if (Math.abs(this.strafe) > 0) {
            this.strafe -= elemWidth;
          }
          break;
      }

      slider.style.transform = `translateX(-${this.strafe}px)`;
    }
  },
  created() {
    this.reviews = [
      {
        id: 0,
        text:
          "1 Этот парень проходил обучение веб-разработке не где-то, а в Loftschool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!",
        "author-name": "Ковальчук Дмитрий",
        "author-occ": "Основатель Loftschool",
        "author-pic": "user.jpg"
      },
      {
        id: 1,
        text:
          "Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах",
        "author-name": "Владимир Сабанцев",
        "author-occ": "Преподаватель",
        "author-pic": "user.jpg"
      },
      {
        id: 2,
        text:
          "3 Этот парень проходил обучение веб-разработке не где-то, а в Loftschool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!",
        "author-name": "Ковальчук Дмитрий",
        "author-occ": "Основатель Loftschool",
        "author-pic": "user.jpg"
      },
      {
        id: 3,
        text:
        "Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах",
        "author-name": "Владимир Сабанцев",
        "author-occ": "Преподаватель",
        "author-pic": "user.jpg"
      },
      {
        id: 4,
        text:
          "3 Этот парень проходил обучение веб-разработке не где-то, а в Loftschool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!",
        "author-name": "Ковальчук Дмитрий",
        "author-occ": "Основатель Loftschool",
        "author-pic": "user.jpg"
      },
      {
        id: 3,
        text:
        "Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах",
        "author-name": "Владимир Сабанцев",
        "author-occ": "Преподаватель",
        "author-pic": "user.jpg"
      },
      {
        id: 4,
        text:
          "3 Этот парень проходил обучение веб-разработке не где-то, а в Loftschool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!",
        "author-name": "Ковальчук Дмитрий",
        "author-occ": "Основатель Loftschool",
        "author-pic": "user.jpg"
      }
    ];
  }
});
  
const vue = new Vue();

vue.$mount("#reviews-component");
