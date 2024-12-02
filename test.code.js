const fs = require('fs');
const jsc = require('jsverify');


eval(fs.readFileSync('code.js') + '');


function generateRandomGraph(size) {
    return Array.from({ length: size }, () =>
        Array.from({ length: size }, () => Math.round(Math.random()))
    ).map((row, i, matrix) => {
        row[i] = 0; 
        return row.map((cell, j) => Math.min(cell, matrix[j][i])); 
    });
}


const testIsomorphic = jsc.forall("nat", function (n) {
    if (n < 2 || n > 6) return true; 

    const graph = generateRandomGraph(n);

    const perm = Array.from({ length: n }, (_, i) => i).sort(() => Math.random() - 0.5);

    
    const isomorphicGraph = Array.from({ length: n }, () =>
        Array.from({ length: n }, () => 0)
    );
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            isomorphicGraph[perm[i]][perm[j]] = graph[i][j];
        }
    }

    
    return are_isomorphic(graph, isomorphicGraph);
});

const testNonIsomorphic = jsc.forall("nat", function (n) {
    if (n < 2 || n > 6) return true; 

    const graph1 = generateRandomGraph(n);
    const graph2 = generateRandomGraph(n);

    
    if (are_isomorphic(graph1, graph2)) return true;

    
    return !are_isomorphic(graph1, graph2);
});


console.log("Testing isomorphic graphs...");
jsc.assert(testIsomorphic);

console.log("Testing non-isomorphic graphs...");
jsc.assert(testNonIsomorphic);

console.log("All tests passed!");
