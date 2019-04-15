<template lang="pug">
    .login
        .login__content
            .authorization(v-if="showAuthForm == false")
                a(href="/").login__form-close
                button(@click="showAuthForm = true").btn_auth Авторизация
            form.login__form(@submit.prevent="login" v-if="showAuthForm")
                .login__form-title Авторизация
                a(href="#" @click="showAuthForm = false").login__form-close.login__form-close-form
                .login__form-row
                    label.input
                        .input__title Логин
                        .input_block(
                            :class="{'error' : validation.firstError('user.name')}"
                        )
                            .input_icon-user
                            input(
                                @input="$emit('input', $event.target.value)"
                                v-model="user.name"
                            ).input__elem
                            .login-input__error
                                error-tooltip(
                                    :errorText="validation.firstError('user.name')"
                                )
                .login__form-row
                    label.input
                        .input__title Пароль
                        .input_block(
                            :class="{'error' : validation.firstError('user.password')}"
                        )
                            .input_icon-key
                            input(
                                @input="$emit('input', $event.target.value)"
                                type="password"
                                v-model="user.password"
                                ).input__elem
                            .login-input__error
                                error-tooltip(
                                    :errorText="validation.firstError('user.password')"
                                )
                .login__form-button
                    button.login__form-btn(type="submit") Отправить
</template>

<script>
import $axios from "@/requests";
import { Validator } from "simple-vue-validator";
export default {
    mixins: [require("simple-vue-validator").mixin],
    validators: {
    "user.name": value => {
      return Validator.value(value).required("Введите имя пользователя");
    },
    "user.password": value => {
      return Validator.value(value).required("Введите пароль");
    }
  },
    components: {
        errorTooltip: () => import("components/errorTooltip.vue")
    },
    data() {
        return {
            user: {
                name: "hisaev032019",
                password: "392707hisaev"
            },
            showAuthForm: false
        }
    },
    props: {
        value: String | Number,
        errorText: {
            type: String,
            default: ""
        },
        value: String | Number
    },
    methods: {
        async login() {
            if ((await this.$validate()) === false) return;
            try {
                const { 
                    data: { token }
                } = await $axios.post('/login', this.user);

                localStorage.setItem('token', token);
                $axios.defaults.headers['Authorization'] = `Bearer ${token}`;
                this.$router.replace('/');
            } catch (error) {
                alert(error.message)
            }
            
        }
    },
};
</script>

<style lang="postcss">
@import "../../../styles/mixins.pcss";

.login {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("~images/content/MountainBaloon.jpg") center center / cover no-repeat;
    min-height: 650px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;


    &:before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.5;
        background: $text-color;
    }
}

.login__content {
    padding: 65px;
    background: #fff;
    z-index: 10;
    min-width: 400px;
    position: relative;
    
    @include phones {
        height: 100%;
        padding: 0 30px;
    }
}

.btn_auth {
  width: 347px;
  height: 80px;
  border-radius: 40px 0;
  background-color: #ffffff;
  background-image: linear-gradient(to right, #ad00ed 0%, #5500f2 100%);
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  padding: 7%;
  @include phones {
    width: 259px;
    height: 60px;
    border-radius: 30px 0;
  }
}

.login__form {
    position: relative;
    width: 350px;
    @include phones {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    &-title {
        font-size: 36px;
        font-weight: 600;
        line-height: 60px;
        text-align: center;
        margin-bottom: 14px;
    }

    &-close {
        position: absolute;
        right: 20px;
        top: 20px;
        width: 20px;
        height: 20px;
        cursor: pointer;
        &.login__form-close-form {
             right: -20px;
            top: -30px;
        }

        &:before, &:after {
            position: absolute;
            left: 15px;
            content: "";
            height: 20px;
            width: 3px;
            background-color: #414c63;
            border-radius: 3px;
        }
        &:before {
            transform: rotate(45deg);
        }
        &:after {
            transform: rotate(-45deg);
        }
    }

    &-row {
        margin-bottom: 30px;
        .input__title {
            padding-left: 45px;
            margin-bottom: 10px;
        }
        .input__elem {
            padding-bottom: 16px;
            padding-left: 10%
        }
        @include phones {
            width: 100%;
        }
    }

    &-button {
        width: 100%;
        padding: 0 8%;
    }

    &-btn {
        width: 100%;
        color: #ffffff;
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        background: initial;
        padding: 30px;
        border-radius: 40px 5px;
        background-image: linear-gradient(to right, #ad00ed 0%, #5500f2 100%);
    }

    .input__elem {
        @include phones {
            padding-left: 35px;
        }
    }
}
.input_block {
    display: flex;
    position: relative;
    &.error {
        .login-input__error {
            display: block;
        }
    }
}
.input_icon {
    &-user {
        background-image: svg-load("user.svg", fill=#cfd2d7);
        width: 30px;
        height: 30px;
        position: absolute;
        top: 10px;
        
    }
    &-key {
        background-image: svg-load("key.svg", fill=#cfd2d7);
        width: 30px;
        height: 30px;
        position: absolute;
        top: 10px;
    }
}

.login-input__error {
    display: none;
    position: absolute;
    top: 100%;
    z-index: 100;
    opacity: 0.9;
}

</style>