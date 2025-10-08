gdjs.GameScene9Code = {};
gdjs.GameScene9Code.localVariables = [];
gdjs.GameScene9Code.GDTxtTimerObjects1= [];
gdjs.GameScene9Code.GDTxtTimerObjects2= [];
gdjs.GameScene9Code.GDZeroTimerObjects1= [];
gdjs.GameScene9Code.GDZeroTimerObjects2= [];
gdjs.GameScene9Code.GDLevel9HintObjects1= [];
gdjs.GameScene9Code.GDLevel9HintObjects2= [];
gdjs.GameScene9Code.GDRedZoneObjects1= [];
gdjs.GameScene9Code.GDRedZoneObjects2= [];
gdjs.GameScene9Code.GDBlueZoneObjects1= [];
gdjs.GameScene9Code.GDBlueZoneObjects2= [];
gdjs.GameScene9Code.GDgreenzoneObjects1= [];
gdjs.GameScene9Code.GDgreenzoneObjects2= [];
gdjs.GameScene9Code.GDlevel4BombObjects1= [];
gdjs.GameScene9Code.GDlevel4BombObjects2= [];
gdjs.GameScene9Code.GDWarningObjects1= [];
gdjs.GameScene9Code.GDWarningObjects2= [];
gdjs.GameScene9Code.GDLevel9BGObjects1= [];
gdjs.GameScene9Code.GDLevel9BGObjects2= [];


gdjs.GameScene9Code.mapOfGDgdjs_9546GameScene9Code_9546GDRedZoneObjects1Objects = Hashtable.newFrom({"RedZone": gdjs.GameScene9Code.GDRedZoneObjects1});
gdjs.GameScene9Code.mapOfGDgdjs_9546GameScene9Code_9546GDBlueZoneObjects1Objects = Hashtable.newFrom({"BlueZone": gdjs.GameScene9Code.GDBlueZoneObjects1});
gdjs.GameScene9Code.mapOfGDgdjs_9546GameScene9Code_9546GDgreenzoneObjects1Objects = Hashtable.newFrom({"greenzone": gdjs.GameScene9Code.GDgreenzoneObjects1});
gdjs.GameScene9Code.mapOfGDgdjs_9546GameScene9Code_9546GDRedZoneObjects1Objects = Hashtable.newFrom({"RedZone": gdjs.GameScene9Code.GDRedZoneObjects1});
gdjs.GameScene9Code.mapOfGDgdjs_9546GameScene9Code_9546GDBlueZoneObjects1Objects = Hashtable.newFrom({"BlueZone": gdjs.GameScene9Code.GDBlueZoneObjects1});
gdjs.GameScene9Code.mapOfGDgdjs_9546GameScene9Code_9546GDgreenzoneObjects1Objects = Hashtable.newFrom({"greenzone": gdjs.GameScene9Code.GDgreenzoneObjects1});
gdjs.GameScene9Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtTimer"), gdjs.GameScene9Code.GDTxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.GameScene9Code.GDTxtTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene9Code.GDTxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
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
gdjs.copyArray(runtimeScene.getObjects("TxtTimer"), gdjs.GameScene9Code.GDTxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}
{for(var i = 0, len = gdjs.GameScene9Code.GDTxtTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene9Code.GDTxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
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
gdjs.copyArray(runtimeScene.getObjects("BlueZone"), gdjs.GameScene9Code.GDBlueZoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedZone"), gdjs.GameScene9Code.GDRedZoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("Warning"), gdjs.GameScene9Code.GDWarningObjects1);
gdjs.copyArray(runtimeScene.getObjects("greenzone"), gdjs.GameScene9Code.GDgreenzoneObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}
{for(var i = 0, len = gdjs.GameScene9Code.GDRedZoneObjects1.length ;i < len;++i) {
    gdjs.GameScene9Code.GDRedZoneObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene9Code.GDBlueZoneObjects1.length ;i < len;++i) {
    gdjs.GameScene9Code.GDBlueZoneObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene9Code.GDgreenzoneObjects1.length ;i < len;++i) {
    gdjs.GameScene9Code.GDgreenzoneObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene9Code.GDWarningObjects1.length ;i < len;++i) {
    gdjs.GameScene9Code.GDWarningObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedZone"), gdjs.GameScene9Code.GDRedZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameScene9Code.mapOfGDgdjs_9546GameScene9Code_9546GDRedZoneObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene9Code.GDRedZoneObjects1.length;i<l;++i) {
    if ( gdjs.GameScene9Code.GDRedZoneObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene9Code.GDRedZoneObjects1[k] = gdjs.GameScene9Code.GDRedZoneObjects1[i];
        ++k;
    }
}
gdjs.GameScene9Code.GDRedZoneObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0);
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Warning"), gdjs.GameScene9Code.GDWarningObjects1);
{for(var i = 0, len = gdjs.GameScene9Code.GDWarningObjects1.length ;i < len;++i) {
    gdjs.GameScene9Code.GDWarningObjects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Warn");
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "beep_warning.mp3", false, 100, 2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueZone"), gdjs.GameScene9Code.GDBlueZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameScene9Code.mapOfGDgdjs_9546GameScene9Code_9546GDBlueZoneObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene9Code.GDBlueZoneObjects1.length;i<l;++i) {
    if ( gdjs.GameScene9Code.GDBlueZoneObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene9Code.GDBlueZoneObjects1[k] = gdjs.GameScene9Code.GDBlueZoneObjects1[i];
        ++k;
    }
}
gdjs.GameScene9Code.GDBlueZoneObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LoseScene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("greenzone"), gdjs.GameScene9Code.GDgreenzoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameScene9Code.mapOfGDgdjs_9546GameScene9Code_9546GDgreenzoneObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene9Code.GDgreenzoneObjects1.length;i<l;++i) {
    if ( gdjs.GameScene9Code.GDgreenzoneObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene9Code.GDgreenzoneObjects1[k] = gdjs.GameScene9Code.GDgreenzoneObjects1[i];
        ++k;
    }
}
gdjs.GameScene9Code.GDgreenzoneObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LoseScene", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Warn") >= 0.5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Warning"), gdjs.GameScene9Code.GDWarningObjects1);
{for(var i = 0, len = gdjs.GameScene9Code.GDWarningObjects1.length ;i < len;++i) {
    gdjs.GameScene9Code.GDWarningObjects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedZone"), gdjs.GameScene9Code.GDRedZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameScene9Code.mapOfGDgdjs_9546GameScene9Code_9546GDRedZoneObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 2);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Winscene", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("GameScene10");
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(2);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(3);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueZone"), gdjs.GameScene9Code.GDBlueZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameScene9Code.mapOfGDgdjs_9546GameScene9Code_9546GDBlueZoneObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 2);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LoseScene", false);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(2);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(3);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("greenzone"), gdjs.GameScene9Code.GDgreenzoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameScene9Code.mapOfGDgdjs_9546GameScene9Code_9546GDgreenzoneObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 2);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LoseScene", false);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(2);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(3);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.GameScene9Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameScene9Code.GDTxtTimerObjects1.length = 0;
gdjs.GameScene9Code.GDTxtTimerObjects2.length = 0;
gdjs.GameScene9Code.GDZeroTimerObjects1.length = 0;
gdjs.GameScene9Code.GDZeroTimerObjects2.length = 0;
gdjs.GameScene9Code.GDLevel9HintObjects1.length = 0;
gdjs.GameScene9Code.GDLevel9HintObjects2.length = 0;
gdjs.GameScene9Code.GDRedZoneObjects1.length = 0;
gdjs.GameScene9Code.GDRedZoneObjects2.length = 0;
gdjs.GameScene9Code.GDBlueZoneObjects1.length = 0;
gdjs.GameScene9Code.GDBlueZoneObjects2.length = 0;
gdjs.GameScene9Code.GDgreenzoneObjects1.length = 0;
gdjs.GameScene9Code.GDgreenzoneObjects2.length = 0;
gdjs.GameScene9Code.GDlevel4BombObjects1.length = 0;
gdjs.GameScene9Code.GDlevel4BombObjects2.length = 0;
gdjs.GameScene9Code.GDWarningObjects1.length = 0;
gdjs.GameScene9Code.GDWarningObjects2.length = 0;
gdjs.GameScene9Code.GDLevel9BGObjects1.length = 0;
gdjs.GameScene9Code.GDLevel9BGObjects2.length = 0;

gdjs.GameScene9Code.eventsList0(runtimeScene);
gdjs.GameScene9Code.GDTxtTimerObjects1.length = 0;
gdjs.GameScene9Code.GDTxtTimerObjects2.length = 0;
gdjs.GameScene9Code.GDZeroTimerObjects1.length = 0;
gdjs.GameScene9Code.GDZeroTimerObjects2.length = 0;
gdjs.GameScene9Code.GDLevel9HintObjects1.length = 0;
gdjs.GameScene9Code.GDLevel9HintObjects2.length = 0;
gdjs.GameScene9Code.GDRedZoneObjects1.length = 0;
gdjs.GameScene9Code.GDRedZoneObjects2.length = 0;
gdjs.GameScene9Code.GDBlueZoneObjects1.length = 0;
gdjs.GameScene9Code.GDBlueZoneObjects2.length = 0;
gdjs.GameScene9Code.GDgreenzoneObjects1.length = 0;
gdjs.GameScene9Code.GDgreenzoneObjects2.length = 0;
gdjs.GameScene9Code.GDlevel4BombObjects1.length = 0;
gdjs.GameScene9Code.GDlevel4BombObjects2.length = 0;
gdjs.GameScene9Code.GDWarningObjects1.length = 0;
gdjs.GameScene9Code.GDWarningObjects2.length = 0;
gdjs.GameScene9Code.GDLevel9BGObjects1.length = 0;
gdjs.GameScene9Code.GDLevel9BGObjects2.length = 0;


return;

}

gdjs['GameScene9Code'] = gdjs.GameScene9Code;
