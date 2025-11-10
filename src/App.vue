<template>
  <div class="sheet">
    <h1>ONE</h1>

    <div class="field">
      <label>Nome:</label>
      <input v-model="nome" placeholder="Digite o nome" />
    </div>

    <div class="field row">
      <label>Vida:</label>
      <button @click="vida--">−</button>
      <span>{{ vida }}</span>
      <button @click="vida++">+</button>
    </div>

    <div class="field row">
      <label>Mana:</label>
      <button @click="mana--">−</button>
      <span>{{ mana }}</span>
      <button @click="mana++">+</button>
    </div>

    <div class="field">
      <label>Atributo:</label>
      <select v-model="atributo">
        <option>Força</option>
        <option>Destreza</option>
        <option>Intelecto</option>
        <option>Vigor</option>
      </select>
    </div>

    <div class="field">
      <label>Inventário:</label>
      <textarea v-model="inventario" rows="5" placeholder="Anote itens, armas, etc."></textarea>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const nome = ref('')
const vida = ref(10)
const mana = ref(5)
const atributo = ref('Força')
const inventario = ref('')
</script>

<style scoped>
.sheet {
  max-width: 400px;
  margin: 0 auto;
  padding: 16px;
  background: #1a1a1a;
  color: white;
  border-radius: 16px;
  font-family: sans-serif;
  box-shadow: 0 0 10px rgba(255,255,255,0.1);
}
h1 {
  text-align: center;
  margin-bottom: 20px;
}
.field {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}
.field.row {
  flex-direction: row;
  align-items: center;
  gap: 8px;
}
input, select, textarea {
  border: none;
  border-radius: 8px;
  padding: 8px;
  background: #333;
  color: white;
  width: 100%;
}
button {
  background: #444;
  border: none;
  color: white;
  font-size: 1.2em;
  padding: 4px 10px;
  border-radius: 8px;
}
button:hover {
  background: #666;
}
</style>
