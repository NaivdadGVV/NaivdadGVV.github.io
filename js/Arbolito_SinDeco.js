import*as THREE from "./three.module.js";
export default function E02({x,y,z}){

    // 🪄🪄 SECCIÓN DE CÓDIGO 🪄🪄


    var copa= new THREE.CylinderGeometry(0,0.8,1.7,15);
    var material= new THREE.MeshLambertMaterial({color:0x719845,wireframe:false});
    var mesh1= new THREE.Mesh(copa,material);
    mesh1.castShadow=true;
    mesh1.position.set(0,7.2,0);

    var nieve= new THREE.CylinderGeometry(0.18,0.5,0.75,15);
    var material0= new THREE.MeshLambertMaterial({color:0xffffff,wireframe:false});
    var mesh0= new THREE.Mesh(nieve,material0);
    mesh0.castShadow=true;
    mesh0.position.set(0,7.5,0);

    var copa1= new THREE.CylinderGeometry(0.3,1.1,1.7,15);
    var material2= new THREE.MeshLambertMaterial({color:0x567c2c,wireframe:false});
    var mesh2= new THREE.Mesh(copa1,material2);
    mesh2.castShadow=true;
    mesh2.position.set(0,6,0); 

    var nieve1= new THREE.CylinderGeometry(0.5,1.2,0.9,15);
    var material2= new THREE.MeshLambertMaterial({color:0xffffff,wireframe:false});
    var mesh3= new THREE.Mesh(nieve1,material2);
    mesh3.castShadow=true;
    mesh3.position.set(0,5.5,0); 

    var copa2= new THREE.CylinderGeometry(0.5,1.5,2,15);
    var material3= new THREE.MeshLambertMaterial({color:0x719845,wireframe:false});
    var mesh4= new THREE.Mesh(copa2,material3);
    mesh4.castShadow=true;
    mesh4.position.set(0,4.9,0);

    var nieve2= new THREE.CylinderGeometry(1,1.6,0.9,15);
    var material3= new THREE.MeshLambertMaterial({color:0xffffff,wireframe:false});
    var mesh5= new THREE.Mesh(nieve2,material3);
    mesh5.castShadow=true;
    mesh5.position.set(0,4.2,0);

    var copa3= new THREE.CylinderGeometry(1,2,2,15);
    var material4= new THREE.MeshLambertMaterial({color:0x567c2c,wireframe:false});
    var mesh6= new THREE.Mesh(copa3,material4);
    mesh6.castShadow=true;
    mesh6.position.set(0,3.5,0);

    var nieve3= new THREE.CylinderGeometry(1.2,2.08,1.05,15);
    var material4= new THREE.MeshLambertMaterial({color:0xffffff,wireframe:false});
    var mesh7= new THREE.Mesh(nieve3,material4);
    mesh7.castShadow=true;
    mesh7.position.set(0,2.99,0);

    var copa4= new THREE.CylinderGeometry(1.3,2.5,2,15);
    var material5= new THREE.MeshLambertMaterial({color:0x719845,wireframe:false});
    var mesh8= new THREE.Mesh(copa4,material5);
    mesh8.castShadow=true;
    mesh8.position.set(0,2,0); 

    var nieve4= new THREE.CylinderGeometry(1.3,2.59,1.5,15);
    var material5= new THREE.MeshLambertMaterial({color:0xffffff,wireframe:false});
    var mesh9= new THREE.Mesh(nieve4,material5);
    mesh9.castShadow=true;
    mesh9.position.set(0,1.7,0);

    var copa5= new THREE.CylinderGeometry(1.3,2.5,2,15);
    var material6= new THREE.MeshLambertMaterial({color:0x719845,wireframe:false});
    var mesh10= new THREE.Mesh(copa5,material6);
    mesh10.castShadow=true;
    mesh10.position.set(0,2,0);

    var madera= new THREE.CylinderGeometry(1,1,2,15);
    var material7= new THREE.MeshLambertMaterial({color:0x986945,wireframe:false});
    var mesh11= new THREE.Mesh(madera,material7);
    mesh11.castShadow=true;
    mesh11.position.set(0,0,0);

    var madera1= new THREE.CylinderGeometry(1,1,2,15);
    var material8= new THREE.MeshLambertMaterial({color:0x874712,wireframe:true});
    var mesh12= new THREE.Mesh(madera1,material8);
    mesh12.castShadow=true;
    mesh12.position.set(0,0,0);


var arbolito=new THREE.Group();
arbolito.add (mesh0,mesh1,mesh2,mesh3,mesh4,mesh5,mesh6,mesh7,mesh8,mesh9,mesh10,mesh11,mesh12);
arbolito.position.set(x,y,z);
return arbolito; 
   
}