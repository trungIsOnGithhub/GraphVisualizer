class Vertex{
    constructor(x,y,label){
        this.x=x;
        this.y=y;
        this.label = label;
    }
    draw(code){//code!==0 draw with "code", ===0 draw with "count" and increase count
        // console.log("Dang o trong object "+this.x);
        if( count>10 ){return false;}//false means failed to draw vertex
        contxt.beginPath();
        contxt.fillStyle = "#0099CC";
        contxt.strokeStyle = "#0099CC";
        contxt.arc(this.x,this.y,20,0,2*Math.PI);
        contxt.fill();
        // contxt.stroke();
        contxt.closePath();

        contxt.beginPath();
        contxt.font = "20px Arial";
        contxt.fillStyle = "#00FF66";
        if(code===0){
            contxt.fillText(count,this.x-6,this.y+4);
            ++count;
        }
        else{
            // if(typeof(code)===number)
                { contxt.fillText(code,this.x-6,this.y+4); }
            // else
            //     { console.log("Have to be number"); }
        }
        contxt.closePath();
        return true;
    }
    highlight(){
        contxt.beginPath();
        // contxt.fillStyle = "blue";
        contxt.strokeStyle = "blue";
        contxt.lineWidth = 2;
        contxt.arc(this.x,this.y,25,0,2*Math.PI);
        // contxt.fill();
        contxt.stroke();
        contxt.closePath();

        // contxt.beginPath();
        // // console.log("DUYYYYY");
        // contxt.strokeStyle = "white";
        // contxt.lineWidth = 3;
        // contxt.arc(self_here.x,self_here.y,25,0,2*Math.PI);
        // contxt.stroke();
        // contxt.closePath();
        // // console.log("CACCCC");
    }
    offhighlight(){
        contxt.beginPath();
        // contxt.fillStyle = "blue";
        contxt.strokeStyle = "white";
        contxt.lineWidth = 5;
        contxt.arc(this.x,this.y,24,0,2*Math.PI);
        // contxt.fill();
        contxt.stroke();
        contxt.closePath();
    }
}

// function getRandomBetweenInclusive(min,max){
//     return Math.floor(Math.random()*(max-min+1)+min);
// }

// class Maze{
//     constructor(row,col,size){  //drawing square with 4 same size.
//         this.col = col;
//         this.row = row;
//         this.size = size;
//         this.my_stck = [];  //stack for dfs
//         this.my_maze = [];
//     }
//     init(){
//         for(let i=0; i<this.row; ++i){
//             let ro = [];
//             for(let j=0; j<this.col; ++j){
//                 let cell = new Cell(i,j,this.size,this.col);
//                 ro.push(cell);
//             }
//             this.my_maze.push(ro);
//         }
//         this.current = this.my_maze[0][0];
//     }
//     setup(){
//         maze.width = this.size;
//         maze.height = this.size;

//         contxt.strokeStyle = "#0099CC";
//         contxt.fillStyle = "gray";
//         contxt.lineWidth = 3;

//         // contxt.fillRect(0,0,maze.width,maze.height);

//         // for(let i=0; i<this.row; ++i){
//             // for(let j=0; j<this.col; ++j){
//             //     if(j%2==0) this.my_maze[3][j].drawSlopeDown();
//             //     else this.my_maze[3][j].drawSlopeUp();
//             // }
//             // this.my_maze[2][2].drawFromHere();
//         // }
//     }
// }
//WE USE beginPath() to set up drawing context
// class Cell{
//     constructor(row_idx, col_idx, parent_size, col_or_row){
//         this.row_idx = row_idx;
//         this.col_idx = col_idx;
//         this.cell_size = parent_size/col_or_row;
//     }
//     drawSlopeDown(){
//         contxt.beginPath();
//         contxt.moveTo(this.row_idx*this.cell_size,this.col_idx+this.cell_size);
//         console.log(this.row_idx);
//         console.log(this.col_idx);
//         console.log(this.cell_size);
//         // contxt.moveTo(0,0);
//         contxt.lineTo(400,100);
//         // contxt.lineTo((this.row_idx)*this.cell_size, (this.col_idx)*this.cell_size);
//         contxt.stroke();
//     }
//     drawSlopeUp(){
//         contxt.beginPath();
//         contxt.moveTo(this.row_idx,this.col_idx+this.cell_size);
//         contxt.lineTo(this.row_idx+this.cell_size,this.col);
//         contxt.stroke();
//     }
// }


//INIT AND START EXECUTING
// let dothi = new Maze(5,5,500);
// dothi.init();
// dothi.setup();