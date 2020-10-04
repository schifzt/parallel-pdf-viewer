# Parallel PDF Viewer 
A PDF viewer suitable for online meeting that displays two PDF files side by side.

## To be implemented...
+ material UI
+ highlight active window
+ sync scroll
+ able to resize window width freely
    + auto widen the selected window
+ ~~save layout~~

## Related works
+  [Draftable](https://draftable.com/)
+  [Side View](https://addons.mozilla.org/en-US/firefox/addon/side-view/)


## License 
MIT

## TODO
+ viewer.html以下のファイルでないと記憶できない問題
    + electronを使って任意のファイルの相対パスを取得すれば解決できそう
    + if(enable_electron)で分岐．falseならinputをpdf.jsのinputに接続
    + electronの場合，inputで相対パスを取得，localStorangeに記憶．pdfjsのファイルオープンは消す．
    + electronでない場合，pdfjsのファイルオープンが取得する要素をすべてinpu要素で取得して渡．
+ ~~iframeを使わずにviewerを表示~~
    + --> かなり面倒くさそうだし，あまりメリットがなさそう
+ ~~automaticズームで固定~~
    + ズームを削除
    + --> いや拡大したいときあるじゃん
+ filenameの取得
    + componentのtitleに設定
