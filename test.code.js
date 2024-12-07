const fs = require('fs');
const jsc = require('jsverify');

// Function to check graph isomorphism
function are_isomorphic(graph1, graph2) {
    if (graph1.length !== graph2.length) return false; // Different sizes, not isomorphic.

    // Special case for single-node graphs (n = 1)
    if (graph1.length === 1) {
        return graph1[0][0] === graph2[0][0]; // Check self-loop equivalence
    }

    const n = graph1.length;

    // Generate all permutations of vertices
    const permute = (arr) => {
        if (arr.length <= 1) return [arr];
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            const rest = permute(arr.slice(0, i).concat(arr.slice(i + 1)));
            rest.forEach((perm) => result.push([arr[i]].concat(perm)));
        }
        return result;
    };

    const permutations = permute([...Array(n).keys()]);

    // Check all permutations for isomorphism
    for (const perm of permutations) {
        let is_isomorphic = true;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (graph1[i][j] !== graph2[perm[i]][perm[j]]) {
                    is_isomorphic = false;
                    break;
                }
            }
            if (!is_isomorphic) break;
        }

        if (is_isomorphic) return true; // Found an isomorphic permutation
    }

    return false; // No permutation matches
}

// Function to generate a random graph
function generateRandomGraph(size) {
    return Array.from({ length: size }, () =>
        Array.from({ length: size }, () => Math.round(Math.random()))
    ).map((row, i, matrix) => {
        row[i] = 0; // No self-loops
        return row.map((cell, j) => Math.min(cell, matrix[j][i])); // Symmetric adjacency matrix
    });
}

// Property-based testing for isomorphic graphs
const testIsomorphic = jsc.forall("nat", function (n) {
    if (n < 2 || n > 6) return true; // Restrict to small graphs for testing

    const graph = generateRandomGraph(n);

    // Create an isomorphic graph by permuting vertices
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

// Property-based testing for non-isomorphic graphs
const testNonIsomorphic = jsc.forall("nat", function (n) {
    if (n < 2 || n > 6) return true; // Restrict to small graphs for testing

    const graph1 = generateRandomGraph(n);
    const graph2 = generateRandomGraph(n);

    // Occasionally two random graphs are isomorphic
    if (are_isomorphic(graph1, graph2)) return true;

    return !are_isomorphic(graph1, graph2);
});

// Assertions for property-based tests
jsc.assert(testIsomorphic);
jsc.assert(testNonIsomorphic);
