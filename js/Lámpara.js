import*as THREE from "./three.module.js";
export default function E02({x,y,z}){

    // 🪄🪄 SECCIÓN DE CÓDIGO 🪄🪄


    //LÁMPARA
    var arriba1= new THREE.CylinderGeometry(0.7,1,1,18);
    var material1= new THREE.MeshBasicMaterial({color:0xf,wireframe:false});
    var mesh1= new THREE.Mesh(arriba1,material1);
    mesh1.position.set(0,7.5,0); 

    var arriba2= new THREE.CylinderGeometry(1,2,1,18);
    var material1= new THREE.MeshBasicMaterial({color:0xf,wireframe:false});
    var mesh2= new THREE.Mesh(arriba2,material1);
    mesh2.position.set(0,6.5,0); 

    var mediod= new THREE.CylinderGeometry(0.13,0.13,2.5,18);
    var material1= new THREE.MeshBasicMaterial({color:0xf,wireframe:false});
    var mesh3= new THREE.Mesh(mediod,material1);
    mesh3.position.set(0,4.8,1.3); 
    mesh3.rotation.set(0.174533,0,0);

    var medioa= new THREE.CylinderGeometry(0.13,0.13,2.5,18);
    var material1= new THREE.MeshBasicMaterial({color:0xf,wireframe:false});
    var mesh4= new THREE.Mesh(medioa,material1);
    mesh4.position.set(0,4.8,-1.3); 
    mesh4.rotation.set(-0.174533,0,0);

    var medioi= new THREE.CylinderGeometry(0.13,0.13,2.5,18);
    var material1= new THREE.MeshBasicMaterial({color:0xf,wireframe:false});
    var mesh5= new THREE.Mesh(medioi,material1);
    mesh5.position.set(-1.3,4.8,0); 
    mesh5.rotation.set(0,0,0.174533);

    var mediod= new THREE.CylinderGeometry(0.13,0.13,2.5,18);
    var material1= new THREE.MeshBasicMaterial({color:0xf,wireframe:false});
    var mesh6= new THREE.Mesh(mediod,material1);
    mesh6.position.set(1.3,4.8,0); 
    mesh6.rotation.set(0,0,-0.174533);

    var bajo1= new THREE.CylinderGeometry(1.4,0.6,0.6,18);
    var material1= new THREE.MeshBasicMaterial({color:0xf,wireframe:false});
    var mesh7= new THREE.Mesh(bajo1,material1);
    mesh7.position.set(0,3.4,0); 

    var bajo2= new THREE.SphereGeometry(0.5,20,20);
    var material2= new THREE.MeshBasicMaterial({color:0x2b2a2a,wireframe:false});
    var mesh8= new THREE.Mesh(bajo2,material2);
    mesh8.position.set(0,3.2,0);

    var colgar1= new THREE.CylinderGeometry(0.4,0.4,1.3,18);
    var material1= new THREE.MeshBasicMaterial({color:0x2b2a2a,wireframe:false});
    var mesh9= new THREE.Mesh(colgar1,material1);
    mesh9.position.set(0,8,0); 

    var casita=new THREE.Group();
    casita.add (mesh1,mesh2,mesh3,mesh4,mesh5,mesh6,mesh7,mesh8,mesh9);
    casita.position.set(x,y,z);
    return casita; 
       
    }