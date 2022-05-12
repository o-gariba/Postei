import { useState } from "react";
import Modal from 'react-modal'


const DashboardFunction = ({ childToParent, criarPost }) => {

    const customStyles = {
        content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        transform             : 'translate(-50%, -50%)',
        backgroundColor       : '#F0AA89'      
        }
    };

    const [modalAberto, setModalAberto] = useState(false)

    const [imgAvatar, setImgAvatar] = useState('')
    const [nomeUser, setNomeUser] = useState('')
    const [post, setPost] = useState('')

    const showModal = () => {
        setModalAberto(true)
    }

    const hideModal = () => {
        setModalAberto(false)
    }


    return (
        <main>
            <button type="button" onClick={showModal}>
                Postar com function component
            </button>

            <Modal 
                isOpen={modalAberto}
                style={customStyles}
                ariaHideApp={false}
                onRequestClose={()=> setModalAberto(false)}
            >

                <form onSubmit={e => {
                    e.preventDefault()
                    e.stopPropagation()
                    console.log('form enviado')
                    criarPost(imgAvatar, nomeUser, post)
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

                    <button type="submit" >Postar</button>
                    <button onClick={hideModal}>Sair</button>
                </form>
            </Modal>
        </main>
    )
}

export default DashboardFunction