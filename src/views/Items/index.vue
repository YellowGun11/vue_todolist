<!--  -->
<template>
  <div id="items">
    <h1>待办项</h1>
    <div>
      <el-button type="primary" icon="el-icon-plus" round @click="dialogFormVisible = true">新建计划</el-button>
    </div>
    <div class="itemsList" v-for="(item,index) in theData" :key="index">
      <div class="listLeft">
        <div>{{item.name}}</div>
        <div>创建时间:{{item.createTime}}</div>
      </div>
      <div class="listRight">
        <el-button type="danger" icon="el-icon-close" size="mini" circle @click="deleteItems(index)"></el-button>
        <el-button type="primary" icon="el-icon-check" size="mini" circle @click="finishItems(index)"></el-button>
      </div>
    </div>
    <el-dialog title="新建计划" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="itemsForm">
        <el-form-item label="计划主题" :label-width="formLabelWidth">
          <el-select v-model="form.act" placeholder="请选择主题">
            <el-option label="日常" value="act1"></el-option>
            <el-option label="学习" value="act2"></el-option>
            <el-option label="工作" value="act3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="计划内容" :label-width="formLabelWidth">
          <el-input v-model="form.name" placeholder="请输入内容" autocomplete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="选择时间" :label-width="formLabelWidth">
          <el-date-picker v-model="form.doTime" type="datetime" placeholder="选择日期时间" :picker-options="pickerOptions0"></el-date-picker>
        </el-form-item> -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="createItems">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import "../../utils/dateFormat"
export default {
  data() {
    return {
      dialogFormVisible: false,
      dataList: [
        {
          name: "去电玩城",
          createTime: "2019-10-10"
        },
        {
          name: "去电玩城",
          createTime: "2019-10-10"
        }
      ],
      finishList:[],
      recycleList:[],
      form: {
        name: "",
        act: "",
      },
      /* pickerOptions0: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7; //如果没有后面的-8.64e7就是不可以选择今天的
        }
      }, */
      formLabelWidth: "120px"
    };
  },

  components: {},

  computed: {
    theData() {
      return this.$store.getters.getDataList;
    }
  },

  methods: {
    createItems() {
      if (this.form.name === "") {
        this.$message({
          message: '计划名称不能为空！',
          type: 'warning'
        });
        return;
      }
      if (this.form.act === "") {
        this.$message({
          message: '请选择一个主题！',
          type: 'warning'
        });
        return;
      }
      const createTime = (new Date()).Format("yyyy-MM-dd hh:mm:ss");
      const newItem = {
        name:this.form.name,
        act:this.form.act,
        createTime
      }
      this.dataList.push(newItem);
      this.form.name="";
      this.form.act="";
      this.dialogFormVisible = false;
    },
    deleteItems(key){
      console.log(key);
      this.theData.forEach((item,index)=>{
        if(key===index){
          this.recycleList.push(item)
        }
      });
      this.dataList.splice(index,1);
    },
    finishItems(key){
      console.log(key)
    }
  }
};
</script>

<style scoped>
#items {
  text-align: left;
}
h1{
  font-family: happy;
}
.itemsList {
  display: flex;
  flex-direction: row;
}
</style>