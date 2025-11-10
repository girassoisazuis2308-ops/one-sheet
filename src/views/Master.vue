<template>
  <div class="master">
    <h1>Fichas dos Jogadores</h1>

    <div v-if="Object.keys(fichas).length === 0">
      Nenhum jogador conectado ainda.
    </div>

    <div v-for="(ficha, id) in fichas" :key="id" class="ficha">
      <h2>{{ ficha.nome || 'Sem nome' }}</h2>
      <p>Vida: {{ ficha.vida }} | Mana: {{ ficha.mana }} | {{ ficha.atributo }}</p>
      <p>{{ ficha.tipo }}</p>
      <p>{{ ficha.inventario }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import OBR from "@owlbear-rodeo/sdk"

const fichas = ref({})

OBR.onReady(async () => {
  const room = await OBR.room.getMetadata()
  atualizarFichas(room)

  OBR.room.onChange(async (roomData) => {
    atualizarFichas(roomData.metadata)
  })
})

function atualizarFichas(metadata) {
  const novas = {}
  for (const [key, value] of Object.entries(metadata)) {
    if (key.startsWith("ficha-")) {
      novas[key] = value
    }
  }
  fichas.value = novas
}
</script>

<style scoped>
  
  h1 {
  text-align: center;
  margin-bottom: 15px;
}
.master {
  padding: 16px;
  background: #101010;
  color: white;
  font-family: sans-serif;
}
.ficha {
  background: #222;
  padding: 12px;
  border-radius: 12px;
  margin-bottom: 12px;
}
</style>
