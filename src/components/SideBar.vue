<template>
  <el-row class="tac">
    <el-col>
      <el-menu class="el-menu-vertical-demo">
        <el-menu-item index="/NewItem">
          <router-link :to="{ name: 'NewItem' }">本周新品</router-link>
        </el-menu-item>
        <el-menu-item index="/Hot">
          <router-link :to="{ name: 'Hot' }">熱銷商品</router-link>
        </el-menu-item>
        <el-menu-item index="/OnSale"
          ><router-link :to="{ name: 'OnSale' }">
            限時折扣
          </router-link></el-menu-item
        >
        <el-sub-menu index="/tops">
          <template #title>
            <span>上身類</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/tops/shortsleeve"
              ><router-link :to="{ name: 'ShortSleeve' }"
                >短袖</router-link
              ></el-menu-item
            >
            <el-menu-item index="/tops/sleeveless"
              ><router-link :to="{ name: 'Sleeveless' }"
                >無袖/背心</router-link
              ></el-menu-item
            >
            <el-menu-item index="/tops/longsleeveless"
              ><router-link :to="{ name: 'LongSleeveless' }"
                >長袖/七分</router-link
              ></el-menu-item
            >
            <el-menu-item index="/tops/shirt"
              ><router-link :to="{ name: 'Shirt' }"
                >襯衫</router-link
              ></el-menu-item
            >
            <el-menu-item index="/tops/hoodie"
              ><router-link :to="{ name: 'Hoodie' }"
                >休閒/連帽</router-link
              ></el-menu-item
            >
            <el-menu-item index="/tops/knitwear"
              ><router-link :to="{ name: 'Knitwear' }">針織/毛衣</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="/bottoms">
          <template #title>
            <span>下身類</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/bottoms/shorts"
              ><router-link :to="{ name: 'Shorts' }"
                >短褲</router-link
              ></el-menu-item
            >
            <el-menu-item index="/bottoms/jeans"
              ><router-link :to="{ name: 'Jeans' }"
                >牛仔褲</router-link
              ></el-menu-item
            >
            <el-menu-item index="/bottoms/pants"
              ><router-link :to="{ name: 'Pants' }"
                >休閒長褲</router-link
              ></el-menu-item
            >
            <el-menu-item index="/bottoms/anklepants"
              ><router-link :to="{ name: 'AnklePants' }"
                >九分褲</router-link
              ></el-menu-item
            >
            <el-menu-item index="/bottoms/dresspants"
              ><router-link :to="{ name: 'DressPants' }"
                >西裝褲</router-link
              ></el-menu-item
            >
            <el-menu-item index="/bottoms/skirts"
              ><router-link :to="{ name: 'Skirts' }"
                >短裙/長裙</router-link
              ></el-menu-item
            >
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="/onepiece">
          <template #title>
            <span>連身類</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/onepiece/dresses"
              ><router-link :to="{ name: 'Dress' }"
                >佯裝</router-link
              ></el-menu-item
            >
            <el-menu-item index="/onepiecs/suit"
              ><router-link :to="{ name: 'Suit' }"
                >套裝</router-link
              ></el-menu-item
            >
            <el-menu-item index="/onepiecs/jumpsuits"
              ><router-link :to="{ name: 'JumpSuits' }"
                >吊帶/連身褲</router-link
              ></el-menu-item
            >
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="/outwear">
          <template #title>
            <span>外套類</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/outwear/casual"
              ><router-link :to="{ name: 'Casual' }"
                >休閒</router-link
              ></el-menu-item
            >
            <el-menu-item index="/outwear/coat"
              ><router-link :to="{ name: 'Coat' }"
                >風衣/大衣</router-link
              ></el-menu-item
            >
            <el-menu-item index="/outwear/blazer"
              ><router-link :to="{ name: 'Blazer' }"
                >西裝外套</router-link
              ></el-menu-item
            >
            <el-menu-item index="/outwear/downjacket"
              ><router-link :to="{ name: 'DownJacket' }"
                >羽絨外套</router-link
              ></el-menu-item
            >
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="/accessories">
          <template #title>
            <span>配件</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="9-1"
              ><router-link :to="{ name: 'Earrings' }"
                >針式/夾式耳環</router-link
              ></el-menu-item
            >
            <el-menu-item index="9-2"
              ><router-link :to="{ name: 'Necklace' }"
                >項鍊/戒指/手鍊</router-link
              ></el-menu-item
            >
            <el-menu-item index="9-3"
              ><router-link :to="{ name: 'Hat' }"
                >帽子/手套/圍巾</router-link
              ></el-menu-item
            >
            <el-menu-item index="9-4"
              ><router-link :to="{ name: 'Belt' }"
                >皮帶/領帶</router-link
              ></el-menu-item
            >
            <el-menu-item index="9-5"
              ><router-link :to="{ name: 'Shoes' }"
                >襪子/鞋子</router-link
              ></el-menu-item
            >
            <el-menu-item index="9-6"
              ><router-link :to="{ name: 'Bags' }"
                >環保袋/包包</router-link
              ></el-menu-item
            >
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
.el-menu-item > a:link {
  color: black;
}
.el-menu-item > a:visited {
  color: black;
}
.router-link-exact-active {
  color: #409eff !important;
  transition: 0.3s;
}

.el-menu-item > a {
  text-decoration: none;
  width: 100%;
}
</style>
