gdjs.GameScene4Code = {};
gdjs.GameScene4Code.localVariables = [];
gdjs.GameScene4Code.GDTxtTimerObjects1= [];
gdjs.GameScene4Code.GDTxtTimerObjects2= [];
gdjs.GameScene4Code.GDZeroTimerObjects1= [];
gdjs.GameScene4Code.GDZeroTimerObjects2= [];
gdjs.GameScene4Code.GDlevel4HintObjects1= [];
gdjs.GameScene4Code.GDlevel4HintObjects2= [];
gdjs.GameScene4Code.GDlevel4JokerObjects1= [];
gdjs.GameScene4Code.GDlevel4JokerObjects2= [];
gdjs.GameScene4Code.GDRedZoneObjects1= [];
gdjs.GameScene4Code.GDRedZoneObjects2= [];
gdjs.GameScene4Code.GDBlueZoneObjects1= [];
gdjs.GameScene4Code.GDBlueZoneObjects2= [];
gdjs.GameScene4Code.GDgreenzoneObjects1= [];
gdjs.GameScene4Code.GDgreenzoneObjects2= [];
gdjs.GameScene4Code.GDLevel4BGObjects1= [];
gdjs.GameScene4Code.GDLevel4BGObjects2= [];
gdjs.GameScene4Code.GDlevel4BombObjects1= [];
gdjs.GameScene4Code.GDlevel4BombObjects2= [];


gdjs.GameScene4Code.mapOfGDgdjs_9546GameScene4Code_9546GDgreenzoneObjects1Objects = Hashtable.newFrom({"greenzone": gdjs.GameScene4Code.GDgreenzoneObjects1});
gdjs.GameScene4Code.mapOfGDgdjs_9546GameScene4Code_9546GDBlueZoneObjects1Objects = Hashtable.newFrom({"BlueZone": gdjs.GameScene4Code.GDBlueZoneObjects1});
gdjs.GameScene4Code.mapOfGDgdjs_9546GameScene4Code_9546GDRedZoneObjects1Objects = Hashtable.newFrom({"RedZone": gdjs.GameScene4Code.GDRedZoneObjects1});
gdjs.GameScene4Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtTimer"), gdjs.GameScene4Code.GDTxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.GameScene4Code.GDTxtTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene4Code.GDTxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "countdown");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "game-music3.mp3", false, 30, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "crying-411854.mp3", false, 20, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "baby-crying-64996.mp3", false, 40, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "countdown") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtTimer"), gdjs.GameScene4Code.GDTxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}
{for(var i = 0, len = gdjs.GameScene4Code.GDTxtTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene4Code.GDTxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "countdown");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LoseScene", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("level4Hint"), gdjs.GameScene4Code.GDlevel4HintObjects1);
{for(var i = 0, len = gdjs.GameScene4Code.GDlevel4HintObjects1.length ;i < len;++i) {
    gdjs.GameScene4Code.GDlevel4HintObjects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "hint");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "hint") >= 0.6;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("level4Hint"), gdjs.GameScene4Code.GDlevel4HintObjects1);
{for(var i = 0, len = gdjs.GameScene4Code.GDlevel4HintObjects1.length ;i < len;++i) {
    gdjs.GameScene4Code.GDlevel4HintObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueZone"), gdjs.GameScene4Code.GDBlueZoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedZone"), gdjs.GameScene4Code.GDRedZoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("greenzone"), gdjs.GameScene4Code.GDgreenzoneObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{for(var i = 0, len = gdjs.GameScene4Code.GDRedZoneObjects1.length ;i < len;++i) {
    gdjs.GameScene4Code.GDRedZoneObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene4Code.GDBlueZoneObjects1.length ;i < len;++i) {
    gdjs.GameScene4Code.GDBlueZoneObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene4Code.GDgreenzoneObjects1.length ;i < len;++i) {
    gdjs.GameScene4Code.GDgreenzoneObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("greenzone"), gdjs.GameScene4Code.GDgreenzoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameScene4Code.mapOfGDgdjs_9546GameScene4Code_9546GDgreenzoneObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene4Code.GDgreenzoneObjects1.length;i<l;++i) {
    if ( gdjs.GameScene4Code.GDgreenzoneObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene4Code.GDgreenzoneObjects1[k] = gdjs.GameScene4Code.GDgreenzoneObjects1[i];
        ++k;
    }
}
gdjs.GameScene4Code.GDgreenzoneObjects1.length = k;
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("GameScene5");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Winscene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueZone"), gdjs.GameScene4Code.GDBlueZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameScene4Code.mapOfGDgdjs_9546GameScene4Code_9546GDBlueZoneObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene4Code.GDBlueZoneObjects1.length;i<l;++i) {
    if ( gdjs.GameScene4Code.GDBlueZoneObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene4Code.GDBlueZoneObjects1[k] = gdjs.GameScene4Code.GDBlueZoneObjects1[i];
        ++k;
    }
}
gdjs.GameScene4Code.GDBlueZoneObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LoseScene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedZone"), gdjs.GameScene4Code.GDRedZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameScene4Code.mapOfGDgdjs_9546GameScene4Code_9546GDRedZoneObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene4Code.GDRedZoneObjects1.length;i<l;++i) {
    if ( gdjs.GameScene4Code.GDRedZoneObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene4Code.GDRedZoneObjects1[k] = gdjs.GameScene4Code.GDRedZoneObjects1[i];
        ++k;
    }
}
gdjs.GameScene4Code.GDRedZoneObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LoseScene", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.GameScene4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameScene4Code.GDTxtTimerObjects1.length = 0;
gdjs.GameScene4Code.GDTxtTimerObjects2.length = 0;
gdjs.GameScene4Code.GDZeroTimerObjects1.length = 0;
gdjs.GameScene4Code.GDZeroTimerObjects2.length = 0;
gdjs.GameScene4Code.GDlevel4HintObjects1.length = 0;
gdjs.GameScene4Code.GDlevel4HintObjects2.length = 0;
gdjs.GameScene4Code.GDlevel4JokerObjects1.length = 0;
gdjs.GameScene4Code.GDlevel4JokerObjects2.length = 0;
gdjs.GameScene4Code.GDRedZoneObjects1.length = 0;
gdjs.GameScene4Code.GDRedZoneObjects2.length = 0;
gdjs.GameScene4Code.GDBlueZoneObjects1.length = 0;
gdjs.GameScene4Code.GDBlueZoneObjects2.length = 0;
gdjs.GameScene4Code.GDgreenzoneObjects1.length = 0;
gdjs.GameScene4Code.GDgreenzoneObjects2.length = 0;
gdjs.GameScene4Code.GDLevel4BGObjects1.length = 0;
gdjs.GameScene4Code.GDLevel4BGObjects2.length = 0;
gdjs.GameScene4Code.GDlevel4BombObjects1.length = 0;
gdjs.GameScene4Code.GDlevel4BombObjects2.length = 0;

gdjs.GameScene4Code.eventsList0(runtimeScene);
gdjs.GameScene4Code.GDTxtTimerObjects1.length = 0;
gdjs.GameScene4Code.GDTxtTimerObjects2.length = 0;
gdjs.GameScene4Code.GDZeroTimerObjects1.length = 0;
gdjs.GameScene4Code.GDZeroTimerObjects2.length = 0;
gdjs.GameScene4Code.GDlevel4HintObjects1.length = 0;
gdjs.GameScene4Code.GDlevel4HintObjects2.length = 0;
gdjs.GameScene4Code.GDlevel4JokerObjects1.length = 0;
gdjs.GameScene4Code.GDlevel4JokerObjects2.length = 0;
gdjs.GameScene4Code.GDRedZoneObjects1.length = 0;
gdjs.GameScene4Code.GDRedZoneObjects2.length = 0;
gdjs.GameScene4Code.GDBlueZoneObjects1.length = 0;
gdjs.GameScene4Code.GDBlueZoneObjects2.length = 0;
gdjs.GameScene4Code.GDgreenzoneObjects1.length = 0;
gdjs.GameScene4Code.GDgreenzoneObjects2.length = 0;
gdjs.GameScene4Code.GDLevel4BGObjects1.length = 0;
gdjs.GameScene4Code.GDLevel4BGObjects2.length = 0;
gdjs.GameScene4Code.GDlevel4BombObjects1.length = 0;
gdjs.GameScene4Code.GDlevel4BombObjects2.length = 0;


return;

}

gdjs['GameScene4Code'] = gdjs.GameScene4Code;
