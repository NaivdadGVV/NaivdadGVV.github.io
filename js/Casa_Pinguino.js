import*as THREE from "./three.module.js";
export default function E02({x,y,z}){

    // 🪄🪄 SECCIÓN DE CÓDIGO 🪄🪄


    //CUERPO
    var cuerpo1= new THREE.CylinderGeometry(10,10,5,28,9,0,5.8182295944483);
    var material1= new THREE.MeshLambertMaterial({color:0xffffff,side: THREE.DoubleSide,wireframe:false});
    var mesh1= new THREE.Mesh(cuerpo1,material1);
    mesh1.castShadow=true;
    mesh1.position.set(0,15,0);
    
    var cuerpo2= new THREE.CylinderGeometry(10,10,10,28,9,1,1,5.58575173808265);
    var material1= new THREE.MeshLambertMaterial({color:0xffffff,side: THREE.DoubleSide,wireframe:false});
    var mesh2= new THREE.Mesh(cuerpo2,material1);
    mesh2.position.set(0,8,0); 
    mesh2.castShadow=true;
    mesh2.rotation.set(0,-0.610865,0);

    //CABEZA_PINGÜINO
    var cab= new THREE.SphereGeometry(10,48,15,0,3.1416,0,3.1416);
    var material2= new THREE.MeshLambertMaterial({color:0xffffff,side: THREE.DoubleSide,wireframe:false});
    var mesh3= new THREE.Mesh(cab,material2);
    mesh3.position.set(0,17.3,0);
    mesh3.castShadow=true;
    mesh3.rotation.set(-1.5708,0,0);

    //PUERTA
    var arco= new THREE.CylinderGeometry(1,1,10,15);
    var material3= new THREE.MeshLambertMaterial({color:0xf2f2f2,wireframe:false});
    var mesh4= new THREE.Mesh(arco,material3);
    mesh4.castShadow=true;
    mesh4.position.set(4,8,9); 

    var arco2= new THREE.CylinderGeometry(1,1,10,15);
    var material3= new THREE.MeshLambertMaterial({color:0xdcdbadf2f2f2,wireframe:false});
    var mesh5= new THREE.Mesh(arco2,material3);
    mesh5.castShadow=true;
    mesh5.position.set(-3.7,8,9); 

    var arco4 = new THREE.TorusGeometry( 5.282, 1.6038, 16, 84, 1.87350514807541); 
    var material3 = new THREE.MeshLambertMaterial( { color: 0xf2f2f2, side: THREE.DoubleSide } ); 
    var mesh7 = new THREE.Mesh( arco4, material3 ); 
    mesh7.position.set(0,13.4,4.5); 
    mesh7.castShadow=true;
    mesh7.rotation.set(1.5708,0,0.628319);

    var pico = new THREE.TorusGeometry( 1.786, 1.2375, 3, 167, 2.70823516454466); 
    var material4 = new THREE.MeshLambertMaterial( { color: 0xd8923a, side: THREE.DoubleSide } ); 
    var mesh8 = new THREE.Mesh( pico, material4 ); 
    mesh8.position.set(0,16.5,8.5); 
    mesh8.castShadow=true;
    mesh8.rotation.set(1.5708,0,0.279253);

    var ojo= new THREE.SphereGeometry(1,20,20);
    var material5= new THREE.MeshLambertMaterial({color:0xf,wireframe:false});
    var mesh9= new THREE.Mesh(ojo,material5);
    mesh9.castShadow=true;
    mesh9.position.set(1.9,18,9);

    var ojo2= new THREE.SphereGeometry(1,20,20);
    var material5= new THREE.MeshLambertMaterial({color:0xf,wireframe:false});
    var mesh10= new THREE.Mesh(ojo2,material5);
    mesh10.castShadow=true;
    mesh10.position.set(-1.9,18,9);

    //GORRO

    var gorro = new THREE.TorusGeometry( 8.55, 1.8414, 20, 92, 6.283185307179586); 
    var material6 = new THREE.MeshLambertMaterial( { color: 0xf2f2f2, side: THREE.DoubleSide } ); 
    var mesh11 = new THREE.Mesh( gorro, material6 ); 
    mesh11.position.set(0,23,0); 
    mesh11.castShadow=true;
    mesh11.rotation.set(1.5708,0,0);

    var gorro2= new THREE.CylinderGeometry(2,10,9,15);
    var material7= new THREE.MeshLambertMaterial({color:0x9f3d3d,wireframe:false});
    var mesh12= new THREE.Mesh(gorro2,material7);
    mesh12.castShadow=true;
    mesh12.position.set(0,27,0);

    var gorro3= new THREE.SphereGeometry(2.3,20,20);
    var material6= new THREE.MeshLambertMaterial({color:0xf2f2f2,wireframe:false});
    var mesh13= new THREE.Mesh(gorro3,material6);
    mesh13.castShadow=true;
    mesh13.position.set(0,32.5,0);

    var casita=new THREE.Group();
    casita.add (mesh1,mesh2,mesh3,mesh4,mesh5,mesh7,mesh8,mesh9,mesh10,mesh11,mesh12,mesh13);
    casita.position.set(x,y,z);
    return casita; 
   
}