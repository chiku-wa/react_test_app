source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.7.1"

gem "rails", "~> 6.1"

# =============== 各環境で共通のgem
# --- Railsの基本gem
gem "puma", "~> 4.1"
gem "sass-rails", ">= 6"
gem "webpacker", "~> 5.4", ">= 5.4.3"
gem "turbolinks", "~> 5"
gem "jbuilder", "~> 2.7"

# --- 画面デザイン用
gem "bootstrap", "~> 4.5", ">= 4.5.2"
gem "bootsnap", ">= 1.4.2", require: false
# アイコン(アイコンと対応するHTMLタグは「https://fontawesome.com/icons?d=gallery」より検索できる)
gem "font-awesome-sass"

# --- JavaScript
# RailsでReactを使用する場合に必要なgem
gem "react-rails", "~> 2.6", ">= 2.6.1"

# --- その他
# 日本語化用
gem "rails-i18n", "~> 6.0"

# =============== 各種環境用のgem
# ----- 開発環境
group :production do
  # PostgreSQL
  gem "pg"
end
# ----- 開発環境
group :development do
  gem "sqlite3"
  gem "web-console", ">= 3.3.0"
  gem "listen", "~> 3.2"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"

  # RSpecのテスト実行時間を早くするためのgem
  gem "spring-commands-rspec", "~> 1.0"
end

# ----- 開発・テスト環境
group :development, :test do
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]

  # Rails Consoleなどで、オブジェクトをリッチに出力するためのgem
  gem "awesome_print", "~> 1.8"

  # RSPecテスト用
  gem "rspec-rails", "~> 4.0"

  # 環境変数で動的に設定値を扱うためのgem(DB接続情報等)
  gem "dotenv-rails"
end

# ----- テスト環境
group :test do
end

gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
