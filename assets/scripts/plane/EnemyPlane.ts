
import { _decorator, Component, Node, sp } from 'cc';
import { Constant } from '../framework/Constant';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = EnemyPlane
 * DateTime = Wed Oct 26 2022 12:59:27 GMT+0800 (中国标准时间)
 * Author = zhangyuzhi
 * FileBasename = EnemyPlane.ts
 * FileBasenameNoExtension = EnemyPlane
 * URL = db://assets/scripts/plane/EnemyPlane.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
const  OUTOFBOUNCE = 50;

@ccclass('EnemyPlane')
export class EnemyPlane extends Component {
    // [1]
    // dummy = '';

    // [2]
    
    private _enemySpeed = 0;

    // public enemyType = Constant.EnemyType.TYPE1;
    start () {
        // [3]
    }

    update (deltaTime: number) {
        const pos = this.node.position;
        const movePos = pos.z + this._enemySpeed;
        if(movePos > OUTOFBOUNCE)
            this.node.destroy();
        else
            this.node.setPosition(pos.x, pos.y, movePos);   
    }

    show(speed:number){
        this._enemySpeed = speed;
    }
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
