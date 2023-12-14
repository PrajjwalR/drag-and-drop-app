<template>
  <div class="container">
    <div class="overlay">
      <h1 @click="randomise">Drag and Drop Shuffler</h1>

      <draggable
        v-model="boxes"
        group="boxes"
        :style="{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }"
        tag="ul"
      >
        <template #item="{ element: box }">
          <li class="draggable-box" :style="{ width: `${box * 200}px` }">
            {{ `box-${box}` }}
          </li>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import draggable from "vuedraggable";

// const TOTAL_NUMBER_OF_BOXES = 5;
const boxes = ref(randomArray(5));

function randomArray(len) {
  const arr = [];
  while (arr.length < len) {
    let number = Math.random().toFixed(1) * 10;
    number = number % len;
    number = number + 1;
    if (!arr.includes(number)) {
      arr.push(number);
    }
  }

  return arr;
}

const randomise = () => {
  boxes.value = randomArray(5);
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.overlay {
  background-color: rgb(197, 197, 197);
  width: 94vw;
  height: 95vh;
  min-height: 95vh;
  max-width: 1200px;
  margin: 20px 0 0 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgb(53, 53, 53);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}
h1 {
  color: rgb(255, 72, 0);
  background-color: aliceblue;
  border-radius: 10px;
  height: 100px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.draggable-box {
  list-style-type: none;
  height: 100px;

  background-color: rgb(255, 81, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: white;
  font-size: 20px;
  cursor: grab;
}
.draggable-box:hover {
  background-color: rgb(248, 109, 45);
}
</style>
