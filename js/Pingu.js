import*as THREE from "./three.module.js";
export default function N01({x,y,z}){
//pinguino

//CUERPO    
var geometry01= new THREE.SphereGeometry( 6, 20, 16 ); 
var material01= new THREE.MeshLambertMaterial({color: 0x000000});
var mesh01 = new THREE.Mesh (geometry01, material01);
mesh01.castShadow=true;
//scene.add(mesh01); 
mesh01.position.set(0,0,0);

//cabeza
 var geometry02= new THREE.SphereGeometry( 4.75, 20, 16 ); 
 var material02= new THREE.MeshLambertMaterial({color: 0x000000});
 var mesh02 = new THREE.Mesh (geometry02, material02);
 mesh02.castShadow=true;
 //scene.add(mesh02); 
 mesh02.position.set(0,6.5,0);

// pancita
 var geometry03= new THREE.SphereGeometry( 4, 10, 10); 
 var material03= new THREE.MeshLambertMaterial({color: 0xffffff});
var mesh03 = new THREE.Mesh (geometry03, material03);
 //scene.add(mesh03); 
mesh03.position.set(0,.25,3);

// bufanda
var geometry04= new THREE.CylinderGeometry( 4.75, 4.5, 2, 32 );
 var material04= new THREE.MeshLambertMaterial({color: 0xff0000});
var mesh04 = new THREE.Mesh (geometry04, material04);
 //scene.add(mesh04); 
mesh04.position.set(0,5,0);



//ojo IZQUIERDO
 var geometry05= new THREE.SphereGeometry(1, 20, 10); 
 var material05= new THREE.MeshLambertMaterial({color: 0xffffff});
 var mesh05 = new THREE.Mesh (geometry05, material05);
 //scene.add(mesh05); 
 mesh05.position.set(-1.75,8,3.5);

 //ojo DERECHO
 var geometry06= new THREE.SphereGeometry(1, 20, 10); 
 var material06= new THREE.MeshLambertMaterial({color: 0xffffff});
 var mesh06 = new THREE.Mesh (geometry06, material06);
 //scene.add(mesh06); 
 mesh06.position.set(1.75,8,3.5);

 //PICO
 var geometry07= new THREE.ConeGeometry( 1, 5, 32 ); 
 var material07= new THREE.MeshLambertMaterial({color: 0xf5a441});
 var mesh07 = new THREE.Mesh (geometry07, material07);
 //scene.add(mesh07); 
 mesh07.rotation.set(1.57,0,0);
 mesh07.position.set(0,7,5);

 //ALA IZQUIERDA
 var geometry08= new THREE.CapsuleGeometry( 2, 2, 4, 8 ); 
 var material08= new THREE.MeshLambertMaterial({color: 0x000000});
 var mesh08 = new THREE.Mesh (geometry08, material08);
 mesh08.castShadow=true;
 //scene.add(mesh08); 
 mesh08.rotation.set(3.925,0,3.925);
 mesh08.position.set(-6,0,0);
//ALA DERECHA
  var geometry09= new THREE.CapsuleGeometry( 2, 2, 4, 8 ); 
  var material09= new THREE.MeshLambertMaterial({color: 0x000000});
 var mesh09 = new THREE.Mesh (geometry09, material09);
 mesh09.castShadow=true;
 //scene.add(mesh09); 
 mesh09.rotation.set(3.925,0,-3.925);
 mesh09.position.set(6,0,0);
//gorro
var geometry10= new THREE.ConeGeometry( 3, 5, 32 ); 
var material10= new THREE.MeshLambertMaterial({color: 0xfa0303});
var mesh10 = new THREE.Mesh (geometry10, material10);
mesh10.castShadow=true;
//scene.add(mesh10); 
mesh10.rotation.set(0,0,0);
mesh10.position.set(0,12,0);

var geometry11= new THREE.CylinderGeometry( 3, 2, 2, 32 );
var material11= new THREE.MeshLambertMaterial({color: 0xffffff});
var mesh11 = new THREE.Mesh (geometry11, material11);
mesh11.castShadow=true;
//scene.add(mesh11); 
mesh11.position.set(0,10,0);

var geometry12= new THREE.SphereGeometry(.5, 20, 10); 
var material12= new THREE.MeshLambertMaterial({color: 0xffffff});
var mesh12 = new THREE.Mesh (geometry12, material12);
mesh12.castShadow=true;
//scene.add(mesh12); 
mesh12.position.set(0,14.5,0);



var pinguino =new THREE.Group();
pinguino.add (mesh01,mesh02,mesh03,mesh04, mesh05, mesh06,mesh07, mesh08, mesh09, mesh10, mesh11, mesh12);
pinguino.position.set(x,y,z);
return pinguino; 
 }