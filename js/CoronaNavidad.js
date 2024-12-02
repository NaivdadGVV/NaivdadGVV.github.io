import*as THREE from "./three.module.js";
export default function E02({x,y,z}){

    // 🪄🪄 SECCIÓN DE CÓDIGO 🪄🪄

//Corona de navidad
//corona
var corona = new THREE.TorusGeometry(6,2,12,18);
var verdeCorona = new THREE.MeshLambertMaterial({color:0x437934})
var meshCorona = new THREE.Mesh(corona,verdeCorona);
meshCorona.position.set(0,0,20);

//Moño
var Moño = new THREE.TorusKnotGeometry(2,1,);
var RojoMoño = new THREE.MeshLambertMaterial({color:0xdd1212})
var meshMoño = new THREE.Mesh(Moño,RojoMoño);
meshMoño.position.set(0,-5,22);
meshMoño.scale.set(0.8,0.8,0.8);

//Esferas
//esferas rojas
var EsferasCorona = new THREE.SphereGeometry(0.8,12);
var RojoEsfera= new THREE.MeshLambertMaterial({color:0xdd1212})
var meshEsferaR = new THREE.Mesh(EsferasCorona,RojoEsfera);
meshEsferaR.position.set(0,6.5,22);

var meshEsferaR1 = new THREE.Mesh(EsferasCorona,RojoEsfera);
meshEsferaR1.position.set(6.5,0,22);

var meshEsferaR2 = new THREE.Mesh(EsferasCorona,RojoEsfera);
meshEsferaR2.position.set(-6.5,0,22);

//Esferas blancas
var BlancoEsfera= new THREE.MeshLambertMaterial({color:0xf8f5f5})
var meshEsferaB = new THREE.Mesh(EsferasCorona,BlancoEsfera);
meshEsferaB.position.set(4.5,4,22);

var meshEsferaB1 = new THREE.Mesh(EsferasCorona,BlancoEsfera);
meshEsferaB1.position.set(-4.5,4,22);

var meshEsferaB2 = new THREE.Mesh(EsferasCorona,BlancoEsfera);
meshEsferaB2.position.set(-4.5,-4,22);

var meshEsferaB3 = new THREE.Mesh(EsferasCorona,BlancoEsfera);
meshEsferaB3.position.set(4.5,-4,22);


//<-<-<-<


var corona=new THREE.Group();
corona.add (meshCorona,meshMoño,meshEsferaR,meshEsferaR1,meshEsferaR2,meshEsferaB,meshEsferaB1,meshEsferaB2,meshEsferaB3);
corona.position.set(x,y,z);
return corona; 
   
}