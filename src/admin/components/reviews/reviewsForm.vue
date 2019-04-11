<template lang="pug">
    .reviews__form(v-if="reviewsForm.show")
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
