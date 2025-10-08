gdjs.EndScreenCode = {};
gdjs.EndScreenCode.localVariables = [];
gdjs.EndScreenCode.GDReLoadObjects1= [];
gdjs.EndScreenCode.GDReLoadObjects2= [];
gdjs.EndScreenCode.GDBGObjects1= [];
gdjs.EndScreenCode.GDBGObjects2= [];
gdjs.EndScreenCode.GDTextBoxObjects1= [];
gdjs.EndScreenCode.GDTextBoxObjects2= [];


gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDReLoadObjects1Objects = Hashtable.newFrom({"ReLoad": gdjs.EndScreenCode.GDReLoadObjects1});
gdjs.EndScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ReLoad"), gdjs.EndScreenCode.GDReLoadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDReLoadObjects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EndScreenCode.GDReLoadObjects1.length;i<l;++i) {
    if ( gdjs.EndScreenCode.GDReLoadObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.EndScreenCode.GDReLoadObjects1[k] = gdjs.EndScreenCode.GDReLoadObjects1[i];
        ++k;
    }
}
gdjs.EndScreenCode.GDReLoadObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StartScreen", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "2015-08-18_-_Victory_-_David_Fesliyan.mp3", false, 100, 1);
}
}

}


};

gdjs.EndScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndScreenCode.GDReLoadObjects1.length = 0;
gdjs.EndScreenCode.GDReLoadObjects2.length = 0;
gdjs.EndScreenCode.GDBGObjects1.length = 0;
gdjs.EndScreenCode.GDBGObjects2.length = 0;
gdjs.EndScreenCode.GDTextBoxObjects1.length = 0;
gdjs.EndScreenCode.GDTextBoxObjects2.length = 0;

gdjs.EndScreenCode.eventsList0(runtimeScene);
gdjs.EndScreenCode.GDReLoadObjects1.length = 0;
gdjs.EndScreenCode.GDReLoadObjects2.length = 0;
gdjs.EndScreenCode.GDBGObjects1.length = 0;
gdjs.EndScreenCode.GDBGObjects2.length = 0;
gdjs.EndScreenCode.GDTextBoxObjects1.length = 0;
gdjs.EndScreenCode.GDTextBoxObjects2.length = 0;


return;

}

gdjs['EndScreenCode'] = gdjs.EndScreenCode;
