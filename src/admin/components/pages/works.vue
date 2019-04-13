<template lang="pug">
    section.works-section
        .container 
            .title Блок «Работы»
            .works-container
              work-form
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

<script>
export default {
  components: {
    workForm: () => import("components/work/workForm.vue")
  }
}
</script>

<style lang="postcss">

@import "../../../styles/mixins.pcss";

.works-container {
  background: #fff;
  margin-bottom: 30px;
}
.works {
  display: flex;
  flex-wrap: wrap;
}
.works__item {
  width: 30%;
  margin-left: 30px;
  margin-bottom: 30px;
  min-height: 560px;
  background: #fff;

  @include tablets {
    width: 45%;
  }
  @include phones {
    width: 100%;
    margin-left: 0;
    min-height: 111px;
  }
  .card {
    padding: 0;
  }
}

.works__pic {
  position: relative;
}
.works__tag {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.works__data {
  padding: 40px 30px;
  @include phones {
    padding: 30px 20px;
  }
}
.works__title {
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
  margin-bottom: 25px;

  @include phones {
    margin-bottom: 17px;
  }
}

.works__text {
  opacity: 0.7;
  font-size: 16px;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 30px;

  @include phones {
    font-size: 14px;
    line-height: 24px;
  }
}

.works__link {
  color: #383bcf;
  font-size: 16px;
  font-weight: 600;
  line-height: 30px;

  @include phones {
    font-size: 14px;
  }
}

.works__btns {
  margin-top: 45px;
  display: flex;
  justify-content: space-between;
}

    
</style>