import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, useGLTF, Float, Environment, OrbitControls } from "@react-three/drei";
import { useRef, useMemo, Suspense, useEffect } from "react";
import * as THREE from "three";

function MewModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const groupRef = useRef<THREE.Group>(null!);
  const { camera } = useThree();
  const fitted = useRef(false);
  const cloned = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    if (!groupRef.current || fitted.current) return;
    fitted.current = true;
    const box = new THREE.Box3().setFromObject(groupRef.current);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    groupRef.current.position.sub(center);
    const fov = ((camera as THREE.PerspectiveCamera).fov * Math.PI) / 180;
    const dist = (maxDim / 2 / Math.tan(fov / 2)) * 1.7;
    camera.position.set(0, maxDim * 0.08, dist);
    camera.lookAt(0, 0, 0);
  }, [cloned, camera]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    // always rotates — unaffected by OrbitControls
    groupRef.current.rotation.y = clock.elapsedTime * 0.28;
    groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.6) * 0.04;
  });

  return (
    <group ref={groupRef}>
      <primitive object={cloned} />
    </group>
  );
}

function Particles() {
  const count = 500;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3 + Math.random() * 6;
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null!);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.elapsedTime * 0.04;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#f9a8d4" size={0.025} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

function AuraRings() {
  const r1 = useRef<THREE.Mesh>(null!);
  const r2 = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (r1.current) { r1.current.rotation.z = t * 0.45; r1.current.rotation.x = 0.6; }
    if (r2.current) { r2.current.rotation.z = -t * 0.28; r2.current.rotation.x = 1.2; }
  });
  return (
    <>
      <mesh ref={r1}>
        <torusGeometry args={[2.0, 0.006, 8, 100]} />
        <meshBasicMaterial color="#e879f9" transparent opacity={0.4} />
      </mesh>
      <mesh ref={r2}>
        <torusGeometry args={[2.6, 0.004, 8, 100]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.25} />
      </mesh>
    </>
  );
}

function Spinner() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.9;
      ref.current.rotation.x = clock.elapsedTime * 0.45;
    }
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.7, 1]} />
      <meshBasicMaterial color="#e879f9" wireframe transparent opacity={0.45} />
    </mesh>
  );
}

export default function Scene3D({ url }: { url: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ antialias: true, alpha: true }} style={{ background: "transparent" }}>
      <ambientLight intensity={0.5} color="#ffe4f7" />
      <pointLight position={[0, 2, 3]}   intensity={3}   color="#f9a8d4" distance={12} decay={2} />
      <pointLight position={[-3, 1, -2]} intensity={2}   color="#a855f7" distance={10} decay={2} />
      <pointLight position={[3, -1, 2]}  intensity={1.5} color="#22d3ee" distance={10} decay={2} />
      <pointLight position={[0, 5, 0]}   intensity={0.8} color="#ffffff" distance={12} decay={2} />

      <Suspense fallback={<Spinner />}>
        <Environment preset="sunset" />
        <Stars radius={60} depth={40} count={1800} factor={3} saturation={0.3} fade />
        <Float speed={1.4} rotationIntensity={0} floatIntensity={0.5}>
          <MewModel url={url} />
        </Float>
        <Particles />
        <AuraRings />
      </Suspense>

      <OrbitControls
        enableZoom
        enableRotate
        enablePan
        zoomSpeed={0.8}
        rotateSpeed={0.6}
        panSpeed={0.5}
        minDistance={1}
        maxDistance={20}
        autoRotate={false}
      />
    </Canvas>
  );
}