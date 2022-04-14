//ADJACENCY TABLE
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
//ADJACENCY TABLE

//OPERATION ON TABLE
let generate_table = function(table,data){
    //Pre styling
    table.style.width = "300px";
    table.style.fontSize = "medium";
    table.style.textAlign = "center";
    //generate_table_head
    let t_head = table.createTHead();
    let row1 = t_head.insertRow();
    let blank = row1.insertCell();
    blank.innerHTML = "";
    blank.style.border = "none";
    for( let i=1;i<=10;++i  ){
        let t_h = row1.insertCell();
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

//Table Object for further use
let table = document.querySelector("table");

//First call to generate table on the screen
generate_table(table,adj_matrix);
//OPERATION ON TABLE