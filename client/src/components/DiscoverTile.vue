<template>
  <div class="Discover-Tile">
  

<v-hover>
   <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto"
      width="344"
    >
      <v-img
        :aspect-ratio="16/9"
      ></v-img>
      <v-card-title>
        <div>
          <span class="headline">Popular</span>
          <!-- <p>{{moviePopular[0].title}}</p> -->
          <div class="d-flex">
         
            <div class="ml-2 grey--text text--darken-2">
           
            </div>
          </div>
        </div>
        <v-spacer></v-spacer>
       <v-btn color="primary" dark @click="popular">Look More
        </v-btn>
      </v-card-title>
    </v-card>
  </v-hover>

<v-hover>

   <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto"
      width="344"
    >
      <v-img
        :aspect-ratio="16/9"
      ></v-img>
      <v-card-title>
        <div>
          <span class="headline">Top Rated</span>
          <!-- <p>{{movieTopRated[0].title}}</p> -->
          <div class="d-flex">
        
            <div class="ml-2 grey--text text--darken-2">
           
            </div>
          </div>
        </div>
        <v-spacer></v-spacer>
        <v-btn color="primary" dark @click="toprated">Look More
        </v-btn>
      </v-card-title>
    </v-card>
  </v-hover>

<v-hover>

   <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto"
      width="344"
    >
      <v-img
        :aspect-ratio="16/9"
      ></v-img>
      <v-card-title>
        <div>
          <span class="headline">Upcoming</span>
          <!-- <p>{{movieUpcoming[0].title}} -->
          <div class="d-flex">
          
            <div class="ml-2 grey--text text--darken-2">
            
            </div>
          </div>
        </div>
        <v-spacer></v-spacer>
       <v-btn color="primary" dark @click="goUpcoming">Look More
        </v-btn>
      </v-card-title>
    </v-card>

  </v-hover>

  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["getPopular", "getTopRated", "getUpcoming"]),
    getImages(img) {
      return `http://image.tmdb.org/t/p/w185/${img}`;
    },
    goUpcoming() {
      this.$router.push("/discover/upcoming");
    },
    toprated() {
      this.$router.push("/discover/toprated");
    },
    popular() {
      this.$router.push("/discover/popular");
    }
  },

  mounted() {
    
  },
  computed: {
    ...mapState({
      moviePopular: "moviePopular",
      movieTopRated: "movieTopRated",
      movieUpcoming: "movieUpcoming"
    })
  }
};
</script>

<style>
.Discover-Tile {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}
</style>
