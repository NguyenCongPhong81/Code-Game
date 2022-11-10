import { _decorator, Component, Node, Input, EventTouch, Sprite, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('tiledTile')
export class tiledTile extends Component {
    @property(Sprite)
    label : Sprite = null;
    @property(Sprite)
    exit : Sprite =  null;
    @property(Vec2)
    pos : Vec2 = new Vec2();
    pos1 : Vec2 = new Vec2();
    arr : Vec2[] = [];
    arr1 : Vec2[] = [];
    x : Number = 0;
    y : Number = 0;


    onLoad(){
        
        this.node.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(Input.EventType.TOUCH_END, this.onTouchEnd, this )
    }
    start() {

    }

    update(deltaTime: number) {
        
        
        
        

    }
    
    onTouchStart(event: EventTouch){
        // const touch = even.touch!; 
        const location = event.getStartLocation();
        this.pos.set(location);
        // console.log(this.arr);
        
        // const location1 = event.getLocation();
        
        // this.arr.push(location.x, location.y);
        
        
        // this.arr1.push(location1.x, location1.y);
        // console.log(location.x);
        // console.log(location);
        // console.log(this.pos);

        // console.log(location1.x - location.x);
        

        
        


        
        // console.log(this.arr[this.arr.length -1]);
        
        
        // const location1 = event.getLocation();
       
        
        
        
        
    }
    onTouchEnd(event: EventTouch){
        const location1 = event.getLocation();

        // this.arr1.push(location1);
        // console.log(this.arr1);
        
        // if((location1.x - this.pos.x) < 90){
        //         this.label.enabled = true;
        //         this.exit.enabled = true;
        // }
        

        // this.pos1.add(location1);
        // console.log(location1);
        // console.log(this.pos1);
        // console.log(this.pos.x);
        // console.log(this.pos.x - location1.x);
        
        
        if((location1.x - this.pos.x ) < 10 || (location1.x - this.pos.x) < -10 ){
            this.label.enabled = true;
            this.exit.enabled = true;
            
            
        }
        
        
        console.log("pos:", this.pos.x);
        console.log("location1", location1.x);
        console.log(location1.x - this.pos.x);
        
        
    }
    
}

