import { _decorator, Component, Node, UI, ScrollView, input, Input, EventTouch } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('scrollMap')
export class scrollMap extends Component {
    

    
    onLoad(){
        input.on(Input.EventType.TOUCH_START, this.onTouchMove, this)
    }
    
    start() {

    }

    update(deltaTime: number) {
        
    }
    onTouchMove(even: EventTouch){
        console.log("ok");
    }
}

