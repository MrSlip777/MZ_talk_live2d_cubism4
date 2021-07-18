## 概要
会話表示中にLive2d(cubism4.0)でキャラクターを表示させるプラグインです。<br>
ツクールMZ用のプラグインになります。<br>

## ご使用上の注意（Live2Dライセンス）
本プラグインはLive2D Cubism SDKを使用しており、本プラグインを使用してゲームを制作する場合はLive2D Proprietary Licenseへの同意が必要となります。<br>
https://www.live2d.jp/terms/live2d-proprietary-software-license-agreement/<br>
※上記はCubism Core for Web をダウンロードする際に確認できます。<br>

また、制作したゲームを公開する場合は SDKリリースライセンスへの同意が必要です。<br>
https://www.live2d.com/download/cubism-sdk/release-license/<br>
※2020年10月現在、 直近売上が1,000 万円未満の小規模事業者・個人・学生・サークル・その他の団体については無償で作品をリリースできます。<br>

## 準備
１．Cubism SDK for Webをダウンロードする<br>
https://www.live2d.com/download/cubism-sdk/<br>

２．フォルダを解凍する<br>
３．Coreフォルダの"live2dcubismcore.min.js"をツクールMVのpluginsフォルダへ置く<br>
４．以下からプラグインをダウンロードする<br>
https://github.com/MrSlip777/MZ_talk_live2d_cubism4<br>
※Codeボタン→clone or Downloadからダウンロードできます。

５．live2dモデル(cubism4.0)をプロジェクトのフォルダ内に置く<br>
例）プロジェクト名："Project"でモデルのフォルダパスが"assets/koharu/"の場合は<br>
以下のようになります<br>
Project/assets/koharu/<br>

６．model3.jsonファイルと、モデルファイル名を一致させておく<br>
    末尾のフォルダ名とmodel3.jsonのファイル名は同じにしてください。<br>
    例）フォルダパスが"Project/assets/koharu/"である場合は以下のようになります<br>
    model3.jsonファイル名：koharu.model3.json<br>

## プラグイン管理
プラグインを以下の順番にしてください。

![プラグイン管理](https://user-images.githubusercontent.com/17643697/126064520-26d6cd8a-e74a-4b72-84c2-5bee4ab7ad63.png)
