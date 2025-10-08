gdjs.StartScreenCode = {};
gdjs.StartScreenCode.localVariables = [];
gdjs.StartScreenCode.GDBGMenuObjects1= [];
gdjs.StartScreenCode.GDBGMenuObjects2= [];
gdjs.StartScreenCode.GDstart_9595buttonObjects1= [];
gdjs.StartScreenCode.GDstart_9595buttonObjects2= [];


gdjs.StartScreenCode.mapOfGDgdjs_9546StartScreenCode_9546GDstart_95959595buttonObjects1Objects = Hashtable.newFrom({"start_button": gdjs.StartScreenCode.GDstart_9595buttonObjects1});
gdjs.StartScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("start_button"), gdjs.StartScreenCode.GDstart_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StartScreenCode.mapOfGDgdjs_9546StartScreenCode_9546GDstart_95959595buttonObjects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartScreenCode.GDstart_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.StartScreenCode.GDstart_9595buttonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.StartScreenCode.GDstart_9595buttonObjects1[k] = gdjs.StartScreenCode.GDstart_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.StartScreenCode.GDstart_9595buttonObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene1", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "menu music2.mp3", false, 100, 1);
}
}

}


};

gdjs.StartScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartScreenCode.GDBGMenuObjects1.length = 0;
gdjs.StartScreenCode.GDBGMenuObjects2.length = 0;
gdjs.StartScreenCode.GDstart_9595buttonObjects1.length = 0;
gdjs.StartScreenCode.GDstart_9595buttonObjects2.length = 0;

gdjs.StartScreenCode.eventsList0(runtimeScene);
gdjs.StartScreenCode.GDBGMenuObjects1.length = 0;
gdjs.StartScreenCode.GDBGMenuObjects2.length = 0;
gdjs.StartScreenCode.GDstart_9595buttonObjects1.length = 0;
gdjs.StartScreenCode.GDstart_9595buttonObjects2.length = 0;


return;

}

gdjs['StartScreenCode'] = gdjs.StartScreenCode;
