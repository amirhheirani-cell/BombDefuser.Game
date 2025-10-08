gdjs.GameScene17Code = {};
gdjs.GameScene17Code.localVariables = [];
gdjs.GameScene17Code.GDTxtTimerObjects1= [];
gdjs.GameScene17Code.GDTxtTimerObjects2= [];
gdjs.GameScene17Code.GDZeroTimerObjects1= [];
gdjs.GameScene17Code.GDZeroTimerObjects2= [];
gdjs.GameScene17Code.GDleftZoneObjects1= [];
gdjs.GameScene17Code.GDleftZoneObjects2= [];
gdjs.GameScene17Code.GDrightZoneObjects1= [];
gdjs.GameScene17Code.GDrightZoneObjects2= [];
gdjs.GameScene17Code.GDBGObjects1= [];
gdjs.GameScene17Code.GDBGObjects2= [];


gdjs.GameScene17Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtTimer"), gdjs.GameScene17Code.GDTxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.GameScene17Code.GDTxtTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene17Code.GDTxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "countdown");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "woman-crying-02-291097.mp3", false, 30, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "crying-411854.mp3", false, 20, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "game-music5.mp3", false, 30, 1);
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
gdjs.copyArray(runtimeScene.getObjects("TxtTimer"), gdjs.GameScene17Code.GDTxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}
{for(var i = 0, len = gdjs.GameScene17Code.GDTxtTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene17Code.GDTxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
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

gdjs.copyArray(runtimeScene.getObjects("leftZone"), gdjs.GameScene17Code.GDleftZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene17Code.GDleftZoneObjects1.length;i<l;++i) {
    if ( gdjs.GameScene17Code.GDleftZoneObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene17Code.GDleftZoneObjects1[k] = gdjs.GameScene17Code.GDleftZoneObjects1[i];
        ++k;
    }
}
gdjs.GameScene17Code.GDleftZoneObjects1.length = k;
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
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("GameScene18");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Winscene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("rightZone"), gdjs.GameScene17Code.GDrightZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene17Code.GDrightZoneObjects1.length;i<l;++i) {
    if ( gdjs.GameScene17Code.GDrightZoneObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene17Code.GDrightZoneObjects1[k] = gdjs.GameScene17Code.GDrightZoneObjects1[i];
        ++k;
    }
}
gdjs.GameScene17Code.GDrightZoneObjects1.length = k;
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
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("GameScene18");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Winscene", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("leftZone"), gdjs.GameScene17Code.GDleftZoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("rightZone"), gdjs.GameScene17Code.GDrightZoneObjects1);
{for(var i = 0, len = gdjs.GameScene17Code.GDrightZoneObjects1.length ;i < len;++i) {
    gdjs.GameScene17Code.GDrightZoneObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene17Code.GDleftZoneObjects1.length ;i < len;++i) {
    gdjs.GameScene17Code.GDleftZoneObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


};

gdjs.GameScene17Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameScene17Code.GDTxtTimerObjects1.length = 0;
gdjs.GameScene17Code.GDTxtTimerObjects2.length = 0;
gdjs.GameScene17Code.GDZeroTimerObjects1.length = 0;
gdjs.GameScene17Code.GDZeroTimerObjects2.length = 0;
gdjs.GameScene17Code.GDleftZoneObjects1.length = 0;
gdjs.GameScene17Code.GDleftZoneObjects2.length = 0;
gdjs.GameScene17Code.GDrightZoneObjects1.length = 0;
gdjs.GameScene17Code.GDrightZoneObjects2.length = 0;
gdjs.GameScene17Code.GDBGObjects1.length = 0;
gdjs.GameScene17Code.GDBGObjects2.length = 0;

gdjs.GameScene17Code.eventsList0(runtimeScene);
gdjs.GameScene17Code.GDTxtTimerObjects1.length = 0;
gdjs.GameScene17Code.GDTxtTimerObjects2.length = 0;
gdjs.GameScene17Code.GDZeroTimerObjects1.length = 0;
gdjs.GameScene17Code.GDZeroTimerObjects2.length = 0;
gdjs.GameScene17Code.GDleftZoneObjects1.length = 0;
gdjs.GameScene17Code.GDleftZoneObjects2.length = 0;
gdjs.GameScene17Code.GDrightZoneObjects1.length = 0;
gdjs.GameScene17Code.GDrightZoneObjects2.length = 0;
gdjs.GameScene17Code.GDBGObjects1.length = 0;
gdjs.GameScene17Code.GDBGObjects2.length = 0;


return;

}

gdjs['GameScene17Code'] = gdjs.GameScene17Code;
