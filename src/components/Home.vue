<template>
  <div class="home">
    <headerComp></headerComp>
    <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">    
      <div class="home__wrapper">
        <div class="item" v-for="(tile, key) in postData.tiles" :key="key"
        :class="{'half': tile.type === 'normal', 'full': tile.type === 'double'}"
        @click="openText(tile,$event)"
        style="background-image:url('http://placebear.com/314/220');">
        <div class="text-wrapper">
          <p class="id">{{tile.id}}</p>
          <p class="title">{{tile.title}}</p>
          <p class="description">{{tile.description}}</p>
        </div>
      </div>
    </div>
  </vue-scrollbar>
  <div class="popup" :class="{'active': popupActive}"
  @click="popupActive = false">
  <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">  
    <div class="popup__window" @click.stop.prevent>
      <p class="title">{{popupTitle}}</p>
      <p class="text">{{popupText}}</p>
    </div>
  </vue-scrollbar>  
</div>
</div>
</template>

<script>
import Header from '@/components/Header';
import Masonry from 'masonry-layout/masonry.js';
import VueScrollbar from 'vue2-scrollbar';
import postData from 'api/tiles.json';


export default {
  data () {
    return {
      postData,
      popupTitle:'',
      popupText:'',
      popupActive: false
    }
  },
  components: {
    headerComp: Header,
    VueScrollbar
  },
  methods: {
    openText: function(tile, event) {
      this.popupTitle = tile.title ;
      this.popupText = tile.text;
      this.popupActive = true;
    }},
    mounted() {
      require("vue2-scrollbar/dist/style/vue2-scrollbar.css");
    // init masonry with selector 
    var msnry = new Masonry( '.home__wrapper', {
      itemSelector: '.home__wrapper .item',
      columnWidth: 309,
      gutter:19
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.popup {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color:rgba(0,0,0,0.8);
  display: flex;
  align-items:center;
  justify-content: center;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 300ms, opacity 300ms;
  &.active {
    visibility: visible;
    opacity: 1;
    transition: visibility 0s linear 0s, opacity 300ms;
  }
  .popup__window {
    width: 50vw;
    background-color:#fff;
    padding: 20px;
    box-sizing:border-box;
    p {
      color:#000;
      &.title {
        text-align: center;
      }
    }
  }
}
.vue-scrollbar__scrollbar-vertical .scrollbar {
  background: rgba(0, 0, 0, 0.2) !important;
}
.home {
  .my-scrollbar {
    max-height: 87vh;
  }
  .home__wrapper {
    padding-top: 15px;
    .item {
      border:2px solid #000;
      height: 216px;
      margin-bottom: 15px;
      background-size:cover;
      background-position:center;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      cursor: pointer;
      .text-wrapper {
        display: inline-table;
        width: 100%;
        text-align: center;
        background: -moz-linear-gradient(top,  rgba(30,87,153,0) 0%, rgba(0,0,0,1) 100%);
        background: -webkit-linear-gradient(top,  rgba(30,87,153,0) 0%,rgba(0,0,0,1) 100%);
        background: linear-gradient(to bottom,  rgba(30,87,153,0) 0%,rgba(0,0,0,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001e5799', endColorstr='#000000',GradientType=0 );

      }
      p {
        color:#fff;
      }
      .title {

      }
      .description {

      }
      &.half {
        width: 310px;
        .wrapper {
        }
      }
      &.full {
        width: calc(620px + 18px);
        background-position: center top;
        .wrapper {

        }
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .popup {
    .popup__window {
      width: 90vw;
    }
  }
} 
@media screen and (max-width: 480px) {
  .home {
    .home__wrapper {
      .item {
        &.half {

        }
        &.full {
          width: 310px;
        }
      }
    }
  }
} 
</style>
