<template>
  <footer>
    <ul v-for="(link, index) in links" :key="index">
      <li>
        {{ link.text }}
        {{ link.description }}
        <i class="fas fa-phone-square-alt"></i> {{ link.number }}
        <i class="fas fa-envelope"></i>{{ link.mail }}
        <i class="fas fa-map-marker-alt"></i> {{ link.position }}
      </li>
    </ul>

    <ul>
      <li v-show="linksabout">
        {{ linksabout.about }}
      </li>
      <li>
        {{ linksabout.company }}
      </li>
      <li>
        {{ linksabout.institutional }}
      </li>
      <li>
        {{ linksabout.social }}
      </li>
      <li>
        {{ linksabout.innovation }}
      </li>
      <li>
        {{ linksabout.environment }}
      </li>
      <li>
        {{ linksabout.tech }}
      </li>
    </ul>

     <ul>
      <li v-show="linksServices">
        {{ linksServices.about }}
      </li>
      <li>
        {{ linksServices.company }}
      </li>
      <li>
        {{ linksServices.institutional }}
      </li>
      <li>
        {{ linksServices.social }}
      </li>
      <li>
        {{ linksServices.innovation }}
      </li>
      <li>
        {{ linksServices.environment }}
      </li>
      <li>
        {{ linksServices.tech }}
      </li>
    </ul>

      <ul>
      <li v-show="linksSupport">
        {{ linksSupport.about }}
      </li>
      <li>
        {{ linksSupport.company }}
      </li>
      <li>
        {{ linksSupport.institutional }}
      </li>
      <li>
        {{ linksSupport.social }}
      </li>
      <li>
        {{ linksSupport.innovation }}
      </li>
      <li>
        {{ linksSupport.environment }}
      </li>
      <li>
        {{ linksSupport.tech }}
      </li>
    </ul>
  </footer>
</template>

<script>
import * as cicle_links from "@/assets/cicle_links.js";
export default {
  name: "Footer",
  data() {
    return {
      links: cicle_links.footerContact,
      linksabout: cicle_links.footerAbout,
      linksServices: cicle_links.footerServices,
      linksSupport: cicle_links.footerSupport,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

