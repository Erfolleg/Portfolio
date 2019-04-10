<template lang="pug">
    section.reviews-section
        .container
            .title Блок «Отзывы»
        .reviews-container
            .container
                .reviews__form
                    .edit-form
                        .card
                            .card__title
                                .card__title-text Новый отзыв
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
                                                    input.input__elem
                                            .reviews__form-block
                                                label.input
                                                    .input__title Титул автора
                                                    input.input__elem
                                        .reviews__form-row
                                            .reviews__form-block
                                                label.textarea
                                                    .input__title Отзыв
                                                    textarea.textarea__elem
                                .edit-form__buttons
                                    .edit-form__buttons-item
                                        button.btn__clear Отмена
                                    .edit-form__buttons-item
                                        button.btn__load Загрузить
                    ul.reviews
                        li.reviews__item
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
export default {
    data() {
        return {
            rendedPhotoUrl: "",
            photo: ""
        }
        
    },
    methods: {
        appendFileAndRenderPhoto(e) {
            const file = e.target.files[0];
            this.photo = file;

            const reaser = new FileReader();

            try {
                reader.readAsDataURL(file);
                reader.onload = () => {
                    this.rendedPhotoUrl = reader.result
                }
            }   catch (error) {
                alert(error.message)
            }
        }
    }
}
</script>


<style lang="postcss">

@import "../../../styles/mixins.pcss";

.reviews__form {
  margin-bottom: 30px;
  .edit-form__buttons {
    padding-right: 23%;
    @include tablets {
      padding-right: 5%;
      justify-content: flex-end;
    }
  }
}

.edit-form__container {
  display: flex;
  @include tablets {
    flex-direction: column;
    padding: 0 106px;
  }
   @include phones {
     padding: 0;
   }
}

.edit-form__col {
  flex: 1;
  padding: 12px;
}

.edit-form__img {
  border: 1px dashed #a1a1a1;
  background-color: #dee4ed;
  padding: 0 25%;
  text-align: center;
  width: 100%;
  cursor: pointer;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   @include phones {
     padding: 0 5%;
   }

  &-text {
    opacity: 0.5;
    font-size: 16px;
    font-weight: 600;
    line-height: 33.89px;
    margin: 0 auto;
    margin-bottom: 27px;
  }
}

.edit-form__btn-file {
  margin: 0 auto;
  position: relative;
}

.edit-form__buttons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @include tablets {
    justify-content: center;
  }

  &-item {
    margin-right: 60px;
    &:last-child {
      margin-right: 0;
    }
     @include phones {
       margin-right: 20px;
     }
  }
}


.card {
  padding: 30px;
  background: #fff;
  height: 100%;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
   @include phones {
     padding: 30px 0;
   }
  &__title {
    padding: 30px 2%;
    border-bottom: 1px solid rgba(31, 35, 45, 0.15);
    font-size: 18px;
    font-weight: 600;
    line-height: 34px;
    margin-bottom: 30px;
  }
}

.reviews__form-content {
  padding-right: 20%;
  display: flex;
  @include tablets {
    padding: 0;
  }

  @include phones {
    flex-direction: column;
  }
}
.reviews__form-file_input {
    position: absolute;
    top: 0;
    left: -9999px;
}

.reviews__form-col {
  flex: 1;
}

.reviews__form-user__pic {
  margin-right: 30px;
  text-align: center;

  @include phones {
    margin-right: 0;
    margin-bottom: 45px;
  }
}

.reviews__form-pic {
  margin-bottom: 30px;
  @include phones {
    display: flex;
    justify-content: center;
  }
}
.reviews__form-avatar {
  width: 200px;
  height: 200px;
  background-color: #dee4ed;
  border-radius: 50%;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    display: block;
    background: svg-load("filled-user.svg", fill=#ffffff) center center
      no-repeat / contain;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 130px;
    height: 153px;
  }
}

.reviews__form-add {
  color: #383bcf;
  font-size: 16px;
  font-weight: 600;
  line-height: 33.89px;
}

.reviews__form-row {
  display: flex;
  margin-bottom: 35px;
  @include tablets {
    flex-direction: column;
    padding-right: 150px;
    &:last-child {
      padding-right: 0;
    }
  }
  &:last-child {
    margin-bottom: 0;
  }

  @include phones {
    padding-right: 0;
  }
}

.reviews__form-block {
  margin-right: 30px;
  flex: 1;
  @include phones {
    margin-right: 0;
  }
}

.reviews {
  display: flex;
  flex-wrap: wrap;
}

.reviews__item {
  width: calc(50%-30px);
  min-width: 300px;
  margin-left: 30px;
  margin-bottom: 30px;
  @include tablets {
    width: 45%;
  }

   @include phones {
     min-width: 280px;
     margin-left: 0;
     width: 100%;
   }
  .user {
    margin-right: 0;
  }
}

.reviews__content-text {
  opacity: 0.7;
  font-size: 16px;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 60px;
}

.reviews__btns {
  display: flex;
  justify-content: space-between;
}

    
</style>