// ========== ライブラリのimport(RailsでReactを動作させるために使用)
import React from 'react';
import ReactDOM from 'react-dom';

// ========== 関数定義
// ----- 引数のuserインスタンスの姓名要素を結合して返す関数
// # 概要
// 引数として渡したインスタンスと、属性名をもとに、空文字かどうかのバリデーションチェックを行う
//
// # 引数
// * user
// 姓名を結合したいuserインスタンスを指定する
//
// # 戻り値
// 姓名を全角スペースで結合した文字列
function formatName(uer) {
  return user.lastName + '　' + user.firstName;
}

// ----- 挨拶用のメッセージ文字列を生成する関数
// # 概要
// 引数のインスタンスに値が設定されて入ればログインユーザ用メッセージを返し、存在しない場合はゲスト用メッセージを返す
//
// # 引数
// * user
// メッセージを贈りたいuserインスタンス
//
// # 戻り値
// ログインユーザの挨拶用メッセージ
function getGreeting(uer) {
  let userName = 'ゲスト';

  if (user) {
    userName = formatName(user);
  }

  return <h1>こんにちは、{userName}さん</h1>;
}


// ========== 主処理
// ----- 変数代入
// userインスタンス作成
const user = {
  firstName: '太郎',
  lastName: '山田',
};

// ----- 姓名を結合した文字列を変数に代入
// ※変数部は「{}」で囲む
const element1 = getGreeting(user);

// ----- 同一処理でも、Reactには複数が存在する
// 1. 直接タグ要素を代入する
const element2 = (
  <h1 className="greeting">
    直接タグを代入
  </h1>
);
// 2. `React.createElement`メソッドを用いる
const element3 = React.createElement(
  'h1',
  { className: 'greeting' }
  , 'React.createElementメソッドを使って文字列を代入'
);

// 3. `{}`を用いた記法で、厳密に引数を指定する
const element4 = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: '{}を使って厳密に引数を指定',
  }
};

// ----- 画面が呼び込まれたときに発火するイベント
// 参考：
// https://developer.mozilla.org/ja/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener('DOMContentLoaded', () => {
  // ReactDOM.renderメソッドによる画面描画処理
  // 第1引数に描画したい要素(先ほど代入した変数を指定)
  // 第2引数に挿入する要素(要素の作成も可能)
  ReactDOM.render(
    element1,
    document.getElementById('test1'),
  );
  ReactDOM.render(
    element2,
    document.getElementById('test2'),
  );
  ReactDOM.render(
    element3,
    document.getElementById('test3'),
  );
  ReactDOM.render(
    element4,
    document.getElementById('test4'),
  );
});
