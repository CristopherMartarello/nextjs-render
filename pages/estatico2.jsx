export function getStaticProps() { // Convenção de código, esse componente vai usar a ideia de geração estática, static generation
    return {
        props : {
            numero: Math.random()
        }
    }
}

export default function Estatico2(props) {
    return (
        <div>
            <h1>Estático #02</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}