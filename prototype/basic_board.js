function updateBallPosition(keyboard, ball_body, deltaMsec) {
  let force	= new THREE.Vector3();
  let keypressed = false;
  if (keyboard.pressed('left')) {
    keypressed = true;
    force.x = -1;
  }
  if (keyboard.pressed('right')) {
    keypressed = true;
    force.x = +1;
  }
  if (keyboard.pressed('up')) {
    keypressed = true;
    force.z	= -1;
  }
  if (keyboard.pressed('down')) {
    keypressed = true;
    force.z	= +1;
  }
  if (keypressed == true) {
    force.multiplyScalar(1);
    ball_body.mesh.updateMatrixWorld();
  	var deltaPos	= new THREE.Vector3().getPositionFromMatrix( ball_body.mesh.matrixWorld );
    var forceAngle	= - Math.PI/2 - Math.atan2(deltaPos.z, deltaPos.x);
    var matrix	= new THREE.Matrix4().makeRotationY( forceAngle );
    force.applyMatrix4( matrix );
    ball_body.applyImpulse(force, deltaMsec);
  }
}

function buildFloor(x1, z1, x2, z2) {
  const width	= Math.abs(x2 - x1);
  const height	= 1;
  const depth	= Math.abs(z2 - z1);
  let geometry	= new THREE.CubeGeometry(width, height, depth);
  let texture = new THREE.TextureLoader().load( "../assets/textures/plywood.jpg" );
  let material	= new THREE.MeshPhongMaterial({
    map		: texture
  });
  texture.wrapS	= THREE.RepeatWrapping;
  texture.wrapT	= THREE.RepeatWrapping;
  texture.repeat.x= 35;
  texture.repeat.y= 20;
  let mesh	= new THREE.Mesh(geometry, material);
  mesh.position.x	= x1 + width/2;
  mesh.position.y	= -height/2;
  mesh.position.z	= z1 + depth/2;
  mesh.receiveShadow = true;
  mesh.castShadow	= true;
  return mesh;
}

function buildLight(light) {
  let amb_light	= new THREE.AmbientLight(0x444444, 2);
	light.add(amb_light);

	let dir_light	= new THREE.DirectionalLight( 'white', 1 );
	dir_light.position.set(5,5,5);
	dir_light.target.position.set(0, 1, 0 );
	light.add(dir_light);

	dir_light.castShadow	= true;
	dir_light.shadow.camera.near	= 0.01;
	dir_light.shadow.camera.far	= 15;
	dir_light.shadow.camera.fov	= 45;

	dir_light.shadow.camera.left	= -8;
	dir_light.shadow.camera.right	=  8;
	dir_light.shadow.camera.top	=  5;
	dir_light.shadow.camera.bottom= -5;

	dir_light.shadow.bias	= 0.001;

	dir_light.shadow.mapSize.width	= 1024*2;
	dir_light.shadow.mapSize.height	= 1024*2;
}

function addBall(radius) {
  let texture = new THREE.TextureLoader().load( "../assets/textures/metalic.jpg" );
  let material	= new THREE.MeshPhongMaterial({
    map: texture
  });
  let geometry	= new THREE.SphereGeometry(radius, 32, 32);
	let mesh	= new THREE.Mesh(geometry, material);
  mesh.position.y	= 2;
	mesh.receiveShadow	= true;
	mesh.castShadow		= true;
  return mesh;
}
