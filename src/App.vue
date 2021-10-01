<template>
  <div>
    <Header />
    <Main />
    <BusinessArea />
    <ProcessManagement />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import  BusinessArea  from "@/components/BusinessArea.vue";
import  ProcessManagement  from "@/components/ProcessManagement.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Main,
    BusinessArea,
    ProcessManagement,
    Footer,
  },
};
</script>

<style lang="scss">
@import "/style/general.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
