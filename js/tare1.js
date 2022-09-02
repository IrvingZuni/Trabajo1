    class Producto{
    constructor(codigo,nombre,cantidad,precio){
        this.codigo=codigo;
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precio=cantidad;
        this.hijoI=null;
        this.hijoD=null;
    }
    infoHtml() {
        return "<p>Nombre " + this.nombre + " Codigo " + this.codigo + "</p>"
    }
}

class BinaryTree{
    constructor(){
        this.raiz=null;
    }
    agregar(){
        if(this.raiz==null){
            this.raiz=nuevo;
        }
        else{
            this._agregate(nuevo,this.raiz);
        }
    }
    _agregate(nuevo,nodox){
        if(nuevo.codigo<nodox.codigo){
            if(nodox.hijoI==null){
                nodox.hijoI=nuevo;
            }
            else {
                this._agregate(nuevo,nodox.hijoI);
            }
        }
        else {
            if (nodox.hijoD=null){
                nodox,hijoD=nuevo;
            }
            else {
                this._agregate(nuevo,nodox.hijoD);
            }
        }
    }

    inOrder(){
        if (this.raiz==null){
            return "";
        }
        else{
            return this._inOrderRec(this.raiz)
        }
    }
    _inOrderRec(nodox){
        let info ="";
        if(nodox.hijoI != null){
            info += this._inOrderRec(nodox.hijoI);
        }
        info += nodox.infoHtml;
        if(nodox.hijoD != null){
            info += this._inOrderRec(nodox.hijoD);
        }
        return info;
    }
    preOrder(){
        if (this.raiz == null)
          return "";
        else 
          return this._preOrderRec(this.raiz);
      }
      _preOrderRec(nodox){
        let info = "";
        info += nodox.infoHtml();
        if (nodox.hijoI!= null)
          info += this._preOrderRec(nodox.hijoI);
        if (nodox.hijoD != null)
          info += this._preOrderRec(nodox.hijoD);
        return info;
    }
    busca(codigo){
        if (this.raiz == null)
          return "";
        else
          return this._buscar(codigo, this.raiz);
        }
        _buscar(codigo, nodox){
            if (codigo == nodox.codigo)
              return nodox.infoHtml();
            else if(nodox.hijoI != null || nodox.hijoD != null){
              if (codigo < nodox.codigo)
                return this._buscar(codigo, nodox.hijoI);
              else
                return this._buscar(codigo, nodox.hijoD);
            }
            else
             return "";
}
}
let arbol = new BinaryTree();

const btnAgregar = document.getElementById('btnAgregar');
btnAgregar.addEventListener('click', () => {
  let cod = document.getElementById('txtCod').value;
  let nom = document.getElementById('txtNom').value;
  let pre = document.getElementById('txtPre').value;
  let can = document.getElementById('txtCan').value;
  let prod = new Producto(nom, cod, pre, can);
  arbol.agregar(prod);

  let detalles = document.getElementById('detalles');
  detalles.innerHTML += '<h3>Se agrego producto: </h3>' + nom;
})

const btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click', () =>{
  let cod = document.getElementById('txtCod').value;
  let resultado = arbol.busca(cod);
  let detalles = document.getElementById('detalles');
  if (resultado != "")
    detalles.innerHTML += '<h3>Se encontro:</h3>' + resultado ;
  else
    detalles.innerHTML += '<h2>No existe el producto</h2>';
})

const btnInorder = document.getElementById('btnInorder');
btnInorder.addEventListener('click', () => {
  let resultado = arbol.inOrder();
  let detalles = document.getElementById('detalles');
  if (resultado != "")
    detalles.innerHTML += '<h3>Inorder</h3>' + resultado;
  else
    detalles.innerHTML += '<h2>No existen productos</h2>'
});

const btnPreorder = document.getElementById('btnPreorder');
btnPreorder.addEventListener('click', () =>{
  let resultado = arbol.preOrder();
  let detalles = document.getElementById('detalles');
  if (resultado != "")
    detalles.innerHTML += '<h3>Preorder</h3>' + resultado;
  else
    detalles.innerHTML += '<h2>No existen productos</h2>'
});

const btnPostorder = document.getElementById('btnPostorder');
btnPostorder.addEventListener('click', () =>{
  let resultado = arbol.postOrder();
  let detalles = document.getElementById('detalles');
  if (resultado != "")
    detalles.innerHTML += '<h3>Postorder</h3>' + resultado;
  else
    detalles.innerHTML += '<h2>No existen productos</h2>'
});

const btnClear = document.getElementById('btnClear');
btnClear.addEventListener('click', () => {
  document.getElementById('detalles').innerHTML = '';
});
