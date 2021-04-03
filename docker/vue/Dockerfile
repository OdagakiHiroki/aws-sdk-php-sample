FROM node:14.16.0-alpine3.12

RUN apk update \
    && yarn global add @vue/cli

RUN yarn install

CMD ["yarn", "serve"]

# NOTE 初回Vueプロジェクト作成時のみ/var/www/vue-sampleで下記コマンドを実施
# 対話形式でvueプロジェクトを作成する
# vue create .
