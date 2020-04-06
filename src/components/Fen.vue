<template>
  <div class='lwq-fen'>
    <input type="text" v-model='title' @keyup='lwq_fen'>
  </div>
</template>

<script>
  export default {
    name:'Fen',
    data () {
      return {
        list:[],
        title:''
      }
    },
    methods: {
      lwq_fen(){
        var url='/static/data.json'+this.title
        this.$http.jsonp(url).then((res)=>{
          console.log(res)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.lwq-fen{
  display: flex;
}
</style>