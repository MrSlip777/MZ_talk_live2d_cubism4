/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

/* 更新履歴
 * Slip 2021/07/11 ツクールMZ用プラグイン向けに作成（ベースはツクールMV用のLive2Dプラグイン）
 *
 * 本プラグインの再配布、改変はLive2D Open Software licenseに準拠します。
 *
 * Live2D Open Software 使用許諾契約書
 * https://www.live2d.com/eula/live2d-open-software-license-agreement_jp.html
*/

/*:
* @plugindesc Plug-in that displays live2d on Maker MV
* ツクールMZ上でlive2dを立ち絵表示するプラグイン
* @author Slip
*
* @param Modelcondition
* @desc live2d model individual setting
* live2dモデル個別設定
* @default
* @type struct<ModelconditionData>[]
*
* @param ModelPosition
* @type note
* @default Model placement
* @desc Model placement
* モデル配置
*
* @param System
* @type note
* @default System
* @desc System
* システム関連
*
* @param vertical
* @type number
* @desc Vertical display position
* 縦の表示位置
* @default 320
* @min 0
* @max 640
* @parent ModelPosition
*
* @param left
* @type number
* @desc Horizontal display position (left)
* 横の表示位置（左）
* @default 100
* @min 0
* @max 816
* @parent ModelPosition
*
* @param middle
* @type number
* @desc Horizontal display position (center)
* 横の表示位置（中央）
* @default 408
* @min 0
* @max 816
* @parent ModelPosition
*
* @param right
* @type number
* @desc Horizontal display position (right)
* 横の表示位置（右）
* @default 716
* @min 0
* @max 816
* @parent ModelPosition
*
* @param pictpriority
* @type number
* @desc The live2d model is displayed before the picture below this ID.
* このID以下のピクチャよりも手前にlive2dのモデルを表示します。
* @min 0
* @max 100
* @default 10
* @parent System
*
* @param includesave
* @desc Include the display status of live2d in save data
* live2dの表示状況をセーブデータに含める
* @default true
* @type boolean
* @parent System
*
* @param useinbattle
* @desc Live2d model use flag in battle scene
* 戦闘画面でのlive2dモデル使用フラグ
* @default false
* @type boolean
* @parent System
*
*
* @command show
* @text 表示
* @desc 指定したモデルを表示します
*
* @arg modelName
* @type string
* @default 
*
* @command hide
* @text 消去
* @desc 指定したモデルを消去します
*
* @arg modelName
* @type string
* @default 
*
* @command motion
* @text モーション再生
* @desc 指定したモデルのモーションを再生します
*
* @arg modelName
* @type string
* @desc モデル名
* @default 
*
* @arg motionName
* @type string
* @desc モーション名
* @default 
*
* @arg loop
* @type boolean
* @desc ループする/しない
* @default false
*
* @command expression
* @text 表情変更
* @desc 指定したモデルの表情を変更します
*
* @command pos
* @text 位置変更
* @desc 指定したモデルの位置を変更します
*
* @arg modelName
* @type string
* @default
* @desc モデル名
*
* @arg x
* @type number
* @default 408
* @desc X位置
*
* @arg y
* @type number
* @default 312
* @desc Y位置
*
* @arg dur
* @type number
* @default 1
* @desc 移動時間
*
* @arg wait
* @type boolean
* @default false
* @desc ウェイトありなし
*
* @command left
* @text 左
* @desc 指定したモデル位置を左にします。
*
* //引数
* @arg modelName
* @type string
* @default
*
* @command middle
* @text 真ん中
* @desc 指定したモデル位置を真ん中にします。
*
* //引数
* @arg modelName
* @type string
* @default
*
* @command right
* @text 右
* @desc 指定したモデル位置を右にします。
*
* //引数
* @arg modelName
* @type string
* @default
*
* @command scale
* @text 倍率変更
* @desc 指定したモデルの倍率を変更します
*
* @arg modelName
* @type string
* @default 
*
* @arg scale
* @type Number
* @default 
*
* @command paraminitskip
* @text モーション強制初期化
* @desc モーション再生時にモデルパラメータを初期化します
*
* @arg modelName
* @type string
* @default 
*
* @arg IsInit
* @type boolean
* @default true
*
*
* @help
* [English]
* live2d standing picture display plugin　ver1.0.0
* 
* It is a plug-in that displays a live2d (cubism 4.0) model while standing and talking.
*
* Usage:
* ↓ It is described here.
* https://github.com/MrSlip777/plugins_talk_live2d_cubism4/blob/master/README_en.md
*
* [日本語]
* live2d立ち絵表示プラグイン　ver1.0.0
* 
* live2d(cubism4.0)のモデルを会話中に立ち絵表示するプラグインです。
*
* 使い方：
* ↓こちらに記載しています。
* https://github.com/MrSlip777/plugins_talk_live2d_cubism4/blob/master/README.md
*/


/*~struct~ModelconditionData:
 * @param Modelname
 * @desc The name of the model used in the plugin command
 * プラグインコマンドで使用するモデルの名前
 * @default
 * 
 * @param folderpath
 * @desc folder path of model3.json file
 * model3.jsonファイルのフォルダパス
 * @default
 * 
 * @param motiongroupnames
 * @desc You can set the name of the motion. 
 * モーションの名称を設定できます。
 * @type note
 * @default "<basic:Idle_1,Idle_3>\n<angry:Idle_4>"
 * 
 */

/**
 * //一旦保留
* @param ModelScaling
* @type note
* @default Scale model
* @desc Scale model
* モデルの拡大・縮小
*
* @param PlayBack
* @type note
* @default Motion playback
* @desc Motion playback
* モーション再生
*
* @param LinkEquipment
* @type note
* @default Linked setting with equipment
* @desc Linked setting with equipment.
* 装備品との連動設定
*
* @param upsidedown
* @type boolean
* @desc Upside down display
* 上下反転表示
* @default false
* @parent Screen
*
* @param playbackSpeed
* @type number
* @desc Playback speed
* 再生速度
* @default 8
* @parent PlayBack
*
* @param AdjustWeight
* @type number
* @desc Deformation weight adjustment parameter
* 変形の重み調整パラメータ
* @default 8
* @parent PlayBack

* @param Scene
* @type note
* @default Scenes such as maps and battle screens
* @desc Scenes such as maps and battle screens
* マップ、戦闘画面等のシーン
*
* @param SaveData
* @type note
* @default Save data
* @desc Save data
* セーブデータ
*
* @param ScaleGain
* @type number
* @desc Scaling growth rate
* 拡大縮小の増加率
* @default 2
* @parent ModelScaling
*
*
* @param useLinkEquipment
* @desc use flag LinkEquipment.
* 装備品との連動フラグ
* @default false
* @type boolean
* @parent LinkEquipment
*

 * @param individual_upsidedown
 * @type boolean
 * @desc Individual upside down flag
 * 個々の上下反転フラグ
 * @default false
*
 * @param SettingLinkEquipment
 * @type note
 * @default 装備とのモーション連動設定
 * @desc Linked setting with equipment.
 * 装備とのモーション連動設定
 * 
 * @param noWeapon
 * @desc Motion without weapon.
 * 武器なし時のモーション
 * @default
 * @parent SettingLinkEquipment
 *
 * @param noShield
 * @desc Motion without shield.
 * 盾なし時のモーション
 * @default
 * @parent SettingLinkEquipment
 * 
 * @param noHead
 * @desc Motion without head armor.
 * 頭防具なし時のモーション
 * @default
 * @parent SettingLinkEquipment
 *
 * @param noBody
 * @desc Motion without body armor.
 * 体防具なし時のモーション
 * @default
 * @parent SettingLinkEquipment
 * 
 * @param noOrnament
 * @desc Motion without ornaments.
 * 装飾品なし時のモーション
 * @default
 * @parent SettingLinkEquipment


*/


// ----------------------------
/**
 * 共通関数
 * 概要：ツクールエディタのプラグインで設定した変数をやりとりする関数群
 */
// ----------------------------

function parseStrToBoolean(str) {
    // 文字列を判定
    return (str == 'true') ? true : false;

}

const L2DINstringifyReplacer = function(key, value) {
    if(value === 'null') return value;
    try{
        return JSON.parse(value);
    }catch(e){
        return value;
    }
};

//設定値がある場合にはそれは配列になる。
const L2DINextractmeta = function(data) {
    const req = /<([^<>:]+)(:?)([^>]*)>/g;
    data.meta = {};
    for (var i = 0; i < 1000; i++) {
        var match = req.exec(data.motiongroupnames);
        if (!!match) {
            if (match[2] === ':') {
                data.meta[match[1]] = match[3].split(', ');
            } else {
                data.meta[match[1]] = true;
            }
        } else {
            break;
        }
    }
};

const L2DINfindnameindex = function(name) {
    return L2DINmodels.findIndex(function(data){
        return data.Modelname === name;
    });
};

const L2DINgetmetaarray = function(data, tag) {
    const meta = data.meta[tag];
    if(!meta || meta === true){
        return [];
    }
    return meta;
};

const L2DINPP = PluginManager.parameters('Live2DInterfaceMZ');

const L2DINleft = Number(L2DINPP['left']) || 0;
const L2DINmiddle = Number(L2DINPP['middle']) || 0;
const L2DINright = Number(L2DINPP['right']) || 0;
const L2DINvertical = Number(L2DINPP['vertical']) || 0;
const L2DINscaleX = Number(L2DINPP['scale_V']) / 100;
const L2DINscaleY = Number(L2DINPP['scale_H']) / 100;

const L2DINincludesave = (L2DINPP['includesave'] === 'true');
const L2DINuseinbattle = (L2DINPP['useinbattle'] === 'true');
const L2DINuseLinkEquipment = (L2DINPP['useLinkEquipment'] === 'true');
const L2DINpictpriority = Number(L2DINPP['pictpriority']) || 0;
//Array型、各要素はobject
const L2DINmodels = JSON.parse(JSON.stringify(L2DINPP['Modelcondition'], L2DINstringifyReplacer));
L2DINmodels.forEach(function(Ldata) {
    L2DINextractmeta(Ldata);
});

//共通変数(Live2Dファイル拡張子、画面解像度)
const model3expend = '.model3.json';
const motion3expend = '.motion3.json';
const L2DINgrawidth = 816;
const L2DINgraheight = 640;

//再生速度
const L2DINPlaybackSpeed = Number(L2DINPP['playbackSpeed']) / 10;

//重み調整
const AdjustWeight = Number(L2DINPP['AdjustWeight']) / 10;

const ScaleGain = Number(L2DINPP['ScaleGain']);


//-----------------------------------------------------------------------------
//MotionElement
//モーションのグループ、番号のまとまり
//Slip 2021/07/03
//-----------------------------------------------------------------------------
function MotionElement() {
    this.number = -1;
    this.groupName = "none";
    this.Isloop = false;
}

// ----------------------------
/* クラス：Game_Live2d
 * 概要：Live2Dモデルをツクール上で動作させるためのデータを持つクラス。
 * 扱いはgame_xxxと同等($gameLive2dをインスタンスとして、メソッドを呼び出す)
*/
//----------------------------

var $gameLive2d = null;

function Game_Live2d() {
    this.initialize.apply(this, arguments);
}

Game_Live2d.prototype.initialize = function() {
    this.clear();
};

//マジックナンバーだと分かりにくいのでパラメータ設定のモデル名をkeyにする。
Game_Live2d.prototype.clear = function() {

    var parameters = PluginManager.parameters('Live2DInterfaceMZ');

    //エディタ(プラグインの設定)から取得する設定値
    this._folder = {};
    this._name = {};
    this._model = {};
    this._pos_left = Number(parameters['left']);
    this._pos_middle = Number(parameters['middle']);
    this._pos_right = Number(parameters['right']);
    this._pos_vertical = Number(parameters['vertical']);
    this._IsUpsidedown = parseStrToBoolean(parameters['upsidedown']);
    
    //コマンド経由の設定値（ここでは初期値を設定する）
    this.visible = {};  //モデルの表示、非表示
    this.pos_x ={};     //モデルのX位置
    this.pos_y ={};     //モデルのY位置
    this._targetX ={};     //モデルのX目標位置
    this._targetY ={};     //モデルのY目標位置
    this._duration ={};     //移動する時間
    this._live2dmodelsaveonly = {}; //セーブ用データ
    
    //モーション関係のデータ　（モーション再生、セーブデータの保存、読み込みとして必要）
    this.motionGroup = {};
    this.motionNumber = {};
    this.motionElements = {};

    //モーションの強制実行フラグ
    this.IsForcedExe_NextMotion = {};

    this.motionLoop = {};
    this.paraminitskip = {};

    this.scale = {};    //スケール
    this.A = {};
    this.R = {};
    this.G = {};
    this.B = {};

    this._waitCount = 0;

    //個々の上下反転フラグ（全体のフラグ、または個々のフラグがtrueになっていると上下反転の表示）
    this.individual_upsidedown = {};

    //装備品、衣装変更時に使用。装備なし時のモーション
    this.linkEquip_None = {};

    this.InitializeModelSetting();

};

//各モデル設定値の初期化
Game_Live2d.prototype.InitializeModelSetting = function(){

    var i = 1;

    L2DINmodels.forEach(function(data) {
        this._folder[i] = data.folderpath;
        this._name[i] = data.Modelname;
        var strCopy = data.folderpath.split('/');
        this._model[i] = strCopy[strCopy.length - 2];
        this.visible[i] = false;
        this.scale[i] = 1.0;
        this.A[i] = 1.0;
        this.R[i] = 1.0;
        this.G[i] = 1.0;
        this.B[i] = 1.0;
        this._duration[i] = 0;
        this.pos_x[i] = this._pos_middle;
        this.pos_y[i] = this._pos_vertical;
        this._live2dmodelsaveonly[this._name[i]] = {};
        this.motionGroup[i] = "Idle";
        this.motionNumber[i] = 1;
        this.motionElements[i] = []; 

        this.IsForcedExe_NextMotion[i] = false;

        this.motionLoop[i] = false;
        this.paraminitskip[i] = false;

        //個々の上下反転フラグ（全体のフラグ、または個々のフラグがtrueになっていると上下反転の表示）
        this.individual_upsidedown[i] = data.individual_upsidedown;

        //装備品、衣装変更時に使用。装備なし時のモーション
        this.linkEquip_None[i] = {};
        this.linkEquip_None[i][0] = data.noWeapon;
        this.linkEquip_None[i][1] = data.noShield;
        this.linkEquip_None[i][2] = data.noHead;
        this.linkEquip_None[i][3] = data.noBody;
        this.linkEquip_None[i][4] = data.noOrnament;
        i++;
    }, this);

    this.MAXNUMBER = i-1;
};

//セーブデータの設定値をモデルに反映
Game_Live2d.prototype.ReflectSavedataToModels = function(){

    var i = 1;
    L2DINmodels.forEach(function(data) {
        var saveobj = this._live2dmodelsaveonly[data.Modelname]
        if(saveobj.vis){
            this.visible[i] = saveobj.vis;
            this.scale[i] = saveobj.scx;
            this.pos_x[i] = saveobj.px;
            this.pos_y[i] = saveobj.py;
            $gameLive2d.motionGroup[i]
             = saveobj.motionGroup;
            $gameLive2d.motionNumber[i]
             = saveobj.motionNumber;
            $gameLive2d.motionLoop[i]
             = saveobj.motionLoop;

            //モーションを強制実行する
            $gameLive2d.IsForcedExe_NextMotion[i] = true;

            $gameLive2d.motionElements[i].splice(0);

            var motionElement = new MotionElement();
            motionElement.groupName = saveobj.motionGroup;
            motionElement.number = saveobj.motionNumber;
            motionElement.Isloop = saveobj.motionLoop;
            
            $gameLive2d.motionElements[i].push(motionElement);

            $gameLive2d.paraminitskip[i] = saveobj.paraminitskip;
        }
        i++;
    }, this);

};

//ニューゲームの時に前回セーブしたときの影響が残らないように
Game_Live2d.prototype.newgamefix = function() {
    L2DINmodels.forEach(function(data) {
        var name = data.Modelname;
        var saveobj = this._live2dmodelsaveonly[name];
        if(saveobj){
            saveobj.isneedrestore = false;
        }
    }, this);

    this.InitializeModelSetting();
};

//モデルの全ての情報をセーブするわけではないことに注意。
Game_Live2d.prototype.Createsavemodel = function() {

    var i = 1;

    L2DINmodels.forEach(function(data) {
        var name = data.Modelname;
        var saveobj = this._live2dmodelsaveonly[name];

        saveobj.isneedrestore = true;
        saveobj.px = $gameLive2d.pos_x[i];
        saveobj.py = $gameLive2d.pos_y[i];
        saveobj.scx = $gameLive2d.scale[i];
        saveobj.vis = $gameLive2d.visible[i];
        saveobj.motionGroup = $gameLive2d.motionGroup[i];
        saveobj.motionNumber = $gameLive2d.motionNumber[i];
        saveobj.motionLoop = $gameLive2d.motionLoop[i];
        saveobj.paraminitskip = $gameLive2d.paraminitskip[i];
        i++;

    }, this);
    return this._live2dmodelsaveonly;
};

//loaderより先に実行されることに注意。
Game_Live2d.prototype.Restoresavemodel = function(saveobj) {
    this._live2dmodelsaveonly = saveobj;
};

//各シーンのupdateで呼ぶ
Game_Live2d.prototype.live2dupdate = function () {
    L2DINmodels.forEach(function(targetobj) {
        var model = this._live2dmodel[targetobj.Modelname];
        if(model !== null){
            this.live2dupdateMove(model);
        }
    }, this);
};

//Cubism4対応 Slip 2020/01/13
Game_Live2d.prototype.getTextureManager = function () {
    return this._textureManager;
};

//各シーンのupdateで呼ぶ
Game_Live2d.prototype.live2dupdate = function () {
    L2DINmodels.forEach(function(targetobj) {
        var model_no = 1;
        for(var number in $gameLive2d._name){
            if($gameLive2d._name[number] == targetobj.Modelname){
                break;
            }
            model_no++;
        }

        var model = null;
        if(model !== null){
            this.live2dupdateMove(model_no);
        }
    }, this);
};

Game_Live2d.prototype.wait = function(dur) {
    this._waitCount = dur;
};

//移動する
Game_Live2d.prototype.live2dupdateMove = function(model_no) {
    var d = $gameLive2d._duration[model_no];
    if (d > 0) {   
        $gameLive2d.pos_x[model_no]
         = ($gameLive2d.pos_x[model_no] * (d - 1) + $gameLive2d._targetX[model_no]) / d;
        $gameLive2d.pos_y[model_no]
         = ($gameLive2d.pos_y[model_no] * (d - 1) + $gameLive2d._targetY[model_no]) / d;
        $gameLive2d._duration[model_no]--;
    }
};

//内部のモーション名
Game_Live2d.prototype.InnerMotionName = function (name, group){
    const index = L2DINfindnameindex(name);
    
    if(index >= 0){
        const innerMotionName = L2DINgetmetaarray(L2DINmodels[index], group);

        return innerMotionName;
    }else{
        return null;
    }
};

//-----------------------------------------------------------------------------
//Live2DManager
//会話上にLive2Dモデルを表示するクラス 
// Slip 2016/12/25
//-----------------------------------------------------------------------------
function Live2DManager() {
    this.initialize.apply(this, arguments);
};

var live2dmodel = {};

Live2DManager.initialize = function() {
    for(var i=1; i<=$gameLive2d.MAXNUMBER; i++){
        live2dmodel[i] = null;
    }
};

Live2DManager.getNumberFromName = function(modelName) {

    var gameLive2d_no = 1;
    for(var number in $gameLive2d._name){
        if($gameLive2d._name[number] == modelName){
            break;
        }
        gameLive2d_no++;
    }

    return gameLive2d_no;
};

//表示フラグ
Live2DManager.live2dVisible = function (model_no,flag) {
    $gameLive2d.visible[model_no] = flag;
};

//モーション設定
Live2DManager.live2dMotion = function (model_no,motionGroup,motion_no,loop){
    $gameLive2d._lappLive2dManager._models.at(model_no-1).changeMotion(motionGroup,motion_no-1, loop);

    //セーブデータ保存用
    $gameLive2d.motionGroup[model_no] = motionGroup;
    $gameLive2d.motionNumber[model_no] = motion_no;
    $gameLive2d.motionLoop[model_no] = loop;

    this.Modelparaminit(model_no);
}

//すべてのモデルの設定されたモーションを再生する（表示されたモーションのみ。セーブデータのロード用）
Live2DManager.PlayBackAllModel = function(){
    
    for(var i = 1; i<=$gameLive2d.MAXNUMBER; i++){
        if($gameLive2d.visible[i] == true){
            this.live2dMotion(i,$gameLive2d.motionGroup[i],$gameLive2d.motionNumber[i],$gameLive2d.motionLoop[i]);
        }
    }
}

//モーション再生
Live2DManager.live2dSequenceMotion = function (model_no,motions,loop){

    var count_inLoop = 1;
    var motionNames = (String(motions)).split(',');
    var count_Max = motionNames.length;

    //スタックされたモーションがあるかもしれないので一掃する
    $gameLive2d.motionElements[model_no].splice(0);

    //強制実行
    $gameLive2d.IsForcedExe_NextMotion[model_no] = true;

    motionNames.forEach(function(motionName){
        var data = (String(motionName)).split('_');

        var motionElement = new MotionElement();
        motionElement.groupName = data[0];
        motionElement.number = Number(data[1])-1;
        
        if(count_Max == count_inLoop){
            motionElement.Isloop = loop;
            //セーブデータ保存用
            $gameLive2d.motionLoop[model_no] = loop;
        }
        else{
            motionElement.Isloop = false;
        }

        $gameLive2d.motionElements[model_no].push(motionElement);

        //セーブデータ保存用
        $gameLive2d.motionGroup[model_no] = data[0];
        $gameLive2d.motionNumber[model_no] = Number(data[1])-1;//実際にあつかうモーションNoは-1されている

        count_inLoop = count_inLoop + 1;
    });
}

//表情設定
Live2DManager.live2dExpression = function (model_no,expressionId){
    $gameLive2d._lappLive2dManager._models.at(model_no-1).changeExpression(expressionId);
}

//位置変更（移動可能）
Live2DManager.live2dSetPosition = function (model_no, x, y, dur, wait) {
    if(dur > 0){
        $gameLive2d._targetX[model_no] = x;
        $gameLive2d._targetY[model_no] = y;
    }else{
        $gameLive2d.pos_x[model_no] = x;
        $gameLive2d.pos_y[model_no] = y;
    }
    $gameLive2d._duration[model_no] = dur;
    if(wait){
        $gameLive2d._waitCount = dur;
    }
};

//表示位置変更
Live2DManager.live2dSetPosition_X = function (model_no,pos_x) {
    if(pos_x < 1){
        pos_x = 1;
    }
    else if(pos_x > Graphics.width){
        pos_x = Graphics.width;
    }
    else{
        pos_x = pos_x;
    }

    $gameLive2d.pos_x[model_no] = pos_x;
};

//表示位置変更
Live2DManager.live2dSetPosition_Y = function (model_no,pos_y) {
    
    if(pos_y < 1){
        pos_y = 1;
    }
    else if(pos_y > Graphics.height){
        pos_y = Graphics.height;
    }
    else{
        pos_y = pos_y;
    }

    $gameLive2d.pos_y[model_no] = pos_y;
};

//倍率変更
Live2DManager.live2dSetScale = function (model_no,scale) {
    $gameLive2d.scale[model_no] = scale;
};

//初期化スキップ
Live2DManager.live2dsetparaminitskip = function (model_no, flag) {
    $gameLive2d.paraminitskip[model_no] = flag;
};

//グレースケール変更
Live2DManager.live2dSetGrayscale = function (model_no,grayscale){

    $gameLive2d.R[model_no] = grayscale;
    $gameLive2d.G[model_no] = grayscale;
    $gameLive2d.B[model_no] = grayscale;
};

//上下反転
Live2DManager.live2dDisplayDirection = function (flag) {
    $gameLive2d._IsUpsidedown = flag;
};

//衣装変更
Live2DManager.live2dChangeCloth = function (model_no,Id) {
    $gameLive2d._lappLive2dManager._models.at(model_no-1).setClothMotion(Id);
    
};

//装備とモデルの連動
Live2DManager.live2dClothLinkEquipment = function(){

    //衣装変更用
    for(var i = 0; i<$gameParty._actors.length; i++){
        for(var number in $gameLive2d._name){
            if($gameParty.members()[i]._name == $gameLive2d._name[number]){
                for(var j = 0; j<5; j++){//装備スロット
                    if($gameLive2d.linkEquip_None[number][j] != ""){
                        var index = $gameParty.members()[i]._equips[j]._itemId;
                        var cloth_name = null;

                        if($dataArmors[index]){
                            cloth_name = $dataArmors[index].name;
                        }
                        else{
                            cloth_name = $gameLive2d.linkEquip_None[number][j];
                        }

                        var innerMotionName = null;

                        innerMotionName = $gameLive2d.InnerMotionName($gameLive2d._name[number],cloth_name);
                        var modelNo = Live2DManager.getNumberFromName($gameLive2d._name[number]);

                        $gameLive2d._lappLive2dManager._models.at(modelNo-1).setClothMotion(innerMotionName);
                    }
                }
            }
        }
    };
};

// ----------------------------
// Sprite_Live2d
// ----------------------------
function Sprite_Live2d() {
    this.initialize.apply(this, arguments);
};
Sprite_Live2d.prototype = Object.create(PIXI.Container.prototype);
Sprite_Live2d.prototype.constructor = Sprite_Live2d;

Sprite_Live2d.prototype.initialize = function() {
    PIXI.Container.call(this);
    this._model = null;
};

Sprite_Live2d.prototype.update = function() {
    if (this._model) {
        this._model.update(16);
    }
};

Sprite_Live2d.prototype.loadModel = function(name) {

    this.clear();
    const option = {autoInteract:false, autoUpdate:false, motionPreload: PIXI.live2d.MotionPreloadStrategy.ALL};
    PIXI.live2d.Live2DModel.from('./' + name, option).then((model)=>{
        this._model = model;
        this.addChild(model);
        model.anchor.set(0.5, 0.5);
    }).catch((error) => {
        console.error(error);
    });
};

Sprite_Live2d.prototype.clear = function() {
    if (this._model) {
        this.removeChild(this._model);
        this._model = null;
    }
};


(() => {
    'use strict'

    //---Scene_Baseの上書き---
    //---シーン上にlive2dモデル用スプライトを作成する---
    Scene_Base.prototype.createlive2d = function(){

        this.live2dSprite = {};

        for(var i = 1; i<=$gameLive2d.MAXNUMBER; i++){

            var fileFullPath = $gameLive2d._folder[i] + $gameLive2d._model[i] + ".model3.json";

            this.live2dSprite[i] = new Sprite_Live2d();
            this.live2dSprite[i].loadModel(fileFullPath);
            this.live2dSprite[i].x = $gameLive2d.pos_x[i];
            this.live2dSprite[i].y = $gameLive2d.pos_y[i];
            this.live2dSprite[i].scale.set(0.2, 0.2);

            //非表示で描画する
            //this.live2dSprite[i].alpha = 0;
            this.live2dSprite[i].visible = false;

            SceneManager._scene._spriteset.addChildlive2d(this.live2dSprite[i]);

            //セーブデータの設定値をモデルに反映
            $gameLive2d.ReflectSavedataToModels();
        }
        
        if(L2DINuseLinkEquipment == true){
            Live2DManager.live2dClothLinkEquipment();
        }
    };

    Scene_Base.prototype.updatelive2d = function(){
        for(var i = 1; i<=$gameLive2d.MAXNUMBER; i++){
            //表示非表示の更新
            this.live2dSprite[i].visible = $gameLive2d.visible[i];

            if(this.live2dSprite[i]._model){
                //位置を更新する
                $gameLive2d.live2dupdateMove(i);
                this.live2dSprite[i].x = $gameLive2d.pos_x[i];
                this.live2dSprite[i].y = $gameLive2d.pos_y[i];
                this.live2dSprite[i].scale
                .set(0.2*$gameLive2d.scale[i], 0.2*$gameLive2d.scale[i]);

                if(this.live2dSprite[i]._model.internalModel){

                    //モーションの開始条件は以下
                    //1:モーション終了している
                    //2:プラグインコマンドからの実行（強制実行フラグ：true）
                    if(this.live2dSprite[i]._model.internalModel.motionManager.isFinished()
                    || $gameLive2d.IsForcedExe_NextMotion[i] == true){
                        var motionElement = $gameLive2d.motionElements[i].shift();

                        if(motionElement){
                            //初期化スキップ（モデルのモーションパラメータを0にする）
                            if($gameLive2d.paraminitskip[i]){
                                this.live2dSprite[i]._model.internalModel.coreModel._parameterValues.fill(0);
                            }

                            this.live2dSprite[i]._model.internalModel.motionManager.stopAllMotions();

                            //モーションのループ設定
                            this.live2dSprite[i]._model.internalModel.motionManager
                            .motionGroups[motionElement.groupName][motionElement.number]
                            .setIsLoop(motionElement.Isloop);
                            
                            this.live2dSprite[i]._model.motion(motionElement.groupName,motionElement.number,3);

                            //強制実行フラグをオフ（デフォルトに戻す）
                            $gameLive2d.IsForcedExe_NextMotion[i] = false;

                        }
                    }
                }
            }
        }

        
        if(this.live2dSprite[2]._model){
            
            //console.log(outPut);
            var outPut1 = this.live2dSprite[2]._model.internalModel.motionManager;
            var outPut11 = this.live2dSprite[2]._model.internalModel.motionManager.motionGroups;
            var outPut12 = outPut11["Idle"][2].setIsLoop(true);
            var outPut2 = this.live2dSprite[2]._model;
            var outPut3 = this.live2dSprite[2]._model.internalModel;
        }
    
    };

    Spriteset_Base.prototype.addChildlive2d = function(Sprite) {
        if(L2DINpictpriority >= 100){
            this.addChild(Sprite);
        }else{
            this._pictureContainer.addChildAt(Sprite, L2DINpictpriority);
        }
    };

    Scene_Base.prototype.terminatelive2d = function(){
        for(var i = 1; i<=$gameLive2d.MAXNUMBER; i++){
            this.live2dSprite[i].clear();
        }
    };

    const  DataManager_createGameObjects = DataManager.createGameObjects;
    DataManager.createGameObjects =function(){
        DataManager_createGameObjects.call(this);
        if($gameLive2d == null){
            $gameLive2d = new Game_Live2d();
        }
    };

    //Scene_Mapの上書き
    const Scene_Map_terminate=Scene_Map.prototype.terminate;
    Scene_Map.prototype.terminate =function(){
        this.terminatelive2d();
        Scene_Map_terminate.call(this);
    };

    const Scene_Map_start = Scene_Map.prototype.start;
    Scene_Map.prototype.start = function(){        
        Scene_Map_start.call(this);
        this.createlive2d();
    };

    const Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        Scene_Map_update.call(this);
        this.updatelive2d();
    };

    //---Live2dモデルの戦闘画面表示機能---
    if(L2DINuseinbattle){

        Scene_Battle.prototype.istickerupd =function(){
            return true;
        };

        const Battle_L2DINupdate = Scene_Battle.prototype.update;
        Scene_Battle.prototype.update = function() {
            Battle_L2DINupdate.call(this);
            this.updatelive2d();
        };

        const Battle_L2DINterminate = Scene_Battle.prototype.terminate;
        Scene_Battle.prototype.terminate = function() {
            Battle_L2DINterminate.call(this);
            this.terminatelive2d();
        };
        
        const Battle_L2DINcreateWindowLayer = Scene_Battle.prototype.createWindowLayer;
        Scene_Battle.prototype.createWindowLayer = function(){
            this.createlive2d();
            Battle_L2DINcreateWindowLayer.call(this);
        };

    }else{
        console.log("Live2d表示はマップシーンのみです。");
    }

    //---Live2dモデルの設定をセーブデータに含める機能---
    if(L2DINincludesave){

        const L2DINmakeSaveContents = DataManager.makeSaveContents;
        DataManager.makeSaveContents = function() {
            const contents = L2DINmakeSaveContents.call(this);
            contents.Live2d = $gameLive2d.Createsavemodel();
            return contents;
        };
        
        const L2DINextractSaveContents = DataManager.extractSaveContents;
        DataManager.extractSaveContents = function(contents) {
            L2DINextractSaveContents.call(this, contents);
            if(!!contents && !!contents.Live2d){
                $gameLive2d.Restoresavemodel(contents.Live2d);
            }
        };

        const L2DINsetupNewGame = DataManager.setupNewGame;
        DataManager.setupNewGame = function() {
            L2DINsetupNewGame.call(this);
            $gameLive2d.newgamefix();
        };

    }else{
        console.log("Live2d表示はセーブ・ロードしません。");
    }

    //---プラグインコマンドの処理---
    const  Game_Interpreter_updateWaitCount = Game_Interpreter.prototype.updateWaitCount;
    Game_Interpreter.prototype.updateWaitCount = function() {
        if ($gameLive2d._waitCount > 0) {
            $gameLive2d._waitCount--;
            return true;
        }
        return Game_Interpreter_updateWaitCount.call(this);
    };

    // プラグインコマンド
    const pluginName = 'Live2DInterfaceMZ';

    PluginManager.registerCommand(pluginName, "show", args => {
        var model_no = Live2DManager.getNumberFromName(args.modelName);
        Live2DManager.live2dVisible(model_no,true);
    });

    PluginManager.registerCommand(pluginName, "hide", args => {
        var model_no = Live2DManager.getNumberFromName(args.modelName);
        Live2DManager.live2dVisible(model_no,false);
    });

    PluginManager.registerCommand(pluginName, "motion", args => {
        var model_no = Live2DManager.getNumberFromName(args.modelName);
        var loop = false;
        if(args.loop == "false"){
            loop = false;
        }
        else{
            loop = true;
        }

        var innerMotionName = $gameLive2d.InnerMotionName(args.modelName,args.motionName);

        Live2DManager.live2dSequenceMotion(model_no,innerMotionName,loop);
    });

    //位置変更
    //左
    PluginManager.registerCommand(pluginName, "left", args => {
        var model_no = Live2DManager.getNumberFromName(args.modelName);
        Live2DManager.live2dSetPosition_X(model_no,$gameLive2d._pos_left);
    });

    //真ん中
    PluginManager.registerCommand(pluginName, "middle", args => {
        var model_no = Live2DManager.getNumberFromName(args.modelName);
        Live2DManager.live2dSetPosition_X(model_no,$gameLive2d._pos_middle);
    });

    //右
    PluginManager.registerCommand(pluginName, "right", args => {
        var model_no = Live2DManager.getNumberFromName(args.modelName);
        Live2DManager.live2dSetPosition_X(model_no,$gameLive2d._pos_right);
    });

    //位置移動
    PluginManager.registerCommand(pluginName, "pos", args => {
        var model_no = Live2DManager.getNumberFromName(args.modelName);
        const x = Number(args.x) || 0;
        const y = Number(args.y) || 0;
        const dur = Number(args.dur) || 0;
        var wait = args.wait;
        
        Live2DManager.live2dSetPosition(model_no, x, y, dur, wait);    
    });

    //大きさ変更
    PluginManager.registerCommand(pluginName, "scale", args => {
        var model_no = Live2DManager.getNumberFromName(args.modelName);
        Live2DManager.live2dSetScale(model_no,args.scale);
    });    

    //初期化スキップ（強制モーション初期化）
    PluginManager.registerCommand(pluginName, "paraminitskip", args => {
        var model_no = Live2DManager.getNumberFromName(args.modelName);
        Live2DManager.live2dsetparaminitskip(model_no, args.IsInit);
    });

    //以下は実装するか検討中　slip 2021/07/14
    PluginManager.registerCommand(pluginName, "set", args => {

        var model_no = Live2DManager.getNumberFromName(args.modelName);

        switch (args[1]) {
        case 'expression':
        case '表情':
            Live2DManager.live2dExpression(model_no,args[2]);
            break;
        case 'Xposition':
        case 'X位置':
            Live2DManager.live2dSetPosition_X(model_no,args[2]);
            break;
        case 'Yposition':
        case 'Y位置':
            Live2DManager.live2dSetPosition_Y(model_no,args[2]);
            break;
        case 'grayscale':
        case 'グレースケール':
            Live2DManager.live2dSetGrayscale(model_no,args[2]);
            break;

        case 'upsidedown':
        case '上下反転':
            Live2DManager.live2dSetScale(model_no,args[2]);
            break;
        case '衣装変更':
        case 'changecloth':
            Live2DManager.live2dChangeCloth(model_no,args[2]);
        }
        
    });
})();
