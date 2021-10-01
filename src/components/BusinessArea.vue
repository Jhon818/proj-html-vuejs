<template>
      <section>
        <div class="bs-area">
          <h6>Our Business Area</h6>
          <h2>Excellence in<span>Services</span></h2>
          <div>
             <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            mollitia expedita nostrum repellat. At quidem laborum distinctio
          </p>
          <button>See All</button>
          </div>
         
        </div>

        <div class="flex">
          <div>
            <h4><i class="fas fa-award"></i> Tradition</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate
            </p>
          </div>

          <div>
            <h4><i class="fas fa-lock"></i> Security</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate
            </p>
          </div>

          <div>
            <h4><i class="far fa-edit"></i> Cerificate</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate
            </p>
          </div>

          <div>
            <h4><i class="fas fa-graduation-cap"></i> Expertise</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate
            </p>
          </div>

            <div>
            <h4><i class="fas fa-graduation-cap"></i> Expertise</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate
            </p>
          </div>
            <div>
            <h4><i class="fas fa-graduation-cap"></i> Expertise</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate
            </p>
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
  color: $bg-black;

  
.flex {
  display: flex;

  div > p {
    color: $cloudy;
  }
   i {
      color: $elf-green;
    }
}

  div.bs-area {

    div
     {
       display:flex;
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