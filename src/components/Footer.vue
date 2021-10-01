<template>
  <section>
    <footer>
      <ul class="ul-nexgen" v-for="(link, index) in links" :key="index">
        <li>
          <div class="nexgen">
            <span class="nex">NEX<span class="gen">GEN</span></span>
          </div>
        </li>
        <li class="padding">
          <span>{{ link.description }}</span>
        </li>

        <li>
          <span><i class="fas fa-phone-square-alt"></i> {{ link.number }}</span>
        </li>
        <li>
          <span><i class="fas fa-envelope"></i> {{ link.mail }}</span>
        </li>
        <li>
          <span>
            <i class="fas fa-map-marker-alt"></i> {{ link.position }}</span
          >
        </li>
        <li>
          <span>{{ link.button }}</span>
        </li>
      </ul>

      <ul class="contact">
        <li v-show="linksabout">
          {{ linksabout.about }}
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fas fa-chevron-right"></i>
            </button>
            <span>{{ linksabout.company }}</span>
          </div>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fas fa-chevron-right"></i>
            </button>
            <span>{{ linksabout.institutional }}</span>
          </div>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fas fa-chevron-right"></i>
            </button>
            <span>{{ linksabout.social }}</span>
          </div>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fas fa-chevron-right"></i>
            </button>
            <span>{{ linksabout.innovation }}</span>
          </div>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fas fa-chevron-right"></i>
            </button>
            <span>{{ linksabout.environment }}</span>
          </div>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fas fa-chevron-right"></i>
            </button>
            <span>{{ linksabout.tech }}</span>
          </div>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
      </ul>

      <ul class="contact">
        <li v-show="linksServices">
          {{ linksServices.about }}
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fas fa-chevron-right"></i>
            </button>
            <span>{{ linksServices.company }}</span>
          </div>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fas fa-chevron-right"></i>
            </button>
            <span>{{ linksServices.institutional }}</span>
          </div>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fas fa-chevron-right"></i>
            </button>
            <span>{{ linksServices.social }}</span>
          </div>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fas fa-chevron-right"></i>
            </button>
            <span>{{ linksServices.innovation }}</span>
          </div>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fas fa-chevron-right"></i>
            </button>
            <span>{{ linksServices.environment }}</span>
          </div>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fas fa-chevron-right"></i>
            </button>
            <span>{{ linksServices.tech }}</span>
          </div>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
      </ul>

      <ul class="contact">
        <li v-show="linksSupport">
          {{ linksSupport.about }}
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fas fa-chevron-right"></i>
            </button>
            <span>{{ linksSupport.company }}</span>
          </div>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fas fa-chevron-right"></i>
            </button>
            <span>{{ linksSupport.institutional }}</span>
          </div>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fas fa-chevron-right"></i>
            </button>
            <span>{{ linksSupport.social }}</span>
          </div>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fas fa-chevron-right"></i>
            </button>
            <span>{{ linksSupport.innovation }}</span>
          </div>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fas fa-chevron-right"></i>
            </button>
            <span>{{ linksSupport.environment }}</span>
          </div>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fas fa-chevron-right"></i>
            </button>
            <span>{{ linksSupport.tech }}</span>
          </div>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
      </ul>
    </footer>
    <div class="pie">
      <span
        >Enjoy the low Price. We are tracking any intention of privacy.</span
      >
      <span>© 2020 NEXGEN is Proudly Powered by <a href="#">Codings</a></span>
    </div>
  </section>
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
footer {
  display: flex;
  justify-content: center;
  padding: 7rem;
  width: 100%;
  background: #121117;

  .ul-nexgen {
    width: 15rem;

    li {
      padding: 8px;
    }

    .padding {
      padding-bottom: 20px;
    }

    li:last-child {
      margin-top: 10px;
      width: 150px;
      text-align: center;
      padding: 10px;
      text-transform: uppercase;
      border: 1px solid #22918e;
      color: white;
      cursor: pointer;
    }
  }

  ul {
    display: flex;
    flex-flow: column nowrap;
    list-style: none;
    width: 10rem;
    color: grey;

    div.nexgen .nex {
      display: inline-block;
      border-radius: 20px 0px 0px 20px;
      background: #0483835b;
      width: 3em;
      padding: 6px 10px 10px 20px;
      color: #22918e;
      font-weight: bold;

      .gen {
        color: white;
      }
    }
    li:first-child {
      color: white;
      font-weight: bold;
      font-size: 20px;
      padding-bottom: 10px;
    }
  }

  ul.contact {
    display: flex;
    flex-flow: column nowrap;
    list-style: none;
    width: 13rem;
    height: 100%;
    background: #1c2224;
    margin: 10px;
    padding: 40px 30px 40px 40px;
    border-radius: 10px;
  }

  li {
    padding-bottom: 5px;

    .dropdown-content {
      display: none;
    }
    &:hover .dropdown-content {
      display: block;
    }

    .dropdown {
      position: relative;
      display: inline-block;

      .dropbtn {
        color: white;
        padding-right: 5px;

        background: none;
        border: none;
      }
    }
  }
}

.pie {
  display: flex;
  background: black;
  color: white;
  padding: 20px;
  justify-content: space-evenly;

  a {
    color: #0483835b;
    text-decoration: none;
  }
}
</style>

