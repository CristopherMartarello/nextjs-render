export async function getStaticPaths() {
    const resp = await fetch(`http://localhost:3000/api/alunos/tutores`)
    const ids = await resp.json()

    const paths = ids.map(id => {
        return {params: {id: `${id}`}}
    })

    return {
        fallback: true, // 404
        paths: paths
    }
}

export async function getStaticProps(context) {
    const resp = await fetch(`http://localhost:3000/api/alunos/${context.params.id}`)
    const aluno = await resp.json()
    return {
        props: {
            aluno: aluno
        }
    }
}

export default function AlunoPorId(props) {
    const { aluno } = props 
    return (
        <div>
            <h1>Detalhes do aluno</h1>
            {aluno ?
                <ul>
                    <li>{aluno.id}</li>
                    <li>{aluno.nome}</li>
                    <li>{aluno.email}</li>
                </ul> 
                : false
            }
        </div>
    )
}