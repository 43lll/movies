<template>
  <div class="carrousel">
    <el-carousel :interval="4000" type="card" width="950px" height="270px" margin-top="20px">
    <el-carousel-item v-for="(item,index) in carrousel" :key="index">
      <a :href="item.url">
            <img :src="item.img_url">
          </a>
    </el-carousel-item>
  </el-carousel> 
  </div>
</template>
<script>
export default {
   props:["carrousel"],
}
</script>