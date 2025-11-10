<template>
  <div>
    <nav class="menu">
      <router-link to="/player">Jogador</router-link>
      <router-link to="/master">Mestre</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 12px;
}
.menu a {
  color: white;
  text-decoration: none;
  padding: 4px 8px;
  background: #333;
  border-radius: 6px;
}
.menu a.router-link-exact-active {
  background: #555;
}
</style>
