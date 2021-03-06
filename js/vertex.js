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