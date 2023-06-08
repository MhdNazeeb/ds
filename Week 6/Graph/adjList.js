class Graph {
    constructor() {
        this.adjList = {};
    }
    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = new Set();
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjList[vertex1].add(vertex2); 
        this.adjList[vertex2].add(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjList[vertex1].delete(vertex2);
        this.adjList[vertex2].delete(vertex1);
    }
    hasEdge(vertex1, vertex2) {
        return (
            this.adjList[vertex1].has(vertex2) && this.adjList[vertex2].has(vertex1)
        );
    }
    remove(vertex) {
        if (!this.adjList) {
            return;
        }
        for (let adjV of this.adjList[vertex]) {
            this.removeEdge(vertex, adjV);
        }
        delete this.adjList[vertex];
    }
    bfs(startVertex) {
        const queue = [];
        const visited = {};
        visited[startVertex] = true;
        queue.push(startVertex);
        while (queue.length) {
            const currentVertex = queue.shift();
            console.log(currentVertex);
            this.adjList[currentVertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
    }
    dfs(startVertex) {
        const visited = {};
        const stack = [];

        visited[startVertex] = true;
        stack.push(startVertex);

        while (stack.length > 0) {
            const currentVertex = stack.pop();
            console.log(currentVertex);

            this.adjList[currentVertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
    }
    display() {
        for (let vertex in this.adjList) {
            console.log(vertex + "-->" + [...this.adjList[vertex]]);
        }
    }
}
const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addEdge("A", "B");
g.addEdge("B","D")
g.addEdge("F", "D");
g.addEdge("A", "C");
// g.bfs("A");
g.dfs("A")
g.display();
