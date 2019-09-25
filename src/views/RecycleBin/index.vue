<!--  -->
<template>
  <div id="recycle">
    <h1>回收站</h1>
    <div class="itemsList" v-for="(item,index) in theRecycle" :key="index">
      <div class="listLeft">
        <div>{{item.name}}</div>
        <div>创建时间:{{item.createTime}}</div>
        <div>删除时间:{{item.delTime}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {
    theRecycle() {
      return this.$store.getters.getRecycleList;
    }
  },


  methods: {}
}
</script>

<style scoped>
#recycle {
  text-align: left;
}
h1{
  font-family: happy;
}
</style>