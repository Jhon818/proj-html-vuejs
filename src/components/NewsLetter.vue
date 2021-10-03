<template>
  <div>
    <section>
      <div class="insurance-form">
        <div>
          <p>NEWSLETTER</p>
          <p><span class="know">Know</span> First</p>
          <p>
            Follow closely and receive content about our company and the news of
            the current market
          </p>
        </div>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />

          <button>SUBSCRIBE</button>
        </form>
        <img class="img-bg" src="@/assets/img/bg-1.jpg" alt="" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "NewsLetter",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/general.scss";
img.img-bg {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.insurance-form {
  position: relative;
  height: 50vh;

  div {
    position: absolute;
    width: 50%;
    top: 30%;
    left: 20%;
  }
  .know {
    background: $elf-green;
  }

  p:first-child {
    color: #048383;
    padding-bottom: 10px;
    font-size: 10px;
    font-weight: normal;
  }

  p:last-child {
    padding-top: 10px;
    width: 50%;
    color: white;
    padding-bottom: 10px;
    font-size: 15px;
    font-weight: normal;
  }
  p {
    font-size: 50px;
    font-weight: bold;
    color: white;
  }

  form {
    width: 20rem;
    position: absolute;
    right: 20%;
    top: 30%;

    button {
      background: #048383;
      border-radius: 5px;
      width: 130px;
      color: white;
      padding: 5px 5px 5px 5px;
      margin: 5px;
    }

    button:last-child {
      background: #048383;
      color: white;
      border: 1px solid #048383;
    }

    input {
      width: 20rem;
      border: none;
      background: #e8ecea;
      margin: 10px;
      padding: 10px;
      display: block;
    }
  }
}
</style>