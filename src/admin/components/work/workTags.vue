<template lang="pug">
    ul.tags
        li.tags__item(
            v-for="(tag, index) in tags"
            :key="index"
            ) {{tag}}
</template>

<script>
export default {
  props: {
    tags: Array
  }
}
</script>