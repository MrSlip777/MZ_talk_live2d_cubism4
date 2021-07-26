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

６．model3.jsonファイルと、モデルファイル名を一致させておく<br>
    末尾のフォルダ名とmodel3.jsonのファイル名は同じにしてください。<br>
    例）フォルダパスが"Project/assets/koharu/"である場合は以下のようになります<br>
    model3.jsonファイル名：koharu.model3.json<br>

## プラグイン管理
１．プラグインを以下の順番で設定してください。

![プラグイン管理](https://user-images.githubusercontent.com/17643697/126064520-26d6cd8a-e74a-4b72-84c2-5bee4ab7ad63.png)

## live2DInterfaceMZの設定

### Modelcondition
１．Modelconditionで以下パラメータを設定します。<br>
・Modelname<br>
・folderpath<br>
・motiongroupname<br>
#### Modelname
Modelnameはプラグインコマンド名でモデルを呼び出すときの名前です<br>
例）Modelname：コハル<br>

#### folderpath
Live2Dモデルを置いたフォルダになります。<br>
フォルダパスが"Project/assets/koharu/"である場合は以下のようになります<br>
foldername：./assets/koharu/<br>

#### motiongroupname
プラグインコマンドでモーション再生するために必要な”モーション組名”を設定する項目欄です。<br>
<モーション組名:グループ名><br>
例）<きほん:Idle_1><br>
2組設定した場合は連続でモーション再生します<br>
例）<れんぞく:Idle_1,Idle_2><br>
※グループ名・・・model3.jsonファイル内のMotionsの名称<br>
![motion3.json内のグループ名](https://user-images.githubusercontent.com/17643697/83342186-1f282c80-a327-11ea-9a8b-4f4e6c0b124d.png)<br>

モーションの再生例は以下になります。<br>
[![再生不可](http://img.youtube.com/vi/OUYY3nMYPD0/0.jpg)](http://www.youtube.com/watch?v=OUYY3nMYPD0)


