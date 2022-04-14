//CANVAS, OUR MAIN DRAWING FIELD
const maze = document.querySelector(".maze"); // QuerySelector for class and getEbyID for id
//set size for canvas
maze.width = 600;
maze.height = 400;
//Create context for canvas
const contxt = maze.getContext("2d");
//CANVAS, OUR MAIN DRAWING FIELD


//MAIN CONTROL BAR
let control_bar = document.getElementById("inner-con-bar");
//MAIN CONTROL BAR
//NOTIFICATION
let notif_out = document.createElement("div");
notif_out.style.border = "1px dashed blue";
notif_out.style.marginBottom = "5px";
control_bar.appendChild(notif_out);
notif_out.innerHTML = "Notification here.";
//NOTIFICATION
//TEXT OUTPUT
let txt_out = document.createElement("div");
txt_out.style.border = "1px dashed blue";
txt_out.style.marginBottom = "5px";
control_bar.appendChild(txt_out);
txt_out.innerHTML = "Text output here.";
//TEXT OUTPUT

let inpu = document.createElement("input");inpu.style.marginTop="10px";inpu.style.marginBottom="28px";
inpu.setAttribute('type','text');
if(control_bar===null || control_bar===undefined){ console.log("Chua tao duoc control_bar") ;}
else{control_bar.appendChild(inpu);}


//START GRAPH SECTION
// const matrix = new Array(5).fill(0).map(() => new Array(4).fill(0));
let graph = new Array(11);//Toi da 10 vertices
for(let i=1;i<=10;++i)
    { graph[i]=[] ;}
//END GRAPH SECTION
let store_circle = []; store_circle.push(-1);//init and mark the beginning
let undo_order = [];


let count = 1;//Number display on each node
