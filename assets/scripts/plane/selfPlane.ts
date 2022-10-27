
import { _decorator, Component, Node, systemEvent, SystemEvent, EventTouch,Touch, Collider, BoxCollider, ITriggerEvent  } from 'cc';
import { Constant } from '../framework/Constant';
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

    // start(){
    //     console.log("self plane start \n");
    // }
    onEnable() {
        // systemEvent.on(SystemEvent.EventType.TOUCH_START, this._touchStart, this);
        // systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this._touchMove, this);
        console.log("self plane enable \n");
        const collider = this.node.getComponent(Collider);
        collider.on('onTriggerEnter', this._onTriggerEnter, this);
    }

    onDisable() {
        // systemEvent.on(SystemEvent.EventType.TOUCH_START, this._touchStart, this);
        // systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this._touchMove, this);
        const collider = this.node.getComponent(Collider);
        collider.off('onTriggerEnter', this._onTriggerEnter, this);
    }


    private _onTriggerEnter(event:ITriggerEvent){
        console.log("enter collision \n");
        const collisionGroup = event.otherCollider.getGroup();
        if(collisionGroup === Constant.CollisionType.ENEMY_PLANE || collisionGroup === Constant.CollisionType.ENEMY_BULLET){
            console.log("reduce blood");
        }

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
