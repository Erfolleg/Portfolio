<template lang="pug">
    .edit-form
        .card
            .card__title
                .card__title-text Редактирование работы
            .card__content
                .edit-form__container
                    .edit-form__col
                        .edit-form__img
                            .edit-form__img-text Перетащите или загрузите для загрузки изображения
                            .edit-form__btn-file
                                .btn-file-fake ЗАГРУЗИТЬ
                                input.btn-file-input(type="file")
                    .edit-form__col
                        .edit-form__row
                            label.input
                                .input__title Название
                                input.input__elem
                        .edit-form__row
                            label.input
                                .input__title Ссылка
                                input.input__elem
                        .edit-form__row
                            label.input
                                .input__title Описание
                                textarea.textarea__elem
                        .edit-form__row
                            .add-tags
                                .add-tags__wrapper
                                    label.input
                                        .input__title Добавление тэга
                                        input.input__elem
                                ul.tags
                                    li.tags__item
                                        span HTML
                                        a.tags__remove.grayscale
                                    li.tags__item 
                                        span CSS
                                        a.tags__remove.grayscale
                                    li.tags__item 
                                        span Javascript
                                        a.tags__remove.grayscale
                .edit-form__buttons
                    .edit-form__buttons-item
                        button.btn__clear Отмена
                    .edit-form__buttons-item
                        button.btn__load Загрузить
</template>

<script>
export default {
    
}
</script>


<style lang="postcss">

@import "../../../styles/mixins.pcss";

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
    
</style>