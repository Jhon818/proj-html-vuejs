<template>
  <section>
    <div class="bs-area">
      <h6>Our Business Area</h6>
      <h2>Excellence in<span>Services</span></h2>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim mollitia
          expedita nostrum repellat. At quidem laborum distinctio
          jofjsfjsfjsfjspfjspfjsf
        </p>
        <button>See All</button>
      </div>
    </div>

    <div class="flex">
      <div class="boxes">
        <div>
          <span>
            <i class="fas fa-project-diagram"></i
            ><i class="fas fa-arrow-right"></i>
          </span>

          <h4>Audit & Assurance</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          </p>
        </div>

        <div>
          <span>
            <i class="fas fa-plane-departure"></i
            ><i class="fas fa-arrow-right"></i>
          </span>

          <h4>Middle Marketing</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          </p>
        </div>
      </div>

      <div class="boxes">
        <div>
          <span>
            <i class="fas fa-briefcase"></i><i class="fas fa-arrow-right"></i>
          </span>

          <h4>Finacial Advisory</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          </p>
        </div>

        <div>
          <span>
            <i class="fas fa-globe"></i><i class="fas fa-arrow-right"></i>
          </span>

          <h4>Legal Consulting</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          </p>
        </div>
      </div>

      <div class="boxes">
        <div>
          <span>
            <i class="far fa-chart-bar"></i><i class="fas fa-arrow-right"></i>
          </span>

          <h4>Analytics and M&A</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          </p>
        </div>
        <div>
          <span>
            <i class="fas fa-inbox"></i><i class="fas fa-arrow-right"></i>
          </span>

          <h4>Regulatory Risk</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BusinessArea",
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
    display: flex;
    justify-content: space-between;
    .boxes {
      margin-right: 13px;

      div {
        margin-bottom: 15px;
        padding: 20px;
        background: white;

        span {
          display: flex;
          justify-content: space-between;
        }
      }
    }
    div > p {
      color: $cloudy;
      padding-top: 10px;
    }
    i {
      color: $elf-green;
      font-size: 20px;
      padding-bottom: 10px;
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

    div {
      display: flex;
      padding-top: 10px;
      padding-bottom: 15px;
    }
  }
}
</style>