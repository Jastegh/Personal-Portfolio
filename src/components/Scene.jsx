// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// const Model = () => {
//   const gltf = useGLTF('/src/assets/low_poly_80s_computer_v3.glb'); 
//   return <primitive object={gltf.scene} scale={1.0} position={[-4, -1, 0]} />;
// };

// const Scene = () => {
//   return (
//     <Canvas className="w-full h-full">
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[2, 5, 2]} />
//       <Model />
//       <OrbitControls enableZoom={false} />
//     </Canvas>
//   );
// };

// export default Scene;






// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// function ComputerModel(props) {
//   const { scene } = useGLTF('/src/assets/my_computer.glb'); // Load the GLB model
//   return <primitive object={scene} {...props} scale={5.0}/>;
// }

// export default function Scene() {
//   return (
//     <div className="w-full h-60 mb-8"> {/* Adjust height and margin */}
//       <Canvas>
//         {/* Lights for the scene */}
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[10, 10, 5]} intensity={1} />
        
//         {/* Model */}
//         <Suspense fallback={null}>
//           <ComputerModel scale={[2.5, 2.5, 2.5]} position={[0, -1, 0]} /> {/* Adjust scale and position */}
//         </Suspense>
        
//         {/* OrbitControls */}
//         <OrbitControls enableZoom={false} />
//       </Canvas>
//     </div>
//   );
// }




import React from 'react';
import { useGLTF } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF('/assets/my_computer.glb'); // Ensure the path to the .glb file is correct

  // Add scale and position here
  return <primitive object={scene} scale={[1.5, 1.5, 1.5]} position={[0, -1, 0]} />;
};

export default Model;

