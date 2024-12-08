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

