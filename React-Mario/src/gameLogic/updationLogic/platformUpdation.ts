export default function platformUpdation(
    platforms:platform[]
):void{
   for(let i = 0 ;i<platforms.length;i++){
    platforms[i].x -= platforms[i].speed
   }
}