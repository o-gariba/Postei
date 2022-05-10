import { useEffect, useState } from "react"

const ListaDados = () => {
    const api = 'http://localhost:5000'

    const [lista, setLista] = useState([])

    useEffect(() => {

        const listaServer = await fetch(api + '/lista')
            .then(res => res.json())
            .then(nota => nota)
            .catch(erro => console.error(erro))

        setLista(listaServer)

    }, [])

    const handleSubmit = async (evento) => {
        evento.preventDefault()
        console.log('Envio feito....')

        const itemLista = {
            id: Math.random(),
            imgAvatar,
            nomeUser,
            post,
        }

        await fetch(api + '/lista', {
            method: 'POST',
            body: JSON.stringify(itemLista),
            headers: {
                "Content-Type": "application/json",
            },
        })

        setLista((stateAntigo) => [...stateAntigo, itemLista])
        
        // Limpar inputs
    }

    return (
        <>
        </>
    )
}

export default ListaDados