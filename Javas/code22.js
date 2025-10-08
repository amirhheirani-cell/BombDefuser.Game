gdjs.GmaeScene7Code = {};
gdjs.GmaeScene7Code.localVariables = [];
gdjs.GmaeScene7Code.GDTxtTimerObjects1= [];
gdjs.GmaeScene7Code.GDTxtTimerObjects2= [];
gdjs.GmaeScene7Code.GDZeroTimerObjects1= [];
gdjs.GmaeScene7Code.GDZeroTimerObjects2= [];
gdjs.GmaeScene7Code.GDBtnReturnObjects1= [];
gdjs.GmaeScene7Code.GDBtnReturnObjects2= [];
gdjs.GmaeScene7Code.GDBtnEscapeObjects1= [];
gdjs.GmaeScene7Code.GDBtnEscapeObjects2= [];
gdjs.GmaeScene7Code.GDReturnTextObjects1= [];
gdjs.GmaeScene7Code.GDReturnTextObjects2= [];
gdjs.GmaeScene7Code.GDEscapeTxtObjects1= [];
gdjs.GmaeScene7Code.GDEscapeTxtObjects2= [];
gdjs.GmaeScene7Code.GDReturnBtnObjects1= [];
gdjs.GmaeScene7Code.GDReturnBtnObjects2= [];
gdjs.GmaeScene7Code.GDEscapeBtnObjects1= [];
gdjs.GmaeScene7Code.GDEscapeBtnObjects2= [];
gdjs.GmaeScene7Code.GDLevel7BGObjects1= [];
gdjs.GmaeScene7Code.GDLevel7BGObjects2= [];


gdjs.GmaeScene7Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtTimer"), gdjs.GmaeScene7Code.GDTxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.GmaeScene7Code.GDTxtTimerObjects1.length ;i < len;++i) {
    gdjs.GmaeScene7Code.GDTxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
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
gdjs.copyArray(runtimeScene.getObjects("TxtTimer"), gdjs.GmaeScene7Code.GDTxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}
{for(var i = 0, len = gdjs.GmaeScene7Code.GDTxtTimerObjects1.length ;i < len;++i) {
    gdjs.GmaeScene7Code.GDTxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
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

gdjs.copyArray(runtimeScene.getObjects("BtnEscape"), gdjs.GmaeScene7Code.GDBtnEscapeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GmaeScene7Code.GDBtnEscapeObjects1.length;i<l;++i) {
    if ( gdjs.GmaeScene7Code.GDBtnEscapeObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GmaeScene7Code.GDBtnEscapeObjects1[k] = gdjs.GmaeScene7Code.GDBtnEscapeObjects1[i];
        ++k;
    }
}
gdjs.GmaeScene7Code.GDBtnEscapeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("GameScene8");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Winscene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnReturn"), gdjs.GmaeScene7Code.GDBtnReturnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GmaeScene7Code.GDBtnReturnObjects1.length;i<l;++i) {
    if ( gdjs.GmaeScene7Code.GDBtnReturnObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GmaeScene7Code.GDBtnReturnObjects1[k] = gdjs.GmaeScene7Code.GDBtnReturnObjects1[i];
        ++k;
    }
}
gdjs.GmaeScene7Code.GDBtnReturnObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0);
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


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnEscape"), gdjs.GmaeScene7Code.GDBtnEscapeObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnReturn"), gdjs.GmaeScene7Code.GDBtnReturnObjects1);
gdjs.copyArray(runtimeScene.getObjects("EscapeTxt"), gdjs.GmaeScene7Code.GDEscapeTxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("ReturnText"), gdjs.GmaeScene7Code.GDReturnTextObjects1);
{for(var i = 0, len = gdjs.GmaeScene7Code.GDBtnReturnObjects1.length ;i < len;++i) {
    gdjs.GmaeScene7Code.GDBtnReturnObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GmaeScene7Code.GDBtnEscapeObjects1.length ;i < len;++i) {
    gdjs.GmaeScene7Code.GDBtnEscapeObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GmaeScene7Code.GDReturnTextObjects1.length ;i < len;++i) {
    gdjs.GmaeScene7Code.GDReturnTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GmaeScene7Code.GDEscapeTxtObjects1.length ;i < len;++i) {
    gdjs.GmaeScene7Code.GDEscapeTxtObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GmaeScene7Code.GDReturnTextObjects1.length ;i < len;++i) {
    gdjs.GmaeScene7Code.GDReturnTextObjects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "MsgTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "MsgTimer") >= 0.7;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EscapeTxt"), gdjs.GmaeScene7Code.GDEscapeTxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("ReturnText"), gdjs.GmaeScene7Code.GDReturnTextObjects1);
{for(var i = 0, len = gdjs.GmaeScene7Code.GDReturnTextObjects1.length ;i < len;++i) {
    gdjs.GmaeScene7Code.GDReturnTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GmaeScene7Code.GDEscapeTxtObjects1.length ;i < len;++i) {
    gdjs.GmaeScene7Code.GDEscapeTxtObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "MsgTimer") >= 1.4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EscapeTxt"), gdjs.GmaeScene7Code.GDEscapeTxtObjects1);
{for(var i = 0, len = gdjs.GmaeScene7Code.GDEscapeTxtObjects1.length ;i < len;++i) {
    gdjs.GmaeScene7Code.GDEscapeTxtObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnEscape"), gdjs.GmaeScene7Code.GDBtnEscapeObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnReturn"), gdjs.GmaeScene7Code.GDBtnReturnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GmaeScene7Code.GDBtnReturnObjects1.length;i<l;++i) {
    if ( gdjs.GmaeScene7Code.GDBtnReturnObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GmaeScene7Code.GDBtnReturnObjects1[k] = gdjs.GmaeScene7Code.GDBtnReturnObjects1[i];
        ++k;
    }
}
gdjs.GmaeScene7Code.GDBtnReturnObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "MsgTimer") < 0.7;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GmaeScene7Code.GDBtnEscapeObjects1.length;i<l;++i) {
    if ( gdjs.GmaeScene7Code.GDBtnEscapeObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GmaeScene7Code.GDBtnEscapeObjects1[k] = gdjs.GmaeScene7Code.GDBtnEscapeObjects1[i];
        ++k;
    }
}
gdjs.GmaeScene7Code.GDBtnEscapeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
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

gdjs.copyArray(runtimeScene.getObjects("BtnEscape"), gdjs.GmaeScene7Code.GDBtnEscapeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GmaeScene7Code.GDBtnEscapeObjects1.length;i<l;++i) {
    if ( gdjs.GmaeScene7Code.GDBtnEscapeObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GmaeScene7Code.GDBtnEscapeObjects1[k] = gdjs.GmaeScene7Code.GDBtnEscapeObjects1[i];
        ++k;
    }
}
gdjs.GmaeScene7Code.GDBtnEscapeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "MsgTimer") >= 0.7;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("GameScene8");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Winscene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnReturn"), gdjs.GmaeScene7Code.GDBtnReturnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GmaeScene7Code.GDBtnReturnObjects1.length;i<l;++i) {
    if ( gdjs.GmaeScene7Code.GDBtnReturnObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GmaeScene7Code.GDBtnReturnObjects1[k] = gdjs.GmaeScene7Code.GDBtnReturnObjects1[i];
        ++k;
    }
}
gdjs.GmaeScene7Code.GDBtnReturnObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "MsgTimer") >= 0.7;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0);
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


let isConditionTrue_0 = false;
{
}

}


};

gdjs.GmaeScene7Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GmaeScene7Code.GDTxtTimerObjects1.length = 0;
gdjs.GmaeScene7Code.GDTxtTimerObjects2.length = 0;
gdjs.GmaeScene7Code.GDZeroTimerObjects1.length = 0;
gdjs.GmaeScene7Code.GDZeroTimerObjects2.length = 0;
gdjs.GmaeScene7Code.GDBtnReturnObjects1.length = 0;
gdjs.GmaeScene7Code.GDBtnReturnObjects2.length = 0;
gdjs.GmaeScene7Code.GDBtnEscapeObjects1.length = 0;
gdjs.GmaeScene7Code.GDBtnEscapeObjects2.length = 0;
gdjs.GmaeScene7Code.GDReturnTextObjects1.length = 0;
gdjs.GmaeScene7Code.GDReturnTextObjects2.length = 0;
gdjs.GmaeScene7Code.GDEscapeTxtObjects1.length = 0;
gdjs.GmaeScene7Code.GDEscapeTxtObjects2.length = 0;
gdjs.GmaeScene7Code.GDReturnBtnObjects1.length = 0;
gdjs.GmaeScene7Code.GDReturnBtnObjects2.length = 0;
gdjs.GmaeScene7Code.GDEscapeBtnObjects1.length = 0;
gdjs.GmaeScene7Code.GDEscapeBtnObjects2.length = 0;
gdjs.GmaeScene7Code.GDLevel7BGObjects1.length = 0;
gdjs.GmaeScene7Code.GDLevel7BGObjects2.length = 0;

gdjs.GmaeScene7Code.eventsList0(runtimeScene);
gdjs.GmaeScene7Code.GDTxtTimerObjects1.length = 0;
gdjs.GmaeScene7Code.GDTxtTimerObjects2.length = 0;
gdjs.GmaeScene7Code.GDZeroTimerObjects1.length = 0;
gdjs.GmaeScene7Code.GDZeroTimerObjects2.length = 0;
gdjs.GmaeScene7Code.GDBtnReturnObjects1.length = 0;
gdjs.GmaeScene7Code.GDBtnReturnObjects2.length = 0;
gdjs.GmaeScene7Code.GDBtnEscapeObjects1.length = 0;
gdjs.GmaeScene7Code.GDBtnEscapeObjects2.length = 0;
gdjs.GmaeScene7Code.GDReturnTextObjects1.length = 0;
gdjs.GmaeScene7Code.GDReturnTextObjects2.length = 0;
gdjs.GmaeScene7Code.GDEscapeTxtObjects1.length = 0;
gdjs.GmaeScene7Code.GDEscapeTxtObjects2.length = 0;
gdjs.GmaeScene7Code.GDReturnBtnObjects1.length = 0;
gdjs.GmaeScene7Code.GDReturnBtnObjects2.length = 0;
gdjs.GmaeScene7Code.GDEscapeBtnObjects1.length = 0;
gdjs.GmaeScene7Code.GDEscapeBtnObjects2.length = 0;
gdjs.GmaeScene7Code.GDLevel7BGObjects1.length = 0;
gdjs.GmaeScene7Code.GDLevel7BGObjects2.length = 0;


return;

}

gdjs['GmaeScene7Code'] = gdjs.GmaeScene7Code;
