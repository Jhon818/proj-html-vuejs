<template>
  <header>
    <i class="fas fa-clock"></i>
    <span v-for="(contact, index) in contacts" :key="index">
      {{ contact.text }}</span
    >

    <i class="fas fa-phone-square-alt"></i>
    <span v-for="(contact, index) in contacts" :key="index">
      {{ contact.number }}</span
    >

    <i class="fas fa-envelope"></i>
    <span v-for="(contact, index) in contacts" :key="index">
      {{ contact.mail }}</span
    >

    <span
      ><i class="fab fa-facebook"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-linkedin"></i
    ></span>

    <nav>
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <a :class="link.current ? 'active' : null" :href="link.url">
            {{ link.text }}
          </a>
        </li>
      </ul>
    </nav>
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
header {
  background: #3d4955;
}
</style>
