<template lang="pug">
    .edit-form
        .card
            .card__title
                .card__title-text Редактирование работы
            .card__content
                .edit-form__container
                    .edit-form__col
                        .edit-form__img(
                          :style="{'backgroundImage' : `url(${this.renderedPhotoUrl})`}"
                        )
                            .edit-form__img-text Перетащите или загрузите для загрузки изображения
                            label.edit-form__btn-file
                                .btn-file-fake ЗАГРУЗИТЬ
                                input.btn-file-input(
                                  type="file"
                                  @change="appendFileAndRenderPhoto"
                                  )
                    .edit-form__col
                        .edit-form__row
                            label.input
                                .input__title Название
                                input(
                                  type="text" 
                                  name="title" 
                                  placeholder="Введите название работы" 
                                  v-model="work.title"
                                ).input__elem#title
                        .edit-form__row
                            label.input
                                .input__title Ссылка
                                input(
                                  type="text" 
                                  name="link" 
                                  placeholder="Вставьте ссылку" 
                                  v-model="work.link"
                                ).input__elem#link
                        .edit-form__row
                            label.input
                                .input__title Описание
                                textarea(
                                  name="description"
                                  placeholder="Введите описание работы" 
                                  v-model="work.description"
                                ).textarea__elem#description
                        .edit-form__row
                          .add-tags
                            .add-tags__wrapper
                              label.input
                                .input__title Добавление тэга
                                input.input__elem#tags(
                                  type="text"
                                  name="tags"
                                  placeholder="Добавьте теги"
                                  v-model="work.techs"
                                  @change="ADD_TAGS(work.techs)"
                                )
                            add-tags(v-if="workForm.editMode")    
                                
                .edit-form__buttons
                    .edit-form__buttons-item
                        button(
                          type="button"
                          @click="CLOSE_FORM"
                        ).btn__clear Отмена
                    .edit-form__buttons-item
                        button(
                          type="button"
                          @click="addNewWork"
                          v-if="!workForm.editMode"
                        ).btn__load Загрузить
                        button(
                          type="button"
                          v-if="workForm.editMode"
                          @click="saveEditedWork"
                        ).btn__load Сохранить
        
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
    components: {
    addTags: () => import("./addTags.vue")
    },
    data() {
      return {
        renderedPhotoUrl: "",
        work: {
          title: "",
          techs: "",
          photo: "",
          link: "",
          description: ""
        }
      };
    },
    computed: {
      ...mapState("works", {
        workForm: state => state.workForm,
        editedWork: state => state.editedWork,
        editedTags: state => state.editedTags
      }),
      remotePhotoPath() {
        return `https://webdev-api.loftschool.com/${this.work.photo}`;
      },
      editedTagsAsString() {
        return this.editedTags.join(',');
      }
    },
    methods: {
    ...mapActions("works", ["addWork", "editWork"]),
    ...mapMutations("works", ["CLOSE_FORM", 'ADD_TAGS']),
      appendFileAndRenderPhoto(e) {
        const file = e.target.files[0];
        this.work.photo = file;
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
      async addNewWork() {
        try {
          const workFormData = this.createWorkFormData();
          await this.addWork(workFormData);
          this["CLOSE_FORM"]();
        } catch (error) {
          console.error(error.message);
        }
      },
      createWorkFormData() {
      const formData = new FormData();
      formData.append("title", this.work.title);
      if (this.workForm.editMode) {
        formData.append("techs", this.editedTagsAsString);
      } else {
        formData.append("techs", this.work.techs);
      }
      formData.append("photo", this.work.photo);
      formData.append("link", this.work.link);
      formData.append("description", this.work.description);
      return formData;
      },
      setEditedWork() {
        this.work = { ...this.editedWork };
        this.renderedPhotoUrl = this.remotePhotoPath;
      },
      async saveEditedWork() {
       
        try {
          const workData = {
            id: this.work.id,
            data: this.createWorkFormData()
          };
          await this.editWork(workData);
          this['CLOSE_FORM']();
        } catch (error) {
          console.error(error.message);
        }
      },
    },
    created() {
      if (this.workForm.editMode) {
        this.setEditedWork();
        this.work.techs = "";
      }
    }

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
  background: center center no-repeat / cover;
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