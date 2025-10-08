gdjs.GameScene15Code = {};
gdjs.GameScene15Code.localVariables = [];
gdjs.GameScene15Code.GDTxtTimerObjects1= [];
gdjs.GameScene15Code.GDTxtTimerObjects2= [];
gdjs.GameScene15Code.GDZeroTimeObjects1= [];
gdjs.GameScene15Code.GDZeroTimeObjects2= [];
gdjs.GameScene15Code.GDLevel2_9595BGObjects1= [];
gdjs.GameScene15Code.GDLevel2_9595BGObjects2= [];
gdjs.GameScene15Code.GDTxtCodeObjects1= [];
gdjs.GameScene15Code.GDTxtCodeObjects2= [];
gdjs.GameScene15Code.GDBomb_9595Leve2Objects1= [];
gdjs.GameScene15Code.GDBomb_9595Leve2Objects2= [];
gdjs.GameScene15Code.GDNewSpriteObjects1= [];
gdjs.GameScene15Code.GDNewSpriteObjects2= [];
gdjs.GameScene15Code.GDlevel2_9595textObjects1= [];
gdjs.GameScene15Code.GDlevel2_9595textObjects2= [];
gdjs.GameScene15Code.GDFake1Objects1= [];
gdjs.GameScene15Code.GDFake1Objects2= [];
gdjs.GameScene15Code.GDFake2Objects1= [];
gdjs.GameScene15Code.GDFake2Objects2= [];
gdjs.GameScene15Code.GDFake3Objects1= [];
gdjs.GameScene15Code.GDFake3Objects2= [];


gdjs.GameScene15Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.GameScene15Code.GDTxtCodeObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(4).setString("");
}
{for(var i = 0, len = gdjs.GameScene15Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene15Code.GDTxtCodeObjects1[i].getBehavior("Text").setText("");
}
}
}

}


};gdjs.GameScene15Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtTimer"), gdjs.GameScene15Code.GDTxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.GameScene15Code.GDTxtTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene15Code.GDTxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "countdown");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "game-music3.mp3", false, 30, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Level15Command.mp3", false, 100, 1);
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
gdjs.copyArray(runtimeScene.getObjects("TxtTimer"), gdjs.GameScene15Code.GDTxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}
{for(var i = 0, len = gdjs.GameScene15Code.GDTxtTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene15Code.GDTxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
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
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene15Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setString(runtimeScene.getScene().getVariables().getFromIndex(3).getAsString());
}
{for(var i = 0, len = gdjs.GameScene15Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene15Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Back");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4))) > 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene15Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setString(gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("code")), 0, gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4))) - 1));
}
{for(var i = 0, len = gdjs.GameScene15Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene15Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)));
}
}

{ //Subevents
gdjs.GameScene15Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num1");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4))) < 5);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene15Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)) + "1");
}
{for(var i = 0, len = gdjs.GameScene15Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene15Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)));
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4))) < 5);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene15Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)) + "4");
}
{for(var i = 0, len = gdjs.GameScene15Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene15Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)));
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4))) < 5);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene15Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)) + "2");
}
{for(var i = 0, len = gdjs.GameScene15Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene15Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)));
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4))) < 5);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene15Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)) + "3");
}
{for(var i = 0, len = gdjs.GameScene15Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene15Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)));
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4))) < 5);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene15Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)) + "0");
}
{for(var i = 0, len = gdjs.GameScene15Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene15Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)));
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4))) < 5);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene15Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)) + "9");
}
{for(var i = 0, len = gdjs.GameScene15Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene15Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)));
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4))) < 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene15Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)) + "8");
}
{for(var i = 0, len = gdjs.GameScene15Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene15Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)));
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4))) < 5);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene15Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)) + "7");
}
{for(var i = 0, len = gdjs.GameScene15Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene15Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)));
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4))) < 5);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene15Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)) + "6");
}
{for(var i = 0, len = gdjs.GameScene15Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene15Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)));
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4))) < 5);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene15Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)) + "5");
}
{for(var i = 0, len = gdjs.GameScene15Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene15Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)));
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
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)) == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Winscene", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("GameScene16");
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
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
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
{
}

}


};

gdjs.GameScene15Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameScene15Code.GDTxtTimerObjects1.length = 0;
gdjs.GameScene15Code.GDTxtTimerObjects2.length = 0;
gdjs.GameScene15Code.GDZeroTimeObjects1.length = 0;
gdjs.GameScene15Code.GDZeroTimeObjects2.length = 0;
gdjs.GameScene15Code.GDLevel2_9595BGObjects1.length = 0;
gdjs.GameScene15Code.GDLevel2_9595BGObjects2.length = 0;
gdjs.GameScene15Code.GDTxtCodeObjects1.length = 0;
gdjs.GameScene15Code.GDTxtCodeObjects2.length = 0;
gdjs.GameScene15Code.GDBomb_9595Leve2Objects1.length = 0;
gdjs.GameScene15Code.GDBomb_9595Leve2Objects2.length = 0;
gdjs.GameScene15Code.GDNewSpriteObjects1.length = 0;
gdjs.GameScene15Code.GDNewSpriteObjects2.length = 0;
gdjs.GameScene15Code.GDlevel2_9595textObjects1.length = 0;
gdjs.GameScene15Code.GDlevel2_9595textObjects2.length = 0;
gdjs.GameScene15Code.GDFake1Objects1.length = 0;
gdjs.GameScene15Code.GDFake1Objects2.length = 0;
gdjs.GameScene15Code.GDFake2Objects1.length = 0;
gdjs.GameScene15Code.GDFake2Objects2.length = 0;
gdjs.GameScene15Code.GDFake3Objects1.length = 0;
gdjs.GameScene15Code.GDFake3Objects2.length = 0;

gdjs.GameScene15Code.eventsList1(runtimeScene);
gdjs.GameScene15Code.GDTxtTimerObjects1.length = 0;
gdjs.GameScene15Code.GDTxtTimerObjects2.length = 0;
gdjs.GameScene15Code.GDZeroTimeObjects1.length = 0;
gdjs.GameScene15Code.GDZeroTimeObjects2.length = 0;
gdjs.GameScene15Code.GDLevel2_9595BGObjects1.length = 0;
gdjs.GameScene15Code.GDLevel2_9595BGObjects2.length = 0;
gdjs.GameScene15Code.GDTxtCodeObjects1.length = 0;
gdjs.GameScene15Code.GDTxtCodeObjects2.length = 0;
gdjs.GameScene15Code.GDBomb_9595Leve2Objects1.length = 0;
gdjs.GameScene15Code.GDBomb_9595Leve2Objects2.length = 0;
gdjs.GameScene15Code.GDNewSpriteObjects1.length = 0;
gdjs.GameScene15Code.GDNewSpriteObjects2.length = 0;
gdjs.GameScene15Code.GDlevel2_9595textObjects1.length = 0;
gdjs.GameScene15Code.GDlevel2_9595textObjects2.length = 0;
gdjs.GameScene15Code.GDFake1Objects1.length = 0;
gdjs.GameScene15Code.GDFake1Objects2.length = 0;
gdjs.GameScene15Code.GDFake2Objects1.length = 0;
gdjs.GameScene15Code.GDFake2Objects2.length = 0;
gdjs.GameScene15Code.GDFake3Objects1.length = 0;
gdjs.GameScene15Code.GDFake3Objects2.length = 0;


return;

}

gdjs['GameScene15Code'] = gdjs.GameScene15Code;
