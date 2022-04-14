function sleep(milisecon){
    return new Promise((fun)=>{
        setTimeout( ()=>{
            fun();
        },milisecon);
    });
}
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


async function notif_out_display(notif,str){
    inpu.value = "";
    inpu.disabled = true;

    notif.innerHTML = "";
    await sleep(1000);
    notif.innerHTML = str;

    inpu.disabled = false;
}