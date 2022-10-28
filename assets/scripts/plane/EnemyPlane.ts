
import { _decorator, Component, Node, sp , Collider, ITriggerEvent} from 'cc';
import { Constant } from '../framework/Constant';
import { GameManager } from '../framework/GameManager';
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
    @property
    public createEnemyBulletTime = 0.5;

    private _currentCreateEnemyBulletTime = 0;
    private _needBullet = false;
    private _gameManager:GameManager = null;
    private _enemySpeed = 0;

    onEnable() {
        // systemEvent.on(SystemEvent.EventType.TOUCH_START, this._touchStart, this);
        // systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this._touchMove, this);
        const collider = this.node.getComponent(Collider);
        // console.log(collider);
        //!!!!!!!!!!!! 这里有错误，为什么有时collider为空
        // if (collider!==null) {
        collider.on('onTriggerEnter', this._onTriggerEnter, this);
        // }
        // console.log("over \n");
    }

    onDisable() {
        // systemEvent.on(SystemEvent.EventType.TOUCH_START, this._touchStart, this);
        // systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this._touchMove, this);
        const collider = this.node.getComponent(Collider);
        //!!!!!!!!!!!! 这里有错误，为什么有时collider为空
        // if (collider!==null) {
        collider.off('onTriggerEnter', this._onTriggerEnter, this);
        // }
    }

    private _onTriggerEnter(event:ITriggerEvent){
        const collisionGroup = event.otherCollider.getGroup();
        if(collisionGroup === Constant.CollisionType.SELF_PLANE || collisionGroup === Constant.CollisionType.SELF_BULLET){
            this.node.destroy();
            this._gameManager.addScore();
        }

    }

    update (deltaTime: number) {
        const pos = this.node.position;
        const movePos = pos.z + this._enemySpeed;
        this.node.setPosition(pos.x, pos.y, movePos);
        if(this._needBullet){
            this._currentCreateEnemyBulletTime +=deltaTime;
            if(this._currentCreateEnemyBulletTime > this.createEnemyBulletTime){
                this._gameManager.createEnemyBullet(this.node.position);
                this._currentCreateEnemyBulletTime = 0;
            }
        }
        
        if(movePos > OUTOFBOUNCE)
            this.node.destroy();       
    }

    show(gameManager:GameManager, speed:number, needBullet:boolean){
        this._gameManager = gameManager;
        this._enemySpeed = speed;
        this._needBullet = needBullet;
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
