import*as THREE from "./three.module.js";
export default function N03({x,y,z}){
//OSO POLAR
//cuerpo
 var geometry01= new THREE.CapsuleGeometry( 8,8, 4,20 ); 
 var material01= new THREE.MeshLambertMaterial({color: 0xffffff});
 var mesh01 = new THREE.Mesh (geometry01, material01);
 mesh01.castShadow=true;
 mesh01.rotation.set(1.57,0,0);
 //scene.add(mesh01); 
 mesh01.position.set(0,0,0);
//hocico
 var geometry02= new THREE.CapsuleGeometry( 3,4, 4,20 ); 
 var material02= new THREE.MeshLambertMaterial({color: 0xffffff});
 var mesh02 = new THREE.Mesh (geometry02, material02);
 mesh02.castShadow=true;
 mesh02.rotation.set(1.57,0,0);
 //scene.add(mesh02); 
 mesh02.position.set(0,0,10);
//ojos
 var geometry03= new THREE.CapsuleGeometry( 1,1, 4,20 ); 
 var material03= new THREE.MeshLambertMaterial({color: 0x000000});
 var mesh03 = new THREE.Mesh (geometry03, material03);
 //scene.add(mesh03); 
 mesh03.position.set(2,4,9.5);

 var geometry04= new THREE.CapsuleGeometry( 1,1, 4,20 ); 
 var material04= new THREE.MeshLambertMaterial({color: 0x000000});
 var mesh04 = new THREE.Mesh (geometry04, material04);
 //scene.add(mesh04); 
 mesh04.position.set(-2,4,9.5);
//nariz
 var geometry05= new THREE.CapsuleGeometry( .5,4, 4,20 ); 
  var material05= new THREE.MeshLambertMaterial({color: 0x000000});
  var mesh05 = new THREE.Mesh (geometry05, material05);
  mesh05.rotation.set(1.57,0,0);
  //scene.add(mesh05); 
  mesh05.position.set(0,2,12);
//patas
var geometry06= new THREE.CapsuleGeometry( 3,3, 4,20 ); 
 var material06= new THREE.MeshLambertMaterial({color: 0xffffff});
 var mesh06 = new THREE.Mesh (geometry06, material06);
 mesh06.castShadow=true;
 //scene.add(mesh06); 
 mesh06.position.set(4,-7,4.5);
 
 var geometry07= new THREE.CapsuleGeometry( 3,3, 4,20 ); 
 var material07= new THREE.MeshLambertMaterial({color: 0xffffff});
 var mesh07 = new THREE.Mesh (geometry07, material07);
 mesh07.castShadow=true;
 //scene.add(mesh07); 
 mesh07.position.set(-4,-7,4.5);

 var geometry08= new THREE.CapsuleGeometry( 3,3, 4,20 ); 
 var material08= new THREE.MeshLambertMaterial({color: 0xffffff});
 var mesh08= new THREE.Mesh (geometry08, material08);
 mesh08.castShadow=true;
 //scene.add(mesh08); 
 mesh08.position.set(-4,-7,-4.5);

 var geometry09= new THREE.CapsuleGeometry( 3,3, 4,20 ); 
 var material09= new THREE.MeshLambertMaterial({color: 0xffffff});
 var mesh09= new THREE.Mesh (geometry09, material09);
 mesh09.castShadow=true;
 //scene.add(mesh09); 
 mesh09.position.set(4,-7,-4.5);

 //orejas

var geometry10= new THREE.CylinderGeometry( 2, 2, 2, 32 );
var material10= new THREE.MeshLambertMaterial({color: 0xffffff});
var mesh10 = new THREE.Mesh (geometry10, material10);
mesh10.rotation.set(1.57,0,0);
mesh10.castShadow=true;
//scene.add(mesh10); 
mesh10.position.set(-3,6,6);


var geometry11= new THREE.CylinderGeometry( 2, 2, 2, 32 );
var material11= new THREE.MeshLambertMaterial({color: 0xffffff});
var mesh11 = new THREE.Mesh (geometry11, material11);
mesh11.rotation.set(1.57,0,0);
//scene.add(mesh11);
mesh11.position.set(3,6,6);

var oso =new THREE.Group();
oso.add (mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11);
oso.position.set(x,y,z);
return oso; 
 }