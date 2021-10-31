<template>
  <div class="w-25 p-3  product-container d-flex flex-column">
    <div class="d-flex flex-row justify-content-center">
      <img style="height: 150px;" :src="product.img" />
    </div>
    <div>
      <h3>{{ product.title }}</h3>
      <hr />
    </div>
    <div>
      <p>{{ product.description }}</p>
    </div>
    <div>
      <span>{{ product.price }}</span>
      <button class="btn btn-primary btn-sm float-right">Commander</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        img:
          "https://pickall.com/images/thumbs/0000024_apple-macbook-pro-13-inch_550.jpeg",
        title: "MacBook Pro",
        description:
          "Le plus puissant des MacBook Pro est arrivé. Avec la puce M1 Pro ou M1 Max, la première conçue par Apple pour les pros, vous bénéficiez de performances exceptionnelles et d’une incroyable autonomie.",
        price: "2000.-",
      },
    };
  },
};
</script>

<style>
.product-container {
  height: 200px;
}

p {
  font-size: 12px;
}
</style>
