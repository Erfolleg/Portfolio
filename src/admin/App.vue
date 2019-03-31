<template lang="pug">
    .root-wrapper-container
      .root-container 
        header.header
          .container.header-container
            .header__info
              .user
                .user__pic
                  img(src="../images/content/user.jpg").user__pic-avatar
                .user__name
                  span Булат Хисаев
              .header__title Панель администрирования
            a.exit-btn Выйти

        section.switches
          .container.switches-container
            ul.switches
              -
                var usersq = ['Обо мне', 'Работы', 'Отзывы'];
              each item in usersq
                li.switches__item
                  .switches__link #{item}
        main.content
          section.about
            .container.about-container
              .about-title
                h1.title Блок «Обо мне»
                button.about__add-btn Добавить группу

              .about__content
                  ul.skill-list
                    -
                      var skillsAdmin = [
                        ['Front-end', [{name:'HTML5', num: '100'},{name:'CSS3', num: '90'}, {name:'Javascript', num: '80'}, {name:'Jquery и Vue.js', num: '85'}]],
                        ['Workflow', [{name:'GIT', num: '100'}, {name:'Terminal', num: '90'}, {name:'Gulp', num: '80'}, {name:'Webpack', num: '85'}]]
                      ]
                    each itemA in skillsAdmin
                      li.skill-list__item
                        .card
                          .card__title
                            .skills-card-title
                              .skills-card-title__text #{itemA[0]}
                              .skills-card-title__icon
                                button(type="button").btn.is-pencil.grayscale
                          .card__content
                            .skill-list__table
                              .skill-table-container
                                table.skills
                                  each skillAdmin in itemA[1]
                                    tr.skills-row-wrapper
                                      td.skills-cell #{skillAdmin.name}
                                      td.skills-cell
                                        .skills__input
                                          .skills__input-text #{skillAdmin.num}
                                      td.skills-cell 
                                        button(type="button").btn.is-pencil.grayscale.no-words
                                      td.skills-cell 
                                        button(type="button").btn.is-trash.grayscale.no-words
                            .add-new
                              .add-new-container
                                .add-new__inputs
                                  .add-new__col
                                    label.input
                                      input.input__elem(placeholder="Новый навык")
                                  .add-new__col.add-new__col-small
                                     label.input
                                      input.input__elem(type="number" min="0" max="100" maxlength="3")
                                button.add-new__button
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
                          img(src="../images/content/1.jpg").works__image
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
                              .reviews__form-file_input
                              .reviews__form-pic
                                .reviews__form-avatar
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
                            img(src="../images/content/vova.jpg").user__pic-avatar
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



<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/admin/base-admin.pcss";
@import "../styles/layout/base.pcss";

@import "../styles/admin/root-wrapper-container.pcss";
@import "../styles/admin/root-container.pcss";
@import "../styles/admin/header.pcss";
@import "../styles/admin/user.pcss";
@import "../styles/admin/btn.pcss";
@import "../styles/admin/switches.pcss";
@import "../styles/admin/title.pcss";
@import "../styles/admin/content.pcss";
@import "../styles/admin/about.pcss";
@import "../styles/admin/card.pcss";
@import "../styles/admin/skill-list.pcss";
@import "../styles/admin/skills-card-title.pcss";
@import "../styles/admin/skills.pcss";
@import "../styles/admin/skills-row-wrapper.pcss";
@import "../styles/admin/add-new.pcss";
@import "../styles/admin/input.pcss";
@import "../styles/admin/works.pcss";
@import "../styles/admin/edit-form.pcss";
@import "../styles/admin/tags.pcss";
@import "../styles/admin/reviews.pcss";
</style>
