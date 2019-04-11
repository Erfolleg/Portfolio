<template lang="pug">
    ul.reviews
        li.reviews__item(@click="showFormAndTurnEditModeOff")
            button.btn-container
                .btn__text
                    .btn__circle
                    .btn__title Добавить отзыв
        li.reviews__item(v-for="n in 3")
            .card
                .card__title
                    .card__title-text
                    .user
                        .user__pic
                            img(src="../../../images/content/vova.jpg").user__pic-avatar
                        .user__desc
                            .user__name Владимир Сабанцев
                            .user__occ Преподаватель
                .card__content
                    .reviews__content
                        .reviews__content-text
                            p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                        .reviews__btns
                            button(type="button" data-text="Править").btn.is-pencil
                            button(type="button" data-text="Удалить").btn.is-cross
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
export default {
  components: {
    reviewsCard: () => import("components/reviews/reviewsCard.vue")
  },
  computed: {
    ...mapState("reviews", {
      reviews: state => state.reviews
    })
  },
  methods: {
    ...mapMutations('reviews', ['SHOW_FORM', 'TURN_EDIT_MODE_OFF']),
    ...mapActions('reviews', ['fetchReviews']),
    showFormAndTurnEditModeOff() {
      this['TURN_EDIT_MODE_OFF']();
      this['SHOW_FORM']();
    }
  },
  async created() {
    try {
      await this.fetchReviews();
    } catch (error) {
      console.error(error.message);
    }
  }
};
</script>