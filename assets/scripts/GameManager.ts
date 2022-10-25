
import { _decorator, Component, Node, Material } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

/**
 * Predefined variables
 * Name = GameManager
 * DateTime = Sun Oct 23 2022 19:08:47 GMT+0800 (中国标准时间)
 * Author = zhangyuzhi
 * FileBasename = GameManager.ts
 * FileBasenameNoExtension = GameManager
 * URL = db://assets/scripts/GameManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('GameManager')
@executeInEditMode(true)
export class GameManager extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property
    public foo = 10;
    
    @property(Material)
    public bar:Material = null;

    private _init = false;

    onLoad(){
        console.log('onLoad');
    }

    onEnable(){
        console.log('onEnable');
    }

    start () {
        console.log('start');
         // [3]
    }

    update(){
        if(this._init == false){
            console.log('update');
        }
    }

    lateUpdate(){
        if(this._init == false){
            console.log('lateUpdate');
            this._init = true;
        }
    }

    onDisable(){
        console.log('onDisable');
        this._init = false;
    }

    onDestroy(){
        console.log('oneDestroy');
    }
    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
