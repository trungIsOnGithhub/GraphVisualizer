let store_circle = null,//array of Vertex type, storing our current nodes.
    undo_order = null,//array of Vertex type, used for undo operation.

    control_bar = null,//our main control bar including buttons, input text field, drop down list.
    notif_out = null,//notification(text output 1)
    txt_out = null,//text output 2
    inpu = null,//input text field

    graph = null,//our main container for graph

    count = 1;//Number display on each node


//CANVAS, OUR MAIN DRAWING FIELD
const maze = document.querySelector(".maze"); // QuerySelector for class and getEbyID for id
//set size for canvas
maze.width = 600;
maze.height = 400;
//Create context for canvas
const contxt = maze.getContext("2d");
//CANVAS, OUR MAIN DRAWING FIELD


//MAIN CONTROL BAR
control_bar = document.getElementById("inner-con-bar");
//MAIN CONTROL BAR

//NOTIFICATION
notif_out = document.createElement("div");
notif_out.style.border = "1px dashed blue";
notif_out.style.marginBottom = "5px";
control_bar.appendChild(notif_out);
notif_out.innerHTML = "Notification here.";
//NOTIFICATION

//TEXT OUTPUT
txt_out = document.createElement("div");
txt_out.style.border = "1px dashed blue";
txt_out.style.marginBottom = "5px";
control_bar.appendChild(txt_out);
txt_out.innerHTML = "Text output here.";
//TEXT OUTPUT

//INPUT TEXT FIELD
inpu = document.createElement("input");
inpu.style.marginTop="10px";
inpu.style.marginBottom="28px";
inpu.setAttribute('type','text');

if(control_bar===null || control_bar===undefined){ console.log("Cannot create control bar.") ;}
else{ control_bar.appendChild(inpu); }
//INPUT TEXT FIELD


//MAIN CONTAINER OF OUR GRAPH
// const matrix = new Array(5).fill(0).map(() => new Array(4).fill(0));
graph = new Array(11);//Toi da 10 vertices
for(let i=1;i<=10;++i)
    { graph[i]=[] ;}
//MAIN CONTAINER OF OUR GRAPH

//OTHER CONTAINERS
store_circle = [];
store_circle.push(-1);//init and mark the beginning
undo_order = [];
//OTHER CONTAINERS
