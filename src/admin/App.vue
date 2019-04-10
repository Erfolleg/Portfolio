<template lang="pug">
  .root-wrapper-container
    .root-container 
      header.header
        app-header
      section.switches
        tabs
      main.content
        router-view

</template>

<script>
export default {
  components: {
    appHeader: () => import("./components/header"),
    tabs: () => import("./components/tabs"),
  }
};
</script>


<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/admin/base-admin.pcss";
@import "../styles/layout/base.pcss";


@import "../styles/admin/root-container.pcss";
@import "../styles/admin/btn.pcss";
@import "../styles/admin/title.pcss";
@import "../styles/admin/content.pcss";
@import "../styles/admin/input.pcss";
@import "../styles/admin/works.pcss";
@import "../styles/admin/edit-form.pcss";
@import "../styles/admin/tags.pcss";
@import "../styles/admin/reviews.pcss";
</style>
