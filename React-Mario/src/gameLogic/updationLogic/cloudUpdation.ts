export default function cloudUpdation(clouds:React.RefObject<Cloud[]>,canvas:HTMLCanvasElement){
    
    clouds.current.forEach(obj => {
        if(obj.x > 0){
            obj.x = obj.x - obj.speed;
        }
        else{
            obj.x = canvas.width;
        }
});

}