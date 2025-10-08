gdjs.GameScene18Code = {};
gdjs.GameScene18Code.localVariables = [];
gdjs.GameScene18Code.GDTxtTimerObjects1= [];
gdjs.GameScene18Code.GDTxtTimerObjects2= [];
gdjs.GameScene18Code.GDZeroTimerObjects1= [];
gdjs.GameScene18Code.GDZeroTimerObjects2= [];
gdjs.GameScene18Code.GDRedZoneObjects1= [];
gdjs.GameScene18Code.GDRedZoneObjects2= [];
gdjs.GameScene18Code.GDBlueZoneObjects1= [];
gdjs.GameScene18Code.GDBlueZoneObjects2= [];
gdjs.GameScene18Code.GDgreenzoneObjects1= [];
gdjs.GameScene18Code.GDgreenzoneObjects2= [];
gdjs.GameScene18Code.GDLevel4BGObjects1= [];
gdjs.GameScene18Code.GDLevel4BGObjects2= [];
gdjs.GameScene18Code.GDlevel4BombObjects1= [];
gdjs.GameScene18Code.GDlevel4BombObjects2= [];
gdjs.GameScene18Code.GDGuide1Objects1= [];
gdjs.GameScene18Code.GDGuide1Objects2= [];
gdjs.GameScene18Code.GDGuide2Objects1= [];
gdjs.GameScene18Code.GDGuide2Objects2= [];


gdjs.GameScene18Code.mapOfGDgdjs_9546GameScene18Code_9546GDBlueZoneObjects1Objects = Hashtable.newFrom({"BlueZone": gdjs.GameScene18Code.GDBlueZoneObjects1});
gdjs.GameScene18Code.mapOfGDgdjs_9546GameScene18Code_9546GDgreenzoneObjects1Objects = Hashtable.newFrom({"greenzone": gdjs.GameScene18Code.GDgreenzoneObjects1});
gdjs.GameScene18Code.mapOfGDgdjs_9546GameScene18Code_9546GDRedZoneObjects1Objects = Hashtable.newFrom({"RedZone": gdjs.GameScene18Code.GDRedZoneObjects1});
gdjs.GameScene18Code.mapOfGDgdjs_9546GameScene18Code_9546GDgreenzoneObjects1Objects = Hashtable.newFrom({"greenzone": gdjs.GameScene18Code.GDgreenzoneObjects1});
gdjs.GameScene18Code.mapOfGDgdjs_9546GameScene18Code_9546GDBlueZoneObjects1Objects = Hashtable.newFrom({"BlueZone": gdjs.GameScene18Code.GDBlueZoneObjects1});
gdjs.GameScene18Code.mapOfGDgdjs_9546GameScene18Code_9546GDRedZoneObjects1Objects = Hashtable.newFrom({"RedZone": gdjs.GameScene18Code.GDRedZoneObjects1});
gdjs.GameScene18Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtTimer"), gdjs.GameScene18Code.GDTxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.GameScene18Code.GDTxtTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene18Code.GDTxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "countdown");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "game-music3.mp3", false, 30, 1);
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
gdjs.copyArray(runtimeScene.getObjects("TxtTimer"), gdjs.GameScene18Code.GDTxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}
{for(var i = 0, len = gdjs.GameScene18Code.GDTxtTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene18Code.GDTxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
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
gdjs.copyArray(runtimeScene.getObjects("BlueZone"), gdjs.GameScene18Code.GDBlueZoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("Guide1"), gdjs.GameScene18Code.GDGuide1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Guide2"), gdjs.GameScene18Code.GDGuide2Objects1);
gdjs.copyArray(runtimeScene.getObjects("RedZone"), gdjs.GameScene18Code.GDRedZoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("greenzone"), gdjs.GameScene18Code.GDgreenzoneObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
{for(var i = 0, len = gdjs.GameScene18Code.GDRedZoneObjects1.length ;i < len;++i) {
    gdjs.GameScene18Code.GDRedZoneObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene18Code.GDBlueZoneObjects1.length ;i < len;++i) {
    gdjs.GameScene18Code.GDBlueZoneObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene18Code.GDgreenzoneObjects1.length ;i < len;++i) {
    gdjs.GameScene18Code.GDgreenzoneObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{for(var i = 0, len = gdjs.GameScene18Code.GDGuide2Objects1.length ;i < len;++i) {
    gdjs.GameScene18Code.GDGuide2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameScene18Code.GDGuide1Objects1.length ;i < len;++i) {
    gdjs.GameScene18Code.GDGuide1Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueZone"), gdjs.GameScene18Code.GDBlueZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameScene18Code.mapOfGDgdjs_9546GameScene18Code_9546GDBlueZoneObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene18Code.GDBlueZoneObjects1.length;i<l;++i) {
    if ( gdjs.GameScene18Code.GDBlueZoneObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene18Code.GDBlueZoneObjects1[k] = gdjs.GameScene18Code.GDBlueZoneObjects1[i];
        ++k;
    }
}
gdjs.GameScene18Code.GDBlueZoneObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Guide1"), gdjs.GameScene18Code.GDGuide1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Guide2"), gdjs.GameScene18Code.GDGuide2Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
{for(var i = 0, len = gdjs.GameScene18Code.GDGuide1Objects1.length ;i < len;++i) {
    gdjs.GameScene18Code.GDGuide1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameScene18Code.GDGuide2Objects1.length ;i < len;++i) {
    gdjs.GameScene18Code.GDGuide2Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("greenzone"), gdjs.GameScene18Code.GDgreenzoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameScene18Code.mapOfGDgdjs_9546GameScene18Code_9546GDgreenzoneObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene18Code.GDgreenzoneObjects1.length;i<l;++i) {
    if ( gdjs.GameScene18Code.GDgreenzoneObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene18Code.GDgreenzoneObjects1[k] = gdjs.GameScene18Code.GDgreenzoneObjects1[i];
        ++k;
    }
}
gdjs.GameScene18Code.GDgreenzoneObjects1.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(2);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Winscene", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("GameScene19");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedZone"), gdjs.GameScene18Code.GDRedZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameScene18Code.mapOfGDgdjs_9546GameScene18Code_9546GDRedZoneObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene18Code.GDRedZoneObjects1.length;i<l;++i) {
    if ( gdjs.GameScene18Code.GDRedZoneObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene18Code.GDRedZoneObjects1[k] = gdjs.GameScene18Code.GDRedZoneObjects1[i];
        ++k;
    }
}
gdjs.GameScene18Code.GDRedZoneObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LoseScene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("greenzone"), gdjs.GameScene18Code.GDgreenzoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameScene18Code.mapOfGDgdjs_9546GameScene18Code_9546GDgreenzoneObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene18Code.GDgreenzoneObjects1.length;i<l;++i) {
    if ( gdjs.GameScene18Code.GDgreenzoneObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene18Code.GDgreenzoneObjects1[k] = gdjs.GameScene18Code.GDgreenzoneObjects1[i];
        ++k;
    }
}
gdjs.GameScene18Code.GDgreenzoneObjects1.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LoseScene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueZone"), gdjs.GameScene18Code.GDBlueZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameScene18Code.mapOfGDgdjs_9546GameScene18Code_9546GDBlueZoneObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene18Code.GDBlueZoneObjects1.length;i<l;++i) {
    if ( gdjs.GameScene18Code.GDBlueZoneObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene18Code.GDBlueZoneObjects1[k] = gdjs.GameScene18Code.GDBlueZoneObjects1[i];
        ++k;
    }
}
gdjs.GameScene18Code.GDBlueZoneObjects1.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(2);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LoseScene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedZone"), gdjs.GameScene18Code.GDRedZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameScene18Code.mapOfGDgdjs_9546GameScene18Code_9546GDRedZoneObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene18Code.GDRedZoneObjects1.length;i<l;++i) {
    if ( gdjs.GameScene18Code.GDRedZoneObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene18Code.GDRedZoneObjects1[k] = gdjs.GameScene18Code.GDRedZoneObjects1[i];
        ++k;
    }
}
gdjs.GameScene18Code.GDRedZoneObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(2);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LoseScene", false);
}
}

}


};

gdjs.GameScene18Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameScene18Code.GDTxtTimerObjects1.length = 0;
gdjs.GameScene18Code.GDTxtTimerObjects2.length = 0;
gdjs.GameScene18Code.GDZeroTimerObjects1.length = 0;
gdjs.GameScene18Code.GDZeroTimerObjects2.length = 0;
gdjs.GameScene18Code.GDRedZoneObjects1.length = 0;
gdjs.GameScene18Code.GDRedZoneObjects2.length = 0;
gdjs.GameScene18Code.GDBlueZoneObjects1.length = 0;
gdjs.GameScene18Code.GDBlueZoneObjects2.length = 0;
gdjs.GameScene18Code.GDgreenzoneObjects1.length = 0;
gdjs.GameScene18Code.GDgreenzoneObjects2.length = 0;
gdjs.GameScene18Code.GDLevel4BGObjects1.length = 0;
gdjs.GameScene18Code.GDLevel4BGObjects2.length = 0;
gdjs.GameScene18Code.GDlevel4BombObjects1.length = 0;
gdjs.GameScene18Code.GDlevel4BombObjects2.length = 0;
gdjs.GameScene18Code.GDGuide1Objects1.length = 0;
gdjs.GameScene18Code.GDGuide1Objects2.length = 0;
gdjs.GameScene18Code.GDGuide2Objects1.length = 0;
gdjs.GameScene18Code.GDGuide2Objects2.length = 0;

gdjs.GameScene18Code.eventsList0(runtimeScene);
gdjs.GameScene18Code.GDTxtTimerObjects1.length = 0;
gdjs.GameScene18Code.GDTxtTimerObjects2.length = 0;
gdjs.GameScene18Code.GDZeroTimerObjects1.length = 0;
gdjs.GameScene18Code.GDZeroTimerObjects2.length = 0;
gdjs.GameScene18Code.GDRedZoneObjects1.length = 0;
gdjs.GameScene18Code.GDRedZoneObjects2.length = 0;
gdjs.GameScene18Code.GDBlueZoneObjects1.length = 0;
gdjs.GameScene18Code.GDBlueZoneObjects2.length = 0;
gdjs.GameScene18Code.GDgreenzoneObjects1.length = 0;
gdjs.GameScene18Code.GDgreenzoneObjects2.length = 0;
gdjs.GameScene18Code.GDLevel4BGObjects1.length = 0;
gdjs.GameScene18Code.GDLevel4BGObjects2.length = 0;
gdjs.GameScene18Code.GDlevel4BombObjects1.length = 0;
gdjs.GameScene18Code.GDlevel4BombObjects2.length = 0;
gdjs.GameScene18Code.GDGuide1Objects1.length = 0;
gdjs.GameScene18Code.GDGuide1Objects2.length = 0;
gdjs.GameScene18Code.GDGuide2Objects1.length = 0;
gdjs.GameScene18Code.GDGuide2Objects2.length = 0;


return;

}

gdjs['GameScene18Code'] = gdjs.GameScene18Code;
