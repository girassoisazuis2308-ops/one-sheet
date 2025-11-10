<template>
  <div class="sheet">
    <h1>ONE</h1>

    <div class="field">
      <label>Nome:</label>
      <input v-model="nome" placeholder="Digite o nome" />
    </div>
    
    <div class="field">
      <label>Tipo:</label>
      <select v-model="tipo">
        <option>Combatente</option>
        <option>Conjurador</option>
      </select>
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
import { ref, watch } from "vue"
import OBR from "@owlbear-rodeo/sdk"

const nome = ref("")
const vida = ref(10)
const mana = ref(5)
const tipo = ref("") // ✅ adicionado
const atributo = ref("")
const inventario = ref("")

// 🔹 Cria um objeto da ficha
function getFicha() {
  return {
    nome: nome.value,
    vida: vida.value,
    mana: mana.value,
    tipo: tipo.value, // ✅ adicionado
    atributo: atributo.value,
    inventario: inventario.value,
  }
}

// 🔹 Função para enviar dados para o mestre
async function salvarFicha() {
  const player = await OBR.player.getId()
  const key = `ficha-${player}`
  await OBR.room.setMetadata({ [key]: getFicha() })
}

// 🔹 Atualiza a ficha automaticamente quando o jogador muda algo
watch([nome, vida, mana, tipo, atributo, inventario], salvarFicha) // ✅ tipo incluído

// 🔹 Se a sala for recarregada, puxa os dados atuais
OBR.onReady(async () => {
  const player = await OBR.player.getId()
  const room = await OBR.room.getMetadata()
  const data = room[`ficha-${player}`]
  if (data) {
    nome.value = data.nome
    vida.value = data.vida
    mana.value = data.mana
    tipo.value = data.tipo || "" // ✅ adicionado
    atributo.value = data.atributo
    inventario.value = data.inventario
  }
})
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
  margin-bottom: 10px;
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
