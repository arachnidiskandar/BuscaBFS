/*****************************************************
* Test: Graph. Data Structures in JS, Feb 2016
* Anatol Marezhanyi http://linkedin.com/in/merezhany/ 
*****************************************************/
'use strict';

//GRAFO
class Graph {
  constructor() {
    this._nodes = {};
  }

  addNode(value) {
    this._nodes[value] = {
      edges: {}
    };
  }
  
  removeNode(value) {
    for (let connectedNode in this._nodes[value].edges) {
      this.removeEdge(value, connectedNode);
    }
    delete this._nodes[value];
  }

  hasNode(value) {
    return !!this._nodes[value];
  }
  
  addEdge(nodeFrom, nodeTo) {
    if (this.hasNode(nodeFrom) && this.hasNode(nodeTo)) {
      this._nodes[nodeFrom].edges[nodeTo] =
      this._nodes[nodeTo].edges[nodeFrom] = true;
    }
  }
  
  removeEdge(nodeFrom, nodeTo) {
    if (this.hasNode(nodeFrom) && this.hasNode(nodeTo)) {
      delete this._nodes[nodeFrom].edges[nodeTo];
      delete this._nodes[nodeTo].edges[nodeFrom];
    }
  }
  
  hasEdge(nodeFrom, nodeTo) {
    return !!this._nodes[nodeFrom].edges[nodeTo];
  }
}


//Implementação
const amigos = new Graph();
    
amigos.addNode('Carlinhos');
amigos.addNode('Jeremias');
amigos.addNode('Zé');
amigos.addNode('Zoio');
amigos.addNode('Jaum');
amigos.addNode('Kue');
amigos.addNode('Rodolfo');
amigos.addNode('Astolfo');
amigos.addNode('Rudinei');
amigos.addNode('Carlinhos');
amigos.addEdge('Carlinhos', 'Jeremias');
amigos.addEdge('Jeremias', 'Zé');
amigos.addEdge('Zé', 'Zoio');
amigos.addEdge('Carlinhos', 'Jaum');
amigos.addEdge('Zé', 'Kue');
amigos.addEdge('Zoio', 'Rodolfo');
amigos.addEdge('Jaum', 'Astolfo');
amigos.addEdge('Kue', 'Rudinei');
amigos.addEdge('Rodolfo', 'Carlinhos');
amigos.addEdge('Astolfo', 'Jeremias');
amigos.addEdge('Rudinei', 'Zé');
amigos.addEdge('Carlinhos', 'Zoio');
amigos.addEdge('Zoio', 'Jaum');
amigos.addEdge('Jaum', 'Kue');
amigos.addEdge('Kue', 'Rodolfo');
amigos.addEdge('Jeremias', 'Rodolfo');

