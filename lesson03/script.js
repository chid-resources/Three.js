// Scene
const scene = new THREE.Scene();
console.log("scene :>> ", scene);

// Cube
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0xa4f9ff });
const boxMesh = new THREE.Mesh(boxGeometry, basicMaterial);
scene.add(boxMesh);

// Size
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const canvas = document.querySelector(".my-canvas");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
