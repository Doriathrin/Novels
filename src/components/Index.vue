<template>
  <div>
    <h3>{{this.$route.params.name}}</h3>
    <ul>
      <li v-for="(item,key) in arr" @click="a3(key)">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'Index',
    data () {
      return {
        arr:""
      }
    },
    mounted () {
      // console.log(this.$route.query.id)
      // this.arr=this.$route.query.name

    },
  }
</script>

<style lang="scss" scoped>

</style>