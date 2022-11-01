import { _decorator, Component, Node, TiledMap, Prefab, TiledLayer, v2, Vec3, instantiate, EventTouch, TiledTile, input, Input } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('game')
export class game extends Component {
    @property(Prefab)
    public nodePrefab : Prefab | null = null;

    @property(TiledLayer)
    public tiledLayer : TiledLayer | null = null;

    @property(TiledTile)
    public tiledTile : TiledTile | null =  null;
    layer: any;

    
    // onLoad(){
        
    //     input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
    //     const tiledTile = this.layer.getTiledTileAt(0, 0);
    //     console.log(tiledTile);
    // }
    start() {

        
    }
    
    update(deltaTime: number) {
        
    }
    onTouchStart(){
        
        
        
    }
}

