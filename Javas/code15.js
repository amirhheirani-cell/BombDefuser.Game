gdjs.GameScene14Code = {};
gdjs.GameScene14Code.localVariables = [];
gdjs.GameScene14Code.GDTxtTimerObjects1= [];
gdjs.GameScene14Code.GDTxtTimerObjects2= [];
gdjs.GameScene14Code.GDZeroTimerObjects1= [];
gdjs.GameScene14Code.GDZeroTimerObjects2= [];
gdjs.GameScene14Code.GDleftZoneObjects1= [];
gdjs.GameScene14Code.GDleftZoneObjects2= [];
gdjs.GameScene14Code.GDrightZoneObjects1= [];
gdjs.GameScene14Code.GDrightZoneObjects2= [];
gdjs.GameScene14Code.GDLevel5BoardObjects1= [];
gdjs.GameScene14Code.GDLevel5BoardObjects2= [];
gdjs.GameScene14Code.GDUIObjects1= [];
gdjs.GameScene14Code.GDUIObjects2= [];
gdjs.GameScene14Code.GDBGObjects1= [];
gdjs.GameScene14Code.GDBGObjects2= [];
gdjs.GameScene14Code.GDSenarioObjects1= [];
gdjs.GameScene14Code.GDSenarioObjects2= [];


gdjs.GameScene14Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtTimer"), gdjs.GameScene14Code.GDTxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.GameScene14Code.GDTxtTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene14Code.GDTxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "countdown");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "woman-crying-02-291097.mp3", false, 30, 1);
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
gdjs.copyArray(runtimeScene.getObjects("TxtTimer"), gdjs.GameScene14Code.GDTxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}
{for(var i = 0, len = gdjs.GameScene14Code.GDTxtTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene14Code.GDTxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
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

gdjs.copyArray(runtimeScene.getObjects("leftZone"), gdjs.GameScene14Code.GDleftZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene14Code.GDleftZoneObjects1.length;i<l;++i) {
    if ( gdjs.GameScene14Code.GDleftZoneObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene14Code.GDleftZoneObjects1[k] = gdjs.GameScene14Code.GDleftZoneObjects1[i];
        ++k;
    }
}
gdjs.GameScene14Code.GDleftZoneObjects1.length = k;
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
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("GameScene15");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Winscene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("rightZone"), gdjs.GameScene14Code.GDrightZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene14Code.GDrightZoneObjects1.length;i<l;++i) {
    if ( gdjs.GameScene14Code.GDrightZoneObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene14Code.GDrightZoneObjects1[k] = gdjs.GameScene14Code.GDrightZoneObjects1[i];
        ++k;
    }
}
gdjs.GameScene14Code.GDrightZoneObjects1.length = k;
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
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("GameScene15");
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
gdjs.copyArray(runtimeScene.getObjects("leftZone"), gdjs.GameScene14Code.GDleftZoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("rightZone"), gdjs.GameScene14Code.GDrightZoneObjects1);
{for(var i = 0, len = gdjs.GameScene14Code.GDrightZoneObjects1.length ;i < len;++i) {
    gdjs.GameScene14Code.GDrightZoneObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene14Code.GDleftZoneObjects1.length ;i < len;++i) {
    gdjs.GameScene14Code.GDleftZoneObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


};

gdjs.GameScene14Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameScene14Code.GDTxtTimerObjects1.length = 0;
gdjs.GameScene14Code.GDTxtTimerObjects2.length = 0;
gdjs.GameScene14Code.GDZeroTimerObjects1.length = 0;
gdjs.GameScene14Code.GDZeroTimerObjects2.length = 0;
gdjs.GameScene14Code.GDleftZoneObjects1.length = 0;
gdjs.GameScene14Code.GDleftZoneObjects2.length = 0;
gdjs.GameScene14Code.GDrightZoneObjects1.length = 0;
gdjs.GameScene14Code.GDrightZoneObjects2.length = 0;
gdjs.GameScene14Code.GDLevel5BoardObjects1.length = 0;
gdjs.GameScene14Code.GDLevel5BoardObjects2.length = 0;
gdjs.GameScene14Code.GDUIObjects1.length = 0;
gdjs.GameScene14Code.GDUIObjects2.length = 0;
gdjs.GameScene14Code.GDBGObjects1.length = 0;
gdjs.GameScene14Code.GDBGObjects2.length = 0;
gdjs.GameScene14Code.GDSenarioObjects1.length = 0;
gdjs.GameScene14Code.GDSenarioObjects2.length = 0;

gdjs.GameScene14Code.eventsList0(runtimeScene);
gdjs.GameScene14Code.GDTxtTimerObjects1.length = 0;
gdjs.GameScene14Code.GDTxtTimerObjects2.length = 0;
gdjs.GameScene14Code.GDZeroTimerObjects1.length = 0;
gdjs.GameScene14Code.GDZeroTimerObjects2.length = 0;
gdjs.GameScene14Code.GDleftZoneObjects1.length = 0;
gdjs.GameScene14Code.GDleftZoneObjects2.length = 0;
gdjs.GameScene14Code.GDrightZoneObjects1.length = 0;
gdjs.GameScene14Code.GDrightZoneObjects2.length = 0;
gdjs.GameScene14Code.GDLevel5BoardObjects1.length = 0;
gdjs.GameScene14Code.GDLevel5BoardObjects2.length = 0;
gdjs.GameScene14Code.GDUIObjects1.length = 0;
gdjs.GameScene14Code.GDUIObjects2.length = 0;
gdjs.GameScene14Code.GDBGObjects1.length = 0;
gdjs.GameScene14Code.GDBGObjects2.length = 0;
gdjs.GameScene14Code.GDSenarioObjects1.length = 0;
gdjs.GameScene14Code.GDSenarioObjects2.length = 0;


return;

}

gdjs['GameScene14Code'] = gdjs.GameScene14Code;
