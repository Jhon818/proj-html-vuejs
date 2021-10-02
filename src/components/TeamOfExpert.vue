<template>
  <main>
    <section>
      <div>
        <h6>WE LIKE WHAT WE DO</h6>
        <h2><span>Team</span> Of Experts</h2>
        <p>
          Ethics and integrity are the basis on which our professionals build
          their career. They are fundamentals that became daily attitudes.
        </p>
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
          facere! Quasi, quod deleniti autem harum at excepturi odit totam
          sequi!
        </p>
<br>
        <strong>T.Jhonson</strong>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "TeamOfExpert",
};
</script>

<style lang="scss" scoped>
@import "../style/general.scss";
main {
  display: flex;
  justify-content: center;
  padding: 5rem 15rem 5rem 15rem;
  background: $bg-black;
  color: white;

  section {
    display: inline-flex;
    align-items: center;
  }
  .preident-speech {
    width: 50%;
    background: red;
    padding: 5%;
    i {
      color: $elf-green;
    }

    p {
      padding-top: 15px;
      color: $cloudy;
    }
    h2 {
      font-weight: bold;
    }

    h6 {
      color: $elf-green;
      text-transform: uppercase;
      padding-bottom: 10px;
      font-weight: bold;
    }

    span {
      background: $blue-lagoon;
      padding: 5px 8px 5px 8px;
    }

    div {
      float: left;
      padding: 10px;
    }
  }
}
</style>