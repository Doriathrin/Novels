<template>
  <div class='lwq-head'>
     <header>
        <p>分类</p> 
     </header>  
     <section>
       <h3>男生</h3>
        <ul>
          <li v-for='(item,key) in list' v-if=' item.age== "男生" ' @click='a3()'>
            <!--<router-link :to="'/index?id='+item.name"></router-link>--> {{item.name}}
          </li>
        </ul>
        <h3>女生</h3>
        <ul>
          <li v-for='(item,key) in list' v-if=' item.age== "女生" '>
            {{item.name}}
          </li>
        </ul>
     </section>
  </div>
</template>

<script>
  export default {
    name:'Head',
    data () {
      return {
        list:[],
        name:'',
      }
    },
    mounted () {
      this.$http.get('/static/data.json').then((msg)=>{
        console.log(msg);
        this.list=msg.body.banner
      })
    },
    methods: {
      a3(){
        this.$store.commit('a3',this.list);
        this.$router.push({name:'index',params:{name:this.list}})
        
      }
    }
  }
</script>

<style lang="scss" scoped>
header{
  width:4.8rem;
  height:0.5rem;
  background: #26a2ff;
  p{
    line-height: 0.5rem;
    text-align: center;
    font-size:0.2rem;
    color:#ffffff;
  }
}
section{
  h3{
    font-size:0.2rem;
  }
  ul{
    display: flex; 
    justify-content: space-around;
    font-size:0.2rem;
  }
}
</style>