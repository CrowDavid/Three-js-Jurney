import * as THREE from 'three'

export default function Terrain()
{
    return<>
        <mesh receiveShadow position-y={ - 1.75 } rotation-x={Math.PI * 0.5} scale={ [ 200, 200, 1.5 ] }>
            <boxGeometry />
            <meshStandardMaterial color="lightgreen" side={ THREE.DoubleSide }  />
        </mesh>

        <mesh position-y={ 14.1 } position-z={ 100 } scale={ [ 198.4, 30, 1.5 ] }>
            <boxGeometry />
            <meshStandardMaterial color="blue" side={ THREE.DoubleSide } opacity={ 0.5 } transparent={true} />
        </mesh>

        <mesh position-y={ 14.1 } position-z={ - 100 } scale={ [ 198.4, 30, 1.5 ] }>
            <boxGeometry />
            <meshStandardMaterial color="blue" side={ THREE.DoubleSide } opacity={ 0.5 } transparent={true} />
        </mesh>

        <mesh position={ [ 100, 14.1, 0 ] } rotation-y={ - Math.PI * 0.5 } scale={ [ 200, 30, 1.5 ] }>
            <boxGeometry />
            <meshStandardMaterial color="blue" side={ THREE.DoubleSide } opacity={ 0.5 } transparent={true} />
        </mesh>
        
        <mesh position={ [ - 100, 14.1, 0 ] } rotation-y={ - Math.PI * 0.5 } scale={ [ 200, 30, 1.5 ] }>
            <boxGeometry />
            <meshStandardMaterial color="blue" side={ THREE.DoubleSide } opacity={ 0.5 } transparent={true} />
        </mesh>
    </>
}