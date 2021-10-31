import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

export const eventBus = new Vue({
  data: {
    products: [
      {
        id: "1",
        img:
          "https://pickall.com/images/thumbs/0000024_apple-macbook-pro-13-inch_550.jpeg",
        title: "MacBook Pro",
        description:
          "Le plus puissant des MacBook Pro est arrivé. Avec la puce M1 Pro ou M1 Max, la première conçue par Apple pour les pros, vous bénéficiez de performances exceptionnelles et d’une incroyable autonomie.",
        price: 2000,
      },

      {
        id: "2",
        img:
          "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-t14-amd-subseries-hero.png?context=bWFzdGVyfHJvb3R8ODk5OTJ8aW1hZ2UvcG5nfGgzNS9oYjUvMTA4NTcyMjQ2OTk5MzQucG5nfDI2NDkwMzAxMGE3OGUzMzhkNTFmMWRhNjJjYjQ0Y2RjNjFjZDZhZThhZDBlYzc2YWM3YzFiNjdhNGY1NzZjODU",
        title: "Lenovo",
        description:
          "Le plus puissant des MacBook Pro est arrivé. Avec la puce M1 Pro ou M1 Max, la première conçue par Apple pour les pros, vous bénéficiez de performances exceptionnelles et d’une incroyable autonomie.",
        price: 1500,
      },

      {
        id: "3",
        img:
          "https://www.sodishop.com/media/2021/05/4-Ordinateur-Portable-HP-PAVILION-14-CS3064ST-Core-i5-10e-G%C3%A9n%C3%A9ration-PC-14.1-1Tera-HDD-8Go-Ram-Couleur-Gris-M%C3%A9tallique-DUB0101.jpg",
        title: "HP",
        description:
          "Le plus puissant des MacBook Pro est arrivé. Avec la puce M1 Pro ou M1 Max, la première conçue par Apple pour les pros, vous bénéficiez de performances exceptionnelles et d’une incroyable autonomie.",
        price: 1500,
      },
    ],
    cart: [],
  },
  methods: {
    addProductToCart(product) {
      if (!this.cart.map((i) => i.id).includes(product.id)) {
        this.cart = [...this.cart, product];
        this.$emit("update:cart", this.cart.slice());
      }
    },
    removeItemFromCart(item) {
      console.log("PASS");
      this.cart = this.cart.slice().filter((i) => i.id !== item.id); //filter va parcourir tous les élément du tableau. On garder les élément qui on un id différents de celui qu'on supprime
      this.$emit("update:cart", this.cart.slice());
    },
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
