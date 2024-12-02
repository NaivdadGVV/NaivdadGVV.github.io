import*as THREE from "./three.module.js";
import{RoundedBoxGeometry} from"./RoundedBoxGeometry.js";

export default function N02 ({x,y,z}){
//escaleras
//soporte izquierdo 
var geometry01 = new RoundedBoxGeometry(3,20,1,10,.5);
    var material01= new THREE.MeshLambertMaterial({color: 0xc28202});
    var mesh01 = new THREE.Mesh (geometry01, material01);
 //   scene.add(mesh01);
 mesh01.castShadow=true;
    mesh01.position.set(0,0,5);
    
//soporte derecho
var geometry02= new RoundedBoxGeometry(3,20,1,10,.5);
    var material02= new THREE.MeshLambertMaterial({color: 0xc28202});
    var mesh02 = new THREE.Mesh (geometry02, material02);
    mesh02.castShadow=true;
    // scene.add(mesh02);
    mesh02.position.set(0,0,-5);

//escalones
 var geometry03 = new RoundedBoxGeometry(2,1,10,10,.5);
     var material03= new THREE.MeshLambertMaterial({color: 0xc28202});
     var mesh03 = new THREE.Mesh (geometry03, material03);
     mesh03.castShadow=true;
     //scene.add(mesh03);
   mesh03.position.set(0,-7,0);

   var geometry04 = new RoundedBoxGeometry(2,1,10,10,.5);
     var material04= new THREE.MeshLambertMaterial({color: 0xc28202});
     var mesh04 = new THREE.Mesh (geometry04, material04);
     mesh04.castShadow=true;
     //   scene.add(mesh04);
   mesh04.position.set(0,-4,0);

   var geometry05 = new RoundedBoxGeometry(2,1,10,10,.5);
     var material05= new THREE.MeshLambertMaterial({color: 0xc28202});
     var mesh05 = new THREE.Mesh (geometry05, material05);
     mesh05.castShadow=true;
     //   scene.add(mesh05);
   mesh05.position.set(0,-1,0);

   var geometry06 = new RoundedBoxGeometry(2,1,10,10,.5);
     var material06= new THREE.MeshLambertMaterial({color: 0xc28202});
     var mesh06 = new THREE.Mesh (geometry06, material06);
     mesh06.castShadow=true;
     //   scene.add(mesh06);
   mesh06.position.set(0,2,0);

   var geometry07 = new RoundedBoxGeometry(2,1,10,10,.5);
     var material07= new THREE.MeshLambertMaterial({color: 0xc28202});
     var mesh07 = new THREE.Mesh (geometry07, material07);
     mesh07.castShadow=true;
     //   scene.add(mesh07);
   mesh07.position.set(0,5,0);

   var geometry08 = new RoundedBoxGeometry(2,1,10,10,.5);
     var material08= new THREE.MeshLambertMaterial({color: 0xc28202});
     var mesh08 = new THREE.Mesh (geometry08, material08);
     mesh08.castShadow=true;
     //   scene.add(mesh08);
   mesh08.position.set(0,8,0);

var escaleras =new THREE.Group();
escaleras.add (mesh01,mesh02,mesh03,mesh04, mesh05, mesh06,mesh07, mesh08);
escaleras.position.set(x,y,z);
return escaleras; 
 }