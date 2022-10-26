
import { _decorator, Component, Node, Material, Prefab, instantiate, math } from 'cc';
import { Bullet } from '../bullet/Bullet';
import { EnemyPlane } from '../plane/EnemyPlane';
import { Constant } from './Constant';
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
    //bullet
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
    public createEnemyTime = 1;
    @property
    public enemy1Speed = 0.5;
    @property
    public enemy2Speed = 0.7;
    @property
    public bulletSpeed = 1;
    
    @property
    public shootTime = 0.1;

    @property(Node)
    public bulletRoot:Node = null;

    // @property(Prefab)
    // public plane01:Prefab = null;
    //enemy
    @property(Prefab)
    public enemy01:Prefab = null;

    @property(Prefab)
    public enemy02:Prefab = null;

    private _currentShootTime = 0;
    private _isShooting:boolean = false;
    private _currentCreateEnemyTime = 0;
    private _combinationIntertal = Constant.Combination.PLAN1;

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

        if(this._combinationIntertal == Constant.Combination.PLAN1){
            this._currentCreateEnemyTime +=deltaTime;
            if(this._currentCreateEnemyTime>this.createEnemyTime){
                this.createEnemyPlane();
                this._currentCreateEnemyTime = 0;
            }
        }else if(this._combinationIntertal == Constant.Combination.PLAN2){

        }else{

        }
    }

    public createEnemyPlane(){
        const whichEnemy = math.randomRangeInt(1,3);
        let prefab:Prefab = null;
        let speed = 0;
        if(whichEnemy === Constant.EnemyType.TYPE1){
            prefab = this.enemy01;
            speed = this.enemy1Speed;
        }else{
            prefab = this.enemy02;
            speed = this.enemy2Speed;
        }
        const enemy = instantiate(prefab);
        enemy.setParent(this.node);
        const enemyComp = enemy.getComponent(EnemyPlane);
        enemyComp.show(speed);

        const randomPos = math.randomRangeInt(-25,26);
        enemy.setPosition(randomPos, 0, -50);
    }

    public isShooting(value:boolean){
        this._isShooting = value;
    }

    onDestroy(){
        console.log('oneDestroy');
    }

    _init(){
        this._currentShootTime = this.shootTime;
        this._changePlaneMode();
    }

    private _changePlaneMode(){
        this.schedule(this._modeChanged, 10, 3);
    }

    private _modeChanged(){
        this._combinationIntertal++;
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
