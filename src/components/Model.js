import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

function Tavatar(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Tavatar.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions['Armature|mixamo.com|Layer0'].play(); 
  });
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature001">
          <primitive object={nodes.Hips} />
          <skinnedMesh name="Wolf3D_Body001" geometry={nodes.Wolf3D_Body001.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body001.skeleton} />
          <skinnedMesh name="Wolf3D_Glasses001" geometry={nodes.Wolf3D_Glasses001.geometry} material={materials.Wolf3D_Glasses} skeleton={nodes.Wolf3D_Glasses001.skeleton} />
          <skinnedMesh name="Wolf3D_Hair001" geometry={nodes.Wolf3D_Hair001.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair001.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Bottom001" geometry={nodes.Wolf3D_Outfit_Bottom001.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Footwear001" geometry={nodes.Wolf3D_Outfit_Footwear001.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear001.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Top001" geometry={nodes.Wolf3D_Outfit_Top001.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top001.skeleton} />
          <skinnedMesh name="EyeLeft002" geometry={nodes.EyeLeft002.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft002.skeleton} morphTargetDictionary={nodes.EyeLeft002.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft002.morphTargetInfluences} />
          <skinnedMesh name="EyeRight002" geometry={nodes.EyeRight002.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight002.skeleton} morphTargetDictionary={nodes.EyeRight002.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight002.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Head001" geometry={nodes.Wolf3D_Head001.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head001.skeleton} morphTargetDictionary={nodes.Wolf3D_Head001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head001.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Teeth001" geometry={nodes.Wolf3D_Teeth001.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth001.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth001.morphTargetInfluences} />
        </group>
        <mesh name="desk" geometry={nodes.desk.geometry} material={materials['Material.007']} />
        <group name="laptop">
          <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials['Material.007']} />
          <mesh name="Cube001_1" geometry={nodes.Cube001_1.geometry} material={materials['Material.008']} />
          <mesh name="Cube001_2" geometry={nodes.Cube001_2.geometry} material={materials['Material.009']} />
          <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials['Material.007']} />
          <mesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials['Material.007']} />
          <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials['Material.007']} />
          <mesh name="Cube005" geometry={nodes.Cube005.geometry} material={materials['Material.007']} />
          <mesh name="Cube006" geometry={nodes.Cube006.geometry} material={materials['Material.007']} />
          <mesh name="Cube007" geometry={nodes.Cube007.geometry} material={materials['Material.007']} />
        </group>
        <group name="book1">
          <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials['Material.014']} />
          <mesh name="Cube009_1" geometry={nodes.Cube009_1.geometry} material={materials['Material.012']} />
        </group>
        <group name="open_notebook">
          <mesh name="Cube010" geometry={nodes.Cube010.geometry} material={materials['Material.012']} />
          <mesh name="Cube010_1" geometry={nodes.Cube010_1.geometry} material={materials['Material.013']} />
        </group>
        <mesh name="lamp" geometry={nodes.lamp.geometry} material={materials['Material.010']}>
          <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials['Material.010']} />
          <mesh name="Sphere" geometry={nodes.Sphere.geometry} material={materials['Material.010']} />
          <mesh name="Sphere001" geometry={nodes.Sphere001.geometry} material={materials['Material.009']} />
        </mesh>
        <mesh name="chair" geometry={nodes.chair.geometry} material={materials['Material.011']}>
          <mesh name="Cube011" geometry={nodes.Cube011.geometry} material={materials['Material.008']} />
          <mesh name="Cube013" geometry={nodes.Cube013.geometry} material={materials['Material.008']} />
          <mesh name="Cube014" geometry={nodes.Cube014.geometry} material={materials['Material.008']} />
          <mesh name="Cylinder002" geometry={nodes.Cylinder002.geometry} material={materials['Material.008']} />
        </mesh>
        <group name="book2">
          <mesh name="Cube012" geometry={nodes.Cube012.geometry} material={materials['Material.012']} />
          <mesh name="Cube012_1" geometry={nodes.Cube012_1.geometry} material={materials['Material.005']} />
        </group>
        <group name="bottle">
          <mesh name="Cylinder004" geometry={nodes.Cylinder004.geometry} material={materials['Material.008']} />
          <mesh name="Cylinder004_1" geometry={nodes.Cylinder004_1.geometry} material={materials['Material.015']} />
          <mesh name="Cylinder004_2" geometry={nodes.Cylinder004_2.geometry} material={materials['Material.016']} />
        </group>
        <group name="mug">
          <mesh name="Cylinder005" geometry={nodes.Cylinder005.geometry} material={materials['Material.018']} />
          <mesh name="Cylinder005_1" geometry={nodes.Cylinder005_1.geometry} material={materials['Material.017']} />
          <mesh name="Cylinder005_2" geometry={nodes.Cylinder005_2.geometry} material={materials['Material.019']} />
        </group>
        <group name="pen1">
          <mesh name="Cylinder006" geometry={nodes.Cylinder006.geometry} material={materials['Material.008']} />
          <mesh name="Cylinder006_1" geometry={nodes.Cylinder006_1.geometry} material={materials['Material.017']} />
        </group>
        <group name="pen2">
          <mesh name="Cylinder007" geometry={nodes.Cylinder007.geometry} material={materials['Material.008']} />
          <mesh name="Cylinder007_1" geometry={nodes.Cylinder007_1.geometry} material={materials['Material.016']} />
        </group>
        <group name="plant">
          <mesh name="Cylinder009" geometry={nodes.Cylinder009.geometry} material={materials['Material.026']} />
          <mesh name="Cylinder009_1" geometry={nodes.Cylinder009_1.geometry} material={materials['Material.027']} />
          <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials['Material.028']} />
          <mesh name="Plane002" geometry={nodes.Plane002.geometry} material={materials['Material.028']} />
          <mesh name="Plane003" geometry={nodes.Plane003.geometry} material={materials['Material.028']} />
          <mesh name="Plane004" geometry={nodes.Plane004.geometry} material={materials['Material.028']} />
          <mesh name="Plane005" geometry={nodes.Plane005.geometry} material={materials['Material.028']} />
          <mesh name="Plane006" geometry={nodes.Plane006.geometry} material={materials['Material.028']} />
          <mesh name="Plane007" geometry={nodes.Plane007.geometry} material={materials['Material.028']} />
          <mesh name="Plane008" geometry={nodes.Plane008.geometry} material={materials['Material.028']} />
          <mesh name="Plane009" geometry={nodes.Plane009.geometry} material={materials['Material.028']} />
          <mesh name="Plane010" geometry={nodes.Plane010.geometry} material={materials['Material.028']} />
          <mesh name="Plane011" geometry={nodes.Plane011.geometry} material={materials['Material.028']} />
          <mesh name="Plane012" geometry={nodes.Plane012.geometry} material={materials['Material.028']} />
          <mesh name="Plane013" geometry={nodes.Plane013.geometry} material={materials['Material.028']} />
          <mesh name="Plane014" geometry={nodes.Plane014.geometry} material={materials['Material.028']} />
          <mesh name="Plane015" geometry={nodes.Plane015.geometry} material={materials['Material.028']} />
          <mesh name="Plane016" geometry={nodes.Plane016.geometry} material={materials['Material.028']} />
          <mesh name="Plane017" geometry={nodes.Plane017.geometry} material={materials['Material.028']} />
          <mesh name="Plane018" geometry={nodes.Plane018.geometry} material={materials['Material.028']} />
          <mesh name="Plane019" geometry={nodes.Plane019.geometry} material={materials['Material.028']} />
          <mesh name="Plane020" geometry={nodes.Plane020.geometry} material={materials['Material.028']} />
          <mesh name="Plane021" geometry={nodes.Plane021.geometry} material={materials['Material.028']} />
          <mesh name="Plane022" geometry={nodes.Plane022.geometry} material={materials['Material.028']} />
          <mesh name="Plane023" geometry={nodes.Plane023.geometry} material={materials['Material.028']} />
          <mesh name="Plane024" geometry={nodes.Plane024.geometry} material={materials['Material.028']} />
        </group>
      </group>
    </group>
  )
}

export default Tavatar

useGLTF.preload('/Tavatar.glb')
