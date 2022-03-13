<template>
  <h1>
    Vue
  </h1>
  <h2 style="color:deepskyblue">{{msg}}</h2>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
        msg:''
    }
  },
  mounted(){
    fetch("/api/messages/hello")
      .then((response)=>response.text())
      .then((data) => {
        this.msg = data;
       })
  }
}

</script>


