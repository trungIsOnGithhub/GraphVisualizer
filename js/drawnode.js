//DRAWING NODE BY CLICK ON CANVAS FIELD
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
//DRAWING NODE BY CLICK ON CANVAS FIELD


//this function use contxt from preinit.js
function draw_line_from_to(id1, id2, color="#0099CC", lw=3){
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