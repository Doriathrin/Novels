<template>
  <div class='app'>
    <section>
      <router-view></router-view>
    </section>
     
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
body,html,.app{
  display: flex;
  flex-direction: column;
  height:100%;
}
.lwq-box{
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
}
footer{
  width:4.8rem;
  height:0.7rem;
  background: #fafafa;
  a{color:#000000;}
  ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size:0.2rem;
    line-height:0.7rem;
  }
}
</style>
