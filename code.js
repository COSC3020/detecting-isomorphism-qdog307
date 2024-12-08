
function are_isomorphic(graph1, graph2) {
    //The first check shoudld be length 
    if (graph1.length !== graph2.length) 
        return false;

    const n = graph1.length;

    function countEdges(graph) {
        return graph.reduce((sum, row) => sum + row.reduce((rSum, val) => rSum + val, 0), 0) / 2;
    }
    if (countEdges(graph1) !== countEdges(graph2)) return false;

    //This generates permuations, I asked for help from chat checking this 
    function permute(arr) {
        if (arr.length <= 1) return [arr];
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            const rest = permute(arr.slice(0, i).concat(arr.slice(i + 1)));
            rest.forEach((perm) => result.push([arr[i]].concat(perm)));
        }
        return result;
    }

    // this looks at all mappings 
    const permutations = permute([...Array(n).keys()]);

    // this checks to see if they are isomorphic
    for (const perm of permutations) {
        let is_isomorphic = true;

        // comapre the adjency here 
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (graph1[i][j] !== graph2[perm[i]][perm[j]]) {
                    is_isomorphic = false;
                    break;
                }
            }
            if (!is_isomorphic) break;
        }

        // the graphs are isomorphic
        if (is_isomorphic) return true;
    }

    //  graphs are not isomorphic
    return false;
}

// Export the function for testing
module.exports = are_isomorphic;
