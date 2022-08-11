import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Tavatar from './Model'

const TavatarCanvas = () => {
    return (
        <Canvas
            camera={{ position: [6, 5, 12], fov: 16}}
            style={{
            backgroundColor: '#282A36',
            width: '26vw',
            minWidth: '350px',
            height: '375px',
            marginBottom: '2em',
            }}
        >
            <ambientLight intensity={1.25} />
            <directionalLight intensity={1.5} castShadow={true} shadow={[512,512,.5,500]}/>
            <Suspense fallback={null}>
                <Tavatar position={[.375, -1.4, 0]} scale={[1.6,1.6,1.6]}/> 
            </Suspense>
            <OrbitControls autoRotate={true}/>
        </Canvas>
    )
}

export default TavatarCanvas