class myAlgo{
    constructor(){
        this.visited = new Array(12).fill(false);
        this.actions = [];
    }
    dfs(starting_node,current_count){
        if(current_count<2){return;}
        // store_circle[starting_node].highlight();
        // sleep(2000);
        console.log(starting_node);
        if( !this.visited[starting_node] ){ this.actions.push(starting_node); }
        this.visited[starting_node] = true;
        if(graph[starting_node].length===0){console.log("Something wrong with Adj List???"); return;}
        for(let adj of graph[starting_node]){
            if(this.visited[adj]===false){this.dfs(adj);}
        }
    }
    bfs(starting_node,current_count){
        if(current_count<2){return;}
        let queue=[];
        queue.push(starting_node);

        while(queue.length>0){
            let curr=queue[0];
            queue.shift();
            if( !this.visited[curr] ){ this.actions.push(curr); }
            this.visited[curr] = true;

            for(let adj of graph[curr]){
                if(this.visited[adj]===false){
                    queue.push(adj);
                }
            }
        }

        // for(let i=1;i<=5;++i){
        //     console.log(this.visited[i]);
        // }
    }
    check_connected(current_count){
        if(current_count<=1){ return -1;  }//You have no graph

        this.bfs(1);

        for(let i=1;i<current_count;++i){
            if(this.visited[i]===false){ return 0;  }//unconnected
        }

        return 1;//connected
    }
    kruskal(current_count){
        if(current_count<2){return;}
        //CHECK CONNECTED
        let check = this.check_connected(current_count);
        if( check <= 0 ){ return -1;  }
        //CHECK CONNECTED
        let sorted_edges = [];//unsorted and just edges list
        sorted_edges.push([]);
        for(let i=1;i<=10;++i){
            for(let neigh of graph[i]){
                // if( adj_matrix[i-1][neigh-1] === -1 ){//INFINITE
                //     sorted_edges.push([ i,neigh,-1 ]);
                // }
                sorted_edges.push([ i,neigh, adj_matrix[i-1][neigh-1] ]);
            }
        }

        sorted_edges.sort( (ele1, ele2) => { 
            if( ele1[2] < ele2[2] )
                { return -1; }
            else if( ele1[2] > ele2[2] )
                { return 1; }

            return 0;
        } )
        console.log(sorted_edges);

        let tree_id = new Array(current_count).fill(null);
        for(let index in tree_id){ tree_id[index] = parseInt(index);  }
        // console.log(tree_id);

        let picked_tree = sorted_edges[0][0], cost = 0;

        for(let edge of sorted_edges){
            if(tree_id[edge[1]] !== picked_tree){
                tree_id[edge[0]] = picked_tree;
                tree_id[edge[1]] = picked_tree;

                cost += edge[2];
            }
            else{ edge[2] = -1;  }
        }

        this.actions = sorted_edges;

        return cost;
    }
    dijkstra(count,starting_node,end_node){
        let current_count = count;

        let curr_shortest = new Array(current_count).fill(969696); //INFINITE IS 969696
        curr_shortest[starting_node] = 0;
        let marked = new Array(current_count).fill(false);
        let pred = new Array(current_count).fill(-1);

        while( current_count > 1 ){
            //PICK MIN
            let chosen = 0, curr_max = 969696;
            for(let v in curr_shortest){
                if( marked[v] === false && curr_shortest[v] < curr_max )
                    { chosen = v;
                      curr_max = curr_shortest[v]; }
            }
            console.log(chosen);
            //PICK MIN
            if( curr_shortest[chosen] === 969696 )
                { break; }

            marked[chosen] = true;
            //RELAXATION
            for( let neigh of graph[chosen] ){
                if( curr_shortest[neigh] > curr_shortest[chosen] + adj_matrix[chosen-1][neigh-1] ){
                    curr_shortest[neigh] = curr_shortest[chosen] + adj_matrix[chosen-1][neigh-1];
                    pred[neigh] = chosen;
                }
            }
        
            --current_count;
        }
        // console.log(curr_shortest);
        // console.log(marked);

        // console.log(pred);
        let path = [];
        if( curr_shortest[end_node]!==969696 ){
            for(let v=end_node; v!==starting_node && v!==-1; v=pred[v]){ path.unshift(v);  }
            path.unshift(starting_node);
        }

        // console.log(path);
        this.actions = path;

        return curr_shortest[end_node];
    }
}