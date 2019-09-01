class Node { 
  constructor(valor) {
    this.valor = valor;
    this.vizinhos = [];
    this.buscado = false;
    this.nodePai = null;
  }
  addVizinhos(...args) {
    //para cada node passado, adiciona nos vizinhos
    args.forEach(vizinho => {
      this.vizinhos.push(vizinho);
      vizinho.vizinhos.push(this);
    });
    
  }
}

class Grafo {
  nodes = [];
  grafo = {};
  constructor() {
    this.começo = null;
    this.fim = null;
  }
  //Para cada node passado, adiciona no grafo.
  addNodes(...args) {
    
    args.forEach(node => {
      if (this.nodes.length == 0){
        this.começo = node;
        this.fim = node;
      }
      else{
        this.fim = node;
      }    
      this.nodes.push(node);
      let title = node.valor;
      this.grafo[title] = node;
    });
    
  }
  
}

function buscaDFS(pessoaBuscada, grafo) {
  var fila = []
  const começo = grafo.começo;
  começo.buscado = true;
  encontrei = false;
  fila.push(começo);
  while (fila.length > 0 ){
    var atual = fila.shift(); //pega o primeira da fila
    if (atual == pessoaBuscada) {
      encontrei = true;
      console.log("Achei o " + pessoaBuscada.valor);
      break;
    }
    else {
      vizinhos = atual.vizinhos;
      vizinhos.forEach(vizinho => {
        if (!vizinho.buscado) {
          vizinho.buscado = true;
          vizinho.nodePai = atual;
          fila.push(vizinho);
        }
      });
    }
  }
  if (encontrei == true){
    var caminho = [];
    caminho.push(pessoaBuscada);
    var prox = pessoaBuscada.nodePai;
    while (prox != null){
      caminho.unshift(prox);
      prox = prox.nodePai;
    }
    return caminho;
  }
  else { 
    return [];
  }
}


redeAmigos = new Grafo();
n1 = new Node("Node 1");
n2 = new Node("Node 2");
n3 = new Node("Node 3");
n4 = new Node("Node 4");
n5 = new Node("Node 5");
n6 = new Node("Node 6");
n7 = new Node("Node 7");
n8 = new Node("Node 8");
n9 = new Node("Node 9");
n10 = new Node("Node 10");
n11 = new Node("Node 11");
n12 = new Node("Node 12");
n13 = new Node("Node 13");
n14 = new Node("Node 14");
n15 = new Node("Node 15");
n16 = new Node("Node 16");


redeAmigos.addNodes(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15,n16,n7);
n1.addVizinhos(n2, n3);
n2.addVizinhos(n3,n5);
n5.addVizinhos(n1,n4, n6);
n6.addVizinhos(n7,n10, n15);
n7.addVizinhos(n8);
n8.addVizinhos(n9,n11,n12,n16);
n9.addVizinhos(n14,n7);
n10.addVizinhos(n5, n16);


caminho = '';
arr = buscaDFS(n15, redeAmigos);
for (let i = 0; i < arr.length; i++) {
  caminho += arr[i].valor;
  if (i+1 < arr.length){
    caminho += ' -> ';
  }
}
console.log("Caminho: " + caminho);

