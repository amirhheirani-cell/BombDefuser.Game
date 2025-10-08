gdjs.GameScene8Code = {};
gdjs.GameScene8Code.localVariables = [];
gdjs.GameScene8Code.GDTxtTimerObjects1= [];
gdjs.GameScene8Code.GDTxtTimerObjects2= [];
gdjs.GameScene8Code.GDTxtTimerObjects3= [];
gdjs.GameScene8Code.GDZeroTxtObjects1= [];
gdjs.GameScene8Code.GDZeroTxtObjects2= [];
gdjs.GameScene8Code.GDZeroTxtObjects3= [];
gdjs.GameScene8Code.GDBombObjects1= [];
gdjs.GameScene8Code.GDBombObjects2= [];
gdjs.GameScene8Code.GDBombObjects3= [];
gdjs.GameScene8Code.GDCode1Objects1= [];
gdjs.GameScene8Code.GDCode1Objects2= [];
gdjs.GameScene8Code.GDCode1Objects3= [];
gdjs.GameScene8Code.GDCode2Objects1= [];
gdjs.GameScene8Code.GDCode2Objects2= [];
gdjs.GameScene8Code.GDCode2Objects3= [];
gdjs.GameScene8Code.GDTxtDisplayObjects1= [];
gdjs.GameScene8Code.GDTxtDisplayObjects2= [];
gdjs.GameScene8Code.GDTxtDisplayObjects3= [];
gdjs.GameScene8Code.GDTxtBoxObjects1= [];
gdjs.GameScene8Code.GDTxtBoxObjects2= [];
gdjs.GameScene8Code.GDTxtBoxObjects3= [];
gdjs.GameScene8Code.GDTxtAnnoucedObjects1= [];
gdjs.GameScene8Code.GDTxtAnnoucedObjects2= [];
gdjs.GameScene8Code.GDTxtAnnoucedObjects3= [];
gdjs.GameScene8Code.GDBtnAObjects1= [];
gdjs.GameScene8Code.GDBtnAObjects2= [];
gdjs.GameScene8Code.GDBtnAObjects3= [];
gdjs.GameScene8Code.GDBtnBObjects1= [];
gdjs.GameScene8Code.GDBtnBObjects2= [];
gdjs.GameScene8Code.GDBtnBObjects3= [];
gdjs.GameScene8Code.GDBtnCObjects1= [];
gdjs.GameScene8Code.GDBtnCObjects2= [];
gdjs.GameScene8Code.GDBtnCObjects3= [];
gdjs.GameScene8Code.GDBtn4Objects1= [];
gdjs.GameScene8Code.GDBtn4Objects2= [];
gdjs.GameScene8Code.GDBtn4Objects3= [];
gdjs.GameScene8Code.GDBtn6Objects1= [];
gdjs.GameScene8Code.GDBtn6Objects2= [];
gdjs.GameScene8Code.GDBtn6Objects3= [];
gdjs.GameScene8Code.GDBtn8Objects1= [];
gdjs.GameScene8Code.GDBtn8Objects2= [];
gdjs.GameScene8Code.GDBtn8Objects3= [];
gdjs.GameScene8Code.GDBtnBackObjects1= [];
gdjs.GameScene8Code.GDBtnBackObjects2= [];
gdjs.GameScene8Code.GDBtnBackObjects3= [];
gdjs.GameScene8Code.GDBtnSubmitObjects1= [];
gdjs.GameScene8Code.GDBtnSubmitObjects2= [];
gdjs.GameScene8Code.GDBtnSubmitObjects3= [];
gdjs.GameScene8Code.GDLevelBgObjects1= [];
gdjs.GameScene8Code.GDLevelBgObjects2= [];
gdjs.GameScene8Code.GDLevelBgObjects3= [];


gdjs.GameScene8Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Winscene", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("GameScene9");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LoseScene", false);
}
}

}


};gdjs.GameScene8Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtTimer"), gdjs.GameScene8Code.GDTxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.GameScene8Code.GDTxtTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene8Code.GDTxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
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
gdjs.copyArray(runtimeScene.getObjects("TxtTimer"), gdjs.GameScene8Code.GDTxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}
{for(var i = 0, len = gdjs.GameScene8Code.GDTxtTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene8Code.GDTxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
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
gdjs.copyArray(runtimeScene.getObjects("Code1"), gdjs.GameScene8Code.GDCode1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Code2"), gdjs.GameScene8Code.GDCode2Objects1);
{for(var i = 0, len = gdjs.GameScene8Code.GDCode1Objects1.length ;i < len;++i) {
    gdjs.GameScene8Code.GDCode1Objects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "MsgTimer");
}
{for(var i = 0, len = gdjs.GameScene8Code.GDCode2Objects1.length ;i < len;++i) {
    gdjs.GameScene8Code.GDCode2Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "MsgTimer") >= 1.5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Code1"), gdjs.GameScene8Code.GDCode1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Code2"), gdjs.GameScene8Code.GDCode2Objects1);
{for(var i = 0, len = gdjs.GameScene8Code.GDCode1Objects1.length ;i < len;++i) {
    gdjs.GameScene8Code.GDCode1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameScene8Code.GDCode2Objects1.length ;i < len;++i) {
    gdjs.GameScene8Code.GDCode2Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "MsgTimer") >= 3.5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Code2"), gdjs.GameScene8Code.GDCode2Objects1);
{for(var i = 0, len = gdjs.GameScene8Code.GDCode2Objects1.length ;i < len;++i) {
    gdjs.GameScene8Code.GDCode2Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Btn4"), gdjs.GameScene8Code.GDBtn4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Btn6"), gdjs.GameScene8Code.GDBtn6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Btn8"), gdjs.GameScene8Code.GDBtn8Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnA"), gdjs.GameScene8Code.GDBtnAObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnB"), gdjs.GameScene8Code.GDBtnBObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnBack"), gdjs.GameScene8Code.GDBtnBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnC"), gdjs.GameScene8Code.GDBtnCObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnSubmit"), gdjs.GameScene8Code.GDBtnSubmitObjects1);
gdjs.copyArray(runtimeScene.getObjects("TxtAnnouced"), gdjs.GameScene8Code.GDTxtAnnoucedObjects1);
gdjs.copyArray(runtimeScene.getObjects("TxtDisplay"), gdjs.GameScene8Code.GDTxtDisplayObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("");
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{for(var i = 0, len = gdjs.GameScene8Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene8Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.GameScene8Code.GDBtnAObjects1.length ;i < len;++i) {
    gdjs.GameScene8Code.GDBtnAObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene8Code.GDBtnSubmitObjects1.length ;i < len;++i) {
    gdjs.GameScene8Code.GDBtnSubmitObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene8Code.GDBtnBackObjects1.length ;i < len;++i) {
    gdjs.GameScene8Code.GDBtnBackObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene8Code.GDBtn8Objects1.length ;i < len;++i) {
    gdjs.GameScene8Code.GDBtn8Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene8Code.GDBtn6Objects1.length ;i < len;++i) {
    gdjs.GameScene8Code.GDBtn6Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene8Code.GDBtn4Objects1.length ;i < len;++i) {
    gdjs.GameScene8Code.GDBtn4Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene8Code.GDBtnCObjects1.length ;i < len;++i) {
    gdjs.GameScene8Code.GDBtnCObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene8Code.GDBtnBObjects1.length ;i < len;++i) {
    gdjs.GameScene8Code.GDBtnBObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene8Code.GDTxtAnnoucedObjects1.length ;i < len;++i) {
    gdjs.GameScene8Code.GDTxtAnnoucedObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnA"), gdjs.GameScene8Code.GDBtnAObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene8Code.GDBtnAObjects1.length;i<l;++i) {
    if ( gdjs.GameScene8Code.GDBtnAObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene8Code.GDBtnAObjects1[k] = gdjs.GameScene8Code.GDBtnAObjects1[i];
        ++k;
    }
}
gdjs.GameScene8Code.GDBtnAObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3))) < 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtDisplay"), gdjs.GameScene8Code.GDTxtDisplayObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) + "A");
}
{for(var i = 0, len = gdjs.GameScene8Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene8Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnC"), gdjs.GameScene8Code.GDBtnCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene8Code.GDBtnCObjects1.length;i<l;++i) {
    if ( gdjs.GameScene8Code.GDBtnCObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene8Code.GDBtnCObjects1[k] = gdjs.GameScene8Code.GDBtnCObjects1[i];
        ++k;
    }
}
gdjs.GameScene8Code.GDBtnCObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3))) < 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtDisplay"), gdjs.GameScene8Code.GDTxtDisplayObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) + "C");
}
{for(var i = 0, len = gdjs.GameScene8Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene8Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnB"), gdjs.GameScene8Code.GDBtnBObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene8Code.GDBtnBObjects1.length;i<l;++i) {
    if ( gdjs.GameScene8Code.GDBtnBObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene8Code.GDBtnBObjects1[k] = gdjs.GameScene8Code.GDBtnBObjects1[i];
        ++k;
    }
}
gdjs.GameScene8Code.GDBtnBObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3))) < 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtDisplay"), gdjs.GameScene8Code.GDTxtDisplayObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) + "B");
}
{for(var i = 0, len = gdjs.GameScene8Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene8Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn4"), gdjs.GameScene8Code.GDBtn4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene8Code.GDBtn4Objects1.length;i<l;++i) {
    if ( gdjs.GameScene8Code.GDBtn4Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene8Code.GDBtn4Objects1[k] = gdjs.GameScene8Code.GDBtn4Objects1[i];
        ++k;
    }
}
gdjs.GameScene8Code.GDBtn4Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3))) < 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtDisplay"), gdjs.GameScene8Code.GDTxtDisplayObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) + "4");
}
{for(var i = 0, len = gdjs.GameScene8Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene8Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn6"), gdjs.GameScene8Code.GDBtn6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene8Code.GDBtn6Objects1.length;i<l;++i) {
    if ( gdjs.GameScene8Code.GDBtn6Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene8Code.GDBtn6Objects1[k] = gdjs.GameScene8Code.GDBtn6Objects1[i];
        ++k;
    }
}
gdjs.GameScene8Code.GDBtn6Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3))) < 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtDisplay"), gdjs.GameScene8Code.GDTxtDisplayObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) + "6");
}
{for(var i = 0, len = gdjs.GameScene8Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene8Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn8"), gdjs.GameScene8Code.GDBtn8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene8Code.GDBtn8Objects1.length;i<l;++i) {
    if ( gdjs.GameScene8Code.GDBtn8Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene8Code.GDBtn8Objects1[k] = gdjs.GameScene8Code.GDBtn8Objects1[i];
        ++k;
    }
}
gdjs.GameScene8Code.GDBtn8Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3))) < 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtDisplay"), gdjs.GameScene8Code.GDTxtDisplayObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) + "8");
}
{for(var i = 0, len = gdjs.GameScene8Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene8Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnBack"), gdjs.GameScene8Code.GDBtnBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene8Code.GDBtnBackObjects1.length;i<l;++i) {
    if ( gdjs.GameScene8Code.GDBtnBackObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene8Code.GDBtnBackObjects1[k] = gdjs.GameScene8Code.GDBtnBackObjects1[i];
        ++k;
    }
}
gdjs.GameScene8Code.GDBtnBackObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3))) > 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtDisplay"), gdjs.GameScene8Code.GDTxtDisplayObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)), 0, gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3))) - 1));
}
{for(var i = 0, len = gdjs.GameScene8Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene8Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnSubmit"), gdjs.GameScene8Code.GDBtnSubmitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene8Code.GDBtnSubmitObjects1.length;i<l;++i) {
    if ( gdjs.GameScene8Code.GDBtnSubmitObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene8Code.GDBtnSubmitObjects1[k] = gdjs.GameScene8Code.GDBtnSubmitObjects1[i];
        ++k;
    }
}
gdjs.GameScene8Code.GDBtnSubmitObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}

{ //Subevents
gdjs.GameScene8Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.GameScene8Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameScene8Code.GDTxtTimerObjects1.length = 0;
gdjs.GameScene8Code.GDTxtTimerObjects2.length = 0;
gdjs.GameScene8Code.GDTxtTimerObjects3.length = 0;
gdjs.GameScene8Code.GDZeroTxtObjects1.length = 0;
gdjs.GameScene8Code.GDZeroTxtObjects2.length = 0;
gdjs.GameScene8Code.GDZeroTxtObjects3.length = 0;
gdjs.GameScene8Code.GDBombObjects1.length = 0;
gdjs.GameScene8Code.GDBombObjects2.length = 0;
gdjs.GameScene8Code.GDBombObjects3.length = 0;
gdjs.GameScene8Code.GDCode1Objects1.length = 0;
gdjs.GameScene8Code.GDCode1Objects2.length = 0;
gdjs.GameScene8Code.GDCode1Objects3.length = 0;
gdjs.GameScene8Code.GDCode2Objects1.length = 0;
gdjs.GameScene8Code.GDCode2Objects2.length = 0;
gdjs.GameScene8Code.GDCode2Objects3.length = 0;
gdjs.GameScene8Code.GDTxtDisplayObjects1.length = 0;
gdjs.GameScene8Code.GDTxtDisplayObjects2.length = 0;
gdjs.GameScene8Code.GDTxtDisplayObjects3.length = 0;
gdjs.GameScene8Code.GDTxtBoxObjects1.length = 0;
gdjs.GameScene8Code.GDTxtBoxObjects2.length = 0;
gdjs.GameScene8Code.GDTxtBoxObjects3.length = 0;
gdjs.GameScene8Code.GDTxtAnnoucedObjects1.length = 0;
gdjs.GameScene8Code.GDTxtAnnoucedObjects2.length = 0;
gdjs.GameScene8Code.GDTxtAnnoucedObjects3.length = 0;
gdjs.GameScene8Code.GDBtnAObjects1.length = 0;
gdjs.GameScene8Code.GDBtnAObjects2.length = 0;
gdjs.GameScene8Code.GDBtnAObjects3.length = 0;
gdjs.GameScene8Code.GDBtnBObjects1.length = 0;
gdjs.GameScene8Code.GDBtnBObjects2.length = 0;
gdjs.GameScene8Code.GDBtnBObjects3.length = 0;
gdjs.GameScene8Code.GDBtnCObjects1.length = 0;
gdjs.GameScene8Code.GDBtnCObjects2.length = 0;
gdjs.GameScene8Code.GDBtnCObjects3.length = 0;
gdjs.GameScene8Code.GDBtn4Objects1.length = 0;
gdjs.GameScene8Code.GDBtn4Objects2.length = 0;
gdjs.GameScene8Code.GDBtn4Objects3.length = 0;
gdjs.GameScene8Code.GDBtn6Objects1.length = 0;
gdjs.GameScene8Code.GDBtn6Objects2.length = 0;
gdjs.GameScene8Code.GDBtn6Objects3.length = 0;
gdjs.GameScene8Code.GDBtn8Objects1.length = 0;
gdjs.GameScene8Code.GDBtn8Objects2.length = 0;
gdjs.GameScene8Code.GDBtn8Objects3.length = 0;
gdjs.GameScene8Code.GDBtnBackObjects1.length = 0;
gdjs.GameScene8Code.GDBtnBackObjects2.length = 0;
gdjs.GameScene8Code.GDBtnBackObjects3.length = 0;
gdjs.GameScene8Code.GDBtnSubmitObjects1.length = 0;
gdjs.GameScene8Code.GDBtnSubmitObjects2.length = 0;
gdjs.GameScene8Code.GDBtnSubmitObjects3.length = 0;
gdjs.GameScene8Code.GDLevelBgObjects1.length = 0;
gdjs.GameScene8Code.GDLevelBgObjects2.length = 0;
gdjs.GameScene8Code.GDLevelBgObjects3.length = 0;

gdjs.GameScene8Code.eventsList1(runtimeScene);
gdjs.GameScene8Code.GDTxtTimerObjects1.length = 0;
gdjs.GameScene8Code.GDTxtTimerObjects2.length = 0;
gdjs.GameScene8Code.GDTxtTimerObjects3.length = 0;
gdjs.GameScene8Code.GDZeroTxtObjects1.length = 0;
gdjs.GameScene8Code.GDZeroTxtObjects2.length = 0;
gdjs.GameScene8Code.GDZeroTxtObjects3.length = 0;
gdjs.GameScene8Code.GDBombObjects1.length = 0;
gdjs.GameScene8Code.GDBombObjects2.length = 0;
gdjs.GameScene8Code.GDBombObjects3.length = 0;
gdjs.GameScene8Code.GDCode1Objects1.length = 0;
gdjs.GameScene8Code.GDCode1Objects2.length = 0;
gdjs.GameScene8Code.GDCode1Objects3.length = 0;
gdjs.GameScene8Code.GDCode2Objects1.length = 0;
gdjs.GameScene8Code.GDCode2Objects2.length = 0;
gdjs.GameScene8Code.GDCode2Objects3.length = 0;
gdjs.GameScene8Code.GDTxtDisplayObjects1.length = 0;
gdjs.GameScene8Code.GDTxtDisplayObjects2.length = 0;
gdjs.GameScene8Code.GDTxtDisplayObjects3.length = 0;
gdjs.GameScene8Code.GDTxtBoxObjects1.length = 0;
gdjs.GameScene8Code.GDTxtBoxObjects2.length = 0;
gdjs.GameScene8Code.GDTxtBoxObjects3.length = 0;
gdjs.GameScene8Code.GDTxtAnnoucedObjects1.length = 0;
gdjs.GameScene8Code.GDTxtAnnoucedObjects2.length = 0;
gdjs.GameScene8Code.GDTxtAnnoucedObjects3.length = 0;
gdjs.GameScene8Code.GDBtnAObjects1.length = 0;
gdjs.GameScene8Code.GDBtnAObjects2.length = 0;
gdjs.GameScene8Code.GDBtnAObjects3.length = 0;
gdjs.GameScene8Code.GDBtnBObjects1.length = 0;
gdjs.GameScene8Code.GDBtnBObjects2.length = 0;
gdjs.GameScene8Code.GDBtnBObjects3.length = 0;
gdjs.GameScene8Code.GDBtnCObjects1.length = 0;
gdjs.GameScene8Code.GDBtnCObjects2.length = 0;
gdjs.GameScene8Code.GDBtnCObjects3.length = 0;
gdjs.GameScene8Code.GDBtn4Objects1.length = 0;
gdjs.GameScene8Code.GDBtn4Objects2.length = 0;
gdjs.GameScene8Code.GDBtn4Objects3.length = 0;
gdjs.GameScene8Code.GDBtn6Objects1.length = 0;
gdjs.GameScene8Code.GDBtn6Objects2.length = 0;
gdjs.GameScene8Code.GDBtn6Objects3.length = 0;
gdjs.GameScene8Code.GDBtn8Objects1.length = 0;
gdjs.GameScene8Code.GDBtn8Objects2.length = 0;
gdjs.GameScene8Code.GDBtn8Objects3.length = 0;
gdjs.GameScene8Code.GDBtnBackObjects1.length = 0;
gdjs.GameScene8Code.GDBtnBackObjects2.length = 0;
gdjs.GameScene8Code.GDBtnBackObjects3.length = 0;
gdjs.GameScene8Code.GDBtnSubmitObjects1.length = 0;
gdjs.GameScene8Code.GDBtnSubmitObjects2.length = 0;
gdjs.GameScene8Code.GDBtnSubmitObjects3.length = 0;
gdjs.GameScene8Code.GDLevelBgObjects1.length = 0;
gdjs.GameScene8Code.GDLevelBgObjects2.length = 0;
gdjs.GameScene8Code.GDLevelBgObjects3.length = 0;


return;

}

gdjs['GameScene8Code'] = gdjs.GameScene8Code;
