import { Text3D } from '@react-three/drei'

export default function ITtext()
{
    return<>

        <Text3D
            font="./fonts/helvetiker_regular.typeface.json"
            size={ 3 }
            height={ 0.2 }
            curveSegments={ 12 }
            bevelEnabled
            bevelThickness={ 0.3 }
            bevelSize={ 0.02 }
            bevelOffset={ 0 }
            bevelSegments={ 5 }
            position={[5, -0.9, 5]}
            >
            DAVID VRANKAR
            <meshNormalMaterial />
        </Text3D>

        <Text3D
            font="./fonts/helvetiker_regular.typeface.json"
            size={ 2 }
            height={ 0.2 }
            curveSegments={ 12 }
            bevelEnabled
            bevelThickness={ 0.05 }
            bevelSize={ 0.02 }
            bevelOffset={ 0 }
            bevelSegments={ 5 }
            position={[ 11, - 0.9, 10 ]}
            rotation-x={[ Math.PI * (- 0.5) ]}
            >
            Web developer
            <meshNormalMaterial />
        </Text3D>

    </>
}