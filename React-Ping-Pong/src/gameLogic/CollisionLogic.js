// Replace your function with this improved version
export default function CollisionLogic(paddles, ball) {
  const { Player: left, Enemy: right } = paddles;


  // helper sign
  const sgn = v => (v >= 0 ? 1 : -1);


  function circleRectOverlap(circle, rect) {
    const closestX = Math.max(rect.x, Math.min(circle.x, rect.x + rect.width));
    const closestY = Math.max(rect.y, Math.min(circle.y, rect.y + rect.height));
    const dx = circle.x - closestX;
    const dy = circle.y - closestY;
    return { collided: dx * dx + dy * dy <= circle.radius * circle.radius, dx, dy, closestX, closestY };
  }


  function resolveCircleRect(circle, rect) {

    const rectCx = rect.x + rect.width / 2;
    const rectCy = rect.y + rect.height / 2;
    const diffX = circle.x - rectCx;
    const diffY = circle.y - rectCy;
    const halfW = rect.width / 2;
    const halfH = rect.height / 2;


    const overlapX = halfW + circle.radius - Math.abs(diffX);
    const overlapY = halfH + circle.radius - Math.abs(diffY);

    if (overlapX > 0 && overlapY > 0) {
  
      if (overlapX < overlapY) {
  
        circle.dx = -circle.dx;
    
        circle.x += sgn(diffX) * overlapX;
      } else {
 
        circle.dy = -circle.dy;
        circle.y += sgn(diffY) * overlapY;
      }
      return true;
    }
    return false;
  }


  if (circleRectOverlap(ball, left).collided) {
    resolveCircleRect(ball, left);
    return; 
  }

  if (circleRectOverlap(ball, right).collided) {
    resolveCircleRect(ball, right);
    return;
  }


}
