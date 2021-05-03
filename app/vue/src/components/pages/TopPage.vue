<template>
  <div class="top-page">
    <div class="title">
      <span>トップページへようこそ！</span>
    </div>
    <div class="contents">
      <div class="sample-data">
        <span>accessTokenを使ってapiから取得したデータがこちら: </span>
        <span>{{smapleText}}</span>
      </div>
      <BaseButton
        text='ログアウト'
        @handleClick="logout"
      />
    </div>
  </div>
</template>

<script>
import fetchSampleText from '@/api/sample';
import { requestLogout } from '@/api/auth';
import { mapGetters } from 'vuex';
import BaseButton from '@/components/atoms/BaseButton.vue';

export default {
  name: 'TopPage',

  components: {
    BaseButton,
  },

  data: () => ({
    smapleText: '',
  }),

  computed: {
    ...mapGetters({
      accessToken: 'accessToken',
    }),
  },

  created() {
    (async () => {
      const res = await fetchSampleText({ accessToken: this.accessToken });
      if (res.status === 200) {
        this.smapleText = res.data.sample;
        return;
      }
      this.smapleText = 'データ取得に失敗しました。';
    })();
  },

  methods: {
    async logout() {
      const res = await requestLogout({ accessToken: this.accessToken });
      if (res.status === 200) {
        this.$store.dispatch('setAccessToken', { accessToken: null });
        this.$router.push({ name: 'Login' });
        return;
      }
      alert('ログアウトに失敗しました。');
    },
  },
};
</script>
