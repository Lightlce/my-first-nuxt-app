<template>
  <div class="text-center">
    <section>
      <h1 id="header">
        Welcome to web training 2
      </h1>
    </section>
    <div>
      <h1 class="fontClass">Same font size</h1>
      <h2 class="fontClass">Same font size</h2>
      <p class="fontClass">Same font size</p>
    </div>

    <section id="new-div">
    </section>

    <div class="border mt-20 flex justify-between px-4 w-[200px]">
      <button class="button-style" @click="changeColour()">Change Colour</button>
      <button class="button-style" @click="addDivBody()">Add div to document body</button>
      <button class="button-style" @click="addDivById()">Add div to ID</button>
      <button class="button-style" @click="addClass()">Change font size for same class name</button>
      <button class="button-style" @click="dynamicColour()">Dynamic Colour</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeColour() {
      const background = document.getElementById("header");
      background.style.color = "rgb(255,0,0)";
    },

    addDivBody(){
      const body = document.body
      const div = document.createElement("div");
      div.innerText = "New div element";
      body.append(div);
    },

    addDivById(){
      const body = document.getElementById('new-div')
      const div = document.createElement("div");
      div.innerText = "New div element";
      body.append(div);
    },

    addClass() {
      const getClasses = document.getElementsByClassName('fontClass')
      for (let i=0; i < getClasses.length; i++){
        getClasses[i].style.fontSize = "20px";
      }
    },

    dynamicColour(){
      const background = document.getElementById("header");
      const colour = "linear-gradient(135deg, #5335cf 0%, #de005e 25%, #f66e48 50%, #de005e 75%, #5335cf 100%)";
      background.style.background = colour;
      background.style.fontSize = "80px";
      background.style.fontWeight = "800";
      background.style.outline = "none";
      background.style.animation = "animate linear";
      background.style.backgroundSize = "400%"
      background.style.textTransform = "uppercase";
      background.style.webkitTextFillColor = "transparent";
      background.style.webkitBackgroundClip = "text";
      background.animate([{backgroundPosition: '400%'}], {duration: 2000,iterations: Infinity,});
    },

  },
};
</script>

<style scoped>
h1 {
  font-size: 40px;
}

h2 {
  font-size: 36px;
}

.button-style {
  border: solid 3px;
  border-radius: 8px;
  padding: 8px 16px;
}

</style>
