FROM php:8.0.3-apache

# Apacheのドキュメントルート設定
ENV APACHE_DOCUMENT_ROOT /var/www/laravel-sample/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# php-extensionの追加
RUN docker-php-ext-install bcmath pdo_mysql

# php.iniの設定
COPY ./php.ini /usr/local/etc/php/

# インストール後の Composer のフォルダ名とファイル名
ARG composer_dir=/usr/local/bin
ARG composer_filename=composer

RUN apt-get update \
    # Composer インストール
    && php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php -r "if (hash_file('sha384', 'composer-setup.php') === '756890a4488ce9024fc62c56153228907f1545c228516cbf63f885e036d37e9a59d27d63f46af1d4d07ee0f76181c7d3') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" \
    && php composer-setup.php --install-dir=$composer_dir --filename=$composer_filename \
    && php -r "unlink('composer-setup.php');" \
    # unzip コマンド (composer create-project で必要)
    && apt-get install -y unzip \
    # mod_rewrite有効化
    && a2enmod rewrite

# NOTE 初回laravelプロジェクト作成時のみ/var/www/laravel-sampleで下記コマンドを実施
# composer create-project --prefer-dist laravel/laravel .
