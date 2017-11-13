<template>
  <div class="home">
    <headerComp></headerComp>
    <!-- head start -->
    <div class="head row between">
      <div class="col left">
        <div class="row title">Сортировка</div>
        <div class="row second button-group sort-by-button-group">
          <div class="item v-center h-center active" data-sort-value="id">ID</div>
          <div class="item v-center h-center" data-sort-value="name">Имя</div>         
          <div class="item v-center h-center" data-sort-value="age">Возраст</div>
        </div>
        <div class="row third">
          <div class="item v-center h-center active">По возрастанию</div>
          <div class="item v-center h-center">По убыванию</div>
        </div>
      </div>
      <div class="col right">
        <div class="row title">Вид</div>
        <div class="row switch">
          <div
          @click="listView.table = !listView.table;listView.preview = !listView.preview"
          class="item v-center h-center" 
          :class="{'active':listView.table}"
          >Таблица</div>
          <div 
          @click="listView.preview = !listView.preview;listView.table = !listView.table"
          :class="{'active':listView.preview}"
          class="item v-center h-center">Превью</div>
        </div>
      </div>
    </div>
    <!-- head end -->

    <!-- list start -->
    <div class="list"
    :class="{'table':listView.table, 'preview':listView.preview}">
    <div 
    class="item isotope-item row between" 
    :class="{'double':item.video}" 
    v-for="(item, key) in postData" 
    :data-id="item.id"
    :key="item.id">
    <div class="left-col">
      <div class="picture"><div class="bg"></div></div>
      <div class="name">{{item.name}}</div>
      <div class="age">{{item.age}}</div>
      <div class="tel">{{item.phone}}</div>
      <div class="fav"></div>
      <div v-if="listView.preview" class="txt">
        {{item.phrase}}
      </div>
    </div>
    <div v-if="listView.preview&&item.video" class="right-col">ssssssss</div>
  </div>
</div>
<!-- list end -->
</div>
</template>

<script>
import Header from '@/components/Global/Header';
import Isotope from 'isotope-layout/js/isotope.js';
import packery from 'isotope-packery/packery-mode.js';
import VueScrollbar from 'vue2-scrollbar';
import postData from 'api/data.json';


export default {
  data () {
    return {
      postData,
      listView: {
        table: true,
        preview: false
      }
    }
  },
  watch: {
  },
  components: {
    headerComp: Header,
    VueScrollbar
  },
  methods: {
    infiniteHandler: function() {

    }
  },
  mounted() {
    console.log(this.postData);
    require("vue2-scrollbar/dist/style/vue2-scrollbar.css");
  },
  updated() {
   if (this.listView.preview) {
    var grid = document.querySelector('.home .list');
    var iso = new Isotope( grid, {
  // options...
  itemSelector: '.isotope-item',
  layoutMode: 'packery',
  packery: {
    gutter: 10
  }
});
  }
  else {
    var grid = document.querySelector('.home .list');
    var iso = new Isotope( grid, {
  // options...
  itemSelector: '.isotope-item',
  layoutMode: 'masonry',
  getSortData: {
    id: '[data-id]',
    name: '.name',
    age: '.age',
  }
});
  }
}
}
</script>


<style lang="scss" scoped>
@import '~assets/css/global.css';
// <!-- head start -->
.home {
  .head {
    margin-bottom: 37px;
    .col {
      .item {
        &.active {
          background-color: #e6e6e6 !important;
          cursor: default;
          pointer-events:none;
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
// <!-- head end -->

// <!-- list start -->
.list {
  .item {
    .left-col {
      .picture {
        width: 42px;
        height: 40px;
        border-radius: 150px;
        overflow: hidden;
        background-color: grey;
        .bg {
          height: 100%;
          width: 100%;
          background-size:cover;
          background-repeat: no-repeat;
          background: #fff url("~assets/images/owl.svg");
        }
      }
      .fav {
        cursor: pointer;
        width: 16px;
        height: 16px;
        background-repeat:no-repeat;
        background: url("~assets/images/star-sprite.png");
        background-position: 16px 0;
      }
    }
    .right-col {

    }
  }
}
.list.table {
  .item {
    width: 100%;
    height: 72px;
    margin-bottom: 0;
    background-color: #fafafa;
    padding-left: 10px;
    padding-right: 15px;
    box-sizing: border-box;
    border-bottom: 1px solid #cecece;
    -webkit-box-shadow: 0px 5px 5px 0px rgba(206,206,206,1);
    -moz-box-shadow: 0px 5px 5px 0px rgba(206,206,206,1);
    box-shadow: 0px 5px 5px 0px rgba(206,206,206,1);
    .left-col {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
}
.list.preview {
  .item {
    float: left;
    margin-bottom: 16px;
    width: 320px;
    height: 246px;
    display: flex;
    flex-direction: row;
    -webkit-box-shadow: 0px 10px 13px 0px rgba(117,117,117,1);
    -moz-box-shadow: 0px 10px 13px 0px rgba(117,117,117,1);
    box-shadow: 0px 10px 13px 0px rgba(117,117,117,1);
    .left-col {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding: 16px;
      background-color: #fff;
      flex:1;
      position: relative;
      .name {
        position: absolute;
        top: 30px;
        left: 70px;
      }
      .fav {
        position: absolute;
        top: 30px;
        right: 25px;
      }
    }
    .right-col {
      display: none;
    }
    &.double {
      width: 650px;
      .right-col {
        display: block;
        flex:1;
        background-color: #FFF;
        -webkit-box-shadow: -4px 0px 5px -1px rgba(219,219,219,1);
        -moz-box-shadow: -4px 0px 5px -1px rgba(219,219,219,1);
        box-shadow: -4px 0px 5px -1px rgba(219,219,219,1);
        position: relative;
        z-index: 2;
      }
    }
  }
}
// <!-- list end -->
@media screen and (max-width: 1024px) {
  .home {

  }
} 
@media screen and (max-width: 480px) {
  .home {

  }
} 
</style>
