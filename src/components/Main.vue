<template>
  <main>
    <section>
      <div>
        <h6>About The Network</h6>
        <h2><span>The</span> Company</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim mollitia
          expedita nostrum repellat. At quidem laborum distinctio tempore quasi
          quisquam. Hic maxime rem dignissimos repellat laboriosam quos tempore
          aliquid nostrum!
        </p>
        <br />
        <p>
          qui fugit, repellendus saepe! Animi aliquid ipsa et quis obcaecati
          quasi eaque?
        </p>
      </div>

      <div>
        <div>
          <h4><i class="fas fa-award"></i> Tradition</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          </p>
        </div>

        <div>
          <h4><i class="fas fa-lock"></i> Security</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          </p>
        </div>

        <div>
          <h4><i class="far fa-edit"></i> Cerificate</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          </p>
        </div>

        <div>
          <h4><i class="fas fa-graduation-cap"></i> Expertise</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Main",
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
  div {
    width: 50%;

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