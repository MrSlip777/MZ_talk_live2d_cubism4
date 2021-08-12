## Summary
It is a plug-in that displays a character with Live2d (cubism 4.0) during conversation display. <br>
It is a plug-in for Maker MZ. <br>

## Notes on use (Live2D license)
This plug-in uses the Live2D Cubism SDK, and if you want to create a game using this plugin, you will need to agree to live2D Proprietary License. <br>
https://www.live2d.jp/terms/live2d-proprietary-software-license-agreement/<br>
The above can be confirmed when downloading Cebism Core for Web. <br>

In addition, if you want to publish your game, you must agree to the SDK release license. <br>
https://www.live2d.com/download/cubism-sdk/release-license/<br>
As of October 2020, works can be released free of charge for small businesses, individuals, students, circles, and other organizations with recent sales of less than 10 million yen. <br>

## 準備
1．Download Cubism SDK for Web<br>
https://www.live2d.com/download/cubism-sdk/<br>

2. Unzip the folder <br>
3. 3. Put "live2dcubismcore.min.js" in the Core folder in the plugins folder of Maker MV <br>
4. Download the plugin from below <br>
https://github.com/MrSlip777/MZ_talk_live2d_cubism4<br>
* You can download it from the Code button → clone or Download.

5. Put the live2d model (cubism4.0) in the project folder <br>
Ex) Project name: If the model folder path is "assets / koharu /" in "Project", <br>
It looks like this <br>
Project/assets/koharu/<br>

6. Match the model3.json file with the model file name <br>
    Make sure that the folder name at the end and the file name of model3.json are the same. <br>
    Example) If the folder path is "Project/assets/koharu/", it will be as follows <br>
    model3.json file name: koharu.model3.json <br>

## Plugin management
1.1. Set the plugins in the following order.

![Plugin management](https://user-images.githubusercontent.com/17643697/126064520-26d6cd8a-e74a-4b72-84c2-5bee4ab7ad63.png)

## live2DInterfaceMZ settings

### Modelcondition
１．Set the following parameters in Model condition.<br>
・Modelname<br>
・folderpath<br>
・motiongroupname<br>
#### Modelname
Modelname is the name when calling the model with the plugin command name <br>
Ex）Modelname：コハル<br>

#### folderpath
It will be the folder where the Live2D model is placed. <br>
If the folder path is "Project/assets/koharu/" it will be as follows <br>
foldername：./assets/koharu/<br>

#### motiongroupname
It is an item field to set the "motion group name" required for motion playback with the plug-in command. <br>
<Motion group name: Group name> <br>
Ex）<きほん:Idle_1><br>
If 2 sets are set, motion will be played continuously <br>
例）<れんぞく:Idle_1,Idle_2><br>
* Group name: Motions name in model3.json file <br>
![motion3.json内のグループ名](https://user-images.githubusercontent.com/17643697/83342186-1f282c80-a327-11ea-9a8b-4f4e6c0b124d.png)<br>

The following is an example of motion playback.<br>
[![Not playable](http://img.youtube.com/vi/OUYY3nMYPD0/0.jpg)](http://www.youtube.com/watch?v=OUYY3nMYPD0)


