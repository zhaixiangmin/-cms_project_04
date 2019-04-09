<template>
  <div>
    <!--<mt-swipe :auto="4000">-->
    <mt-swipe :auto="1000000000">
      <!-- v-for组件的时候需要给key，避免vue计算key，来提升性能 -->
      <!-- key就是位置的标识 -->
      <mt-swipe-item v-for="(data, index) in dataList" :key="index">
        <!--{{index}}-->
        <img :src="data.path">
      </mt-swipe-item>
      <!--<mt-swipe-item>2</mt-swipe-item>-->
      <!--<mt-swipe-item>3</mt-swipe-item>-->
    </mt-swipe>

    <test/>

    <!--下有九宫格-->
    <div class="grid">
      <ul>
        <li v-for="(module, index) in modules" :key="index">
          <router-link :to="module.route">
            <span :class="module.className"></span>
            <div>{{module.title}}</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      dataList: [], // 轮播图数据
      modules: [{
        title: '新闻资讯',
        className: 'back-news',
        route: {
          name: 'NewsList'
        }
      }, {
        title: '图文分享',
        className: 'back-pic',
        route: {
          name: 'PhotoList',
          query: {
            categoryId: 0
          }
        }
      }, {
        title: '商品展示',
        className: 'back-goods',
        route: {
          name: 'Home'
        }
      }, {
        title: '留言反馈',
        className: 'back-feed',
        route: {
          name: 'Home'
        }
      }, {
        title: '搜索咨询',
        className: 'back-search',
        route: {
          name: 'Home'
        }
      }, {
        title: '联系我们',
        className: 'back-callme',
        route: {
          name: 'Home'}
      }]
    }
  },
  created () {
    this.$log()

    this.$axios.get('imageManager/findImageByType?did=440000&type=1&acticey=0')
      .then(res => {
        console.log('imageManager/findImageByType', res)
        this.dataList = res.data.dataList
      })
      .catch(err => console.err(err))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-swipe {
  width: 100%;
  height: 200px;
}
.mint-swipe img {
  width: 100%;
}
/*九宫格样式 */
.grid span {
  display: inline-block;
  margin: 10px 0;
  width: 50px;
  height: 50px;
  background-repeat: round;
}

.grid ul {
  margin:0;
  padding: 0;
  overflow: hidden;

}
.grid li{
  list-style: none;
  float: left;
  width: 33.333%;
  text-align: center;
}
.back-news {
  background-image: url(../../static/img/news.png);
}
.back-pic {
  background-image: url(../../static/img/picShare.png);
}
.back-goods {
  background-image: url(../../static/img/goodsShow.png);
}
.back-feed {
  background-image: url(../../static/img/feedback.png);
}
.back-search {
  background-image: url(../../static/img/search.png);
}
.back-callme {
  background-image: url(../../static/img/callme.png);
}
</style>
