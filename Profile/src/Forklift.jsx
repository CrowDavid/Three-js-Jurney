import { useGLTF } from '@react-three/drei'

export default function Forklift()
{
    const forklift = useGLTF('./Objects/Forklift/Forklift.glb')

    return<>
        <primitive object={ forklift.scene } scale={ 0.2 } />
    </>
}