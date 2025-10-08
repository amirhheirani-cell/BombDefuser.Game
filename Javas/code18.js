gdjs.GameScene20Code = {};
gdjs.GameScene20Code.localVariables = [];
gdjs.GameScene20Code.GDTxtTimerObjects1= [];
gdjs.GameScene20Code.GDTxtTimerObjects2= [];
gdjs.GameScene20Code.GDZeroTimerObjects1= [];
gdjs.GameScene20Code.GDZeroTimerObjects2= [];
gdjs.GameScene20Code.GDleftZoneObjects1= [];
gdjs.GameScene20Code.GDleftZoneObjects2= [];
gdjs.GameScene20Code.GDrightZoneObjects1= [];
gdjs.GameScene20Code.GDrightZoneObjects2= [];
gdjs.GameScene20Code.GDBGObjects1= [];
gdjs.GameScene20Code.GDBGObjects2= [];
gdjs.GameScene20Code.GDBG2Objects1= [];
gdjs.GameScene20Code.GDBG2Objects2= [];


gdjs.GameScene20Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtTimer"), gdjs.GameScene20Code.GDTxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.GameScene20Code.GDTxtTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene20Code.GDTxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "countdown");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "game-music5.mp3", false, 30, 1);
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
gdjs.copyArray(runtimeScene.getObjects("TxtTimer"), gdjs.GameScene20Code.GDTxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}
{for(var i = 0, len = gdjs.GameScene20Code.GDTxtTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene20Code.GDTxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
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

gdjs.copyArray(runtimeScene.getObjects("leftZone"), gdjs.GameScene20Code.GDleftZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene20Code.GDleftZoneObjects1.length;i<l;++i) {
    if ( gdjs.GameScene20Code.GDleftZoneObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene20Code.GDleftZoneObjects1[k] = gdjs.GameScene20Code.GDleftZoneObjects1[i];
        ++k;
    }
}
gdjs.GameScene20Code.GDleftZoneObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Left");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EndScreen", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("rightZone"), gdjs.GameScene20Code.GDrightZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene20Code.GDrightZoneObjects1.length;i<l;++i) {
    if ( gdjs.GameScene20Code.GDrightZoneObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene20Code.GDrightZoneObjects1[k] = gdjs.GameScene20Code.GDrightZoneObjects1[i];
        ++k;
    }
}
gdjs.GameScene20Code.GDrightZoneObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Right");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EndScreen", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("leftZone"), gdjs.GameScene20Code.GDleftZoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("rightZone"), gdjs.GameScene20Code.GDrightZoneObjects1);
{for(var i = 0, len = gdjs.GameScene20Code.GDrightZoneObjects1.length ;i < len;++i) {
    gdjs.GameScene20Code.GDrightZoneObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene20Code.GDleftZoneObjects1.length ;i < len;++i) {
    gdjs.GameScene20Code.GDleftZoneObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


};

gdjs.GameScene20Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameScene20Code.GDTxtTimerObjects1.length = 0;
gdjs.GameScene20Code.GDTxtTimerObjects2.length = 0;
gdjs.GameScene20Code.GDZeroTimerObjects1.length = 0;
gdjs.GameScene20Code.GDZeroTimerObjects2.length = 0;
gdjs.GameScene20Code.GDleftZoneObjects1.length = 0;
gdjs.GameScene20Code.GDleftZoneObjects2.length = 0;
gdjs.GameScene20Code.GDrightZoneObjects1.length = 0;
gdjs.GameScene20Code.GDrightZoneObjects2.length = 0;
gdjs.GameScene20Code.GDBGObjects1.length = 0;
gdjs.GameScene20Code.GDBGObjects2.length = 0;
gdjs.GameScene20Code.GDBG2Objects1.length = 0;
gdjs.GameScene20Code.GDBG2Objects2.length = 0;

gdjs.GameScene20Code.eventsList0(runtimeScene);
gdjs.GameScene20Code.GDTxtTimerObjects1.length = 0;
gdjs.GameScene20Code.GDTxtTimerObjects2.length = 0;
gdjs.GameScene20Code.GDZeroTimerObjects1.length = 0;
gdjs.GameScene20Code.GDZeroTimerObjects2.length = 0;
gdjs.GameScene20Code.GDleftZoneObjects1.length = 0;
gdjs.GameScene20Code.GDleftZoneObjects2.length = 0;
gdjs.GameScene20Code.GDrightZoneObjects1.length = 0;
gdjs.GameScene20Code.GDrightZoneObjects2.length = 0;
gdjs.GameScene20Code.GDBGObjects1.length = 0;
gdjs.GameScene20Code.GDBGObjects2.length = 0;
gdjs.GameScene20Code.GDBG2Objects1.length = 0;
gdjs.GameScene20Code.GDBG2Objects2.length = 0;


return;

}

gdjs['GameScene20Code'] = gdjs.GameScene20Code;
