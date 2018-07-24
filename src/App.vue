<template>
    <div class="app">
        <div class="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
    </div>
</template>

<style lang="scss">
html {
    height: 100%;
    margin: 0;
    padding: 0;
}
body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #076324;
}

.app {
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}

.nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
