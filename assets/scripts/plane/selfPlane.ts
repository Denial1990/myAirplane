
import { _decorator, Component, Node, systemEvent, SystemEvent, EventTouch,Touch } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = SelfPlane
 * DateTime = Tue Oct 25 2022 18:49:34 GMT+0800 (中国标准时间)
 * Author = zhangyuzhi
 * FileBasename = selfPlane.ts
 * FileBasenameNoExtension = selfPlane
 * URL = db://assets/scripts/selfPlane.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('SelfPlane')
export class SelfPlane extends Component {
    @property
    public speed = 5;

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // systemEvent.on(SystemEvent.EventType.TOUCH_START, this._touchStart, this);
        // systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this._touchMove, this);
    }

    // _touchStart(touch:Touch, event: EventTouch){
          

    // }

    // _touchMove(touch:Touch, event: EventTouch){
    //     const delta = touch.getDelta();
    //     let pos = this.node.position;
    //     this.node.setPosition(pos.x + 0.01 * this.speed*delta.x, pos.y, pos.z - 0.01 * this.speed*delta.y)
    //     //0.01 单位与像素之间的换算
    // }
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
