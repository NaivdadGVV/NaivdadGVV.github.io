import*as THREE from "./three.module.js";
export default function E02({x,y,z}){

    // 🪄🪄 SECCIÓN DE CÓDIGO 🪄🪄


   //Regalo de navidad
   var caja = new THREE.BoxGeometry(2,2,2);
   var Papel = new THREE.TextureLoader().load("./images/PapelRegalo.jpg");
   var PapelRegalo = new THREE.MeshLambertMaterial ({map:Papel});
   var meshRegalo = new THREE.Mesh(caja,PapelRegalo);
   meshRegalo.castShadow=true;
   
   meshRegalo.position.set(10,0,0);

   //Liston de regalo
   var Liston= new THREE.BoxGeometry(0.2,2,.2);
   var RojoListon = new THREE.MeshLambertMaterial ({color:0xC70039});
   var meshListon = new THREE.Mesh(Liston,RojoListon);
   meshListon.castShadow=true;
 
   meshListon.position.set(10,0,1);

   var meshListon1 = new THREE.Mesh(Liston,RojoListon);
   meshListon1.castShadow=true;
  
   meshListon1.position.set(9,0,0);

   var meshListon2 = new THREE.Mesh(Liston,RojoListon);
   meshListon2.castShadow=true;
  
   meshListon2.position.set(11,0,0);

   var meshListon3 = new THREE.Mesh(Liston,RojoListon);
   meshListon3.castShadow=true;
   meshListon3.position.set(10,1,0);
   meshListon3.rotation.set(1.57,0,0);

   var meshListon4 = new THREE.Mesh(Liston,RojoListon);
   meshListon4.castShadow=true;
  
   meshListon4.position.set(10,1,0);
   meshListon4.rotation.set(1.57,0,1.57);

   var moño = new THREE.TorusKnotGeometry(1);
   var RojoListon = new THREE.MeshLambertMaterial ({color:0xC70039});
   var meshMoño = new THREE.Mesh(moño,RojoListon);
   meshMoño.position.set(10,1.2,0);
   meshMoño.scale.set(0.4,0.4,0.4);
   meshMoño.rotation.set(1.57,0,0);

   //Agrupar todo el regalo
   var RegaloNavidad=new THREE.Group();
   RegaloNavidad.add (meshRegalo,meshListon,meshListon1,meshListon2,meshListon3,meshListon4,meshMoño);
   RegaloNavidad.position.set(x,y,z);
    return RegaloNavidad; 
   
}