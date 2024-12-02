import*as THREE from "./three.module.js";
import{RoundedBoxGeometry} from"./RoundedBoxGeometry.js";
export default function N03 ({x,y,z}){

var geometry01 = new THREE.BoxGeometry( 5, 3, .75 ); 
var material01 = new THREE.MeshLambertMaterial( {color: 0xf80e0e} ); 
var mesh01 = new THREE.Mesh( geometry01, material01 ); 
//scene.add( mesh01);
mesh01.position.set(0,0,0);

var geometry02 = new THREE.BoxGeometry( 8, 3, .5 ); 
var material02 = new THREE.MeshLambertMaterial( {color: 0xf80e0e} ); 
var mesh02 = new THREE.Mesh( geometry02, material02 ); 
mesh02.rotation.set(0,1.886,0);
//scene.add( mesh02);
mesh02.position.set(3.5,0,3.5);

var geometry03 = new THREE.BoxGeometry( 8, 3, .5 ); 
var material03 = new THREE.MeshLambertMaterial( {color: 0xf80e0e} ); 
var mesh03 = new THREE.Mesh( geometry03, material03 ); 
mesh03.rotation.set(0,-1.886,0);
//scene.add( mesh03);
mesh03.position.set(-3.5,0,3.5);

var geometry04 = new THREE.BoxGeometry( 6, 3, .5 ); 
var material04 = new THREE.MeshLambertMaterial( {color: 0xf80e0e} ); 
var mesh04 = new THREE.Mesh( geometry04, material04 ); 
mesh04.rotation.set(0,-.786,0);
//scene.add( mesh04);
mesh04.position.set(-2.65,0,9.20);

var geometry05 = new THREE.BoxGeometry( 6, 3, .5 ); 
var material05 = new THREE.MeshLambertMaterial( {color: 0xf80e0e} ); 
var mesh05 = new THREE.Mesh( geometry05, material05 ); 
mesh05.rotation.set(0,.786,0);
//scene.add( mesh05);
mesh05.position.set(2.65,0,9.20);

 var geometry06= new THREE.CylinderGeometry( .85, .85, 3, 32 );
var material06= new THREE.MeshLambertMaterial({color: 0xf80e0e});
var mesh06 = new THREE.Mesh (geometry06, material06);

// scene.add(mesh06);
mesh06.position.set(0,0,11);


var rojo =new THREE.Group();
rojo.add (mesh01,mesh02,mesh03,mesh04, mesh05, mesh06);
rojo.position.set(x,y,z);
return rojo; 
 }