import*as THREE from "./three.module.js";
export default function E02({x,y,z}){

    // 🪄🪄 SECCIÓN DE CÓDIGO 🪄🪄


    ///////////////////////CUERPO

    var bajo= new THREE.SphereGeometry(4,20,20);
    var material1= new THREE.MeshLambertMaterial({color:0xffffff,wireframe:false});
    var mesh1= new THREE.Mesh(bajo,material1);
    mesh1.castShadow=true;
    mesh1.position.set(0,0,0);

    var medio= new THREE.SphereGeometry(3,20,20);
    var material1= new THREE.MeshLambertMaterial({color:0xffffff,wireframe:false});
    var mesh2= new THREE.Mesh(medio,material1);
    mesh2.castShadow=true;
    mesh2.position.set(0,4,0);

    var alto= new THREE.SphereGeometry(2,20,20);
    var material1= new THREE.MeshLambertMaterial({color:0xffffff,wireframe:false});
    var mesh3= new THREE.Mesh(alto,material1);
    mesh3.castShadow=true;
    mesh3.position.set(0,7.5,0);

///////////////////////OJOS

    var ojo= new THREE.SphereGeometry(0.5,20,20);
    var material2= new THREE.MeshLambertMaterial({color:0xf,wireframe:false});
    var mesh4= new THREE.Mesh(ojo,material2);
    mesh4.position.set(-0.5,8,1.5);

    var ojo2= new THREE.SphereGeometry(0.5,20,20);
    var material2= new THREE.MeshLambertMaterial({color:0xf,wireframe:false});
    var mesh5= new THREE.Mesh(ojo2,material2);
    mesh5.position.set(0.5,8,1.5);

///////////////////////NARIZ

    var nariz= new THREE.CylinderGeometry(0,0.3,1.5,15);
    var material3= new THREE.MeshLambertMaterial({color:0xd56d31,wireframe:false});
    var mesh6= new THREE.Mesh(nariz,material3);
    mesh6.position.set(0,7.5,2.7); 
    mesh6.rotation.set(1.5708,0,0);

///////////////////////BOCA

    var boca= new THREE.SphereGeometry(0.2,20,20);
    var material2= new THREE.MeshLambertMaterial({color:0xf,wireframe:false});
    var mesh7= new THREE.Mesh(boca,material2);
    mesh7.position.set(-0.8,6.9,1.6);

    var boca2= new THREE.SphereGeometry(0.2,20,20);
    var material2= new THREE.MeshLambertMaterial({color:0xf,wireframe:false});
    var mesh8= new THREE.Mesh(boca2,material2);
    mesh8.position.set(-0.45,6.7,1.63);

    var boca3= new THREE.SphereGeometry(0.2,20,20);
    var material2= new THREE.MeshLambertMaterial({color:0xf,wireframe:false});
    var mesh9= new THREE.Mesh(boca3,material2);
    mesh9.position.set(0,6.6,1.66);

    var boca4= new THREE.SphereGeometry(0.2,20,20);
    var material2= new THREE.MeshLambertMaterial({color:0xf,wireframe:false});
    var mesh10= new THREE.Mesh(boca4,material2);
    mesh10.position.set(0.8,6.9,1.6);

    var boca5= new THREE.SphereGeometry(0.2,20,20);
    var material2= new THREE.MeshLambertMaterial({color:0xf,wireframe:false});
    var mesh11= new THREE.Mesh(boca5,material2);
    mesh11.position.set(0.45,6.7,1.63);

///////////////////////SOMBRERO

    var base= new THREE.CylinderGeometry(2.5,2.5,1,25);
    var material2= new THREE.MeshLambertMaterial({color:0xf,wireframe:false});
    var mesh12= new THREE.Mesh(base,material2);
    mesh12.position.set(0,9.2,0); 

    var copa= new THREE.CylinderGeometry(1.95,1.95,2.6,25);
    var material2= new THREE.MeshLambertMaterial({color:0xf,wireframe:false});
    var mesh13= new THREE.Mesh(copa,material2);
    mesh13.castShadow=true;
    mesh13.position.set(0,10,0); 

///////////////////////BOTONES

    var boton1= new THREE.SphereGeometry(0.2,20,20);
    var material2= new THREE.MeshLambertMaterial({color:0xf,wireframe:false});
    var mesh14= new THREE.Mesh(boton1,material2);
    mesh14.position.set(0,5,2.8);

    var boton2= new THREE.SphereGeometry(0.2,20,20);
    var material2= new THREE.MeshLambertMaterial({color:0xf,wireframe:false});
    var mesh15= new THREE.Mesh(boton1,material2);
    mesh15.position.set(0,4.2,3);

    var boton3= new THREE.SphereGeometry(0.2,20,20);
    var material2= new THREE.MeshLambertMaterial({color:0xf,wireframe:false});
    var mesh16= new THREE.Mesh(boton1,material2);
    mesh16.position.set(0,3.4,2.9);

///////////////////////BUFANDA

    var buf= new THREE.TorusGeometry(2,0.3,16,31,6.283185307179586);
    var material4= new THREE.MeshLambertMaterial({color:0xb92614,wireframe:false});
    var mesh17= new THREE.Mesh(buf,material4);
    mesh17.castShadow=true;
    mesh17.position.set(0,6.3,0);
    mesh17.rotation.set(1.5708,0,0);

    var muñeco=new THREE.Group();
    muñeco.add (mesh1,mesh2,mesh3,mesh4,mesh5,mesh6,mesh7,mesh8,mesh9,mesh10,mesh11,mesh12,mesh13,mesh14,mesh15,mesh16,mesh17);
    muñeco.position.set(x,y,z);
    return muñeco; 
       
   }