<template>
  <div class="home">
    <headerComp></headerComp>
    <!-- head start -->
    <div class="head row between">
      <div class="col left">
        <div class="row title">{{ $t("filter.sort") }}</div>
        <div class="row first">
          <input type="text" :placeholder="$t('filter.placeholder')" v-model="orderOptions.searchName">
        </div>
        <div class="row second">
          <div class="item v-center h-center" @click="orderOptions.orderMethod = 'id'" :class="{'active':orderOptions.orderMethod == 'id'}">{{ $t("filter.id") }}</div>
          <div class="item v-center h-center" @click="orderOptions.orderMethod = 'name'" :class="{'active':orderOptions.orderMethod == 'name'}">{{ $t("filter.name") }}</div>         
          <div class="item v-center h-center" @click="orderOptions.orderMethod = 'age'" :class="{'active':orderOptions.orderMethod == 'age'}">{{ $t("filter.age") }}</div>
        </div>
        <div class="row third">
          <div class="item v-center h-center" @click="orderOptions.ascending = true" :class="{'active':orderOptions.ascending}">{{ $t("filter.ascending") }}</div>
          <div class="item v-center h-center" @click="orderOptions.ascending = false" :class="{'active':!orderOptions.ascending}">{{ $t("filter.descending") }}</div>
        </div>
      </div>
      <div class="col right">
        <div class="row title">{{ $t("filter.view") }}</div>
        <div class="row switch">
          <div
          @click="listView.table = !listView.table;listView.preview = !listView.preview"
          class="item v-center h-center" 
          :class="{'active':listView.table}"
          >{{ $t("filter.table") }}</div>
          <div 
          @click="listView.preview = !listView.preview;listView.table = !listView.table"
          :class="{'active':listView.preview}"
          class="item v-center h-center">{{ $t("filter.preview") }}</div>
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
    v-for="(item, key) in orderBy" 
    :data-id="item.id"
    :key="item.id">
    <div class="left-col">
      <div class="picture"><div class="bg" :class="item.image" :style="item.image"></div></div>
      <div class="name">{{item.name}}  {{item.surname}}</div>
      <div class="age">{{item.age}} 
        <span v-if="
        item.age < 21 || item.age >= 25 && item.age <= 30 || item.age >= 35 && item.age <= 40 || item.age >= 45 &&  item.age <= 50 || item.age >= 55 &&  item.age <= 60
        || item.age >= 65 &&  item.age <= 70 || item.age >= 75 &&  item.age <= 80 || item.age >= 85 &&  item.age <= 90 || item.age >= 95 &&  item.age <= 100
        ">{{ $tc('list.age', 0) }}</span>
        <span v-else-if="
        item.age >= 21 && item.age < 22 || item.age == 31 || item.age == 41 || item.age == 51 || item.age == 61 || item.age == 71 || item.age == 81 || item.age == 91 || item.age == 101
        ">{{ $tc('list.age', 1) }}</span>
        <span v-else-if="item.age >= 22">{{ $tc('list.age', 2) }}</span>
      </div>
      <div class="tel">{{item.phone}}</div>
      <div class="fav" :class="{'active': item.favourite}"></div>
      <div v-if="listView.preview" class="txt">
        {{item.phrase}}
      </div>
    </div>
    <div v-if="listView.preview&&item.video" class="right-col">
      <video width="320" height="246" controls>
        <source :src="'static/video/' + item.video + '.mp4'" type="video/mp4">
        </video>
      </div>
    </div>
  </div>
  <!-- list end -->
</div>
</template>

<script>
import Header from '@/components/Global/Header';
import postData from 'api/data.json';
import Isotope from 'isotope-layout/js/isotope.js';
import packery from 'isotope-packery/packery-mode.js';
import Fuse from 'fuse-js-latest/dist/fuse.min.js';
import VueI18n from 'vue-i18n'


export default {
  data () {
    return {
      orderOptions: {
        orderMethod: 'id',
        ascending: true,
        searchName:''
      },
      postData,
      listView: {
        table: true,
        preview: false
      }
    }
  },
  components: {
    headerComp: Header,
  },
  computed: {
    orderBy: function(prop) {
      var that = this;
      var filteredData = this.postData;
      // console.log(filteredData);
      if (this.orderOptions.searchName) {
        var that = this;
       // filteredData = filteredData.filter(function(cust){return cust.surname.toLowerCase().indexOf(that.orderOptions.searchName.toLowerCase())>=0});
       var options = {
        shouldSort: true,
        matchAllTokens: true,
        threshold: 0.5,
        location: 0,
        distance: 500,
        maxPatternLength: 32,
        minMatchCharLength: 3,
        keys: [
        "name",
        "surname"
        ]
      };
var fuse = new Fuse(filteredData, options); // "list" is the item array
var result = fuse.search(that.orderOptions.searchName);
filteredData = result;
}
if (this.orderOptions.ascending) {
  filteredData = _.orderBy(filteredData, that.orderOptions.orderMethod);
        // console.log(filteredData);
      } else {
        filteredData = _.orderBy(filteredData, that.orderOptions.orderMethod).reverse();
      }
      return filteredData;
    }
  },
  updated() {
    var that = this;
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
        .first {
          margin-bottom: 10px;
          input {
            height: 31px;
            padding-left:10px;
            padding-right: 10px;
            box-sizing:border-box;
            border: 1px solid #000;
            &:focus {
              outline:none;
            }
          }
        }
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
          height: 115px;
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
      .name {
        flex:2;
      }
      .age, .tel,  {
        flex:1;
      }
      .picture {
        width: 42px;
        height: 40px;
        margin-right: 20px;
        border-radius: 150px;
        overflow: hidden;
        background-color: grey;
        .bg {
          height: 100%;
          width: 100%;
          background-size:cover;
          background-repeat: no-repeat;
          &.sheep {
            background: #fff url("~assets/images/sheep.svg");
          }
          &.pig {
            background: #fff url("~assets/images/pig.svg");
          }
          &.cat {
            background: #fff url("~assets/images/cat.svg");
          }
          &.owl {
            background: #fff url("~assets/images/owl.svg");
          }
          &.lion {
            background: #fff url("~assets/images/lion.svg");
          }
          &.koala {
            background: #fff url("~assets/images/koala.svg");
          }
          &.penguin {
            background: #fff url("~assets/images/penguin.svg");
          }
          &.raccoon {
            background: #fff url("~assets/images/raccoon.svg");
          }
          &.dog {
            background: #fff url("~assets/images/dog.svg");
          }
          &.fox {
            background: #fff url("~assets/images/fox.svg");
          }
        }
      }
      .fav {
        cursor: pointer;
        width: 16px;
        height: 16px;
        margin-left: 50px;
        background-repeat:no-repeat;
        background: url("~assets/images/star-sprite.png");
        background-position: 16px 0;
        &.active {
          background-position:0;
        }
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
      .picture {
        margin-bottom: 30px;
      }
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
