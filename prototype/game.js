function updateCameraPosition(camera, ball_body) {
  camera.updateMatrixWorld();
  ball_body.mesh.updateMatrixWorld();
  camera.position.copy(ball_body.mesh.position);
  var deltaCamera		= new THREE.Vector3(0,6,2);
  camera.position.add(deltaCamera);
  camera.lookAt(ball_body.mesh.position);
}

function updateBallPosition(keyboard, ball_body, nowMsec, deltaMsec) {
  let force	= new THREE.Vector3();
  let keypressed = false;
  if (keyboard.pressed('left')) {
    keypressed = true;
    force.x = -0.2;
  }
  if (keyboard.pressed('right')) {
    keypressed = true;
    force.x = +0.2;
  }
  if (keyboard.pressed('up')) {
    keypressed = true;
    force.z	= -0.2;
  }
  if (keyboard.pressed('down')) {
    keypressed = true;
    force.z	= +0.2;
  }
  if (keypressed === true) {
    force.multiplyScalar(1);
    ball_body.mesh.updateMatrixWorld();
    ball_body.applyImpulse(force, deltaMsec);
  }
  ball_body.update(deltaMsec/1000, nowMsec/1000);
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
  let texture = new THREE.TextureLoader().load( "../assets/textures/ball_texture.jpg" );
  let material	= new THREE.MeshPhongMaterial({
    map: texture
  });
  let geometry	= new THREE.SphereGeometry(radius, 64, 64);
	let mesh	= new THREE.Mesh(geometry, material);
  mesh.position.y	= 2;
	mesh.receiveShadow = true;
	mesh.castShadow	= true;
  return mesh;
}

function addWall(x1, z1, x2, z2){
  const width	= Math.abs(x2 - x1);
  const height	= 0.5;
  const depth	= Math.abs(z2 - z1);
  let geometry	= new THREE.CubeGeometry(width, height, depth);
  let texture = new THREE.TextureLoader().load( "../assets/textures/wood.jpg" );
  let material	= new THREE.MeshPhongMaterial({
    map	: texture
  });
  // material.map.wrapS	= THREE.RepeatWrapping;
	// material.map.wrapT	= THREE.RepeatWrapping;
	// material.map.repeat.x	= 1/16;
	// material.map.repeat.y	= 1/16;
  var mesh	= new THREE.Mesh(geometry, material)
	mesh.position.x	= x1 + width /2;
	mesh.position.y	= height/2;
	mesh.position.z	= z1 + depth /2;
  mesh.receiveShadow	= true;
	mesh.castShadow		= true;
  return mesh;
}
