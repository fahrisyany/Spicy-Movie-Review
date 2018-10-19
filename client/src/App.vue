<template>
  <div id="app">


<v-toolbar>
    <!-- <v-toolbar-title>Title</v-toolbar-title> -->
    <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
          v-for="item in menu"  
          :key="item.icon"
          :to="item.path"
          flat
        >{{ item.title }}</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <div id="nav">
       <v-text-field
          class="mx-3"
          flat
          label="Search"
          prepend-inner-icon="search"
          solo-inverted
        ></v-text-field>
    </div>
  </v-toolbar>


    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu:[
        // { icon: "login", path: "/login", title: "Login" },
        // { icon: "register", path: "/register", title: "Register" },
        { icon: "home", path: "/", title: "Home" },
        { icon: "review", path: "/reviews", title: "Review" },
        { icon: "movie", path: "/movies", title: "Movie" }
      ]
    }
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
