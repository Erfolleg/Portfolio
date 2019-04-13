<template lang="pug">
    .reviews__form
        .edit-form
            .card
                .card__title
                    .card__title-text {{formTitle}}
                .card__content
                    .reviews__form-content
                        .reviews__form-user__pic
                            label.reviews__form-load
                                input(
                                    type="file"
                                    @change="appendFileAndRenderPhoto"
                                ).reviews__form-file_input
                                .reviews__form-pic
                                    .reviews__form-avatar(
                                        :class="{'filled' : this.rendedPhotoUrl.length}"
                                        :style="{'backgroundImage' : `url(${this.rendedPhotoUrl})`}"
                                    )
                                .reviews__form-add Добавить фото
                        .reviews__form-col
                            .reviews__form-row
                                .reviews__form-block
                                    label.input
                                        .input__title Имя автора
                                        input(name="name" v-model="review.author" type="name" class="name_input" placeholder="" required).input__elem
                                .reviews__form-block
                                    label.input
                                        .input__title Титул автора
                                        input(name="text" v-model="review.occ" type="text" class="text_input" placeholder="" required).input__elem
                            .reviews__form-row
                                .reviews__form-block
                                    label.textarea
                                        .input__title Отзыв
                                        textarea(name="review" rows="4" placeholder="Введите отзыв" v-model="review.text" required).textarea__elem
                    .edit-form__buttons
                        .edit-form__buttons-item
                            button(@click="CLOSE_FORM").btn__clear Отмена
                        .edit-form__buttons-item
                            button(@click="addNewReview").btn__load Загрузить
</template>

<script>
import { mapActions } from "vuex";
export default {
    data() {
    return {
      renderedPhotoUrl: "",
      review: {
        photo: "",
        author: "",
        occ: "",
        text: ""
      }
    };
  },
  computed: {
    ...mapState("reviews", {
      reviewsForm: state => state.reviewsForm,
      editedReview: state => state.editedReview
    }),
    formTitle() {
      switch (this.reviewsForm.editMode) {
        case true:
          return "Редактирование отзыва";
          break;
        case false:
          return "Новый отзыв";
          break;
      }
    },
    remotePhotoPath() {
      return `https://webdev-api.loftschool.com/${this.review.photo}`;
    }
  },
  methods: {
    ...mapMutations('reviews', ['CLOSE_FORM']),
    ...mapActions('reviews', ['addReview', 'editReview']),
    appendFileAndRenderPhoto(e) {
      const file = e.target.files[0];
      this.review.photo = file;
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.renderedPhotoUrl = reader.result;
        };
      } catch (error) {
        console.error(error.message);
      }
    },
    createReviewFormData() {
      const formData = new FormData();
      formData.append("author", this.review.author);
      formData.append("occ", this.review.occ);
      formData.append("text", this.review.text);
      formData.append("photo", this.review.photo);
      return formData;
    },
    async addNewReview() {
      if ((await this.$validate()) === false) return;
      try {
        const reviewFormData = this.createReviewFormData();
        await this.addReview(reviewFormData);
        this['CLOSE_FORM']();
      } catch (error) {
        console.error(error.message);
      }
    },
    setEditedReview() {
      this.review = { ...this.editedReview };
      this.renderedPhotoUrl = this.remotePhotoPath;
    },
    async saveEditedReview() {
      if ((await this.$validate()) === false) return;
      try {
        const reviewData = {
          id: this.review.id,
          data: this.createReviewFormData()
        };
        await this.editReview(reviewData);
        this['CLOSE_FORM']();
      } catch (error) {
        console.error(error.message);
      }
    }
  },
  created() {
    if (this.reviewsForm.editMode) {
      this.setEditedReview();
    }
  }
};
</script>
