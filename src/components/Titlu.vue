<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Titlu",
  data() {
    return {
      titlu: "CarNation - Descoperă universul mașinilor",
    }
  }

})
</script>

<template>

    <div class="titlu-container">
      <p class="titlu">{{ titlu }}</p>
    </div>

</template>

<style scoped>

.titlu-container {
  display: flex;
  justify-content: center;
  height: 200px;
}

.titlu {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  column-gap: 25px;
  font-size: 25px;
  color:  #0056b3;
  font-weight: bold;
}

.titlu:before, .titlu:after{
  content: "";
  height: 3px;
  background-color: #FFA500;
}

</style>