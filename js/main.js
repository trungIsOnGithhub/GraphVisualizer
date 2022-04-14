
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
                    else{ set_txt_out(txt_out,"One of two nodes(or both) doesn't exist."); }
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
                set_txt_out(txt_out,"One of two nodes(or both) doesn't exist");
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

    contxt.beginPath();
    contxt.font = "20px Arial";
    contxt.fillStyle = "#00FF66";
    contxt.fillText(id1,store_circle[id1].x-6,store_circle[id1].y+4);
    contxt.fillText(id2,store_circle[id2].x-6,store_circle[id2].y+4);
    contxt.closePath();
}
