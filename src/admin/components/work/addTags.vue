<template lang="pug">
        ul.tags
            li(
                v-for="(tag, index) in editedTags"
                :key="index"
            ).tags__item
                span {{tag}}
                a(@click="REMOVE_TAG(tag)").tags__remove.grayscale
            
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapState('works', {
      editedTags: state => state.editedTags
    })
  },
  methods: {
    ...mapMutations('works', ['REMOVE_TAG'])
  }
}
</script>