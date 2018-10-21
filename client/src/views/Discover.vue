<template>
  <div class="discover">
    <h1 id='disc-title'>This is a Discover page</h1>
<DiscoverTile></DiscoverTile>
<router-view></router-view>
  </div>
</template>

<script>
import DiscoverTile from "../components/DiscoverTile";

export default {
  components: {
    DiscoverTile
  },
}
</script>
<style>

#disc-title {
  /* border:solid red 2px; */
  margin: 0.8em;
  text-align: center;
}
</style>


