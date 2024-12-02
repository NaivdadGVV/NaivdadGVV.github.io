import*as THREE from "./three.module.js";
import{RoundedBoxGeometry} from"./RoundedBoxGeometry.js";

export default function E02({x,y,z}){

    // 🪄🪄 SECCIÓN DE CÓDIGO 🪄🪄


      //Trineo
    //Patines
    var PatinTrineo = new THREE.CylinderGeometry(0.5,0.5,20);
    var AmarilloTrineo = new THREE.MeshLambertMaterial ({color:0xFFC300});
    var PatinMesh1 = new THREE.Mesh(PatinTrineo,AmarilloTrineo);
    PatinMesh1.position.set(5,2,0);
    PatinMesh1.rotation.set(1.57,0,0);
    PatinMesh1.scale.set(2,2,2);

    var PatinMesh2 = new THREE.Mesh(PatinTrineo,AmarilloTrineo);
    PatinMesh2.position.set(-5,2,0);
    PatinMesh2.rotation.set(1.57,0,0);
    PatinMesh2.scale.set(2,2,2);


    var ColumnaTrineo = new THREE.CylinderGeometry(0.5,0.5,4);
    var AmarilloTrineo = new THREE.MeshLambertMaterial ({color:0xFFC300});
    var PatinMesh3 = new THREE.Mesh(ColumnaTrineo,AmarilloTrineo);
    PatinMesh3.castShadow=true;
    PatinMesh3.position.set(5,6,-5);
    PatinMesh3.scale.set(2,2,2);
    

    var PatinMesh4 = new THREE.Mesh(ColumnaTrineo,AmarilloTrineo);
    PatinMesh4.castShadow=true;
    PatinMesh4.position.set(5,6,5);
    PatinMesh4.scale.set(2,2,2);

    var PatinMesh5 = new THREE.Mesh(ColumnaTrineo,AmarilloTrineo);
    PatinMesh5.castShadow=true;
    PatinMesh5.position.set(-5,6,5);
    PatinMesh5.scale.set(2,2,2);

    var PatinMesh6 = new THREE.Mesh(ColumnaTrineo,AmarilloTrineo);
    PatinMesh6.castShadow=true;
    PatinMesh6.position.set(-5,6,-5);
    PatinMesh6.scale.set(2,2,2);

    var PatinMesh7 = new THREE.Mesh(ColumnaTrineo,AmarilloTrineo);
    PatinMesh7.position.set(10,15,5);
    PatinMesh7.rotation.set(1.57,0,0);
    PatinMesh7.scale.set(1.3,2.6,1.3);

    var PatinMesh8 = new THREE.Mesh(ColumnaTrineo,AmarilloTrineo);
    PatinMesh8.position.set(-10,15,5);
    PatinMesh8.rotation.set(1.57,0,0);
    PatinMesh8.scale.set(1.3,2.6,1.3);

    var PatinMesh9 = new THREE.Mesh(ColumnaTrineo,AmarilloTrineo);
    PatinMesh9.position.set(-10,19,-4);
    PatinMesh9.rotation.set(1.57,0,0);
    PatinMesh9.scale.set(1.3,2.6,1.3);

    var PatinMesh10 = new THREE.Mesh(ColumnaTrineo,AmarilloTrineo);
    PatinMesh10.position.set(10,19,-4);
    PatinMesh10.rotation.set(1.57,0,0);
    PatinMesh10.scale.set(1.3,2.6,1.3);
    
    

    //Trineo
    var Trineo = new RoundedBoxGeometry(20,20,4,2,2);
    var RojoTrineo = new THREE.MeshLambertMaterial ({color:0xC70039});
    var TrineoMesh = new THREE.Mesh(Trineo,RojoTrineo);
    TrineoMesh.castShadow=true;
    TrineoMesh.rotation.set(1.57,0,0);
    TrineoMesh.position.set(-0,10,0);

    var TrineoMesh1 = new THREE.Mesh(Trineo,RojoTrineo);
    TrineoMesh1.castShadow=true;
    TrineoMesh1.position.set(-0,13,0);
    TrineoMesh1.scale.set(1,0.2,0.5);

    var TrineoMesh2 = new THREE.Mesh(Trineo,RojoTrineo);
    TrineoMesh2.castShadow=true;
    TrineoMesh2.rotation.set(1.57,0,0);
    TrineoMesh2.position.set(-0,15,-4);
    TrineoMesh2.scale.set(1,0.5,0.5);

    var TrineoMesh3 = new THREE.Mesh(Trineo,RojoTrineo);
    TrineoMesh3.castShadow=true;
    TrineoMesh3.position.set(-0,14,-8);
    TrineoMesh3.scale.set(1,0.6,0.5);
    
    var TrineoMesh4 = new THREE.Mesh(Trineo,RojoTrineo);
    TrineoMesh4.castShadow=true;
    TrineoMesh4.rotation.set(0,1.57,0);
    TrineoMesh4.position.set(10,12,0);
    TrineoMesh4.scale.set(0.9,0.3,0.5);

    var TrineoMesh5 = new THREE.Mesh(Trineo,RojoTrineo);
    TrineoMesh5.castShadow=true;
    TrineoMesh5.rotation.set(0,1.57,0);
    TrineoMesh5.position.set(-10,12,0);
    TrineoMesh5.scale.set(0.9,0.3,0.5);

    var TrineoMesh6 = new THREE.Mesh(Trineo,RojoTrineo);
    TrineoMesh6.rotation.set(0,1.57,0);
    TrineoMesh6.position.set(10,14,-4);
    TrineoMesh6.scale.set(0.5,0.5,0.5);

    var TrineoMesh7 = new THREE.Mesh(Trineo,RojoTrineo);
    TrineoMesh7.rotation.set(0,1.57,0);
    TrineoMesh7.position.set(-10,14,-4);
    TrineoMesh7.scale.set(0.5,0.5,0.5);

    var TrineoMesh8 = new THREE.Mesh(Trineo,RojoTrineo);
    TrineoMesh8.position.set(-0,11,9);
    TrineoMesh8.scale.set(1.05,0.22,0.5);

    var TrineoMesh9 = new THREE.Mesh(Trineo,RojoTrineo);
    TrineoMesh9.position.set(-0,13,9);
    TrineoMesh9.rotation.set(0.2,0,0);
    TrineoMesh9.scale.set(1.05,0.22,0.5);

//Trineo agrupado
var TrineoCompleto=new THREE.Group();
TrineoCompleto.add (TrineoMesh,TrineoMesh1,TrineoMesh2,TrineoMesh3,TrineoMesh4,TrineoMesh5,TrineoMesh6,TrineoMesh7,TrineoMesh8,TrineoMesh9,PatinMesh1,PatinMesh2,PatinMesh3,PatinMesh4,PatinMesh5,PatinMesh6,PatinMesh7,PatinMesh8,PatinMesh9,PatinMesh10);
TrineoCompleto.position.set(x,y,z);
    return TrineoCompleto; 
   
}