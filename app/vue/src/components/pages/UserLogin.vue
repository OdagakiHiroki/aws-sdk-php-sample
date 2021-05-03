<template>
  <div class="user-login">
    ログイン
    <LabelInput
      :value="emailValue"
      placeholder='メールアドレスを入力してください'
      @handleInputChange="changeEmailValue"
    />
    <LabelInput
      :value="passwordValue"
      placeholder='パスワードを入力してください'
      @handleInputChange="changePasswordValue"
    />
    <BaseButton
      text='ログイン'
      @handleClick="login"
    />
  </div>
</template>

<script>
import { requestLogin } from '@/api/auth';
import LabelInput from '@/components/molecules/LabelInput.vue';
import BaseButton from '@/components/atoms/BaseButton.vue';

export default {
  name: 'UserLogin',

  components: {
    LabelInput,
    BaseButton,
  },

  data: () => ({
    emailValue: '',
    passwordValue: '',
  }),

  methods: {
    changeEmailValue({ value }) {
      this.emailValue = value;
    },
    changePasswordValue({ value }) {
      this.passwordValue = value;
    },
    async login() {
      const postParams = {
        email: this.emailValue,
        password: this.passwordValue,
      };
      const res = await requestLogin({ postParams });
      if (res.status === 200) {
        const accessToken = res.data.access_token;
        this.$store.dispatch('setAccessToken', { accessToken });
        this.$router.push({ name: 'Top' });
        return;
      }
      alert('メールアドレス、またはパスワードが違います。');
    },
  },
};
</script>
