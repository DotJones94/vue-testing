<template>
  <div>
    Parent
    <child-test />
  </div>
</template>

<script>
import ChildTest from "@/components/ChildTest.vue";

export default {
  name: "ParentTest",
  components: {ChildTest}
}
</script>

<style scoped>

</style>