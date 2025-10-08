gdjs.GameScene3Code = {};
gdjs.GameScene3Code.localVariables = [];
gdjs.GameScene3Code.GDLevel3_9595BGObjects1= [];
gdjs.GameScene3Code.GDLevel3_9595BGObjects2= [];
gdjs.GameScene3Code.GDlevel3_9595BombObjects1= [];
gdjs.GameScene3Code.GDlevel3_9595BombObjects2= [];
gdjs.GameScene3Code.GDtext_9595boxObjects1= [];
gdjs.GameScene3Code.GDtext_9595boxObjects2= [];
gdjs.GameScene3Code.GDTxtTImerObjects1= [];
gdjs.GameScene3Code.GDTxtTImerObjects2= [];
gdjs.GameScene3Code.GDzeroTimerObjects1= [];
gdjs.GameScene3Code.GDzeroTimerObjects2= [];
gdjs.GameScene3Code.GDGuidTextObjects1= [];
gdjs.GameScene3Code.GDGuidTextObjects2= [];
gdjs.GameScene3Code.GDTxtHintObjects1= [];
gdjs.GameScene3Code.GDTxtHintObjects2= [];
gdjs.GameScene3Code.GDTxtDisplayObjects1= [];
gdjs.GameScene3Code.GDTxtDisplayObjects2= [];
gdjs.GameScene3Code.GDTxtInputObjects1= [];
gdjs.GameScene3Code.GDTxtInputObjects2= [];


gdjs.GameScene3Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtHint"), gdjs.GameScene3Code.GDTxtHintObjects1);
gdjs.copyArray(runtimeScene.getObjects("TxtInput"), gdjs.GameScene3Code.GDTxtInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("TxtTImer"), gdjs.GameScene3Code.GDTxtTImerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.GameScene3Code.GDTxtTImerObjects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDTxtTImerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "countdown");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "game-music3.mp3", false, 20, 1);
}
{for(var i = 0, len = gdjs.GameScene3Code.GDTxtHintObjects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDTxtHintObjects1[i].hide();
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "leve3-command.mp3", false, 100, 2);
}
{for(var i = 0, len = gdjs.GameScene3Code.GDTxtInputObjects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDTxtInputObjects1[i].hide();
}
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
gdjs.copyArray(runtimeScene.getObjects("TxtTImer"), gdjs.GameScene3Code.GDTxtTImerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}
{for(var i = 0, len = gdjs.GameScene3Code.GDTxtTImerObjects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDTxtTImerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
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
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num0");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 3);
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 3);
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 3);
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 3);
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 3);
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 3);
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 3);
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 3);
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 3);
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
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < 3);
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
gdjs.copyArray(runtimeScene.getObjects("TxtDisplay"), gdjs.GameScene3Code.GDTxtDisplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("TxtInput"), gdjs.GameScene3Code.GDTxtInputObjects1);
{for(var i = 0, len = gdjs.GameScene3Code.GDTxtInputObjects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDTxtInputObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
{for(var i = 0, len = gdjs.GameScene3Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtDisplay"), gdjs.GameScene3Code.GDTxtDisplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("TxtInput"), gdjs.GameScene3Code.GDTxtInputObjects1);
{for(var i = 0, len = gdjs.GameScene3Code.GDTxtInputObjects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDTxtInputObjects1[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.GameScene3Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText("");
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
gdjs.copyArray(runtimeScene.getObjects("TxtDisplay"), gdjs.GameScene3Code.GDTxtDisplayObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)), 0, gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) - 1));
}
{for(var i = 0, len = gdjs.GameScene3Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
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
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Winscene", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("GameScene4");
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
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LoseScene", false);
}
}

}


};

gdjs.GameScene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameScene3Code.GDLevel3_9595BGObjects1.length = 0;
gdjs.GameScene3Code.GDLevel3_9595BGObjects2.length = 0;
gdjs.GameScene3Code.GDlevel3_9595BombObjects1.length = 0;
gdjs.GameScene3Code.GDlevel3_9595BombObjects2.length = 0;
gdjs.GameScene3Code.GDtext_9595boxObjects1.length = 0;
gdjs.GameScene3Code.GDtext_9595boxObjects2.length = 0;
gdjs.GameScene3Code.GDTxtTImerObjects1.length = 0;
gdjs.GameScene3Code.GDTxtTImerObjects2.length = 0;
gdjs.GameScene3Code.GDzeroTimerObjects1.length = 0;
gdjs.GameScene3Code.GDzeroTimerObjects2.length = 0;
gdjs.GameScene3Code.GDGuidTextObjects1.length = 0;
gdjs.GameScene3Code.GDGuidTextObjects2.length = 0;
gdjs.GameScene3Code.GDTxtHintObjects1.length = 0;
gdjs.GameScene3Code.GDTxtHintObjects2.length = 0;
gdjs.GameScene3Code.GDTxtDisplayObjects1.length = 0;
gdjs.GameScene3Code.GDTxtDisplayObjects2.length = 0;
gdjs.GameScene3Code.GDTxtInputObjects1.length = 0;
gdjs.GameScene3Code.GDTxtInputObjects2.length = 0;

gdjs.GameScene3Code.eventsList0(runtimeScene);
gdjs.GameScene3Code.GDLevel3_9595BGObjects1.length = 0;
gdjs.GameScene3Code.GDLevel3_9595BGObjects2.length = 0;
gdjs.GameScene3Code.GDlevel3_9595BombObjects1.length = 0;
gdjs.GameScene3Code.GDlevel3_9595BombObjects2.length = 0;
gdjs.GameScene3Code.GDtext_9595boxObjects1.length = 0;
gdjs.GameScene3Code.GDtext_9595boxObjects2.length = 0;
gdjs.GameScene3Code.GDTxtTImerObjects1.length = 0;
gdjs.GameScene3Code.GDTxtTImerObjects2.length = 0;
gdjs.GameScene3Code.GDzeroTimerObjects1.length = 0;
gdjs.GameScene3Code.GDzeroTimerObjects2.length = 0;
gdjs.GameScene3Code.GDGuidTextObjects1.length = 0;
gdjs.GameScene3Code.GDGuidTextObjects2.length = 0;
gdjs.GameScene3Code.GDTxtHintObjects1.length = 0;
gdjs.GameScene3Code.GDTxtHintObjects2.length = 0;
gdjs.GameScene3Code.GDTxtDisplayObjects1.length = 0;
gdjs.GameScene3Code.GDTxtDisplayObjects2.length = 0;
gdjs.GameScene3Code.GDTxtInputObjects1.length = 0;
gdjs.GameScene3Code.GDTxtInputObjects2.length = 0;


return;

}

gdjs['GameScene3Code'] = gdjs.GameScene3Code;
