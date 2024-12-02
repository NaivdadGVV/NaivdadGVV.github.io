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
    mesh0.position.set(0,7.5,0);

    var copa1= new THREE.CylinderGeometry(0.3,1.1,1.7,15);
    var material2= new THREE.MeshLambertMaterial({color:0x567c2c,wireframe:false});
    var mesh2= new THREE.Mesh(copa1,material2);
    mesh2.castShadow=true;
    mesh2.position.set(0,6,0); 

    var nieve1= new THREE.CylinderGeometry(0.5,1.2,0.9,15);
    var material2= new THREE.MeshLambertMaterial({color:0xffffff,wireframe:false});
    var mesh3= new THREE.Mesh(nieve1,material2);
    mesh3.position.set(0,5.5,0); 

    var copa2= new THREE.CylinderGeometry(0.5,1.5,2,15);
    var material3= new THREE.MeshLambertMaterial({color:0x719845,wireframe:false});
    var mesh4= new THREE.Mesh(copa2,material3);
    mesh4.castShadow=true;
    mesh4.position.set(0,4.9,0);

    var nieve2= new THREE.CylinderGeometry(1,1.6,0.9,15);
    var material3= new THREE.MeshBasicMaterial({color:0xffffff,wireframe:false});
    var mesh5= new THREE.Mesh(nieve2,material3);
    mesh5.position.set(0,4.2,0);

    var copa3= new THREE.CylinderGeometry(1,2,2,15);
    var material4= new THREE.MeshLambertMaterial({color:0x567c2c,wireframe:false});
    var mesh6= new THREE.Mesh(copa3,material4);
    mesh6.castShadow=true;
    mesh6.position.set(0,3.5,0);

    var nieve3= new THREE.CylinderGeometry(1.2,2.08,1.05,15);
    var material4= new THREE.MeshLambertMaterial({color:0xffffff,wireframe:false});
    var mesh7= new THREE.Mesh(nieve3,material4);
    mesh7.position.set(0,2.99,0);

    var copa4= new THREE.CylinderGeometry(1.3,2.5,2,15);
    var material5= new THREE.MeshLambertMaterial({color:0x719845,wireframe:false});
    var mesh8= new THREE.Mesh(copa4,material5);
    mesh8.castShadow=true;
    mesh8.position.set(0,2,0); 

    var nieve4= new THREE.CylinderGeometry(1.3,2.59,1.5,15);
    var material5= new THREE.MeshLambertMaterial({color:0xffffff,wireframe:false});
    var mesh9= new THREE.Mesh(nieve4,material5);
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

    //ESTRELLA

    var estr= new THREE.TorusKnotGeometry(0.2,0.7524,17,11,9,2);
    var material9= new THREE.MeshLambertMaterial({color:0xd7b600,wireframe:true});
    var mesh13= new THREE.Mesh(estr,material9);
    mesh13.position.set(0,8.1,0);

    var estr= new THREE.TorusKnotGeometry(0.2,0.7524,17,11,9,2);
    var material9= new THREE.MeshLambertMaterial({color:0xffd500,wireframe:false});
    var mesh14= new THREE.Mesh(estr,material9);
    mesh14.position.set(0,8.1,0);

    ////////LUCES

    //HORIZONTAL

    var luz1= new THREE.CapsuleGeometry(0.08,0.2,1,9);
    var material11= new THREE.MeshLambertMaterial({color:0xec9b9b,wireframe:false});
    var mesh15= new THREE.Mesh(luz1,material11);
    mesh15.position.set(2.3,0.85,0);

    var luz2= new THREE.CapsuleGeometry(0.08,0.2,1,9);
    var material10= new THREE.MeshLambertMaterial({color:0xff1919,wireframe:true});
    var mesh16= new THREE.Mesh(luz2,material10);
    mesh16.position.set(2.3,0.85,0);

    var luz3= new THREE.CapsuleGeometry(0.08,0.2,1,9);
    var material11= new THREE.MeshLambertMaterial({color:0xec9b9b,wireframe:false});
    var mesh17= new THREE.Mesh(luz3,material11);
    mesh17.position.set(-2.3,0.85,0);
    
    var luz4= new THREE.CapsuleGeometry(0.08,0.2,1,9);
    var material10= new THREE.MeshLambertMaterial({color:0xff1919,wireframe:true});
    var mesh18= new THREE.Mesh(luz4,material10);
    mesh18.position.set(-2.3,0.85,0);

    //VERTICAL

    var luz5= new THREE.CapsuleGeometry(0.08,0.2,1,9);
    var material11= new THREE.MeshLambertMaterial({color:0xec9b9b,wireframe:false});
    var mesh19= new THREE.Mesh(luz5,material11);
    mesh19.position.set(0,0.85,2.3);
    
    var luz6= new THREE.CapsuleGeometry(0.08,0.2,1,9);
    var material10= new THREE.MeshLambertMaterial({color:0xff1919,wireframe:true});
    var mesh20= new THREE.Mesh(luz6,material10);
    mesh20.position.set(0,0.85,2.3);

    var luz7= new THREE.CapsuleGeometry(0.08,0.2,1,9);
    var material11= new THREE.MeshLambertMaterial({color:0xec9b9b,wireframe:false});
    var mesh21= new THREE.Mesh(luz7,material11);
    mesh21.position.set(0,0.85,-2.3);
    
    var luz8= new THREE.CapsuleGeometry(0.08,0.2,1,9);
    var material10= new THREE.MeshLambertMaterial({color:0xff1919,wireframe:true});
    var mesh22= new THREE.Mesh(luz8,material10);
    mesh22.position.set(0,0.85,-2.3);

    //DIAGONAL
    
    var luz9= new THREE.CapsuleGeometry(0.08,0.2,1,9);
    var material11= new THREE.MeshLambertMaterial({color:0xec9b9b,wireframe:false});
    var mesh23= new THREE.Mesh(luz9,material11);
    mesh23.position.set(1.3,0.85,2);
    
    var luz10= new THREE.CapsuleGeometry(0.08,0.2,1,9);
    var material10= new THREE.MeshLambertMaterial({color:0xff1919,wireframe:true});
    var mesh24= new THREE.Mesh(luz10,material10);
    mesh24.position.set(1.3,0.85,2);

    var luz11= new THREE.CapsuleGeometry(0.08,0.2,1,9);
    var material11= new THREE.MeshLambertMaterial({color:0xec9b9b,wireframe:false});
    var mesh25= new THREE.Mesh(luz11,material11);
    mesh25.position.set(1.3,0.85,-2);
    
    var luz12= new THREE.CapsuleGeometry(0.08,0.2,1,9);
    var material10= new THREE.MeshLambertMaterial({color:0xff1919,wireframe:true});
    var mesh26= new THREE.Mesh(luz12,material10);
    mesh26.position.set(1.3,0.85,-2);

    var luz13= new THREE.CapsuleGeometry(0.08,0.2,1,9);
    var material11= new THREE.MeshLambertMaterial({color:0xec9b9b,wireframe:false});
    var mesh27= new THREE.Mesh(luz13,material11);
    mesh27.position.set(-1.3,0.85,-2);
    
    var luz14= new THREE.CapsuleGeometry(0.08,0.2,1,9);
    var material10= new THREE.MeshLambertMaterial({color:0xff1919,wireframe:true});
    var mesh28= new THREE.Mesh(luz14,material10);
    mesh28.position.set(-1.3,0.85,-2);

    var luz15= new THREE.CapsuleGeometry(0.08,0.2,1,9);
    var material11= new THREE.MeshLambertMaterial({color:0xec9b9b,wireframe:false});
    var mesh29= new THREE.Mesh(luz15,material11);
    mesh29.position.set(-1.3,0.85,2);
    
    var luz16= new THREE.CapsuleGeometry(0.08,0.2,1,9);
    var material10= new THREE.MeshLambertMaterial({color:0xff1919,wireframe:true});
    var mesh30= new THREE.Mesh(luz16,material10);
    mesh30.position.set(-1.3,0.85,2);

    ////////ESFERAS

    var esfam= new THREE.SphereGeometry(0.2,20,20);
    var material25= new THREE.MeshLambertMaterial({color:0xd9c13e,wireframe:false});
    var mesh31= new THREE.Mesh(esfam,material25);
    mesh31.position.set(1.9,1.9,0);

    var esfam1= new THREE.SphereGeometry(0.2,20,20);
    var material25= new THREE.MeshLambertMaterial({color:0xd9c13e,wireframe:false});
    var mesh32= new THREE.Mesh(esfam1,material25);
    mesh32.position.set(-1.9,1.9,0);

    var esfam2= new THREE.SphereGeometry(0.2,20,20);
    var material25= new THREE.MeshLambertMaterial({color:0xd9c13e,wireframe:false});
    var mesh33= new THREE.Mesh(esfam2,material25);
    mesh33.position.set(0,1.9,1.9);

    var esfam3= new THREE.SphereGeometry(0.2,20,20);
    var material25= new THREE.MeshLambertMaterial({color:0xd9c13e,wireframe:false});
    var mesh34= new THREE.Mesh(esfam3,material25);
    mesh34.position.set(0,1.9,-1.9);

    var esfam4= new THREE.SphereGeometry(0.2,20,20);
    var material25= new THREE.MeshLambertMaterial({color:0xd9c13e,wireframe:false});
    var mesh35= new THREE.Mesh(esfam4,material25);
    mesh35.position.set(1.2,4.5,0);

    var esfam5= new THREE.SphereGeometry(0.2,20,20);
    var material25= new THREE.MeshLambertMaterial({color:0xd9c13e,wireframe:false});
    var mesh36= new THREE.Mesh(esfam5,material25);
    mesh36.position.set(-1.2,4.5,0);

    var esfam6= new THREE.SphereGeometry(0.2,20,20);
    var material25= new THREE.MeshLambertMaterial({color:0xd9c13e,wireframe:false});
    var mesh37= new THREE.Mesh(esfam6,material25);
    mesh37.position.set(0,4.5,1.2);

    var esfam7= new THREE.SphereGeometry(0.2,20,20);
    var material25= new THREE.MeshLambertMaterial({color:0xd9c13e,wireframe:false});
    var mesh39= new THREE.Mesh(esfam7,material25);
    mesh39.position.set(0,4.5,-1.2);

    var esfro1= new THREE.SphereGeometry(0.2,20,20);
    var material7= new THREE.MeshLambertMaterial({color:0xab1818,wireframe:false});
    var mesh40= new THREE.Mesh(esfro1,material7);
    mesh40.position.set(1,3.3,1.3);

    var esfro2= new THREE.SphereGeometry(0.2,20,20);
    var material07= new THREE.MeshLambertMaterial({color:0xab1818,wireframe:false});
    var mesh41= new THREE.Mesh(esfro2,material07);
    mesh41.position.set(-1,3.3,1.3);

    var esfro3= new THREE.SphereGeometry(0.2,20,20);
    var material7= new THREE.MeshLambertMaterial({color:0xab1818,wireframe:false});
    var mesh42= new THREE.Mesh(esfro3,material7);
    mesh42.position.set(1,3.3,-1.3);

    var esfro4= new THREE.SphereGeometry(0.2,20,20);
    var material07= new THREE.MeshLambertMaterial({color:0xab1818,wireframe:false});
    var mesh43= new THREE.Mesh(esfro4,material07);
    mesh43.position.set(-1,3.3,-1.3);

    var esfro5= new THREE.SphereGeometry(0.2,20,20);
    var material7= new THREE.MeshLambertMaterial({color:0xab1818,wireframe:false});
    var mesh44= new THREE.Mesh(esfro5,material7);
    mesh44.position.set(0.6,5.8,0.65);

    var esfro6= new THREE.SphereGeometry(0.2,20,20);
    var material07= new THREE.MeshLambertMaterial({color:0xab1818,wireframe:false});
    var mesh45= new THREE.Mesh(esfro6,material07);
    mesh45.position.set(-0.6,5.8,0.65);

    var esfro7= new THREE.SphereGeometry(0.2,20,20);
    var material7= new THREE.MeshLambertMaterial({color:0xab1818,wireframe:false});
    var mesh46= new THREE.Mesh(esfro7,material7);
    mesh46.position.set(0.6,5.8,-0.65);

    var esfro8= new THREE.SphereGeometry(0.2,20,20);
    var material07= new THREE.MeshLambertMaterial({color:0xab1818,wireframe:false});
    var mesh47= new THREE.Mesh(esfro8,material07);
    mesh47.position.set(-0.6,5.8,-0.65);

var arbolito=new THREE.Group();
arbolito.add (mesh0,mesh1,mesh2,mesh3,mesh4,mesh5,mesh6,mesh7,mesh8,mesh9,mesh10,mesh11,mesh12,
    mesh13,mesh14,mesh15,mesh16,mesh17,mesh18,mesh19,mesh20,mesh21,mesh22,mesh23,mesh24,mesh25,mesh26,mesh27,
    mesh28,mesh29,mesh30,mesh31,mesh32,mesh33,mesh34,mesh35,mesh36,mesh37,mesh39,mesh40,
    mesh41,mesh42,mesh43,mesh44,mesh45,mesh46,mesh47);
arbolito.position.set(x,y,z);
return arbolito; 
   
}