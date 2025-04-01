import { Text3D, useGLTF, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import Lights from './Lights.jsx'
import Terrain from './Terrain.jsx'
import WoodPlanks from './Wood_planks.jsx'
import Trees from './Trees.jsx'
import Forklift from './Forklift.jsx'
import ITtext from './Text.jsx'

export default function Experience()
{
    return <>

        <OrbitControls makeDefault />

        <Lights />

        <Terrain />

        <WoodPlanks />

        <Trees />

        <Forklift/>

        <ITtext />
    </>
}