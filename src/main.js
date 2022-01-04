import Vue from "vue";
import App from "./App.vue";
import * as filters from "./utils/filters.js";

Vue.config.productionTip = false;

Object.keys(filters).forEach((f)=>{
  Vue.filter(f,filters[f]);
})

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
          " Vous voulez tirer le maximum de votre potentiel professionnel spécifique, en déplacement ou au bureau ? Alors le Thinkpad T14 est fait pour vous : puissant, 100% configurable et résistant comme aucun autre.",
        price: 1500,
      },

      {
        id: "3",
        img:
          "https://www.sodishop.com/media/2021/05/4-Ordinateur-Portable-HP-PAVILION-14-CS3064ST-Core-i5-10e-G%C3%A9n%C3%A9ration-PC-14.1-1Tera-HDD-8Go-Ram-Couleur-Gris-M%C3%A9tallique-DUB0101.jpg",
        title: "HP",
        description:
          "Ultra-fin et léger, le HP EliteBook 830 G7 est facile à transporter entre deux réunions. Avec son écran de 13,3, il offre un rapport écran/châssis de 85 %. Il intègre de plus un clavier et un pavé tactile dernier cri à la fois silencieux et ergonomiques.",
        price: 1500,
      },
    ],
    cart: [],
    page: 'User'
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
    changePage(page) {
      this.page = page;
      this.$emit('update:page', this.page);
    },
    addProduct(product){
      this.products = [...this.products, {...product, id: this.products.length +1+''}]
      this.$emit('update:products', this.products);

    }
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
