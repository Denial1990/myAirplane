
import { _decorator, Component, Node, Material, Prefab, instantiate } from 'cc';
import { Bullet } from '../bullet/Bullet';
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
    @property(Node)
    public playerPlane:Node = null;

    @property(Prefab)
    public bullet01:Prefab = null;

    @property(Prefab)
    public bullet02:Prefab = null;

    @property(Prefab)
    public bullet03:Prefab = null;

    @property(Prefab)
    public bullet04:Prefab = null;

    @property(Prefab)
    public bullet05:Prefab = null;

    @property
    public bulletSpeed = 1;
    
    @property
    public shootTime = 0.1;

    @property(Node)
    public bulletRoot:Node = null;

    private _currentShootTime = 0;
    private _isShooting:boolean = false;

    private _createPlayerBullet(){
        const  bullet = instantiate(this.bullet01);
        bullet.setParent(this.bulletRoot);
        const pos = this.playerPlane.position;
        bullet.setPosition(pos.x, pos.y, pos.z-7);
        const bulletComp = bullet.getComponent(Bullet);    //Bullet.ts
        bulletComp.bulletSpeed = this.bulletSpeed;
    }

    start () {
        this._init();
    }

    update(deltaTime:number){
        this._currentShootTime += deltaTime;
        if(this._isShooting && this._currentShootTime > this.shootTime){
            this._createPlayerBullet();
            this._currentShootTime = 0;
        }
    }

    public isShooting(value:boolean){
        this._isShooting = value;
    }

    onDestroy(){
        console.log('oneDestroy');
    }

    _init(){
        this._currentShootTime = this.shootTime;
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
