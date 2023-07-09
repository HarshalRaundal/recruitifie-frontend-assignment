import React, { useRef, useEffect ,useCallback} from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null)
  
  let draw;
  const callBack = useCallback(() => {
        draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
        ctx.fill()
      }
    // Your code block goes here
    // Code inside this function will be memoized
  }, []); // Empty dependency array means the callback will never change
  
  useEffect(() => {
    /*
    Circle canvas logic
    */
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    // var canvas = document.getElementById('canvas'),
    // context = canvas.getContext('2d'),

    var NUM_POINTS = 8,
    FONT_HEIGHT = 7,
    MARGIN = 35,
    POINT_SIZE = 10,
    NUMERAL_SPACING = 10,
    RADIUS = canvas.width/2 - MARGIN,
    HAND_RADIUS = RADIUS + NUMERAL_SPACING,
    CENTER_X = canvas.width/2,
    CENTER_Y = canvas.height/2;

// Functions..........................................................

function drawCircle() {
   context.beginPath();
   context.fillStyle = props.theme; 
   context.arc(canvas.width/2, canvas.height/2,RADIUS, 0, Math.PI*2, true);
   context.strokeStyle = '#b1b1b1';
    context.lineWidth = '5'; 
   context.stroke();
}


function setNums() {
var tabNum = [],n=1;
  while(n <= NUM_POINTS){
    tabNum.push(n++);
  }
  return tabNum;

}



function drawPoint(angle, distance, number,color) {
  const x = MARGIN + distance + (distance * Math.sin(angle - 10));
  const y = MARGIN + distance + (distance * Math.cos(angle - 10));

  context.beginPath();
  context.arc(x, y, POINT_SIZE, 0, 2 * Math.PI);
  context.fillStyle = color; 
  context.fill();
  
  // Add numbering
  context.fillStyle = props.theme.text; // Set text color
  context.font = '12px Arial'; // Set font and size
  // Calculate text position for centering
  const textWidth = context.measureText(number.toString()).width;
  const textX = x - textWidth / 2;
  const textY = y + 4; // Adjust as needed

  context.fillText(number.toString(), textX+3.5, textY-2.5); // Draw text at calculated position
}


function drawArc( start,end,color){
    context.beginPath();
        context.strokeStyle = color;
        context.arc(canvas.width/2, canvas.height/2,RADIUS, start, end, true);
        context.lineWidth = '5'; 
       context.stroke();
}

function drawNumerals() {
var angle = 0, angleNum= 0;
var numerals = [];
var numeralWidth = 0;

let startAngleArc,endAngleArc;

props.role ==="Job Seeker" &&
    
    <>
    {startAngleArc=0}
    {endAngleArc=Math.PI + 80*(Math.PI/180)}
    {drawArc(startAngleArc,endAngleArc ,props.theme.bg)}
    {drawArc(endAngleArc,startAngleArc,"#E2E8F0")}
    </>
    props.role ==="Recruiter" &&
    <>
     {startAngleArc=(Math.PI/180)-90*(Math.PI/180)}
    {endAngleArc=Math.PI -10*(Math.PI/180)}
    {drawArc(startAngleArc,endAngleArc ,props.theme.bg)}
    {drawArc(endAngleArc,startAngleArc,"#E2E8F0")}
    </>
// drawArc(Math.PI + 80*(Math.PI/180),0,"#E2E8F0");

numerals = setNums();
const numbers = setNums();
numbers.reverse();
    let ctr = 0;

   numerals.forEach(function(numeral) {
    angle        = Math.PI/(numerals.length/2) * numeral + .15 ;
     
   
    drawPoint(angle, RADIUS, numbers[ctr],"#E2E8F0")
    if( props.role ==="Job Seeker" && (angle >= startAngleArc) && (angle >= endAngleArc + 40*(Math.PI/180))  )
    drawPoint(angle, RADIUS, numbers[ctr],props.theme.bg);
    (props.role === "Recruiter"  && (angle >= startAngleArc) && (angle <= endAngleArc  - 40*(Math.PI/180) )) && drawPoint(angle, RADIUS, numbers[ctr],props.theme.bg);
    ctr++;



    });

   

context.fillStyle = props.theme.text; // Set text color
context.font = ' 500 15px  sans-serif'; // Set font and size
context.textAlign = 'center'; // Center the text horizontally
context.textBaseline = 'middle'; // Center the text vertically
context.fillText(props.role, canvas.width/2, canvas.height/2);


}

function drawCenter() {
    context.beginPath();    
    context.arc(canvas.width/2, canvas.height/2, 65, 0, Math.PI*2, true);
   context.fillStyle = props.theme.bg; 
   context.fill();
}

function drawHand(pos) {
   var angle = (Math.PI*2) * (pos/NUM_POINTS) - Math.PI/2;
   
   context.moveTo(canvas.width/2, canvas.height/2);
   context.lineTo(canvas.width/2 + Math.cos(angle)*RADIUS,
                  canvas.height/2 + Math.sin(angle)*RADIUS);
   context.stroke();
}



function drawMain() {
   context.clearRect(0,0,canvas.width,canvas.height);
//    drawCircle();
   drawCenter();
   drawNumerals();
//    drawHand();
}


// Initialization................................................

context.font = FONT_HEIGHT + 'px Arial';
drawMain();
    /* */
  }, [draw])
  
  console.log(props);

  return (
  <canvas width="250" height="250" style={{border: "0px solid #d3d3d3"}} ref={canvasRef} {...props}/>
  );
}

export default Canvas