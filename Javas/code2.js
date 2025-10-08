gdjs.GameScene11Code = {};
gdjs.GameScene11Code.localVariables = [];
gdjs.GameScene11Code.GDTxTimerObjects1= [];
gdjs.GameScene11Code.GDTxTimerObjects2= [];
gdjs.GameScene11Code.GDTxtHintObjects1= [];
gdjs.GameScene11Code.GDTxtHintObjects2= [];
gdjs.GameScene11Code.GDTxtDisplayObjects1= [];
gdjs.GameScene11Code.GDTxtDisplayObjects2= [];
gdjs.GameScene11Code.GDZeroTextObjects1= [];
gdjs.GameScene11Code.GDZeroTextObjects2= [];
gdjs.GameScene11Code.GDBtNumObjects1= [];
gdjs.GameScene11Code.GDBtNumObjects2= [];
gdjs.GameScene11Code.GDTxtInputObjects1= [];
gdjs.GameScene11Code.GDTxtInputObjects2= [];
gdjs.GameScene11Code.GDBomb1Objects1= [];
gdjs.GameScene11Code.GDBomb1Objects2= [];
gdjs.GameScene11Code.GDFixedTxtObjects1= [];
gdjs.GameScene11Code.GDFixedTxtObjects2= [];
gdjs.GameScene11Code.GDBGObjects1= [];
gdjs.GameScene11Code.GDBGObjects2= [];


gdjs.GameScene11Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Countdown") >= 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxTimer"), gdjs.GameScene11Code.GDTxTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(1);
}
{for(var i = 0, len = gdjs.GameScene11Code.GDTxTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene11Code.GDTxTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)));
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
gdjs.copyArray(runtimeScene.getObjects("TxTimer"), gdjs.GameScene11Code.GDTxTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(1);
}
{for(var i = 0, len = gdjs.GameScene11Code.GDTxTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene11Code.GDTxTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "crying-411854.mp3", false, 20, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "baby-crying-64996.mp3", false, 40, 1);
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
gdjs.copyArray(runtimeScene.getObjects("TxTimer"), gdjs.GameScene11Code.GDTxTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(5);
}
{for(var i = 0, len = gdjs.GameScene11Code.GDTxTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene11Code.GDTxTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)));
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
gdjs.copyArray(runtimeScene.getObjects("TxTimer"), gdjs.GameScene11Code.GDTxTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
{for(var i = 0, len = gdjs.GameScene11Code.GDTxTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene11Code.GDTxTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)));
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
gdjs.copyArray(runtimeScene.getObjects("TxTimer"), gdjs.GameScene11Code.GDTxTimerObjects1);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LoseScene", false);
}
{for(var i = 0, len = gdjs.GameScene11Code.GDTxTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene11Code.GDTxTimerObjects1[i].getBehavior("Text").setText("0");
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 2);
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 2);
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 2);
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 2);
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 2);
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 2);
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 2);
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 2);
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 2);
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 2);
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
gdjs.copyArray(runtimeScene.getObjects("TxtDisplay"), gdjs.GameScene11Code.GDTxtDisplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("TxtInput"), gdjs.GameScene11Code.GDTxtInputObjects1);
{for(var i = 0, len = gdjs.GameScene11Code.GDTxtInputObjects1.length ;i < len;++i) {
    gdjs.GameScene11Code.GDTxtInputObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
{for(var i = 0, len = gdjs.GameScene11Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene11Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtDisplay"), gdjs.GameScene11Code.GDTxtDisplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("TxtInput"), gdjs.GameScene11Code.GDTxtInputObjects1);
{for(var i = 0, len = gdjs.GameScene11Code.GDTxtInputObjects1.length ;i < len;++i) {
    gdjs.GameScene11Code.GDTxtInputObjects1[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.GameScene11Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene11Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText("");
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
gdjs.copyArray(runtimeScene.getObjects("TxtDisplay"), gdjs.GameScene11Code.GDTxtDisplayObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)), 0, gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) - 1));
}
{for(var i = 0, len = gdjs.GameScene11Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene11Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
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
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("GameScene12");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtHint"), gdjs.GameScene11Code.GDTxtHintObjects1);
{for(var i = 0, len = gdjs.GameScene11Code.GDTxtHintObjects1.length ;i < len;++i) {
    gdjs.GameScene11Code.GDTxtHintObjects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "hint");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "hint") >= 0.2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtHint"), gdjs.GameScene11Code.GDTxtHintObjects1);
{for(var i = 0, len = gdjs.GameScene11Code.GDTxtHintObjects1.length ;i < len;++i) {
    gdjs.GameScene11Code.GDTxtHintObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtInput"), gdjs.GameScene11Code.GDTxtInputObjects1);
{for(var i = 0, len = gdjs.GameScene11Code.GDTxtInputObjects1.length ;i < len;++i) {
    gdjs.GameScene11Code.GDTxtInputObjects1[i].hide();
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "level1 command.mp3", false, 100, 2);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "game-music2.mp3", false, 30, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.GameScene11Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameScene11Code.GDTxTimerObjects1.length = 0;
gdjs.GameScene11Code.GDTxTimerObjects2.length = 0;
gdjs.GameScene11Code.GDTxtHintObjects1.length = 0;
gdjs.GameScene11Code.GDTxtHintObjects2.length = 0;
gdjs.GameScene11Code.GDTxtDisplayObjects1.length = 0;
gdjs.GameScene11Code.GDTxtDisplayObjects2.length = 0;
gdjs.GameScene11Code.GDZeroTextObjects1.length = 0;
gdjs.GameScene11Code.GDZeroTextObjects2.length = 0;
gdjs.GameScene11Code.GDBtNumObjects1.length = 0;
gdjs.GameScene11Code.GDBtNumObjects2.length = 0;
gdjs.GameScene11Code.GDTxtInputObjects1.length = 0;
gdjs.GameScene11Code.GDTxtInputObjects2.length = 0;
gdjs.GameScene11Code.GDBomb1Objects1.length = 0;
gdjs.GameScene11Code.GDBomb1Objects2.length = 0;
gdjs.GameScene11Code.GDFixedTxtObjects1.length = 0;
gdjs.GameScene11Code.GDFixedTxtObjects2.length = 0;
gdjs.GameScene11Code.GDBGObjects1.length = 0;
gdjs.GameScene11Code.GDBGObjects2.length = 0;

gdjs.GameScene11Code.eventsList0(runtimeScene);
gdjs.GameScene11Code.GDTxTimerObjects1.length = 0;
gdjs.GameScene11Code.GDTxTimerObjects2.length = 0;
gdjs.GameScene11Code.GDTxtHintObjects1.length = 0;
gdjs.GameScene11Code.GDTxtHintObjects2.length = 0;
gdjs.GameScene11Code.GDTxtDisplayObjects1.length = 0;
gdjs.GameScene11Code.GDTxtDisplayObjects2.length = 0;
gdjs.GameScene11Code.GDZeroTextObjects1.length = 0;
gdjs.GameScene11Code.GDZeroTextObjects2.length = 0;
gdjs.GameScene11Code.GDBtNumObjects1.length = 0;
gdjs.GameScene11Code.GDBtNumObjects2.length = 0;
gdjs.GameScene11Code.GDTxtInputObjects1.length = 0;
gdjs.GameScene11Code.GDTxtInputObjects2.length = 0;
gdjs.GameScene11Code.GDBomb1Objects1.length = 0;
gdjs.GameScene11Code.GDBomb1Objects2.length = 0;
gdjs.GameScene11Code.GDFixedTxtObjects1.length = 0;
gdjs.GameScene11Code.GDFixedTxtObjects2.length = 0;
gdjs.GameScene11Code.GDBGObjects1.length = 0;
gdjs.GameScene11Code.GDBGObjects2.length = 0;


return;

}

gdjs['GameScene11Code'] = gdjs.GameScene11Code;
