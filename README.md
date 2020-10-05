# Parallel PDF Viewer 
A PDF viewer suitable for online meeting which displays two PDF files side by side.
\
[demo](https://schifzt.github.io/parallel-pdf-viewer/src/index.html)

<!-- ## References
+  [Gallery of user projects and modifications]https://github.com/mozilla/pdf.js/wiki/Gallery-of-user-projects-and-modifications
+  [Draftable](https://draftable.com/)
+  [Side View](https://addons.mozilla.org/en-US/firefox/addon/side-view/)
-->

## License 
MIT

This software uses [PDF.js](https://github.com/mozilla/pdf.js) with some modification.
PDF.js is distributed in the Apache License 2.0.

## To be implemented...
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
