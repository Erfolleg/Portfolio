<template lang="pug">
    section.works-section
        .container 
            .title Блок «Работы»
            .works-container
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
            ul.works 
                li.works__item
                button.btn-container 
                    .btn__text
                    .btn__circle
                    .btn__title Добавить работу
                li.works__item(v-for="n in 4")
                .card
                    .works-wrapper
                    .works__pic
                        img(src="../../../images/content/1.jpg").works__image
                        .works__tag
                        ul.tags
                            li.tags__item HTML5
                            li.tags__item CSS
                            li.tags__item Javascript
                    .works__data
                        .works__title Сайт школы образования
                        .works__text
                        p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                        a.works__link http://loftschool.ru
                        .works__btns
                        button(type="button" data-text="Править").btn.is-pencil
                        button(type="button" data-text="Удалить").btn.is-cross
</template>
