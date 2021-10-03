<template>
  <main>
    <section>
      <div>
        <div class="title">
 <h6>WE LIKE WHAT WE DO</h6>
        <h2><span>Team</span> Of Experts</h2>
        </div>
        <p>
          Ethics and integrity are the basis on which our professionals build
          their career. They are fundamentals that became daily attitudes.
        </p>
        <div class="team" v-show="links">
          <div class="float">
            <!-- <img :src="require(`@/assets/img/team-1.jpg`)" alt="" /> -->
            <img :src="links[0].img" alt="" />
            <div class="description">
              <div class="flex-items">
                <h3>{{ links[0].name }}</h3>
                <p>{{ links[0].work }}</p>
                <div>
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-linkedin-in"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="float">
            <img :src="links[2].img" alt="" />
            <div class="description">
              <div class="flex-items">
                <h3>{{ links[1].name }}</h3>
                <p>{{ links[1].work }}</p>
                <div>
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-linkedin-in"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="float">
            <img :src="links[1].img" alt="" />
            <div class="description">
              <div class="flex-items">
                <h3>{{ links[2].name }}</h3>
                <p>{{ links[2].work }}</p>
                <div>
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-linkedin-in"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="float">
            <img :src="links[3].img" alt="" />
            <div class="description">
              <div class="flex-items">
                <h3>{{ links[3].name }}</h3>
                <p>{{ links[3].work }}</p>
                <div>
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-linkedin-in"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="preident-speech">
        <h2>President Speech</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae
          magnam inventore fuga asperiores delectus velit animi alias, quis
          facere! Quasi, quod deleniti autem harum at excepturi odit totam
          sequi!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae
          magnam inventore fuga asperiores delectus velit animi alias, quis
          facere! Quasi, quod deleniti autem harum at excepturi odit totam
          sequi!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae
          magnam inventore fuga asperiores delectus velit animi alias, quis
        </p>
        <br />

        <strong>T.Jhonson</strong> <i class="fas fa-quote-right"></i>
      </div>
    </section>
  </main>
</template>

<script>
import * as cicle_links from "@/assets/cicle_links.js";
export default {
  name: "TeamOfExpert",
  data() {
    return {
      links: cicle_links.teamOfExpert,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../style/general.scss";
main {
  padding: 5rem 5rem 5rem 15rem;
  background: $bg-black;
  color: white;

  section {
    display: inline-flex;
    align-items: center;

.title {
  position: relative;
  bottom: 30px;

  h6 {
    padding-bottom: 20px;
  }
}
    .team {
      position: relative;
      top: 2em;

      .float {
        float: left;
        height: 150px;

        .description {
          position: relative;
          bottom: 6em;
          text-align: center;

          .flex-items {
            display: flex;
            flex-flow: column;
            padding: 1.5em;

            p {
              font-size: 10px;
              color: $cloudy;
              margin-top: 15px;
            }
            div {
              display: inline-flex;
              justify-content: space-evenly;

              i {
                background: #02292948;
                border-radius: 100%;
                padding: 10px;
                font-size: 0.8em;
                width: 30px;
                height: 30px;
                color: $elm;
                margin-top: 30px;
              }
            }
          }
        }

        img + div {
          display: inline-block;
        }
      }
      img {
        width: 100px;
        border-radius: 5px;
      }
    }

    h2:last-child {
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
      background: #034e58;
      padding: 5px 8px 5px 8px;
    }
    i {
      float: right;
      color: $elm;
    }
  }
  .preident-speech {
    width: 50%;
    margin: 100px;
    background: $elf-green;
    padding: 2%;

    p {
      padding: 5px;
    }
  }
}
</style>