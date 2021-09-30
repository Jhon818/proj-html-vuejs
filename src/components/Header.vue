<template>
  <header>
    <ul>
      <div>
        <i class="fas fa-clock"></i>
        <span v-for="(contact, index) in contacts" :key="index">
          {{ contact.text }}</span
        >
      </div>

      <section>
        <div>
          <i class="fas fa-phone-square-alt"></i>
          <span v-for="(contact, index) in contacts" :key="index">
            {{ contact.number }}</span
          >
        </div>

        <div>
          <i class="fas fa-envelope"></i>
          <span v-for="(contact, index) in contacts" :key="index">
            {{ contact.mail }}</span
          >
        </div>

        <div>
          <span
            ><i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-linkedin"></i
          ></span>
        </div>
      </section>
    </ul>

   

    <section>
       <nav class="header-btm">
      <div class="nexgen"><span class="nex">NEX<span class="gen">GEN</span></span></div>
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <a :class="link.current ? 'active' : null" :href="link.url">
            {{ link.text }}
          </a>
        </li>
      </ul>
    </nav>
      <img src="@/assets/img/bg-6.jpg" alt="">
    </section>
  </header>
</template>

<script>
import * as cicle_links from "@/assets/cicle_links.js";
export default {
  name: "Header",
  data() {
    return {
      links: cicle_links.headerLinks,
      contacts: cicle_links.contactLinks,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header ul:first-child {
  background: #3d4955;

  section img {
    height: 100vh;
    width: 100%;
   object-fit: cover;
  }
}
header > ul {
  padding: 10px;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;

  a {
    color: grey;
  }

  section {
    display: inline-flex;
  }
  div {
    padding: 10px;
  }
  div:last-child i {
    padding-right: 10px;
  }
}

.header-btm {
  display: flex;
  justify-content: center;


  li {
    margin: 1em;
  }
  li:last-child a {
    background: #048383;
    padding: 10px;
    color: white;
  }

div.nexgen .nex {
  border-radius: 20px 0px 0px 20px;
background: #0483835b;
width: 3em;
padding: 10px;
color: #22918e;

.gen {
  color: black;
}
}
  .nexgen {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-right: 8em;
  }
}
.header-btm > ul {
  display: flex;
  list-style: none;
  justify-content: space-evenly;

  a {
    color: grey;
    text-transform: uppercase;
    text-decoration: none;
  }
}
</style>
