<template>
  <div  class="slider">
     <el-carousel :interval="3000" arrow="always" height="520px" width="1700px">
        <el-carousel-item v-for="(item, index) in slider" :key="index">
          <a :href="item.url">
            <img :src="item.img_url">
          </a>
        </el-carousel-item>
      </el-carousel>

  </div>
</template>
<script>
export default {
  props:["slider"],
}
</script>