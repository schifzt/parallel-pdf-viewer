# Parallel PDF Viewer 
A PDF viewer to display PDF files side by side.

## Demo
Online demo: https://schifzt.github.io/parallel-pdf-viewer/src/index.html

<!-- ## References
+  [Gallery of user projects and modifications]https://github.com/mozilla/pdf.js/wiki/Gallery-of-user-projects-and-modifications
+  [Draftable](https://draftable.com/)
+  [Side View](https://addons.mozilla.org/en-US/firefox/addon/side-view/)
-->

## License 
MIT

This software uses
+ [PDF.js](https://github.com/mozilla/pdf.js) (distributed under the <u>Apache License 2.0</u>) with some modification
+ [Golden Layout](https://github.com/golden-layout/golden-layout) (distributed under the <u>MIT Licence</u>)

## To be implemented
+ material UI
+ highlight active window
+ able to resize window width freely
  auto widen the selected window
+ save layout
+ viewer.html以下のファイルでないと記憶できない問題
    + electronを使って任意のファイルの相対パスを取得すれば解決できそう
    + electronの場合，inputで相対パスを取得，localStorangeに記憶．pdfjsのファイルオープンは消す．
+ ~~iframeを使わずにviewerを表示~~
    + --> かなり面倒くさそうだし，あまりメリットがなさそう
+ ~~automaticズームで固定~~
    + ズームを削除
    + --> いや拡大したいときあるじゃん
+ filenameの取得
    + componentのtitleに設定
