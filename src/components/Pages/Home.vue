<template>
  <div class="home">
    <headerComp></headerComp>
    <div class="head row between">
      <div class="col left">
        <div class="row title">Сортировка</div>
        <div class="row second">
          <div class="item v-center h-center active">ID</div>
          <div class="item v-center h-center">Имя</div>         
          <div class="item v-center h-center">Возраст</div>
        </div>
        <div class="row third">
          <div class="item v-center h-center active">По возрастанию</div>
          <div class="item v-center h-center">По убыванию</div>
        </div>
      </div>
      <div class="col right">
        <div class="row title">Вид</div>
        <div class="row switch">
          <div class="item v-center h-center active">Таблица</div>
          <div class="item v-center h-center">Превью</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Global/Header';
import Masonry from 'masonry-layout/masonry.js';
import VueScrollbar from 'vue2-scrollbar';
import postData from 'api/data.json';


export default {
  data () {
    return {
      postData,
    }
  },
  components: {
    headerComp: Header,
    VueScrollbar
  },
  methods: {

  },
  mounted() {
    console.log(this.postData);
    require("vue2-scrollbar/dist/style/vue2-scrollbar.css");
    // init masonry with selector 
/*    var msnry = new Masonry( '.home__wrapper', {
      itemSelector: '.home__wrapper .item',
      columnWidth: 309,
      gutter:19
    });*/
  }
}
</script>


<style lang="scss" scoped>
@import '~assets/css/global.css';
.home {
  .head {
    margin-bottom: 37px;
    .col {
      .item {
        &.active {
          background-color: #e6e6e6 !important;
          cursor: default;
        }
        &:not(:last-child) {
          border-right: 1px solid #000;
        }
        &:not(.active) {
          cursor: pointer;
        }
      }
      &.left {
        width: 351px;
        .second {
          border:1px solid #000;
          margin-bottom: 10px;
          .item {
            height: 31px;
            flex:1;
            background-color: #FFF;
          }
        }
        .third {
          border:1px solid #000;
          .item {
            height: 31px;
            flex:1;
            background-color: #FFF;
          }
        }
      }
      &.right {
        width: 250px;
        .switch {
           border:1px solid #000;
           .item {
            height: 74px;
            flex:1;
            background-color: #FFF;
           }
        }
      } 
    }
    .title {
      margin-bottom: 23px;
    }
  }
}
@media screen and (max-width: 1024px) {
  .home {

  }
} 
@media screen and (max-width: 480px) {
  .home {

  }
} 
</style>
