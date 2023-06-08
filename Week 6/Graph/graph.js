//Graph with Map
class Graph {
  constructor(noofvertices) {
    this.noofvertices = noofvertices;
    this.adjList = new Map();
  }
  addVertex(v) {
    this.adjList.set(v, []);
  }
  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }
  printGraph() {
    var keys = this.adjList.keys();
    for (var i of keys) {
      var values = this.adjList.get(i);
      var conc = "";
      for (var j of values) conc += j + " ";
      console.log(i + " -> " + conc);
    }
  }
}
const graph=new Graph(3)
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdge('A','B')
graph.addEdge('A','C')
graph.printGraph()


