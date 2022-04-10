//Maze generator with dfs

const maze = document.querySelector(".maze"); // QuerySelector for class and getEbyID for id
//set kich thuoc cho maze
maze.width = 600;
maze.height = 400;

//Tao context cho canvas
const contxt = maze.getContext("2d");
let count = 1;

//phan input button
let control_bar = document.getElementById("inner-con-bar");

//TEXT OUTPUT
let notif_out = document.createElement("div");
notif_out.style.border = "1px dashed blue";
notif_out.style.marginBottom = "5px";
control_bar.appendChild(notif_out);
notif_out.innerHTML = "Notification here.";
//TEXT OUTPUT

//TEXT OUTPUT
let txt_out = document.createElement("div");
txt_out.style.border = "1px dashed blue";
txt_out.style.marginBottom = "5px";
control_bar.appendChild(txt_out);
txt_out.innerHTML = "Text output here.";
//TEXT OUTPUT


function sleep(milisecon){
    return new Promise((fun)=>{
        setTimeout( ()=>{
            fun();
            // console.log("ndkjwakjdj");
        },milisecon);
    });
    // console.log("cacacacaca");
}


let adj_matrix = [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ];


let generate_table = function(table,data){
    //Pre styling
    table.style.width = "300px";
    table.style.fontSize = "medium";
    table.style.textAlign = "center";
    // table.style.border = "1px solid black";
    // table.style.padding = "1px";
    //generate_table_head
    let t_head = table.createTHead();
    let row1 = t_head.insertRow();
    let blank = row1.insertCell();
    blank.innerHTML = "";
    blank.style.border = "none";
    for( let i=1;i<=10;++i  ){
        let t_h = row1.insertCell();
        // let txt = document.createTextNode();
        t_h.innerHTML = "v"+i.toString();
        t_h.style.border = "2px solid #0099CC";
    }
    //generate_table_head

    //the remain
    for( let i=1;i<=10;++i ){
        let row = table.insertRow();
        let name_row = row.insertCell();
        name_row.innerHTML = "v"+i.toString();
        name_row.style.border = "2px solid #0099CC";
        for( let inner of data[i-1]  ){
            let cell = row.insertCell();
            cell.innerHTML = inner.toString();
            cell.style.border = "1px solid black";
        }
    }
    //the remain
}
let table = document.querySelector("table");
generate_table(table,adj_matrix);

// let visited = new Array(21).fill(false);

// async function dfs(starting_node){
//     // await sleep(1500);
//     store_circle[starting_node].highlight();
//     // await sleep(1000);
//     store_circle[starting_node].offhighlight();
//     // store_circle[starting_node].offhighlight();
//     console.log(starting_node);  
//     visited[starting_node] = true;
//     if(graph[starting_node].length===0){console.log("LOI O ADJACENCY LIST"); return;}
//     for(let adj of graph[starting_node]){
//         if(visited[adj]===false){ dfs(adj);}
//     }
//     await sleep(1200);
// }

// async function zo_dfs(starting_node){
    // let prom69 = new Promise(()=>{
        // dfs(starting_node);
    // });
    // await prom69;
    // console.log("vvvvvvvvvvvvvv");
    // let len=store_circle.length;
    // for(let i=1;i<len;++i){
    //     store_circle[i].offhighlight();
    // }
    // // store_circle[2].offhighlight();
    // recover_edges();
// }

// console.log("DOI 3 s ra cai nay")

async function waiting_effect(actions){
    if(actions.length===0){
        set_txt_out(txt_out,"Empty graph!!!");
        return;
    }
    txt_out.innerHTML = "Traverse order : "+actions.toString();
//     console.log(this.actions);
    inpu.disabled = true;

    let len=actions.length;
    for(let i=0;i<len;++i){
        await sleep(1200);
        store_circle[actions[i]].highlight();
    }
    await sleep(2200);
    for(let i=0;i<len;++i){
        // await sleep(1200);
        store_circle[actions[i]].offhighlight();
    }

    recover_edges();
    txt_out.innerHTML = "Text output here."

    inpu.disabled = false;
}

async function waiting_kruskal(actions,res){
    if(actions.length===0){
        set_txt_out(txt_out,"Empty graph!!!");
        return;
    }

    inpu.disabled = true;

    console.log(actions);
    let len=actions.length;
    console.log(len);
    for(let i=1;i<len;++i){
        await sleep(1200);
        if(actions[i][2]==-1){
            set_txt_out( txt_out, "Detected cycle, edge ignored." );
        }
        else{ draw_line_from_to(actions[i][0],actions[i][1],"#009933",3); }
        // console.log(actions[i][0]+" " +actions[i][1]);
    }
    // for(let i=1;i<len;++i){
    //     // await sleep(1200);
    //     draw_line_from_to(actions[i][0],actions[i][1],"white",3);
    //     console.log(actions[i][0]+" " +actions[i][1]);
    // }
    set_txt_out( txt_out, "Finished! Total cost of the MST is: "+res.toString() );
    await sleep(2800);

    // console.log("herererherererere");
    recover_edges();
    recover_vertices();

    inpu.disabled = false;
}

async function set_txt_out(to_set,string){
    inpu.value = "";
    inpu.disabled = true;

    to_set.innerHTML = "";
    await sleep(800);
    to_set.innerHTML = string;

    inpu.disabled = false;
}

function maze_da_nang(eve){
    // console.log("Da tuong tac voi input field");
    if(eve.key==="Enter"){    
        notif_out.innerHTML = "Notification here.";
        let str_inpu = inpu.value;
        inpu.value = "";
        // inpu.disabled = true;

        if(str_inpu===null || str_inpu===undefined || str_inpu==""){ notif_out_display(notif_out,"Empty input"); } 
        else if(/\d-\d-\d/.test(str_inpu)){  //regex test
            //them > cho weight
            let arr_inpu = str_inpu.split('-');
            let start = parseInt(arr_inpu[0]), end = parseInt(arr_inpu[1])
            weight = parseInt(arr_inpu[2]);
            if( weight > 96 ){
                notif_out_display(notif_out, "Edge weight must be smaller than or equal to 96.");
            }
            else{
                if(start<store_circle.length && end<store_circle.length && graph[start].indexOf(end)===-1)
                    { 
                    table.innerHTML = "";
                    draw_line_from_to(start,end); //THEM CANH VAO
                    graph[start].push(end);
                    graph[end].push(start);
                    undo_order.push([start,end]);
                    console.log(graph);
                    //   console.log(count);
                    adj_matrix[start-1][end-1] = weight; 
                    adj_matrix[end-1][start-1] = weight;
                    generate_table(table,adj_matrix);  
                    }
                else{
                    if(graph[start].indexOf(end)!==-1){ notif_out_display(notif_out,"Already exist."); }
                    else{ set_txt_out(txt_out,"One of two nodes doesn't exist."); }
                }
            }
            inpu.value = "";
        }
        else if(str_inpu==="dfs"){
            let algo = new myAlgo();
            // algo.dfs_zo(1);
            algo.dfs(1,count);
            waiting_effect(algo.actions);
        }
        else if(str_inpu==="check"){
            // let actions = [[1,2],[1,3]];
            // waiting_edges(actions);
            let algo = new myAlgo();
            let res = algo.check_connected(count);
            switch(res){
                case 0:
                    txt_out.innerHTML = "Not a connected graph.";
                    break;
                case 1:
                    txt_out.innerHTML = "Your graph is connected.";
                    break;
                case -1:
                    txt_out.innerHTML = "Empty graph!!!";
                    break;
            }
        }
        else if(str_inpu==="k"){
            let algo = new myAlgo();
            let res = algo.kruskal(count);

            // if( res <= 0 ){
            //     set_txt_out(txt_out,"Invalid Graph!!!");
            //     return;
            // }
            if(res > 0){ waiting_kruskal(algo.actions,res); }
            else{ set_txt_out(txt_out,"Not a connected graph."); }
            
            // txt_out.innerHTML = `Total cost of the MST is: ${res}`;
        }
        else if(str_inpu==="bfs"){
            let algo = new myAlgo();
            algo.bfs(1,count);
            waiting_effect(algo.actions);
        }
        else if(/\d->\d/.test(str_inpu)){
            let arr_inpu = str_inpu.split("->");
            let res_str = "Shortest path from "+arr_inpu[0].toString()+" to "+arr_inpu[1].toString()+" is: ";
            let algo = new myAlgo();
            if( arr_inpu[0] > 0 && arr_inpu[1] > 0 &&  arr_inpu[0] < count && arr_inpu[1] < count ){
                let res = algo.dijkstra(count,arr_inpu[0],arr_inpu[1]);
                if(res===969696){ res_str += "INFINITE."  }
                else{ res_str += res.toString(); }
                // console.log(algo.actions);
                res_str = res_str+"  with Path: "+algo.actions.join("--");
                txt_out.innerHTML = res_str;
            }
            else{
                set_txt_out(txt_out,"One of two nodes doesn't exist");
            }
        }
        else{ notif_out_display(notif_out,"Invalid input."); }
            // let he=parseInt(store_circle.length)-1;
            // for(let idx=1;idx<he;++idx)
            // { draw_line_from_to(idx,idx+1);
            //     undo_order.push([idx,idx+1]);
            //     // console.log(undo_order); }
            // }
        // inpu.disabled = false;
    }
    else if(eve.ctrlKey && eve.key==='z'){
        let len = undo_order.length;
        // console.log("ddddddddddddddd");
        if(len===0){ notif_out_display(notif_out,"No edge to delete.");  }
        else{
            //XOA CANH DI
            draw_line_from_to(undo_order[len-1][0],undo_order[len-1][1],"white",4);
            // contxt.clearRect(store_circle[undo_order[len-1][0]][0],store_circle[undo_order[len-1][0]][1],200,3);
            // console.log(store_circle[undo_order[len-1][0]][0]);
            // console.log(store_circle[undo_order[len-1][1]][1]);
            // contxt.clearRect(0,0,200,200);
            graph[undo_order[len-1][0]].pop();
            graph[undo_order[len-1][1]].pop();
            recover_vertices();
            undo_order.pop();
        }
    }
}

let inpu = document.createElement("input");inpu.style.marginTop="10px";inpu.style.marginBottom="28px";
inpu.setAttribute('type','text');
if(control_bar===null || control_bar===undefined){ console.log("Chua tao duoc control_bar") ;}
else{control_bar.appendChild(inpu);}
inpu.addEventListener('keydown', maze_da_nang);


function recover_vertices(){ //recover all nodes that have been partially clear due to edge removal
    let len=store_circle.length;
    for(let i=1;i<len;++i){
        store_circle[i].draw(i);
        // all the node in store circles is already invalid, so we dont need to check if count>10
    }
}

function recover_edges(){ //recover all edges that have  been partially clear due to edge removal
    let len=undo_order.length;
    for(let i=0;i<len;++i){
        draw_line_from_to(undo_order[i][0],undo_order[i][1]);
    }
}


//START GRAPH SECTION
// const matrix = new Array(5).fill(0).map(() => new Array(4).fill(0));
let graph = new Array(11);//Toi da 20 vertices
for(let i=1;i<=10;++i)
    { graph[i]=[] ;}
//END GRAPH SECTION
let store_circle = []; store_circle.push(-1);//init and mark the beginning
let undo_order = [];



function draw_line_from_to(id1,id2,color="#0099CC",lw=3){
    // ax+by=c
    contxt.beginPath();
    contxt.strokeStyle = color;
    contxt.fillStyle = color;
    contxt.lineWidth = lw;
    contxt.moveTo(store_circle[id1].x,store_circle[id1].y);
    contxt.lineTo(store_circle[id2].x,store_circle[id2].y);
    contxt.stroke();
    contxt.closePath();

    // if(color==="white"){  //color white mean delete
    //     contxt.beginPath();
    //     contxt.fillStyle = "#0099CC";
    //     contxt.strokeStyle = "#0099CC";
    //     contxt.arc(store_circle[id1].x,store_circle[id1].y,20,0,2*Math.PI);
    //     contxt.fill();
    //     // contxt.stroke();
    //     contxt.arc(store_circle[id2].x,store_circle[id2].y,20,0,2*Math.PI);
    //     contxt.fill();
    //     // contxt.stroke();
    //     contxt.closePath();
    // }

    contxt.beginPath();
    contxt.font = "20px Arial";
    contxt.fillStyle = "#00FF66";
    contxt.fillText(id1,store_circle[id1].x-6,store_circle[id1].y+4);
    contxt.fillText(id2,store_circle[id2].x-6,store_circle[id2].y+4);
    contxt.closePath();
}

async function notif_out_display(notif,str){
    inpu.value = "";
    inpu.disabled = true;

    notif.innerHTML = "";
    await sleep(1000);
    notif.innerHTML = str;

    inpu.disabled = false;
}


let drop_list = document.createElement("select");drop_list.style.marginTop="10px";drop_list.style.marginBottom="28px";
let opt = document.createElement("option");
let opt0 = document.createElement("option");
let opt1 = document.createElement("option");
let opt2 = document.createElement("option");
let opt3 = document.createElement("option");
let opt4 = document.createElement("option");
opt.innerHTML = "Choose operation";
opt0.innerHTML = "DFS";
opt1.innerHTML = "BFS";
opt2.innerHTML = "Kruskal Algorithm";
opt3.innerHTML = "Check connected graph";
// opt3.addEventListener( "change", ()=>{
//     console.log("dạkdsk");
//     notif_out.innerHTML = "Type \'check\' into the input field and press \'Enter\'";
// });
opt4.innerHTML = "Shortest Path(Dijkstra)";
drop_list.appendChild(opt);
drop_list.appendChild(opt0);
drop_list.appendChild(opt1);
drop_list.appendChild(opt2);
drop_list.appendChild(opt3);
drop_list.appendChild(opt4);
drop_list.addEventListener("click",()=>{
    let idx = drop_list.selectedIndex;
    switch(idx){
        case 0:
            notif_out.innerHTML = "Notification here.";
            break;
        case 1:
            notif_out.innerHTML = "type 'dfs' into text field and press 'Enter' to start DFS from vertex/node 1.";
            break;
        case 2:
            notif_out.innerHTML = "type 'bfs' into text field and press 'Enter' to start BFS from vertex/node 1.";
            break;
        case 3:
            notif_out.innerHTML = "type 'k' into text field and press 'Enter' to run Kruskal algorithm.";
            break;
        case 4:
            notif_out.innerHTML = "type 'check' into text field and press 'Enter' to run check if graph is connected.";
            break;
        case 5:
            notif_out.innerHTML = "Example: type '1->2' into text field to find shortest path from vertex 1 to vertex 2 using Dijkstra.";
            break;
    }
    inpu.value = "";
    txt_out.innerHTML = "Text output here";
})
control_bar.appendChild(drop_list);
//phan input button

// //Undo button
// let undo_btn = document.createElement("button");
// undo_btn.innerHTML = "UNDO EDGE";
// control_bar.appendChild(undo_btn);
// undo_btn.addEventListener("click", ()=>{
//     let len = undo_order.length;
//     console.log("ddddddddddddddd");
//     if(len===0){ notif_out.innerHTML = "No edge to delete.";  }
//     else{
//         //XOA CANH DI
//         draw_line_from_to(undo_order[len-1][0],undo_order[len-1][1],"white",4);
//         // contxt.clearRect(store_circle[undo_order[len-1][0]][0],store_circle[undo_order[len-1][0]][1],200,3);
//         // console.log(store_circle[undo_order[len-1][0]][0]);
//         // console.log(store_circle[undo_order[len-1][1]][1]);
//         // contxt.clearRect(0,0,200,200);
//         graph[undo_order[len-1][0]].pop();
//         graph[undo_order[len-1][1]].pop();
//         recover_vertices();
//         undo_order.pop();
//     }   
// });
// //Undo button
//NUT CLEAR
let clear_btn = document.createElement("button");
clear_btn.innerHTML = "CLEAR";
control_bar.appendChild(clear_btn);
clear_btn.addEventListener("click",()=>{
        contxt.clearRect(0,0,maze.width,maze.height);

        count = 1;
        console.log("Pressed");
        graph.forEach((ele)=>{
            ele.splice(0);
        });

        undo_order.splice(0);
        store_circle.splice(0); 
        store_circle.push(-1);

        table.innerHTML = "";
        for(let i=0;i<10;++i){for(let j=0;j<10;++j){adj_matrix[i][j]=-1; }}

        generate_table(table,adj_matrix);

        txt_out.innerHTML = "Text output here.";
        notif_out.innerHTML = "Notification here.";
        inpu.value = "";
});
//NUT CLEAR
//Freeze button
let freezer = document.createElement("button");
freezer.innerHTML = "FREEZE";
freezer.style.backgroundColor = "#0099CC";
control_bar.appendChild(freezer);
freezer.addEventListener("click", ()=>{
    // console.log("Dâdadadwd");
    maze.removeEventListener("click",vertex_display);
    inpu.removeEventListener("keydown",maze_da_nang);

    unfreezer.style.backgroundColor = "#0099CC";
    freezer.style.backgroundColor = "#FFFFFF";
});
//Freeze button
//UnFreeze button
let unfreezer = document.createElement("button");
unfreezer.innerHTML = "UNFREEZE";
unfreezer.style.backgroundColor = "#FFFFFF";
control_bar.appendChild(unfreezer);
unfreezer.addEventListener("click", ()=>{
    // console.log("7932173991");
    maze.addEventListener("click",vertex_display);
    inpu.addEventListener("keydown",maze_da_nang);

    freezer.style.backgroundColor = "#0099CC";
    unfreezer.style.backgroundColor = "#FFFFFF";
});
//UnFreeze button

//DUNG DE VE CAC NODE BANG CACH AN LEN MAN HINH
function getCursorPointOnCanvas(canv, eve){
    const rect = canv.getBoundingClientRect();
    let x = eve.clientX - rect.left;
    let y = eve.clientY - rect.top;
    return [x,y];
}
function vertex_display(eve){
    let curr_point = getCursorPointOnCanvas(maze,eve);
    let ver = new Vertex(curr_point[0],curr_point[1],count);
    let is_drawed = ver.draw(0);
    if(is_drawed){ store_circle.push(ver); }
    else{ notif_out_display(notif_out,"We only allow at most 10 vertices/nodes."); }
}
maze.addEventListener("click", vertex_display);
//DUNG DE VE CAC NODE BANG CACH AN LEN MAN HINH
