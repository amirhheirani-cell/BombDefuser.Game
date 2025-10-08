gdjs.GameScene13Code = {};
gdjs.GameScene13Code.localVariables = [];
gdjs.GameScene13Code.GDTxtTimerObjects1= [];
gdjs.GameScene13Code.GDTxtTimerObjects2= [];
gdjs.GameScene13Code.GDTxtTimerObjects3= [];
gdjs.GameScene13Code.GDZeroTimeObjects1= [];
gdjs.GameScene13Code.GDZeroTimeObjects2= [];
gdjs.GameScene13Code.GDZeroTimeObjects3= [];
gdjs.GameScene13Code.GDTxtAnnoucedObjects1= [];
gdjs.GameScene13Code.GDTxtAnnoucedObjects2= [];
gdjs.GameScene13Code.GDTxtAnnoucedObjects3= [];
gdjs.GameScene13Code.GDTxtDisplayObjects1= [];
gdjs.GameScene13Code.GDTxtDisplayObjects2= [];
gdjs.GameScene13Code.GDTxtDisplayObjects3= [];
gdjs.GameScene13Code.GDBtnAObjects1= [];
gdjs.GameScene13Code.GDBtnAObjects2= [];
gdjs.GameScene13Code.GDBtnAObjects3= [];
gdjs.GameScene13Code.GDBtnBObjects1= [];
gdjs.GameScene13Code.GDBtnBObjects2= [];
gdjs.GameScene13Code.GDBtnBObjects3= [];
gdjs.GameScene13Code.GDBtnCObjects1= [];
gdjs.GameScene13Code.GDBtnCObjects2= [];
gdjs.GameScene13Code.GDBtnCObjects3= [];
gdjs.GameScene13Code.GDBtn4Objects1= [];
gdjs.GameScene13Code.GDBtn4Objects2= [];
gdjs.GameScene13Code.GDBtn4Objects3= [];
gdjs.GameScene13Code.GDBtn6Objects1= [];
gdjs.GameScene13Code.GDBtn6Objects2= [];
gdjs.GameScene13Code.GDBtn6Objects3= [];
gdjs.GameScene13Code.GDBtn8Objects1= [];
gdjs.GameScene13Code.GDBtn8Objects2= [];
gdjs.GameScene13Code.GDBtn8Objects3= [];
gdjs.GameScene13Code.GDBtnBackObjects1= [];
gdjs.GameScene13Code.GDBtnBackObjects2= [];
gdjs.GameScene13Code.GDBtnBackObjects3= [];
gdjs.GameScene13Code.GDBtnSubmitObjects1= [];
gdjs.GameScene13Code.GDBtnSubmitObjects2= [];
gdjs.GameScene13Code.GDBtnSubmitObjects3= [];
gdjs.GameScene13Code.GDBombObjects1= [];
gdjs.GameScene13Code.GDBombObjects2= [];
gdjs.GameScene13Code.GDBombObjects3= [];
gdjs.GameScene13Code.GDTxtBoxObjects1= [];
gdjs.GameScene13Code.GDTxtBoxObjects2= [];
gdjs.GameScene13Code.GDTxtBoxObjects3= [];
gdjs.GameScene13Code.GDBGLevelObjects1= [];
gdjs.GameScene13Code.GDBGLevelObjects2= [];
gdjs.GameScene13Code.GDBGLevelObjects3= [];
gdjs.GameScene13Code.GDHintBoxObjects1= [];
gdjs.GameScene13Code.GDHintBoxObjects2= [];
gdjs.GameScene13Code.GDHintBoxObjects3= [];


gdjs.GameScene13Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.GameScene13Code.GDTxtDisplayObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("");
}
{for(var i = 0, len = gdjs.GameScene13Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene13Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText("");
}
}
}

}


};gdjs.GameScene13Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("GameScene14");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Winscene", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LoseScene", false);
}
}

}


};gdjs.GameScene13Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtTimer"), gdjs.GameScene13Code.GDTxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.GameScene13Code.GDTxtTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene13Code.GDTxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "countdown");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "game-music3.mp3", false, 15, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Level6Command.mp3", false, 100, 2);
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
gdjs.copyArray(runtimeScene.getObjects("TxtTimer"), gdjs.GameScene13Code.GDTxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}
{for(var i = 0, len = gdjs.GameScene13Code.GDTxtTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene13Code.GDTxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
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
gdjs.copyArray(runtimeScene.getObjects("Btn4"), gdjs.GameScene13Code.GDBtn4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Btn6"), gdjs.GameScene13Code.GDBtn6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Btn8"), gdjs.GameScene13Code.GDBtn8Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnA"), gdjs.GameScene13Code.GDBtnAObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnB"), gdjs.GameScene13Code.GDBtnBObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnBack"), gdjs.GameScene13Code.GDBtnBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnC"), gdjs.GameScene13Code.GDBtnCObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnSubmit"), gdjs.GameScene13Code.GDBtnSubmitObjects1);
gdjs.copyArray(runtimeScene.getObjects("TxtAnnouced"), gdjs.GameScene13Code.GDTxtAnnoucedObjects1);
gdjs.copyArray(runtimeScene.getObjects("TxtDisplay"), gdjs.GameScene13Code.GDTxtDisplayObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("");
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)), 2, 1) + gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)), 1, 1) + gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)), 0, 1));
}
{for(var i = 0, len = gdjs.GameScene13Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene13Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.GameScene13Code.GDTxtAnnoucedObjects1.length ;i < len;++i) {
    gdjs.GameScene13Code.GDTxtAnnoucedObjects1[i].getBehavior("Text").setText("Hint: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
}
{for(var i = 0, len = gdjs.GameScene13Code.GDTxtAnnoucedObjects1.length ;i < len;++i) {
    gdjs.GameScene13Code.GDTxtAnnoucedObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameScene13Code.GDBtnAObjects1.length ;i < len;++i) {
    gdjs.GameScene13Code.GDBtnAObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene13Code.GDBtnSubmitObjects1.length ;i < len;++i) {
    gdjs.GameScene13Code.GDBtnSubmitObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene13Code.GDBtnBackObjects1.length ;i < len;++i) {
    gdjs.GameScene13Code.GDBtnBackObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene13Code.GDBtn8Objects1.length ;i < len;++i) {
    gdjs.GameScene13Code.GDBtn8Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene13Code.GDBtn6Objects1.length ;i < len;++i) {
    gdjs.GameScene13Code.GDBtn6Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene13Code.GDBtn4Objects1.length ;i < len;++i) {
    gdjs.GameScene13Code.GDBtn4Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene13Code.GDBtnCObjects1.length ;i < len;++i) {
    gdjs.GameScene13Code.GDBtnCObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene13Code.GDBtnBObjects1.length ;i < len;++i) {
    gdjs.GameScene13Code.GDBtnBObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnA"), gdjs.GameScene13Code.GDBtnAObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene13Code.GDBtnAObjects1.length;i<l;++i) {
    if ( gdjs.GameScene13Code.GDBtnAObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene13Code.GDBtnAObjects1[k] = gdjs.GameScene13Code.GDBtnAObjects1[i];
        ++k;
    }
}
gdjs.GameScene13Code.GDBtnAObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtDisplay"), gdjs.GameScene13Code.GDTxtDisplayObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) + "A");
}
{for(var i = 0, len = gdjs.GameScene13Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene13Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnB"), gdjs.GameScene13Code.GDBtnBObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene13Code.GDBtnBObjects1.length;i<l;++i) {
    if ( gdjs.GameScene13Code.GDBtnBObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene13Code.GDBtnBObjects1[k] = gdjs.GameScene13Code.GDBtnBObjects1[i];
        ++k;
    }
}
gdjs.GameScene13Code.GDBtnBObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtDisplay"), gdjs.GameScene13Code.GDTxtDisplayObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) + "B");
}
{for(var i = 0, len = gdjs.GameScene13Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene13Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnC"), gdjs.GameScene13Code.GDBtnCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene13Code.GDBtnCObjects1.length;i<l;++i) {
    if ( gdjs.GameScene13Code.GDBtnCObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene13Code.GDBtnCObjects1[k] = gdjs.GameScene13Code.GDBtnCObjects1[i];
        ++k;
    }
}
gdjs.GameScene13Code.GDBtnCObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtDisplay"), gdjs.GameScene13Code.GDTxtDisplayObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) + "C");
}
{for(var i = 0, len = gdjs.GameScene13Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene13Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn4"), gdjs.GameScene13Code.GDBtn4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene13Code.GDBtn4Objects1.length;i<l;++i) {
    if ( gdjs.GameScene13Code.GDBtn4Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene13Code.GDBtn4Objects1[k] = gdjs.GameScene13Code.GDBtn4Objects1[i];
        ++k;
    }
}
gdjs.GameScene13Code.GDBtn4Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtDisplay"), gdjs.GameScene13Code.GDTxtDisplayObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) + "4");
}
{for(var i = 0, len = gdjs.GameScene13Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene13Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn6"), gdjs.GameScene13Code.GDBtn6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene13Code.GDBtn6Objects1.length;i<l;++i) {
    if ( gdjs.GameScene13Code.GDBtn6Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene13Code.GDBtn6Objects1[k] = gdjs.GameScene13Code.GDBtn6Objects1[i];
        ++k;
    }
}
gdjs.GameScene13Code.GDBtn6Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtDisplay"), gdjs.GameScene13Code.GDTxtDisplayObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) + "6");
}
{for(var i = 0, len = gdjs.GameScene13Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene13Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn8"), gdjs.GameScene13Code.GDBtn8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene13Code.GDBtn8Objects1.length;i<l;++i) {
    if ( gdjs.GameScene13Code.GDBtn8Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene13Code.GDBtn8Objects1[k] = gdjs.GameScene13Code.GDBtn8Objects1[i];
        ++k;
    }
}
gdjs.GameScene13Code.GDBtn8Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtDisplay"), gdjs.GameScene13Code.GDTxtDisplayObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) + "8");
}
{for(var i = 0, len = gdjs.GameScene13Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene13Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnBack"), gdjs.GameScene13Code.GDBtnBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Code"))) > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene13Code.GDBtnBackObjects1.length;i<l;++i) {
    if ( gdjs.GameScene13Code.GDBtnBackObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene13Code.GDBtnBackObjects1[k] = gdjs.GameScene13Code.GDBtnBackObjects1[i];
        ++k;
    }
}
gdjs.GameScene13Code.GDBtnBackObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtDisplay"), gdjs.GameScene13Code.GDTxtDisplayObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("code")), 0, gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Code"))) - 1));
}
{for(var i = 0, len = gdjs.GameScene13Code.GDTxtDisplayObjects1.length ;i < len;++i) {
    gdjs.GameScene13Code.GDTxtDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Code")));
}
}

{ //Subevents
gdjs.GameScene13Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnSubmit"), gdjs.GameScene13Code.GDBtnSubmitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene13Code.GDBtnSubmitObjects1.length;i<l;++i) {
    if ( gdjs.GameScene13Code.GDBtnSubmitObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene13Code.GDBtnSubmitObjects1[k] = gdjs.GameScene13Code.GDBtnSubmitObjects1[i];
        ++k;
    }
}
gdjs.GameScene13Code.GDBtnSubmitObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameScene13Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnSubmit"), gdjs.GameScene13Code.GDBtnSubmitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))) < gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene13Code.GDBtnSubmitObjects1.length;i<l;++i) {
    if ( gdjs.GameScene13Code.GDBtnSubmitObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene13Code.GDBtnSubmitObjects1[k] = gdjs.GameScene13Code.GDBtnSubmitObjects1[i];
        ++k;
    }
}
gdjs.GameScene13Code.GDBtnSubmitObjects1.length = k;
}
}
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.GameScene13Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameScene13Code.GDTxtTimerObjects1.length = 0;
gdjs.GameScene13Code.GDTxtTimerObjects2.length = 0;
gdjs.GameScene13Code.GDTxtTimerObjects3.length = 0;
gdjs.GameScene13Code.GDZeroTimeObjects1.length = 0;
gdjs.GameScene13Code.GDZeroTimeObjects2.length = 0;
gdjs.GameScene13Code.GDZeroTimeObjects3.length = 0;
gdjs.GameScene13Code.GDTxtAnnoucedObjects1.length = 0;
gdjs.GameScene13Code.GDTxtAnnoucedObjects2.length = 0;
gdjs.GameScene13Code.GDTxtAnnoucedObjects3.length = 0;
gdjs.GameScene13Code.GDTxtDisplayObjects1.length = 0;
gdjs.GameScene13Code.GDTxtDisplayObjects2.length = 0;
gdjs.GameScene13Code.GDTxtDisplayObjects3.length = 0;
gdjs.GameScene13Code.GDBtnAObjects1.length = 0;
gdjs.GameScene13Code.GDBtnAObjects2.length = 0;
gdjs.GameScene13Code.GDBtnAObjects3.length = 0;
gdjs.GameScene13Code.GDBtnBObjects1.length = 0;
gdjs.GameScene13Code.GDBtnBObjects2.length = 0;
gdjs.GameScene13Code.GDBtnBObjects3.length = 0;
gdjs.GameScene13Code.GDBtnCObjects1.length = 0;
gdjs.GameScene13Code.GDBtnCObjects2.length = 0;
gdjs.GameScene13Code.GDBtnCObjects3.length = 0;
gdjs.GameScene13Code.GDBtn4Objects1.length = 0;
gdjs.GameScene13Code.GDBtn4Objects2.length = 0;
gdjs.GameScene13Code.GDBtn4Objects3.length = 0;
gdjs.GameScene13Code.GDBtn6Objects1.length = 0;
gdjs.GameScene13Code.GDBtn6Objects2.length = 0;
gdjs.GameScene13Code.GDBtn6Objects3.length = 0;
gdjs.GameScene13Code.GDBtn8Objects1.length = 0;
gdjs.GameScene13Code.GDBtn8Objects2.length = 0;
gdjs.GameScene13Code.GDBtn8Objects3.length = 0;
gdjs.GameScene13Code.GDBtnBackObjects1.length = 0;
gdjs.GameScene13Code.GDBtnBackObjects2.length = 0;
gdjs.GameScene13Code.GDBtnBackObjects3.length = 0;
gdjs.GameScene13Code.GDBtnSubmitObjects1.length = 0;
gdjs.GameScene13Code.GDBtnSubmitObjects2.length = 0;
gdjs.GameScene13Code.GDBtnSubmitObjects3.length = 0;
gdjs.GameScene13Code.GDBombObjects1.length = 0;
gdjs.GameScene13Code.GDBombObjects2.length = 0;
gdjs.GameScene13Code.GDBombObjects3.length = 0;
gdjs.GameScene13Code.GDTxtBoxObjects1.length = 0;
gdjs.GameScene13Code.GDTxtBoxObjects2.length = 0;
gdjs.GameScene13Code.GDTxtBoxObjects3.length = 0;
gdjs.GameScene13Code.GDBGLevelObjects1.length = 0;
gdjs.GameScene13Code.GDBGLevelObjects2.length = 0;
gdjs.GameScene13Code.GDBGLevelObjects3.length = 0;
gdjs.GameScene13Code.GDHintBoxObjects1.length = 0;
gdjs.GameScene13Code.GDHintBoxObjects2.length = 0;
gdjs.GameScene13Code.GDHintBoxObjects3.length = 0;

gdjs.GameScene13Code.eventsList2(runtimeScene);
gdjs.GameScene13Code.GDTxtTimerObjects1.length = 0;
gdjs.GameScene13Code.GDTxtTimerObjects2.length = 0;
gdjs.GameScene13Code.GDTxtTimerObjects3.length = 0;
gdjs.GameScene13Code.GDZeroTimeObjects1.length = 0;
gdjs.GameScene13Code.GDZeroTimeObjects2.length = 0;
gdjs.GameScene13Code.GDZeroTimeObjects3.length = 0;
gdjs.GameScene13Code.GDTxtAnnoucedObjects1.length = 0;
gdjs.GameScene13Code.GDTxtAnnoucedObjects2.length = 0;
gdjs.GameScene13Code.GDTxtAnnoucedObjects3.length = 0;
gdjs.GameScene13Code.GDTxtDisplayObjects1.length = 0;
gdjs.GameScene13Code.GDTxtDisplayObjects2.length = 0;
gdjs.GameScene13Code.GDTxtDisplayObjects3.length = 0;
gdjs.GameScene13Code.GDBtnAObjects1.length = 0;
gdjs.GameScene13Code.GDBtnAObjects2.length = 0;
gdjs.GameScene13Code.GDBtnAObjects3.length = 0;
gdjs.GameScene13Code.GDBtnBObjects1.length = 0;
gdjs.GameScene13Code.GDBtnBObjects2.length = 0;
gdjs.GameScene13Code.GDBtnBObjects3.length = 0;
gdjs.GameScene13Code.GDBtnCObjects1.length = 0;
gdjs.GameScene13Code.GDBtnCObjects2.length = 0;
gdjs.GameScene13Code.GDBtnCObjects3.length = 0;
gdjs.GameScene13Code.GDBtn4Objects1.length = 0;
gdjs.GameScene13Code.GDBtn4Objects2.length = 0;
gdjs.GameScene13Code.GDBtn4Objects3.length = 0;
gdjs.GameScene13Code.GDBtn6Objects1.length = 0;
gdjs.GameScene13Code.GDBtn6Objects2.length = 0;
gdjs.GameScene13Code.GDBtn6Objects3.length = 0;
gdjs.GameScene13Code.GDBtn8Objects1.length = 0;
gdjs.GameScene13Code.GDBtn8Objects2.length = 0;
gdjs.GameScene13Code.GDBtn8Objects3.length = 0;
gdjs.GameScene13Code.GDBtnBackObjects1.length = 0;
gdjs.GameScene13Code.GDBtnBackObjects2.length = 0;
gdjs.GameScene13Code.GDBtnBackObjects3.length = 0;
gdjs.GameScene13Code.GDBtnSubmitObjects1.length = 0;
gdjs.GameScene13Code.GDBtnSubmitObjects2.length = 0;
gdjs.GameScene13Code.GDBtnSubmitObjects3.length = 0;
gdjs.GameScene13Code.GDBombObjects1.length = 0;
gdjs.GameScene13Code.GDBombObjects2.length = 0;
gdjs.GameScene13Code.GDBombObjects3.length = 0;
gdjs.GameScene13Code.GDTxtBoxObjects1.length = 0;
gdjs.GameScene13Code.GDTxtBoxObjects2.length = 0;
gdjs.GameScene13Code.GDTxtBoxObjects3.length = 0;
gdjs.GameScene13Code.GDBGLevelObjects1.length = 0;
gdjs.GameScene13Code.GDBGLevelObjects2.length = 0;
gdjs.GameScene13Code.GDBGLevelObjects3.length = 0;
gdjs.GameScene13Code.GDHintBoxObjects1.length = 0;
gdjs.GameScene13Code.GDHintBoxObjects2.length = 0;
gdjs.GameScene13Code.GDHintBoxObjects3.length = 0;


return;

}

gdjs['GameScene13Code'] = gdjs.GameScene13Code;
