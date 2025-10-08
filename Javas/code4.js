gdjs.LoseSceneCode = {};
gdjs.LoseSceneCode.localVariables = [];
gdjs.LoseSceneCode.GDlose_9595BGObjects1= [];
gdjs.LoseSceneCode.GDlose_9595BGObjects2= [];
gdjs.LoseSceneCode.GDlose_9595buttonObjects1= [];
gdjs.LoseSceneCode.GDlose_9595buttonObjects2= [];
gdjs.LoseSceneCode.GDlose_9595textObjects1= [];
gdjs.LoseSceneCode.GDlose_9595textObjects2= [];


gdjs.LoseSceneCode.mapOfGDgdjs_9546LoseSceneCode_9546GDlose_95959595buttonObjects1Objects = Hashtable.newFrom({"lose_button": gdjs.LoseSceneCode.GDlose_9595buttonObjects1});
gdjs.LoseSceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("lose_button"), gdjs.LoseSceneCode.GDlose_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LoseSceneCode.mapOfGDgdjs_9546LoseSceneCode_9546GDlose_95959595buttonObjects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoseSceneCode.GDlose_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.LoseSceneCode.GDlose_9595buttonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LoseSceneCode.GDlose_9595buttonObjects1[k] = gdjs.LoseSceneCode.GDlose_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.LoseSceneCode.GDlose_9595buttonObjects1.length = k;
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
{gdjs.evtTools.sound.playSound(runtimeScene, "lose-music.mp3", false, 100, 1);
}
}

}


};

gdjs.LoseSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoseSceneCode.GDlose_9595BGObjects1.length = 0;
gdjs.LoseSceneCode.GDlose_9595BGObjects2.length = 0;
gdjs.LoseSceneCode.GDlose_9595buttonObjects1.length = 0;
gdjs.LoseSceneCode.GDlose_9595buttonObjects2.length = 0;
gdjs.LoseSceneCode.GDlose_9595textObjects1.length = 0;
gdjs.LoseSceneCode.GDlose_9595textObjects2.length = 0;

gdjs.LoseSceneCode.eventsList0(runtimeScene);
gdjs.LoseSceneCode.GDlose_9595BGObjects1.length = 0;
gdjs.LoseSceneCode.GDlose_9595BGObjects2.length = 0;
gdjs.LoseSceneCode.GDlose_9595buttonObjects1.length = 0;
gdjs.LoseSceneCode.GDlose_9595buttonObjects2.length = 0;
gdjs.LoseSceneCode.GDlose_9595textObjects1.length = 0;
gdjs.LoseSceneCode.GDlose_9595textObjects2.length = 0;


return;

}

gdjs['LoseSceneCode'] = gdjs.LoseSceneCode;
