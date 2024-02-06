
export function getServerSideProps() { // Convenção de código para falar que o conteúdo é gerado dinamicamente no server (SSR)
    console.log('SERVER')
    return {
        props : {
            numero: Math.random()
        }
    }
}

export default function Dinamico1(props) {
    return (
        <div>
            <h1>Dinâmico #01</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}