class Graph {
    constructor() {
        this.adjList = {};
    }
    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = {};
        }
    }
    addEdge(vertex1, vertex2, weight) {
        if (!this.adjList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjList[vertex1][vertex2] = weight;
        this.adjList[vertex2][vertex1] = weight;
    }
    removeEdge(vertex1, vertex2) {
        delete this.adjList[vertex1][vertex2];
        delete this.adjList[vertex2][vertex1];
    }
    hasEdge(vertex1, vertex2) {
        return (
            this.adjList[vertex1] &&
            this.adjList[vertex2] &&
            this.adjList[vertex1].hasOwnProperty(vertex2) &&
            this.adjList[vertex2].hasOwnProperty(vertex1)
        );
    }
    remove(vertex) {
        if (!this.adjList[vertex]) {
            return;
        }
        for (let adjV in this.adjList[vertex]) {
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
            for (let neighbor in this.adjList[currentVertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
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
  
            for (let neighbor in this.adjList[currentVertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            }
        }
    }
    display() {
        for (let vertex in this.adjList) {
            const neighbors = this.adjList[vertex];
            let neighborsStr = "";
            for (let neighbor in neighbors) {
                const weight = neighbors[neighbor];
                neighborsStr += `${neighbor} (${weight}) `;
            }
            console.log(vertex + "-->" + neighborsStr);
        }
    }
  }
  
  const g = new Graph();
  g.addVertex("A");
  g.addVertex("B");
  g.addVertex("C");
  g.addEdge("A", "B", 5);
  g.addEdge("B", "D", 8);
  g.addEdge("F", "D", 3);
  g.addEdge("A", "C", 4);
  g.bfs("A");
  g.dfs("A");
  g.display();