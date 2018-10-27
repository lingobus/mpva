<template lang="pug">
  .<%=options.name%>
    span <%=options.name%>
</template>

<script>
export default {
  name: '<%=options.name%>',
  components: {

  },
  props: [],
  data () {
    return {

    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {}
  }
}
</script>

<style lang="stylus" scoped>
</style>