gdjs.GameScene19Code = {};
gdjs.GameScene19Code.localVariables = [];
gdjs.GameScene19Code.GDTxtTimerObjects1= [];
gdjs.GameScene19Code.GDTxtTimerObjects2= [];
gdjs.GameScene19Code.GDZeroTimerObjects1= [];
gdjs.GameScene19Code.GDZeroTimerObjects2= [];
gdjs.GameScene19Code.GDleftZoneObjects1= [];
gdjs.GameScene19Code.GDleftZoneObjects2= [];
gdjs.GameScene19Code.GDrightZoneObjects1= [];
gdjs.GameScene19Code.GDrightZoneObjects2= [];
gdjs.GameScene19Code.GDSenarioObjects1= [];
gdjs.GameScene19Code.GDSenarioObjects2= [];
gdjs.GameScene19Code.GDSelfUseObjects1= [];
gdjs.GameScene19Code.GDSelfUseObjects2= [];
gdjs.GameScene19Code.GDBGObjects1= [];
gdjs.GameScene19Code.GDBGObjects2= [];
gdjs.GameScene19Code.GDOtherUseObjects1= [];
gdjs.GameScene19Code.GDOtherUseObjects2= [];


gdjs.GameScene19Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtTimer"), gdjs.GameScene19Code.GDTxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.GameScene19Code.GDTxtTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene19Code.GDTxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
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
gdjs.copyArray(runtimeScene.getObjects("TxtTimer"), gdjs.GameScene19Code.GDTxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}
{for(var i = 0, len = gdjs.GameScene19Code.GDTxtTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene19Code.GDTxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
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

gdjs.copyArray(runtimeScene.getObjects("leftZone"), gdjs.GameScene19Code.GDleftZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene19Code.GDleftZoneObjects1.length;i<l;++i) {
    if ( gdjs.GameScene19Code.GDleftZoneObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene19Code.GDleftZoneObjects1[k] = gdjs.GameScene19Code.GDleftZoneObjects1[i];
        ++k;
    }
}
gdjs.GameScene19Code.GDleftZoneObjects1.length = k;
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
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("GameScene20");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Winscene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("rightZone"), gdjs.GameScene19Code.GDrightZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene19Code.GDrightZoneObjects1.length;i<l;++i) {
    if ( gdjs.GameScene19Code.GDrightZoneObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene19Code.GDrightZoneObjects1[k] = gdjs.GameScene19Code.GDrightZoneObjects1[i];
        ++k;
    }
}
gdjs.GameScene19Code.GDrightZoneObjects1.length = k;
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
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("GameScene20");
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
gdjs.copyArray(runtimeScene.getObjects("leftZone"), gdjs.GameScene19Code.GDleftZoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("rightZone"), gdjs.GameScene19Code.GDrightZoneObjects1);
{for(var i = 0, len = gdjs.GameScene19Code.GDrightZoneObjects1.length ;i < len;++i) {
    gdjs.GameScene19Code.GDrightZoneObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene19Code.GDleftZoneObjects1.length ;i < len;++i) {
    gdjs.GameScene19Code.GDleftZoneObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


};

gdjs.GameScene19Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameScene19Code.GDTxtTimerObjects1.length = 0;
gdjs.GameScene19Code.GDTxtTimerObjects2.length = 0;
gdjs.GameScene19Code.GDZeroTimerObjects1.length = 0;
gdjs.GameScene19Code.GDZeroTimerObjects2.length = 0;
gdjs.GameScene19Code.GDleftZoneObjects1.length = 0;
gdjs.GameScene19Code.GDleftZoneObjects2.length = 0;
gdjs.GameScene19Code.GDrightZoneObjects1.length = 0;
gdjs.GameScene19Code.GDrightZoneObjects2.length = 0;
gdjs.GameScene19Code.GDSenarioObjects1.length = 0;
gdjs.GameScene19Code.GDSenarioObjects2.length = 0;
gdjs.GameScene19Code.GDSelfUseObjects1.length = 0;
gdjs.GameScene19Code.GDSelfUseObjects2.length = 0;
gdjs.GameScene19Code.GDBGObjects1.length = 0;
gdjs.GameScene19Code.GDBGObjects2.length = 0;
gdjs.GameScene19Code.GDOtherUseObjects1.length = 0;
gdjs.GameScene19Code.GDOtherUseObjects2.length = 0;

gdjs.GameScene19Code.eventsList0(runtimeScene);
gdjs.GameScene19Code.GDTxtTimerObjects1.length = 0;
gdjs.GameScene19Code.GDTxtTimerObjects2.length = 0;
gdjs.GameScene19Code.GDZeroTimerObjects1.length = 0;
gdjs.GameScene19Code.GDZeroTimerObjects2.length = 0;
gdjs.GameScene19Code.GDleftZoneObjects1.length = 0;
gdjs.GameScene19Code.GDleftZoneObjects2.length = 0;
gdjs.GameScene19Code.GDrightZoneObjects1.length = 0;
gdjs.GameScene19Code.GDrightZoneObjects2.length = 0;
gdjs.GameScene19Code.GDSenarioObjects1.length = 0;
gdjs.GameScene19Code.GDSenarioObjects2.length = 0;
gdjs.GameScene19Code.GDSelfUseObjects1.length = 0;
gdjs.GameScene19Code.GDSelfUseObjects2.length = 0;
gdjs.GameScene19Code.GDBGObjects1.length = 0;
gdjs.GameScene19Code.GDBGObjects2.length = 0;
gdjs.GameScene19Code.GDOtherUseObjects1.length = 0;
gdjs.GameScene19Code.GDOtherUseObjects2.length = 0;


return;

}

gdjs['GameScene19Code'] = gdjs.GameScene19Code;
