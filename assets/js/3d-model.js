// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    const loaderContainer = document.querySelector('.loader-container');
    let assetsLoaded = false;
    let modelLoaded = false;

    // Función para ocultar el loader cuando todo esté listo
    function hideLoader() {
        if (assetsLoaded && modelLoaded) {
            loaderContainer.classList.add('hidden');
            // Remover el loader después de la transición
            setTimeout(() => {
                loaderContainer.style.display = 'none';
            }, 500);
        }
    }

    // Verificar que Three.js esté disponible
    if (typeof THREE === 'undefined') {
        console.error('Three.js no está disponible');
        return;
    }

    console.log('Inicializando Three.js');
    
    const container = document.getElementById('model-container');
    if (!container) {
        console.error('No se encontró el contenedor del modelo 3D');
        return;
    }
    
    // Configurar escena
    const scene = new THREE.Scene();
    
    // Configurar cámara para modelo más grande
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 4.0;
    camera.position.y = 0.5;
    camera.position.x = 0.2;
    
    // Configurar renderer mejorado
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);
    
    // Iluminación simplificada
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    
    // Luz principal
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(3, 3, 3);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);

    // Luz de relleno
    const fillLight = new THREE.DirectionalLight(0x87ceeb, 0.6);
    fillLight.position.set(-2, 1, 2);
    scene.add(fillLight);

    // Configurar controles mejorados
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.rotateSpeed = 0.3;
    controls.maxPolarAngle = Math.PI / 1.8;
    controls.minPolarAngle = Math.PI / 4;
    controls.maxDistance = 6;
    controls.minDistance = 2.5;
    controls.target.set(0, 0, 0);
    
    // Variable para almacenar el modelo
    let model;
    
    // Función de animación simplificada
    let time = 0;
    function animate() {
        requestAnimationFrame(animate);
        time += 0.01;
        
        if (model) {
            // Rotación suave y continua
            model.rotation.y += 0.003;
            
            // Movimiento sutil de flotación para modelo más grande
            model.position.y = 0.1 + Math.sin(time) * 0.08;
            
            // Rotación sutil en X para más dinamismo
            model.rotation.x = Math.sin(time * 0.5) * 0.02;
        }
        
        controls.update();
        renderer.render(scene, camera);
    }
    
    // Iniciar animación
    animate();
    
    // Cargar el modelo 3D
    const loader = new THREE.GLTFLoader();
    console.log('Intentando cargar el modelo 3D desde:', 'assets/models/avatar_programador.glb');
    
    loader.load(
        'assets/models/avatar_programador.glb',
        function(gltf) {
            console.log('¡Modelo cargado con éxito!');
            model = gltf.scene;
            
            // Escala más grande y llamativa
            model.scale.set(2.0, 2.0, 2.0);
            model.position.set(0, 0.1, 0);
            
            // Habilitar sombras
            model.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                    
                    // Mejorar materiales de forma simple
                    if (child.material) {
                        child.material.shininess = 60;
                        child.material.specular = new THREE.Color(0x222222);
                        
                        // Ajustar colores de forma simple
                        if (child.material.color) {
                            child.material.color.multiplyScalar(1.1);
                        }
                        
                        // Materiales básicos
                        child.material.metalness = 0.1;
                        child.material.roughness = 0.5;
                    }
                }
            });
            
            scene.add(model);
            
            // Marcar el modelo como cargado
            modelLoaded = true;
            hideLoader();
        },
        function(xhr) {
            console.log('Progreso de carga: ' + Math.round(xhr.loaded / xhr.total * 100) + '%');
        },
        function(error) {
            console.error('Error al cargar el modelo:', error);
            // En caso de error, ocultar el loader de todos modos
            modelLoaded = true;
            hideLoader();
        }
    );
    
    // Manejar redimensionamiento de ventana
    window.addEventListener('resize', function() {
        if (container.clientWidth > 0 && container.clientHeight > 0) {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        }
    });

    // Marcar los assets como cargados cuando la página esté lista
    window.addEventListener('load', function() {
        assetsLoaded = true;
        hideLoader();
    });
}); 