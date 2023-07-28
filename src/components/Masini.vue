<template>
  <div>
    <form @submit.prevent="addCar" class="car-form">
      <label>Marca:</label>
      <input v-model="newCar.make" type="text" required>

      <label>Model:</label>
      <input v-model="newCar.model" type="text" required>

      <label>An fabricație:</label>
      <input v-model.number="newCar.year" type="number" required>

      <button type="submit">Adaugă Mașină</button>
    </form>

    <ul>
      <li v-for="(car, index) in cars" :key="index">
        <strong>{{ car.make }}</strong> - {{ car.model }} ({{ car.year }})
        <button class="btn" @click="editCar(index)">Editează</button>
        <button class="btn" @click="deleteCar(index)">Șterge</button>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  data() {
    return {
      cars: [
        { make: "Ford", model: "Focus", year: 2019 },
      ],
      newCar: { make: "", model: "", year: null },
      editingIndex: -1
    };
  },
  methods: {
    addCar() {
      if (this.newCar.make && this.newCar.model && this.newCar.year) {
        this.cars.push({ ...this.newCar });
        this.resetForm();
      }
    },
    editCar(index) {
      this.editingIndex = index;
      this.newCar.make = this.cars[index].make;
      this.newCar.model = this.cars[index].model;
      this.newCar.year = this.cars[index].year;
    },
    deleteCar(index) {
      if (confirm("Ești sigur că vrei să ștergi această mașină?")) {
        this.cars.splice(index, 1);
        this.resetForm();
      }
    },
    resetForm() {
      this.editingIndex = -1;
      this.newCar.make = "";
      this.newCar.model = "";
      this.newCar.year = null;
    }
  }
};
</script>


<style>

.car-form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 20px;
}

.car-form label {
  font-weight: bold;
  margin-bottom: 5px;
}

.car-form input {
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.car-form button {
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.car-form button:hover {
  background-color: #0056b3;
}

.btn {
  background-color: #007bff;
  padding: 5px 15px;
  margin-left: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  font-weight: 500;
  box-shadow: #FFA500 2px 2px 0 0;
  border: 2px solid #2F4F4F;
  border-radius: 30px;
}

</style>
