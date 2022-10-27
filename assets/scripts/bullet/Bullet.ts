
import { _decorator, Component, Node, sp } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Bullet
 * DateTime = Tue Oct 25 2022 21:12:09 GMT+0800 (中国标准时间)
 * Author = zhangyuzhi
 * FileBasename = Bullet.ts
 * FileBasenameNoExtension = Bullet
 * URL = db://assets/scripts/bullet/Bullet.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 

@ccclass('Bullet')
export class Bullet extends Component {
    // [1]
    // dummy = '';

    // [2]
    
    private _bulletSpeed:number = 0;
    private _isEnemyBullet:boolean = false;
    // start () {
    //     // [3]
    // }

    update (deltaTime: number) {
        const pos = this.node.position;
        let moveLength = 0;
        let outOfRange = -50;
        if(this._isEnemyBullet){
            moveLength = pos.z + this._bulletSpeed;
            outOfRange = 50;
        }else{
            moveLength = pos.z - this._bulletSpeed;   
        }
         
        this.node.setPosition(pos.x, pos.y, moveLength);
        
        //0

        if(this._isEnemyBullet){
            if(moveLength > outOfRange){
                this.node.destroy();
                console.log("bullet is out of window");
            }
        }else{
            if(moveLength < outOfRange){
                this.node.destroy();
                console.log("bullet is out of window");
            }
        }
    }

    setBulletSpeed(speed:number, isEnemyBullet:boolean){
        this._bulletSpeed = speed;
        this._isEnemyBullet = isEnemyBullet;
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
