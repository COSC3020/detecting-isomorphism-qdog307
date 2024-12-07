function are_isomorphic(graph1, graph2) {
    if (graph1.length !== graph2.length) return false;

    const calculateDegrees = (graph) => graph.map(row => row.reduce((sum, val) => sum + val, 0));
    const degrees1 = calculateDegrees(graph1);
    const degrees2 = calculateDegrees(graph2);

    if (degrees1.sort().join() !== degrees2.sort().join()) return false;

    const isValidMapping = (perm) => {
        for (let i = 0; i < graph1.length; i++) {
            for (let j = 0; j < graph1.length; j++) {
                if (graph1[i][j] !== graph2[perm[i]][perm[j]]) {
                    return false;
                }
            }
        }
        return true;
    };

    const permute = (arr, n = arr.length) => {
        if (n === 1) return [arr.slice()];
        const permutations = [];
        for (let i = 0; i < n; i++) {
            const subPermutations = permute(arr, n - 1);
            permutations.push(...subPermutations);
            const j = n % 2 === 0 ? i : 0;
            [arr[n - 1], arr[j]] = [arr[j], arr[n - 1]];
        }
        return permutations;
    };

    const vertices = [...Array(graph1.length).keys()];
    const permutations = permute(vertices);

    for (const perm of permutations) {
        if (isValidMapping(perm)) return true;
    }

    return false;
}
