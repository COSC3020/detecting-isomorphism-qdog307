const are_isomorphic = require('./code');

// Test cases
// Single-node graphs
const graph1 = [[0]]; // No self-loop
const graph2 = [[0]]; // No self-loop
const graph3 = [[1]]; // Self-loop

// Two-node graphs
const graph4 = [
    [0, 1],
    [1, 0],
]; // Two nodes connected
const graph5 = [
    [0, 1],
    [1, 0],
]; // Isomorphic to graph4
const graph6 = [
    [0, 0],
    [0, 0],
]; // Disconnected two nodes

// Three-node graphs
const graph7 = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
]; // A simple chain
const graph8 = [
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
]; // Isomorphic to graph7
const graph9 = [
    [0, 1, 1],
    [1, 0, 1],
    [1, 1, 0],
]; // Fully connected graph
const graph10 = [
    [0, 1, 0],
    [1, 0, 0],
    [0, 0, 0],
]; // Partially connected graph, non-isomorphic to others

// Four-node graphs
const graph11 = [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
]; // Square (cycle graph)
const graph12 = [
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0],
]; // Another square, isomorphic to graph11

const graph13 = [
    [0, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 0],
]; // Fully connected four-node graph

const testCases = [
    { graph1: graph1, graph2: graph2, expected: true, description: "Single-node graphs without self-loops" },
    { graph1: graph1, graph2: graph3, expected: false, description: "Single-node graph with and without self-loop" },
    { graph1: graph4, graph2: graph5, expected: true, description: "Two connected nodes" },
    { graph1: graph4, graph2: graph6, expected: false, description: "Two connected vs disconnected nodes" },
    { graph1: graph7, graph2: graph8, expected: true, description: "Three-node chain graphs" },
    { graph1: graph7, graph2: graph9, expected: false, description: "Three-node chain vs fully connected graph" },
    { graph1: graph11, graph2: graph12, expected: true, description: "Four-node cycle graphs (square vs square)" },
    { graph1: graph11, graph2: graph13, expected: false, description: "Four-node cycle graph vs fully connected graph" },
];

// This part of the code was, with testcases.foreach was the part I needed from chat to make sure it tested correctly. 
function runTests() {
    console.log("Running tests...");

    // Track overall success
    let allTestsPassed = true;

    // Run each test case
    testCases.forEach(({ graph1, graph2, expected, description }, index) => {
        const result = are_isomorphic(graph1, graph2);
        if (result !== expected) {
            console.error(`Test Case ${index + 1} Failed: ${description}\nExpected: ${expected}, Got: ${result}`);
            allTestsPassed = false;
        } else {
            console.log(`Test Case ${index + 1} Passed: ${description}`);
        }
    });

    // Final summary
    if (allTestsPassed) {
        console.log("All tests passed!");
    } else {
        console.error("Some tests failed.");
    }
}

// Run the tests
runTests();
