<template lang="pug">
  .add-new-skills-group
    .card
      .card__title
        .card__title-text
        .skills-card-title
          .skills-card-title__input
            label.input
              input(
                v-model="skillTitle"
                placeholder="Название новой группы" 
                autofocus="autofocus"
                
                ).input__elem
          .skills-card-title__buttons
            .skills-card-title__btn
              button(type="button" @click="addSkillGroup").btn.is-tick
            .skills-card-title__btn
              button( type="button"
                ).btn.is-cross
      .card__content
        .add-new
          form.add-new-container.blocked
            .add-new__inputs
              .add-new__col
                label.input
                  input.input__elem(placeholder="Новый навык")
              .add-new__col.add-new__col-small
                label.input
                  input.input__elem(type="number" min="0" max="100" maxlength="3")
            button.add-new__button
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      skillTitle: ""
    };
  },
  methods: {
    ...mapActions('categories', ['addNewSkillGroup']),
    async addSkillGroup() {
      try {
        await this.addNewSkillGroup(this.skillTitle);
        his.skillTitle= "";
      } catch (error) {
        alert(error.message)
      }
      
    }
  }
};
</script>

<style lang="postcss">
@import "../../../styles/mixins.pcss";

.card {
  padding: 30px;
  background: #fff;
  height: 100%;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
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
  &__content {
    display: flex;
    flex: 1;
  }
}

.skills-card-title {
    display: flex;
    justify-content: space-between;
}

.skill-list {
  &__table {
    margin-bottom: 40px;
  }
}

.skills {
  width: 100%;
  

  &-cell {
    font-size: 16px;
    font-weight: 400;
    padding-bottom: 5px;
    &:first-child {
      width: 60%;
    }
  }

  &__input {
    display: flex;
    justify-content: space-between;
    margin-right: 50px;
    &::after {
      content: "%";
      margin-left: 14px;
    }
  }
  &-row-wrapper {
    
  }
}

.skills-card-title__input {
  width: 100%;
}

.skills-card-title__buttons {
  display: flex;
}
.skills-card-title__btn {
  display: flex;
}


.add-new {
  padding-left: 18%;
  margin-top: auto;
  &-container {
    display: flex;
  }
  &__inputs {
    display: flex;
  }
  &__col {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #ffffff;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    margin-left: 30px;
    position: relative;
    display: block;
    flex-shrink: 0;
    &::before {
      position: absolute;
      content: "+";
      display: block;
      top: 47%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 30px;
      font-weight: 600;
      line-height: 30px;
    }
  }
}
.add-new-skills-group {
  height: 100%;
}

.add-new-container.blocked {
  opacity: .3;
  filter: grayscale(100%);
  pointer-events: none;
  user-select: none;
}

</style>