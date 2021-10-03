<template>
  <section>
    <div class="bs-area">
      <h6>how it works in practice</h6>
      <h2><span>Process</span> Management</h2>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim mollitia
          expedita nostrum repellat. At quidem laborum distinctio
        </p>
      </div>
    </div>

    <div class="flex">
      <div class="box">
        <div class="border"></div>
        <p class="number">01</p>
        <div class="description">
          <h4>Collection of information</h4>
          <p>Lorem, ipsum dolor sit amet consectetu</p>
        </div>
      </div>

      <div class="box">
        <div class="border"></div>
        <p class="number">02</p>
        <div class="description">
          <h4>Strategic planning</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          </p>
        </div>
      </div>

      <div class="box">
        <div class="border"></div>
        <p class="number">03</p>
        <div class="description">
          <h4>Assignment of responsibilities</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
        </div>
      </div>

      <div class="box">
        <div class="border"></div>
        <p class="number">04</p>
        <div class="description">
          <h4>Formatting process</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <div class="box">
        <div class="border"></div>
        <p class="number">05</p>

        <div class="description">
          <h4>Continuity formalization</h4>
          <p>Lorem, ipsum dolor sit amet con Lorem, ipsum dolor sit amet con</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProcessManagement",
};
</script>

<style lang="scss" scoped>
@import "../style/general.scss";
section {
  display: flex;
  flex-flow: column;
  justify-content: center;
  color: $bg-black;

  .flex {
    display: flex;
    width: 100%;

    div > p {
      color: $cloudy;
    }
    i {
      color: $elf-green;
    }

    div.box {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      text-align: center;

      p.number {
        background: $black-haze;
        border-radius: 100%;
        color: $elf-green;
        padding: 2px;
      }
      .description {
        padding: 0em 3em 3em 3em;

        h4 {
          margin: 10px;
        }
      }
    }
    .border {
      position: relative;
      background: $black-haze;
      height: 2px;
      width: 100%;
      top: 10px;
      z-index: -1;
    }
  }

  div.bs-area {
    padding: 3em;
    div {
      display: flex;
      justify-content: center;
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
      text-align: center;
      padding-top: 15px;
      color: #a5a09d;
    }
    h2 {
      text-align: center;
      font-weight: bold;
      font-weight: bold;
    }

    h6 {
      text-align: center;
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