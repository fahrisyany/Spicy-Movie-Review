<template>
    <div>
        <!-- <h1>my movie</h1> -->

        <!-- <iframe width="1425" height="620" src="https://www.youtube.com/embed/nSbzyEJ8X9E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> -->

<div class='movie-detail'>
<v-card
      class="mx-auto"
      max-width="400"
    >
      <v-card
        dark
        flat
      >
        <v-card-title class="pa-2 grey">  
        </v-card-title>
        <v-img
            :src='`http://image.tmdb.org/t/p/w185/${movieDetail.poster_path}`'
          gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
        >
          <v-container fill-height>
            <v-layout align-center>
              <strong class="display-4 font-weight-regular mr-4"></strong>
              <v-layout column justify-end>
                <div class="headline font-weight-heavy">{{movieDetail.title}}</div>
                <div class="font-weight-light">{{movieDetail.release_date}}</div>

                <v-rating :value=Math.ceil(movieDetail.vote_average/2)
                ></v-rating>
              </v-layout>
            </v-layout>
          </v-container>
        </v-img>
      </v-card>
      <v-card-text class="py-0">
        <v-timeline
          align-top
          dense
        >
          <v-timeline-item
            color="pink"
            small
          >
            <v-layout pt-3>
              <v-flex xs3>
                <!-- <strong>Original Title</strong> -->
              </v-flex>
              <v-flex>
                <strong>Overview</strong>
                <div class="caption">{{movieDetail.overview}}</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
  
          <v-timeline-item
            color="teal lighten-3"
            small
          >
            <v-layout wrap pt-3>
              <v-flex xs3>
                <!-- <strong>Availability</strong> -->
              </v-flex>
              <v-flex>
                <strong>Availability</strong>
                <div class="caption mb-2">{{movieDetail.status}}</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
  
          <v-timeline-item
            color="pink"
            small
          >
            <v-layout pt-3>
              <v-flex xs3>
                <!-- <strong>12pm</strong> -->
              </v-flex>
              <v-flex>
                <strong>Runtime</strong>
                 <div class="caption mb-2">{{movieDetail.runtime}} minute</div>

              </v-flex>
            </v-layout>
          </v-timeline-item>
  
          <v-timeline-item
            color="teal lighten-3"
            small
          >
            <v-layout pt-3>
              <v-flex xs3>
                <!-- <strong></strong> -->
              </v-flex>
              <v-flex>
                <strong>Budget</strong>
                <div class="caption">USD {{movieDetail.budget}} </div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
</div>


<!-- {{trailer[0].key}} -->
<div class="video-container" v-if="trailer.length">
<iframe width="1425" height="620" :src='`https://www.youtube.com/embed/${trailer[0].key}`' frameborder="0" allow="autoplay; encrypted-media"></iframe>
        <!-- <h1>review</h1> -->
</div>
<v-layout class='review-content' align-center v-if='review.length' >
    
    <v-flex>
        <h2 id='title-review'>Reviews</h2>
      <v-window
        v-model="window"
        class="elevation-1"
        vertical

      >
          <v-card flat

          v-for="(rev,index) in review"
          :key="index"   
          >
            <v-card-text>
              <v-layout align-center mb-3>
                <v-avatar color="grey" class="mr-3"></v-avatar>
                <strong class="title">{{rev.author}}</strong>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </v-layout>

             {{rev.content}}
            </v-card-text>
          </v-card>
      </v-window>
    </v-flex>
  </v-layout>
<span v-else>
          <h3 id='title-no-review'>No review Yet</h3>
</span>
<!-- {{review}} -->

    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

// import {mapActions,mapState} from 'vuex'
export default {
  data() {
    return {
      length: 3,
      window: 0
    };
  },
  methods: {
    ...mapActions([
      "getMovies",
      "searchMovies",
      "getOneMovies",
      "getReviews",
      "getTrailer"
    ]),
    // getImages(img) {
    // //   return `http://image.tmdb.org/t/p/w185/${img}`;
    // }
  },

  mounted() {
    // console.log(`==>`, this.$route.params.id);
  },

  created() {
    this.getOneMovies(this.$route.params.id);
    this.getReviews(this.$route.params.id);
    this.getTrailer(this.$route.params.id);
  },

  computed: {
    ...mapState({
      movieDetail: "movieDetail",
      review: "review",
      trailer: "trailer"
    })
  }
};
</script>
<style>
.movie-detail {
  /* text-align: left; */
  min-width: 500px;
  max-width: 500px;
  padding-left: 3em;
  padding-top: 3em;

  /* border: red solid 2px; */
  /* display: inline-block; */
  float: left;
}
.review-content {
  min-width: 850px;
  max-width: 850px;

  padding-right: 4em;
  /* border: red solid 2px; */
  float: right;
}
#title-review {
  padding: 1.8em;
}

#title-no-review {
  padding: 1.8em;
  /* border: red solid 2px; */
  /* width:200px; */
  padding: 20em;
  float: right;
}
.video-container {
    /* margin-top: 300px; */
	position:relative;
	padding-bottom:36.25%;
	/* padding-top:10px; */
	height:0;
    /* height: 20px; */
    /* border: red solid 3px; */
    /* height: 200px;; */
	overflow:hidden;
}

.video-container iframe, .video-container object, .video-container embed {
	position:absolute;
	top:3em;
	left:0;
	width:100%;
	height:100%;
}
</style>

