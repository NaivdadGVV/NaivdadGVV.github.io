import*as THREE from "./three.module.js";
export default function E02({x,y,z}){

    // 🪄🪄 SECCIÓN DE CÓDIGO 🪄🪄

//Guirnalda Navidad
//Guirnalda verde
var Guirnalda = new THREE.TorusGeometry(24,1,12,18);
 var verdeGuirnalda = new THREE.MeshLambertMaterial({color:0x437934})
 var meshGuirnaldaV = new THREE.Mesh(Guirnalda,verdeGuirnalda);
 meshGuirnaldaV.position.set(0,0,20);
 meshGuirnaldaV.rotation.set(1.57,0,0);

 //Guirnalda Roja
 var Guirnalda1 = new THREE.TorusGeometry(24,0.8,12,18);
 var RojoGuirnalda = new THREE.MeshLambertMaterial({color:0xcf1212})
 var meshGuirnaldaR = new THREE.Mesh(Guirnalda1,RojoGuirnalda);
 meshGuirnaldaR.position.set(0,0.5,20);
 meshGuirnaldaR.rotation.set(1.57,0,0);

 //Guirnalda Blanca
 var Guirnalda2 = new THREE.TorusGeometry(24,0.8,12,18);
 var BlancoGuirnalda = new THREE.MeshLambertMaterial({color:0xf8f3f3})
 var meshGuirnaldaB = new THREE.Mesh(Guirnalda2,BlancoGuirnalda);
 meshGuirnaldaB.position.set(0,-0.5,20);
 meshGuirnaldaB.rotation.set(1.57,0,0);

    //Esferas
 //esferas rojas
 var EsferasCorona = new THREE.SphereGeometry(0.8,12);
 var RojoEsfera= new THREE.MeshLambertMaterial({color:0xdd1212})
 var meshEsferaR = new THREE.Mesh(EsferasCorona,RojoEsfera);
 meshEsferaR.position.set(0,0,-2);

 var meshEsferaR1 = new THREE.Mesh(EsferasCorona,RojoEsfera);
 meshEsferaR1.position.set(22,0,22);

 var meshEsferaR2 = new THREE.Mesh(EsferasCorona,RojoEsfera);
 meshEsferaR2.position.set(-22,0,22);

 var meshEsferaR3 = new THREE.Mesh(EsferasCorona,RojoEsfera);
 meshEsferaR3.position.set(0,0,42);

 //esferas rojas
 var BlancoEsfera= new THREE.MeshLambertMaterial({color:0xf8f5f5})
 var meshEsferaB = new THREE.Mesh(EsferasCorona,BlancoEsfera);
 meshEsferaB.position.set(12,0,1.5);

 var meshEsferaB1 = new THREE.Mesh(EsferasCorona,BlancoEsfera);
 meshEsferaB1.position.set(-12,0,1.5);

 var meshEsferaB2 = new THREE.Mesh(EsferasCorona,BlancoEsfera);
 meshEsferaB2.position.set(-12,0,38.8);

 var meshEsferaB3 = new THREE.Mesh(EsferasCorona,BlancoEsfera);
 meshEsferaB3.position.set(12,0,38.8);

 //esferas doradas
 var DoradoEsfera= new THREE.MeshLambertMaterial({color:0xf0cd07})
 var meshEsferaD = new THREE.Mesh(EsferasCorona,DoradoEsfera);
 meshEsferaD.position.set(20.5,0,11.5);

 var meshEsferaD1 = new THREE.Mesh(EsferasCorona,DoradoEsfera);
 meshEsferaD1.position.set(-20.5,0,11.5);

 var meshEsferaD2 = new THREE.Mesh(EsferasCorona,DoradoEsfera);
 meshEsferaD2.position.set(-17.5,0,34.5);

 var meshEsferaD3 = new THREE.Mesh(EsferasCorona,DoradoEsfera);
 meshEsferaD3.position.set(17.5,0,34.5);
 //<-<-<-<-<-<-<


var Guirnalda=new THREE.Group();
Guirnalda.add (meshEsferaD,meshEsferaD1,meshEsferaD2,meshEsferaD3,meshEsferaB,meshEsferaB1,meshEsferaB2,meshEsferaB3,meshEsferaR,meshEsferaR1,meshEsferaR2,meshEsferaR3,meshGuirnaldaB,meshGuirnaldaV,meshGuirnaldaR);
Guirnalda.position.set(x,y,z);
return Guirnalda; 
   
}