gdjs.GameScene12Code = {};
gdjs.GameScene12Code.localVariables = [];
gdjs.GameScene12Code.GDTxtTimerObjects1= [];
gdjs.GameScene12Code.GDTxtTimerObjects2= [];
gdjs.GameScene12Code.GDZeroTimeObjects1= [];
gdjs.GameScene12Code.GDZeroTimeObjects2= [];
gdjs.GameScene12Code.GDTxtCodeObjects1= [];
gdjs.GameScene12Code.GDTxtCodeObjects2= [];
gdjs.GameScene12Code.GDBtnAObjects1= [];
gdjs.GameScene12Code.GDBtnAObjects2= [];
gdjs.GameScene12Code.GDBtnBObjects1= [];
gdjs.GameScene12Code.GDBtnBObjects2= [];
gdjs.GameScene12Code.GDBtnCObjects1= [];
gdjs.GameScene12Code.GDBtnCObjects2= [];
gdjs.GameScene12Code.GDBtn4Objects1= [];
gdjs.GameScene12Code.GDBtn4Objects2= [];
gdjs.GameScene12Code.GDBtn6Objects1= [];
gdjs.GameScene12Code.GDBtn6Objects2= [];
gdjs.GameScene12Code.GDBtn8Objects1= [];
gdjs.GameScene12Code.GDBtn8Objects2= [];
gdjs.GameScene12Code.GDBtnBackObjects1= [];
gdjs.GameScene12Code.GDBtnBackObjects2= [];
gdjs.GameScene12Code.GDBtnSubmitObjects1= [];
gdjs.GameScene12Code.GDBtnSubmitObjects2= [];
gdjs.GameScene12Code.GDBombObjects1= [];
gdjs.GameScene12Code.GDBombObjects2= [];
gdjs.GameScene12Code.GDTxtBoxObjects1= [];
gdjs.GameScene12Code.GDTxtBoxObjects2= [];
gdjs.GameScene12Code.GDLeve6BGObjects1= [];
gdjs.GameScene12Code.GDLeve6BGObjects2= [];
gdjs.GameScene12Code.GDTxtAnnouceObjects1= [];
gdjs.GameScene12Code.GDTxtAnnouceObjects2= [];


gdjs.GameScene12Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtAnnouce"), gdjs.GameScene12Code.GDTxtAnnouceObjects1);
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene12Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setString("");
}
{for(var i = 0, len = gdjs.GameScene12Code.GDTxtAnnouceObjects1.length ;i < len;++i) {
    gdjs.GameScene12Code.GDTxtAnnouceObjects1[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.GameScene12Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene12Code.GDTxtCodeObjects1[i].getBehavior("Text").setText("");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Announce");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Announce") > 0.4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() < gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtAnnouce"), gdjs.GameScene12Code.GDTxtAnnouceObjects1);
{for(var i = 0, len = gdjs.GameScene12Code.GDTxtAnnouceObjects1.length ;i < len;++i) {
    gdjs.GameScene12Code.GDTxtAnnouceObjects1[i].getBehavior("Text").setText(gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)), 1));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Announce");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Announce") >= 0.4;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtAnnouce"), gdjs.GameScene12Code.GDTxtAnnouceObjects1);
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene12Code.GDTxtCodeObjects1);
{for(var i = 0, len = gdjs.GameScene12Code.GDTxtAnnouceObjects1.length ;i < len;++i) {
    gdjs.GameScene12Code.GDTxtAnnouceObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameScene12Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene12Code.GDTxtCodeObjects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(5);
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtTimer"), gdjs.GameScene12Code.GDTxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}
{for(var i = 0, len = gdjs.GameScene12Code.GDTxtTimerObjects1.length ;i < len;++i) {
    gdjs.GameScene12Code.GDTxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Countdown");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnA"), gdjs.GameScene12Code.GDBtnAObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene12Code.GDBtnAObjects1.length;i<l;++i) {
    if ( gdjs.GameScene12Code.GDBtnAObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene12Code.GDBtnAObjects1[k] = gdjs.GameScene12Code.GDBtnAObjects1[i];
        ++k;
    }
}
gdjs.GameScene12Code.GDBtnAObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4))) < 4);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene12Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)) + "A");
}
{for(var i = 0, len = gdjs.GameScene12Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene12Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnC"), gdjs.GameScene12Code.GDBtnCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene12Code.GDBtnCObjects1.length;i<l;++i) {
    if ( gdjs.GameScene12Code.GDBtnCObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene12Code.GDBtnCObjects1[k] = gdjs.GameScene12Code.GDBtnCObjects1[i];
        ++k;
    }
}
gdjs.GameScene12Code.GDBtnCObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4))) < 4);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene12Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)) + "C");
}
{for(var i = 0, len = gdjs.GameScene12Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene12Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnB"), gdjs.GameScene12Code.GDBtnBObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene12Code.GDBtnBObjects1.length;i<l;++i) {
    if ( gdjs.GameScene12Code.GDBtnBObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene12Code.GDBtnBObjects1[k] = gdjs.GameScene12Code.GDBtnBObjects1[i];
        ++k;
    }
}
gdjs.GameScene12Code.GDBtnBObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4))) < 4);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene12Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)) + "B");
}
{for(var i = 0, len = gdjs.GameScene12Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene12Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn4"), gdjs.GameScene12Code.GDBtn4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene12Code.GDBtn4Objects1.length;i<l;++i) {
    if ( gdjs.GameScene12Code.GDBtn4Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene12Code.GDBtn4Objects1[k] = gdjs.GameScene12Code.GDBtn4Objects1[i];
        ++k;
    }
}
gdjs.GameScene12Code.GDBtn4Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4))) < 4);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene12Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)) + "4");
}
{for(var i = 0, len = gdjs.GameScene12Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene12Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn6"), gdjs.GameScene12Code.GDBtn6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene12Code.GDBtn6Objects1.length;i<l;++i) {
    if ( gdjs.GameScene12Code.GDBtn6Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene12Code.GDBtn6Objects1[k] = gdjs.GameScene12Code.GDBtn6Objects1[i];
        ++k;
    }
}
gdjs.GameScene12Code.GDBtn6Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4))) < 4);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene12Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)) + "6");
}
{for(var i = 0, len = gdjs.GameScene12Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene12Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn8"), gdjs.GameScene12Code.GDBtn8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene12Code.GDBtn8Objects1.length;i<l;++i) {
    if ( gdjs.GameScene12Code.GDBtn8Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene12Code.GDBtn8Objects1[k] = gdjs.GameScene12Code.GDBtn8Objects1[i];
        ++k;
    }
}
gdjs.GameScene12Code.GDBtn8Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4))) < 4);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene12Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)) + "8");
}
{for(var i = 0, len = gdjs.GameScene12Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene12Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnBack"), gdjs.GameScene12Code.GDBtnBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene12Code.GDBtnBackObjects1.length;i<l;++i) {
    if ( gdjs.GameScene12Code.GDBtnBackObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene12Code.GDBtnBackObjects1[k] = gdjs.GameScene12Code.GDBtnBackObjects1[i];
        ++k;
    }
}
gdjs.GameScene12Code.GDBtnBackObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4))) > 0);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TxtCode"), gdjs.GameScene12Code.GDTxtCodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setString(gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)), 0, gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4))) - 1));
}
{for(var i = 0, len = gdjs.GameScene12Code.GDTxtCodeObjects1.length ;i < len;++i) {
    gdjs.GameScene12Code.GDTxtCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnSubmit"), gdjs.GameScene12Code.GDBtnSubmitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene12Code.GDBtnSubmitObjects1.length;i<l;++i) {
    if ( gdjs.GameScene12Code.GDBtnSubmitObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene12Code.GDBtnSubmitObjects1[k] = gdjs.GameScene12Code.GDBtnSubmitObjects1[i];
        ++k;
    }
}
gdjs.GameScene12Code.GDBtnSubmitObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)) == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("GameScene13");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Winscene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnSubmit"), gdjs.GameScene12Code.GDBtnSubmitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene12Code.GDBtnSubmitObjects1.length;i<l;++i) {
    if ( gdjs.GameScene12Code.GDBtnSubmitObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene12Code.GDBtnSubmitObjects1[k] = gdjs.GameScene12Code.GDBtnSubmitObjects1[i];
        ++k;
    }
}
gdjs.GameScene12Code.GDBtnSubmitObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4))) == gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() <= 0);
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
gdjs.copyArray(runtimeScene.getObjects("Btn4"), gdjs.GameScene12Code.GDBtn4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Btn6"), gdjs.GameScene12Code.GDBtn6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Btn8"), gdjs.GameScene12Code.GDBtn8Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnA"), gdjs.GameScene12Code.GDBtnAObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnB"), gdjs.GameScene12Code.GDBtnBObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnBack"), gdjs.GameScene12Code.GDBtnBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnC"), gdjs.GameScene12Code.GDBtnCObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnSubmit"), gdjs.GameScene12Code.GDBtnSubmitObjects1);
{for(var i = 0, len = gdjs.GameScene12Code.GDBtnSubmitObjects1.length ;i < len;++i) {
    gdjs.GameScene12Code.GDBtnSubmitObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene12Code.GDBtnBackObjects1.length ;i < len;++i) {
    gdjs.GameScene12Code.GDBtnBackObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene12Code.GDBtn8Objects1.length ;i < len;++i) {
    gdjs.GameScene12Code.GDBtn8Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene12Code.GDBtn6Objects1.length ;i < len;++i) {
    gdjs.GameScene12Code.GDBtn6Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene12Code.GDBtn4Objects1.length ;i < len;++i) {
    gdjs.GameScene12Code.GDBtn4Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene12Code.GDBtnCObjects1.length ;i < len;++i) {
    gdjs.GameScene12Code.GDBtnCObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene12Code.GDBtnBObjects1.length ;i < len;++i) {
    gdjs.GameScene12Code.GDBtnBObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameScene12Code.GDBtnAObjects1.length ;i < len;++i) {
    gdjs.GameScene12Code.GDBtnAObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


};

gdjs.GameScene12Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameScene12Code.GDTxtTimerObjects1.length = 0;
gdjs.GameScene12Code.GDTxtTimerObjects2.length = 0;
gdjs.GameScene12Code.GDZeroTimeObjects1.length = 0;
gdjs.GameScene12Code.GDZeroTimeObjects2.length = 0;
gdjs.GameScene12Code.GDTxtCodeObjects1.length = 0;
gdjs.GameScene12Code.GDTxtCodeObjects2.length = 0;
gdjs.GameScene12Code.GDBtnAObjects1.length = 0;
gdjs.GameScene12Code.GDBtnAObjects2.length = 0;
gdjs.GameScene12Code.GDBtnBObjects1.length = 0;
gdjs.GameScene12Code.GDBtnBObjects2.length = 0;
gdjs.GameScene12Code.GDBtnCObjects1.length = 0;
gdjs.GameScene12Code.GDBtnCObjects2.length = 0;
gdjs.GameScene12Code.GDBtn4Objects1.length = 0;
gdjs.GameScene12Code.GDBtn4Objects2.length = 0;
gdjs.GameScene12Code.GDBtn6Objects1.length = 0;
gdjs.GameScene12Code.GDBtn6Objects2.length = 0;
gdjs.GameScene12Code.GDBtn8Objects1.length = 0;
gdjs.GameScene12Code.GDBtn8Objects2.length = 0;
gdjs.GameScene12Code.GDBtnBackObjects1.length = 0;
gdjs.GameScene12Code.GDBtnBackObjects2.length = 0;
gdjs.GameScene12Code.GDBtnSubmitObjects1.length = 0;
gdjs.GameScene12Code.GDBtnSubmitObjects2.length = 0;
gdjs.GameScene12Code.GDBombObjects1.length = 0;
gdjs.GameScene12Code.GDBombObjects2.length = 0;
gdjs.GameScene12Code.GDTxtBoxObjects1.length = 0;
gdjs.GameScene12Code.GDTxtBoxObjects2.length = 0;
gdjs.GameScene12Code.GDLeve6BGObjects1.length = 0;
gdjs.GameScene12Code.GDLeve6BGObjects2.length = 0;
gdjs.GameScene12Code.GDTxtAnnouceObjects1.length = 0;
gdjs.GameScene12Code.GDTxtAnnouceObjects2.length = 0;

gdjs.GameScene12Code.eventsList0(runtimeScene);
gdjs.GameScene12Code.GDTxtTimerObjects1.length = 0;
gdjs.GameScene12Code.GDTxtTimerObjects2.length = 0;
gdjs.GameScene12Code.GDZeroTimeObjects1.length = 0;
gdjs.GameScene12Code.GDZeroTimeObjects2.length = 0;
gdjs.GameScene12Code.GDTxtCodeObjects1.length = 0;
gdjs.GameScene12Code.GDTxtCodeObjects2.length = 0;
gdjs.GameScene12Code.GDBtnAObjects1.length = 0;
gdjs.GameScene12Code.GDBtnAObjects2.length = 0;
gdjs.GameScene12Code.GDBtnBObjects1.length = 0;
gdjs.GameScene12Code.GDBtnBObjects2.length = 0;
gdjs.GameScene12Code.GDBtnCObjects1.length = 0;
gdjs.GameScene12Code.GDBtnCObjects2.length = 0;
gdjs.GameScene12Code.GDBtn4Objects1.length = 0;
gdjs.GameScene12Code.GDBtn4Objects2.length = 0;
gdjs.GameScene12Code.GDBtn6Objects1.length = 0;
gdjs.GameScene12Code.GDBtn6Objects2.length = 0;
gdjs.GameScene12Code.GDBtn8Objects1.length = 0;
gdjs.GameScene12Code.GDBtn8Objects2.length = 0;
gdjs.GameScene12Code.GDBtnBackObjects1.length = 0;
gdjs.GameScene12Code.GDBtnBackObjects2.length = 0;
gdjs.GameScene12Code.GDBtnSubmitObjects1.length = 0;
gdjs.GameScene12Code.GDBtnSubmitObjects2.length = 0;
gdjs.GameScene12Code.GDBombObjects1.length = 0;
gdjs.GameScene12Code.GDBombObjects2.length = 0;
gdjs.GameScene12Code.GDTxtBoxObjects1.length = 0;
gdjs.GameScene12Code.GDTxtBoxObjects2.length = 0;
gdjs.GameScene12Code.GDLeve6BGObjects1.length = 0;
gdjs.GameScene12Code.GDLeve6BGObjects2.length = 0;
gdjs.GameScene12Code.GDTxtAnnouceObjects1.length = 0;
gdjs.GameScene12Code.GDTxtAnnouceObjects2.length = 0;


return;

}

gdjs['GameScene12Code'] = gdjs.GameScene12Code;
