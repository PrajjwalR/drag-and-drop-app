<template>
  <div class="container">
    <div class="wrapper"><h1>Welcome to Drag And Drop</h1></div>
    <div class="router-links">
      <router-link to="/">Close</router-link>
      <router-link to="/startgame">Start</router-link>
    </div>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  height: 90vh;
}
.wrapper {
  width: 98vw;
  height: 20rem;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
}

.router-links {
  font-size: 100px;
}

.router-links a {
  font-weight: bold;
  color: #ffffff;
  background-color: #064629;
  border-radius: 20px;
  text-decoration: none;
  padding: 20px;
  margin-right: 20px;
}
</style>
