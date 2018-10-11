<template>
    <div id="app">
        <div class="tab-wrap">
            <div class="tab">
                <div class="logo"><img src="./assets/logo.png" alt="城市充电桩，充电桩厂家" class="newlogo"><a href="/http://www.xcharge.com"></a></div>
                <ul>
                    <li class="tab-item">
                        <a href="#" @click.prevent="ff">解决方案和服务</a>
                    </li>
                    <li class="tab-item">
                        <router-link to="/Two">设备和产品</router-link>
                    </li>
                    <li class="tab-item">
                        <router-link to="/Three">技术和支持</router-link>
                    </li>
                    <li class="tab-item">
                        <router-link to="/Four">了解智充</router-link>
                    </li>
                    <li class="tab-item">
                        <router-link to="/Five">智充实验室</router-link>
                    </li>
                    <li class="tab-item">
                        <router-link to="/Six">城市合伙人</router-link>
                    </li>
                </ul>
                <a href="https://service.xcharger.net/" target="_blank" class="plate">运营商登录</a>
                <a href="http://www.xcharge.com/en/" target="_blank" class="changeLanguage">English</a>
            </div>
        </div>
        <router-view></router-view>
        <div class="foot">
            <div class="top">
                <div class="center">
                    <div class="product">
                        <div class="title">智充产品</div>
                        <div class="list-left">
                            <div class="model"><a href="/c1" class="">C1智能交流充电桩</a></div>
                            <div class="model"><a href="/c2" class="">C2智能交流充电桩</a></div>
                            <div class="model"><a href="/c4" class="">C4智能交流充电桩</a></div>
                            <div class="model"><a href="/c6" class="">C6智能直流充电桩</a></div>
                            <div class="model"><a href="/c6s" class="">C6s智能直流充电桩</a></div>
                        </div>
                        <div class="list-right">
                            <div class="model"><a href="/c9" class="">C9智能直流充电桩</a></div>
                            <div class="model"><a href="/n3" class="">N3高防护充电枪</a></div>
                            <div class="model"><a href="/site" class="">未来充电站</a></div>
                            <div class="model"><a href="https://service.xcharger.net/" target="_blank">运营平台</a></div>
                        </div>
                    </div>
                    <div class="quick">
                        <div class="title">快速入口</div>
                        <div class="list">
                            <div class="model"><a href="/solution" class="">解决方案和服务</a></div>
                            <div class="model"><a href="/product" class="router-link-exact-active router-link-active">设备和产品</a></div>
                            <div class="model"><a href="/support" class="">支持</a></div>
                            <div class="model"><a href="/xcharge" class="">了解智充</a></div>
                            <div class="model"><a href="https://service.xcharger.net/" target="_blank">运营商登录</a></div>
                        </div>
                    </div>
                    <div class="quick">
                        <div class="title">关于我们</div>
                        <div class="list">
                            <div class="model"><a href="/achievement" class="">成就与奖项</a></div>
                            <div class="model"><a href="/work" class="">工作在智充</a></div>
                            <div class="model"><a href="/news" class="">智充新闻</a></div>
                            <div class="model"><a href="/contactUs" class="">联系我们</a></div>
                        </div>
                    </div>
                    <div class="infos"><img src="./assets/code.png" alt="了解智充">
                        <div class="tel">400-877-0227</div>
                        <div class="text">工作日 10:00-19:00</div>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="center">
                    <div class="left">
                        ©2015-2018
                        <a href="/" class="router-link-active">X-CHARGE</a>
                        北京智充科技有限公司版权所有
                    </div>
                    <div class="right">京ICP备15038975号</div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
  name: "app",
  components: {},
  methods: {
    ff: function() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang="stylus" scoped>
 .tab-wrap {
     background: #111318;

     .tab {
         width: 1200px;
         margin: auto;
         font-size: 14px;

         .logo {
             display: inline-block;
             width: 248px;

             img {
                 vertical-align: middle;
                 transform: translateY(-2px);
                 height: 18px;
             }
         }

         ul:nth-of-type(1) {
             display: inline-block;
             height: 60px;

             li {
                 display: inline-block;
                 padding: 0 10px;
                 margin-left: 18px;
                 // border 1px solid #f00
                 position: relative;

                 a {
                     line-height: 60px;
                     font-size: 14px;
                     color: #fff;
                 }
             }

             li:first-child {
                 margin-left: 0;
             }

             li:nth-child(6)::after {
                 // border 1px solid #f00
                 display: block;
                 position: absolute;
                 top: 22px;
                 right: -45px;
                 content: '招募中';
                 width: 48px;
                 height: 16px;
                 line-height: 16px;
                 border-radius: 16px;
                 background-color: #3971dd;
                 color: #333;
                 text-align: center;
                 font-size: 12px;
                 font-weight: 900;
             }
         }

         .plate {
             float: right;
             display: inline-block;
             width: 100px;
             height: 40px;
             line-height: 40px;
             text-align: center;
             border-radius: 2px;
             margin-top: 10px;
             color: #fff;
             text-decoration: none;
             background-color: #2283d8;
         }

         .changeLanguage {
             float: right;
             display: block;
             border: 1px solid #fff;
             border-radius: 4px;
             padding: 0 10px;
             height: 30px;
             margin-top: 15px;
             margin-right: 40px;
             font-size: 14px;
             line-height: 30px;
             text-decoration: none;
             color: #fff;
             cursor: pointer;
         }
     }
 }

 .foot {
     width: 100%;
     min-width: 1200px;
     height: auto;

     .center {
         width: 1200px;
         height: inherit;
         margin: 0 auto;
         position: relative;
     }

     .top {
         background-color: #1a212c;

         .title {
             font-size: 14px;
             color: #fff;
         }

         .product {
             display: inline-block;
             width: 500px;
             margin-top: 60px;
             padding-bottom: 60px;
             text-align: left;
         }

         .list-left, .list-right, .list {
             float: left;
             margin-top: 20px;
             width: 50%;
             font-size: 14px;
         }

         a {
             color: #5e6470;
             text-decoration: none;
             transition: color 0.3s;
             font-size: 16px;
             line-height: 26px;
         }

         a:hover {
             color: #2283d8;
         }

         .quick {
             display: inline-block;
             vertical-align: top;
             width: 240px;
             margin-top: 60px;
             padding-bottom: 60px;
             text-align: left;
         }

         .infos {
             position: absolute;
             right: 0;
             top: 0;
             bottom: 0;
             margin: auto;
             width: 220px;
             font-size: 14px;
             text-align: right;

             img {
                 width: 90px;
                 height: 90px;
                 margin-top: 60px;
             }

             .tel {
                 font-size: 24px;
                 color: #fff;
                 margin-top: 27px;
                 letter-spacing: 2px;
             }

             .text {
                 color: #ddd;
                 margin-top: 4px;
             }
         }
     }

     .bottom {
         height: 80px;
         line-height: 80px;
         color: #5e6470;
         font-size: 14px;
         background-color: #111318;

         .router-link-active {
             color: #2283d8;
             text-decoration: none;
         }
         .left{float:left;}
         .right{
                float: right;
                // width: 50%;
              
         }
     }
 }
</style>


