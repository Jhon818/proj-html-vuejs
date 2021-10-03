<template>
  <section>
    <div class="bs-area">
      <h6>OUR EDITORIAL CONTENT</h6>
      <h2>Latest<span>News</span></h2>
      <div>
        <p>
          Every week we publish content about what is best in the business world
        </p>
        <button>See All</button>
      </div>
    </div>

    <div class="flex">
      <!-- creating a cicle and get it through images -->
      <ul class="boxes" v-for="(link, index) in links" :key="index">
        <img :src="link.img" alt="" />
        <div id="overlay">
          <p>{{ link.description }}</p>
        </div>
      </ul>
    </div>
  </section>
</template>

<script>
import * as cicle_links from "@/assets/cicle_links.js";
export default {
  name: "EditorialContent",
  data() {
    return {
      links: cicle_links.content,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../style/general.scss";
section {
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 5rem 15rem 5rem 15rem;
  background: $black-haze;
  color: $bg-black;

  .flex {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;

    #overlay {
      position: absolute;
      top: 0px;
      left: 0px;
      bottom: 0px;
      right: 0px;
      background-color: rgba(10, 10, 10, 0.5);
      border-radius: 10px;
      margin-bottom: 5px;

      p {
        position: absolute;
        color: white;
        width: 100%;
        text-align: center;
        padding: 20%;
        top: 80%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: bold;
      }
    }

    ul.boxes {
      width: 30%;
      position: relative;
    }
    img {
      width: 100%;
      border-radius: 10px;
    }
  }

  div.bs-area {
    div {
      display: flex;
      justify-content: space-between;
    }
    p {
      width: 70%;
    }
    button {
      background: $blue-lagoon;
      color: white;
      border: 1px solid $blue-lagoon;
      border-radius: 3px;
      margin: 10px;
      padding: 3px 10px 3px 10px;
    }

    p {
      padding-top: 15px;
      color: #a5a09d;
    }
    h2 {
      font-weight: bold;
      font-size: 35px;
    }

    h6 {
      color: $elf-green;
      text-transform: uppercase;
      padding-bottom: 10px;
      font-weight: bold;
    }

    span {
      background: #04838344;
      color: $elf-green;
      padding: 5px 8px 5px 8px;
    }
  }
}
</style>