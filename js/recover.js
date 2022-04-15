function recover_vertices(){
    //recover all nodes that have been partially clear due to edge removal
    let len = store_circle.length;
    for(let i=1;i<len;++i){ store_circle[i].draw(i); }
     // all the node in store circles is already invalid, so we dont need to check if count>10
}
function recover_edges(){ //recover all edges that have  been partially clear due to edge removal
    let len = undo_order.length;
    for(let i=0;i<len;++i){ draw_line_from_to(undo_order[i][0],undo_order[i][1]); }
}