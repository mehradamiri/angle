const ball = document.getElementById("ball");
const Rekt = ball.getBoundingClientRect();
const ballX = Rekt.left + Rekt.width / 2;
const ballY = Rekt.top + Rekt.height / 2;
const result = document.getElementById("result");
document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    positionElement(mouseX,mouseY)

    const angleDeg = angle(mouseX , mouseY , ballX , ballY);

    console.log(angleDeg);
    result.innerHTML = Math.round(angleDeg)+ "°" ;

})

const angle = (cx,cy,ex,ey) => {
    const dy = ey - cy;
    const dx = ex - cx;
    const red = Math.atan2(dy,dx);
    const deg = red * 180 / Math.PI;
    return deg;
}


const positionElement = (mouseX,mouseY)=> { 
    result.style.transform = `translate3d(${mouseX}px, ${mouseY - 200}px, 0)`;
  }
