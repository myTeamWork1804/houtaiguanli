
<template>
  <div class="block">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="erweimadata.length">
    </el-pagination>
  </div>
</template>

<script>
    export default {
        name: "fenye",
      props:['erweimadata'],
      methods: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        }
      },
      data() {
        return {
          currentPage1: 5,
          currentPage2: 5,
          currentPage3: 5,
          currentPage4: 4
        };
      }

    }
</script>

<style scoped>
 .block{
   padding-top: 10px;
   padding-bottom: 30px;
 }
</style>
