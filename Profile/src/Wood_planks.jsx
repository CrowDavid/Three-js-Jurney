import { Clone, useGLTF } from '@react-three/drei'

export default function WoodPlanks()
{
    const planks = useGLTF('./Objects/Wood_planks/Stacked_planks.glb')

    return <>
        <Clone object={ planks.scene } scale={ 0.50 } rotation-y={Math.PI * 0.5} position={ [ -70, -0.83, 0 ] } />
        <Clone object={ planks.scene } scale={ 0.50 } rotation-y={Math.PI * 0.5} position={ [ -70, 1.02, 0 ] }/>
        <Clone object={ planks.scene } scale={ 0.50 } rotation-y={Math.PI * 0.5} position={ [ -70, 2.87, 0 ] }/>
    </>
}