<!--  -->
<template>
  <div id="finished">
    <h1>已完成</h1>
    <div class="itemsList" v-for="(item,index) in theFinish" :key="index">
      <div class="listLeft">
        <div>{{item.name}}</div>
        <div>创建时间:{{item.createTime}}</div>
        <div>完成时间:{{item.finishTime}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  components: {},

  computed: {
    theFinish() {
      return this.$store.getters.getFinishList;
    }
  },

  methods: {}
};
</script>

<style scoped>
#finished {
  text-align: left;
}
h1{
  font-family: happy;
}
</style>