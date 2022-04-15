//ADDING BUTTON TO CONTROL BAR
//CLEAR BUTTON
let clear_btn = document.createElement("button");
clear_btn.innerHTML = "CLEAR";

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
//CLEAR BUTTON

//FREEZE BUTTON
let freezer = document.createElement("button");
freezer.innerHTML = "FREEZE";
freezer.style.backgroundColor = "#0099CC";

freezer.addEventListener("click", ()=>{
    maze.removeEventListener("click",vertex_display);
    inpu.removeEventListener("keydown",multiMaker);

    unfreezer.style.backgroundColor = "#0099CC";
    freezer.style.backgroundColor = "#FFFFFF";
});
//FREEZE BUTTON

//UNFREEZE BUTTON
let unfreezer = document.createElement("button");
unfreezer.innerHTML = "UNFREEZE";
unfreezer.style.backgroundColor = "#FFFFFF";

unfreezer.addEventListener("click", ()=>{
    maze.addEventListener("click",vertex_display);
    inpu.addEventListener("keydown",multiMaker);

    freezer.style.backgroundColor = "#0099CC";
    unfreezer.style.backgroundColor = "#FFFFFF";
});
//UNFREEZE BUTTON


control_bar.appendChild(clear_btn);
control_bar.appendChild(freezer);
control_bar.appendChild(unfreezer);
//ADDING BUTTON TO CONTROL BAR

//ADDING DROPDOWN LIST TO CONTROL BAR
//drop down list
let drop_list = document.createElement("select");
drop_list.style.marginTop = "10px";
drop_list.style.marginBottom = "28px";
//drop down list
//drop down list Options
let opt = document.createElement("option");
opt.innerHTML = "Choose operation";
drop_list.appendChild(opt);

let opt0 = document.createElement("option");
opt0.innerHTML = "DFS";
drop_list.appendChild(opt0);

let opt1 = document.createElement("option");
opt1.innerHTML = "BFS";
drop_list.appendChild(opt1);

let opt2 = document.createElement("option");
opt2.innerHTML = "Kruskal Algorithm";
drop_list.appendChild(opt2);

let opt3 = document.createElement("option");
opt3.innerHTML = "Check connected graph";
drop_list.appendChild(opt3);

let opt4 = document.createElement("option");
opt4.innerHTML = "Shortest Path(Dijkstra)";
drop_list.appendChild(opt4);
//drop down list Options

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
//ADDING DROPDOWN LIST TO CONTROL BAR