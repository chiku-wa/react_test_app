// ========== ライブラリのimport(RailsでReactを動作させるために使用)
import React from 'react';
import ReactDOM from 'react-dom';

// ========== 関数定義
// ----- 引数のuserインスタンスの姓名要素を結合して返す関数
// # 概要
// 現在日時を出力するHTML要素を返すメソッド
//
// # 戻り値
// 現在日時を出力するタグと日時文字列の組み合わせ。
function tick() {
  // 現在日時を出力するタグ文字列を定義
  const element = (
    <div>
      <p>現在日時:{new Date().toLocaleTimeString()}</p>
    </div>
  );

  // 出力する
  ReactDOM.render(element, document.getElementById('tick_test'));
}


// ========== 主処理
// ----- 画面が呼び込まれたときに発火するイベント
// 参考：
// https://developer.mozilla.org/ja/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener('DOMContentLoaded', () => {
  // 先ほど定義したtick関数を1秒ごとに呼び出す
  setInterval(tick, 1000);
});
