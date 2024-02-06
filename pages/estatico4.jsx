
export async function getStaticProps() { // Conteúdo gerado apenas uma vez no build do projeto
    const resp = await fetch('http://localhost:3000/api/produtos');
    const produtos = await resp.json();
    return {
        props : {
            produtos: produtos
        }
    }
}

export default function Estatico2(props) {
    function renderizarProdutos() {
        return props.produtos.map(produto => {
            return <li key={produto.id}>{produto.id} - {produto.nome} tem preço de R$ {produto.preco}</li>
        })
    }

    return (
        <div>
            <h1>Estático #04</h1>
            {renderizarProdutos()}
        </div>
    )
}