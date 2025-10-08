gdjs.GameScene16Code = {};
gdjs.GameScene16Code.localVariables = [];
gdjs.GameScene16Code.GDTxTimerObjects1= [];
gdjs.GameScene16Code.GDTxTimerObjects2= [];
gdjs.GameScene16Code.GDTxtDisplayObjects1= [];
gdjs.GameScene16Code.GDTxtDisplayObjects2= [];
gdjs.GameScene16Code.GDZeroTextObjects1= [];
gdjs.GameScene16Code.GDZeroTextObjects2= [];
gdjs.GameScene16Code.GDBtNumObjects1= [];
gdjs.GameScene16Code.GDBtNumObjects2= [];
gdjs.GameScene16Code.GDTxtInputObjects1= [];
gdjs.GameScene16Code.GDTxtInputObjects2= [];
gdjs.GameScene16Code.GDBomb1Objects1= [];
gdjs.GameScene16Code.GDBomb1Objects2= [];
gdjs.GameScene16Code.GDFixedTxtObjects1= [];
gdjs.GameScene16Code.GDFixedTxtObjects2= [];
gdjs.GameScene16Code.GDBGObjects1= [];
gdjs.GameScene16Code.GDBGObjects2= [];
gdjs.GameScene16Code.GDBG2Objects1= [];
gdjs.GameScene16Code.GDBG2Objects2= [];
gdjs.GameScene16Code.GDPart1CodeObjects1= [];
gdjs.GameScene16Code.GDPart1CodeObjects2= [];


gdjs.GameScene16Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Countdown") >= 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxTimer"), gdjs.GameScene16Code.GDTxTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(1);
}
{for(var i = 0, len = gdjs.GameScene16Code.GDTxTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene16Code.GDTxTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Countdown");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxTimer"), gdjs.GameScene16Code.GDTxTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(1);
}
{for(var i = 0, len = gdjs.GameScene16Code.GDTxTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene16Code.GDTxTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "crying-411854.mp3", false, 20, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Level16Command.mp3", false, 100, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "game-music4.mp3", false, 15, 1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Countdown");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxTimer"), gdjs.GameScene16Code.GDTxTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(5);
}
{for(var i = 0, len = gdjs.GameScene16Code.GDTxTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene16Code.GDTxTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Countdown");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Countdown") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) > 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxTimer"), gdjs.GameScene16Code.GDTxTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
{for(var i = 0, len = gdjs.GameScene16Code.GDTxTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene16Code.GDTxTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Countdown");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) <= 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxTimer"), gdjs.GameScene16Code.GDTxTimerObjects1);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LoseScene", false);
}
{for(var i = 0, len = gdjs.GameScene16Code.GDTxTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene16Code.GDTxTimerObjects1[i].getBehavior("Text").setText("0");
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 6);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) + "0");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num1");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 6);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) + "1");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num2");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 6);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) + "2");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num3");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 6);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) + "3");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num4");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 6);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) + "4");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num5");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 6);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) + "5");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num6");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 6);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) + "6");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num7");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 6);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) + "7");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num8");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 6);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) + "8");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num9");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 6);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) + "9");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TxtDisplay"), gdjs.GameScene16Code.GDTxtDisplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("TxtInput"), gdjs.GameScene16Code.GDTxtInputObjects1);
{for(var i = 0, len = gdjs.GameScene16Code.GDTxtInputObjects1.length ;i < len;++i) {
    gdjs.GameScene16Code.GDTxtInputObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
{for(var i = 0, len = gdjs.GameScene16Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene16Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtDisplay"), gdjs.GameScene16Code.GDTxtDisplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("TxtInput"), gdjs.GameScene16Code.GDTxtInputObjects1);
{for(var i = 0, len = gdjs.GameScene16Code.GDTxtInputObjects1.length ;i < len;++i) {
    gdjs.GameScene16Code.GDTxtInputObjects1[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.GameScene16Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene16Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText("");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Back");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtDisplay"), gdjs.GameScene16Code.GDTxtDisplayObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)), 0, gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) - 1));
}
{for(var i = 0, len = gdjs.GameScene16Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene16Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Winscene", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("GameScene17");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtInput"), gdjs.GameScene16Code.GDTxtInputObjects1);
{for(var i = 0, len = gdjs.GameScene16Code.GDTxtInputObjects1.length ;i < len;++i) {
    gdjs.GameScene16Code.GDTxtInputObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.GameScene16Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameScene16Code.GDTxTimerObjects1.length = 0;
gdjs.GameScene16Code.GDTxTimerObjects2.length = 0;
gdjs.GameScene16Code.GDTxtDisplayObjects1.length = 0;
gdjs.GameScene16Code.GDTxtDisplayObjects2.length = 0;
gdjs.GameScene16Code.GDZeroTextObjects1.length = 0;
gdjs.GameScene16Code.GDZeroTextObjects2.length = 0;
gdjs.GameScene16Code.GDBtNumObjects1.length = 0;
gdjs.GameScene16Code.GDBtNumObjects2.length = 0;
gdjs.GameScene16Code.GDTxtInputObjects1.length = 0;
gdjs.GameScene16Code.GDTxtInputObjects2.length = 0;
gdjs.GameScene16Code.GDBomb1Objects1.length = 0;
gdjs.GameScene16Code.GDBomb1Objects2.length = 0;
gdjs.GameScene16Code.GDFixedTxtObjects1.length = 0;
gdjs.GameScene16Code.GDFixedTxtObjects2.length = 0;
gdjs.GameScene16Code.GDBGObjects1.length = 0;
gdjs.GameScene16Code.GDBGObjects2.length = 0;
gdjs.GameScene16Code.GDBG2Objects1.length = 0;
gdjs.GameScene16Code.GDBG2Objects2.length = 0;
gdjs.GameScene16Code.GDPart1CodeObjects1.length = 0;
gdjs.GameScene16Code.GDPart1CodeObjects2.length = 0;

gdjs.GameScene16Code.eventsList0(runtimeScene);
gdjs.GameScene16Code.GDTxTimerObjects1.length = 0;
gdjs.GameScene16Code.GDTxTimerObjects2.length = 0;
gdjs.GameScene16Code.GDTxtDisplayObjects1.length = 0;
gdjs.GameScene16Code.GDTxtDisplayObjects2.length = 0;
gdjs.GameScene16Code.GDZeroTextObjects1.length = 0;
gdjs.GameScene16Code.GDZeroTextObjects2.length = 0;
gdjs.GameScene16Code.GDBtNumObjects1.length = 0;
gdjs.GameScene16Code.GDBtNumObjects2.length = 0;
gdjs.GameScene16Code.GDTxtInputObjects1.length = 0;
gdjs.GameScene16Code.GDTxtInputObjects2.length = 0;
gdjs.GameScene16Code.GDBomb1Objects1.length = 0;
gdjs.GameScene16Code.GDBomb1Objects2.length = 0;
gdjs.GameScene16Code.GDFixedTxtObjects1.length = 0;
gdjs.GameScene16Code.GDFixedTxtObjects2.length = 0;
gdjs.GameScene16Code.GDBGObjects1.length = 0;
gdjs.GameScene16Code.GDBGObjects2.length = 0;
gdjs.GameScene16Code.GDBG2Objects1.length = 0;
gdjs.GameScene16Code.GDBG2Objects2.length = 0;
gdjs.GameScene16Code.GDPart1CodeObjects1.length = 0;
gdjs.GameScene16Code.GDPart1CodeObjects2.length = 0;


return;

}

gdjs['GameScene16Code'] = gdjs.GameScene16Code;
