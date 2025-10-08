gdjs.GameScene10Code = {};
gdjs.GameScene10Code.localVariables = [];
gdjs.GameScene10Code.GDTxtTimerObjects1= [];
gdjs.GameScene10Code.GDTxtTimerObjects2= [];
gdjs.GameScene10Code.GDZeroTimeObjects1= [];
gdjs.GameScene10Code.GDZeroTimeObjects2= [];
gdjs.GameScene10Code.GDTxtCodeObjects1= [];
gdjs.GameScene10Code.GDTxtCodeObjects2= [];
gdjs.GameScene10Code.GDBomb_9595Leve2Objects1= [];
gdjs.GameScene10Code.GDBomb_9595Leve2Objects2= [];
gdjs.GameScene10Code.GDNewSpriteObjects1= [];
gdjs.GameScene10Code.GDNewSpriteObjects2= [];
gdjs.GameScene10Code.GDlevel2_9595textObjects1= [];
gdjs.GameScene10Code.GDlevel2_9595textObjects2= [];
gdjs.GameScene10Code.GDWrongCodeObjects1= [];
gdjs.GameScene10Code.GDWrongCodeObjects2= [];
gdjs.GameScene10Code.GDRightCodeObjects1= [];
gdjs.GameScene10Code.GDRightCodeObjects2= [];
gdjs.GameScene10Code.GDLevelBGObjects1= [];
gdjs.GameScene10Code.GDLevelBGObjects2= [];


gdjs.GameScene10Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.GameScene10Code.GDTxtCodeObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("");
}
{for(var i = 0, len = gdjs.GameScene10Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene10Code.GDTxtCodeObjects1[i].getBehavior("Text").setText("");
}
}
}

}


};gdjs.GameScene10Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtTimer"), gdjs.GameScene10Code.GDTxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.GameScene10Code.GDTxtTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene10Code.GDTxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "countdown");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "game-music3.mp3", false, 15, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Level10Command.mp3", false, 100, 1);
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
gdjs.copyArray(runtimeScene.getObjects("TxtTimer"), gdjs.GameScene10Code.GDTxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}
{for(var i = 0, len = gdjs.GameScene10Code.GDTxtTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene10Code.GDTxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
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
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Back");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3))) > 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene10Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("code")), 0, gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3))) - 1));
}
{for(var i = 0, len = gdjs.GameScene10Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene10Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}

{ //Subevents
gdjs.GameScene10Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num1");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3))) < 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene10Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) + "1");
}
{for(var i = 0, len = gdjs.GameScene10Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene10Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num4");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3))) < 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene10Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) + "4");
}
{for(var i = 0, len = gdjs.GameScene10Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene10Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num2");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3))) < 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene10Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) + "2");
}
{for(var i = 0, len = gdjs.GameScene10Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene10Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num3");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3))) < 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene10Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) + "3");
}
{for(var i = 0, len = gdjs.GameScene10Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene10Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num0");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3))) < 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene10Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) + "0");
}
{for(var i = 0, len = gdjs.GameScene10Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene10Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num9");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3))) < 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene10Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) + "9");
}
{for(var i = 0, len = gdjs.GameScene10Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene10Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num8");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3))) < 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene10Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) + "8");
}
{for(var i = 0, len = gdjs.GameScene10Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene10Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num7");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3))) < 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene10Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) + "7");
}
{for(var i = 0, len = gdjs.GameScene10Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene10Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num6");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3))) < 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene10Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) + "6");
}
{for(var i = 0, len = gdjs.GameScene10Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene10Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num5");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3))) < 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene10Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) + "5");
}
{for(var i = 0, len = gdjs.GameScene10Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene10Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Winscene", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("GameScene11");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
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
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameScene10Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene10Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("");
}
{for(var i = 0, len = gdjs.GameScene10Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene10Code.GDTxtCodeObjects1[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.GameScene10Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameScene10Code.GDNewSpriteObjects1[i].hide();
}
}
}

}


};

gdjs.GameScene10Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameScene10Code.GDTxtTimerObjects1.length = 0;
gdjs.GameScene10Code.GDTxtTimerObjects2.length = 0;
gdjs.GameScene10Code.GDZeroTimeObjects1.length = 0;
gdjs.GameScene10Code.GDZeroTimeObjects2.length = 0;
gdjs.GameScene10Code.GDTxtCodeObjects1.length = 0;
gdjs.GameScene10Code.GDTxtCodeObjects2.length = 0;
gdjs.GameScene10Code.GDBomb_9595Leve2Objects1.length = 0;
gdjs.GameScene10Code.GDBomb_9595Leve2Objects2.length = 0;
gdjs.GameScene10Code.GDNewSpriteObjects1.length = 0;
gdjs.GameScene10Code.GDNewSpriteObjects2.length = 0;
gdjs.GameScene10Code.GDlevel2_9595textObjects1.length = 0;
gdjs.GameScene10Code.GDlevel2_9595textObjects2.length = 0;
gdjs.GameScene10Code.GDWrongCodeObjects1.length = 0;
gdjs.GameScene10Code.GDWrongCodeObjects2.length = 0;
gdjs.GameScene10Code.GDRightCodeObjects1.length = 0;
gdjs.GameScene10Code.GDRightCodeObjects2.length = 0;
gdjs.GameScene10Code.GDLevelBGObjects1.length = 0;
gdjs.GameScene10Code.GDLevelBGObjects2.length = 0;

gdjs.GameScene10Code.eventsList1(runtimeScene);
gdjs.GameScene10Code.GDTxtTimerObjects1.length = 0;
gdjs.GameScene10Code.GDTxtTimerObjects2.length = 0;
gdjs.GameScene10Code.GDZeroTimeObjects1.length = 0;
gdjs.GameScene10Code.GDZeroTimeObjects2.length = 0;
gdjs.GameScene10Code.GDTxtCodeObjects1.length = 0;
gdjs.GameScene10Code.GDTxtCodeObjects2.length = 0;
gdjs.GameScene10Code.GDBomb_9595Leve2Objects1.length = 0;
gdjs.GameScene10Code.GDBomb_9595Leve2Objects2.length = 0;
gdjs.GameScene10Code.GDNewSpriteObjects1.length = 0;
gdjs.GameScene10Code.GDNewSpriteObjects2.length = 0;
gdjs.GameScene10Code.GDlevel2_9595textObjects1.length = 0;
gdjs.GameScene10Code.GDlevel2_9595textObjects2.length = 0;
gdjs.GameScene10Code.GDWrongCodeObjects1.length = 0;
gdjs.GameScene10Code.GDWrongCodeObjects2.length = 0;
gdjs.GameScene10Code.GDRightCodeObjects1.length = 0;
gdjs.GameScene10Code.GDRightCodeObjects2.length = 0;
gdjs.GameScene10Code.GDLevelBGObjects1.length = 0;
gdjs.GameScene10Code.GDLevelBGObjects2.length = 0;


return;

}

gdjs['GameScene10Code'] = gdjs.GameScene10Code;
