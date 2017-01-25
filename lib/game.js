var makeFloor = function (x1, z1, x2, z2) {
  var width = Math.abs(x2 - x1);
  var height = 1;
  var depth = Math.abs(z2 - z1);

  var geometry = new THREE.BoxGeometry(width, height, depth);
  var texture = THREE.ImageUtils.loadTexture('../assets/textures/wood.jpg');
  var material = new THREE.MeshPhongMaterial({ map: texture });
  var mesh = new THREE.Mesh(geometry, material);

  mesh.position.x = x1 + width/2;
  mesh.position.y = -height/2;
  mesh.position.z = z1 + depth/2;
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  return mesh;
};

var makeBall = function(radius) {
  var geometry = new THREE.SphereGeometry(radius, 64, 64);
  var texture = THREE.ImageUtils.loadTexture('../assets/textures/metallic.jpg');
  var material = new THREE.MeshPhongMaterial({ map: texture });
  var mesh = new THREE.Mesh(geometry, material);

  mesh.position.x = -5.3;
  mesh.position.y = 2;
  mesh.position.z = 3.5;
  mesh.receiveShadow = true;
  mesh.castShadow = true;
  return mesh;
};

var makeWall = function(x1, z1, x2, z2) {
  var width = Math.abs(x2 - x1);
  var height = 0.4;
  var depth = Math.abs(z2 - z1);

  var geometry = new THREE.BoxGeometry(width, height, depth);
  var texture = THREE.ImageUtils.loadTexture('../assets/textures/wall.jpg');
  var material = new THREE.MeshPhongMaterial({ map: texture });
  var mesh = new THREE.Mesh(geometry, material);

  mesh.position.x = x1 + width/2;
  mesh.position.y = height/2;
  mesh.position.z = z1 + depth/2;
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  return mesh;
};

var moveBall = function (keyboard, ballBody, nowMsec, deltaMsec) {
  let force = new THREE.Vector3();
  let keypressed = false;
  if (keyboard.pressed('left')) {
    keypressed = true;
    force.x = -0.4;
  } else if (keyboard.pressed('right')) {
    keypressed = true;
    force.x = 0.4;
  } else if (keyboard.pressed('up')) {
    keypressed = true;
    force.z = -0.4;
  } else if (keyboard.pressed('down')) {
    keypressed = true;
    force.z = 0.4;
  }

  if (keypressed === true) {
    ballBody.mesh.updateMatrixWorld();
    ballBody.applyImpulse(force, deltaMsec);
  }
  ballBody.update(deltaMsec/1000, nowMsec/1000);
};
