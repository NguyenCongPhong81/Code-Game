import { _decorator, Component, Node, TiledMap, Prefab, TiledLayer, v2, Vec3, instantiate, EventTouch, TiledTile, input, Input, Sprite, Button, EventMouse } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('game')
export class game extends Component {
    @property(Sprite)
    label : Sprite = null;
    @property(Sprite)
    exit : Sprite =  null;
    @property(Button)
    btnExit : Button = null;
    @property(Node)
    map : Node =  null;
    onLoad(){
        input.on(Input.EventType.MOUSE_MOVE, this.onTouchStart, this)
        this.btnExit.node.on(Button.EventType.CLICK, this.close, this)
        // this.label.enabled = false;
        // this.exit.enabled = false;
    }

   
    start() {
        
        
    }

    update(deltaTime: number) {
        
    }
    onTouchStart(even: EventMouse){

        console.log(this.map);
        this.label.enabled =  true;
    }
    close(button: Button){
        this.label.enabled = false;
        this.exit.enabled = false;
        console.log("oke");
    }
}

