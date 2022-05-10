import { useState } from "react"

const ModalPost = () => {
    const [imgAvatar, setImgAvatar] = useState('')
    const [nomeUser, setNomeUser] = useState('')
    const [post, setPost] = useState('')

    return (
        <form onSubmit={e => {
            e.preventDefault()
            console.log({ imgAvatar, nomeUser, post })
        }}>
            <label >Img de perfil</label>
            <input type="text" placeholder="Ex: https://minhaimagem.com"
                onChange={(dado) => {
                    setImgAvatar(dado.target.value)
                }}
            />

            <label >Seu @</label>
            <input type="text" placeholder="seu_nome123"
                onChange={(dado) => {
                    setNomeUser(dado.target.value)
                }}
            />

            <label >Post</label>
            <input type="text" placeholder="Ex: https://minhaimagem.com"
                onChange={(dado) => setPost(dado.target.value)}
            />

            <button type="submit">Postar</button>
        </form>
    )
}

export default ModalPost