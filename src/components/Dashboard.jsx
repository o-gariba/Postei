import { Component } from "react";
import Modal from './Modal'
// import ModalPost from "./ModalPost";

class Dashboard extends Component {

    constructor() {
        super()
        this.state = {
            show: false
        }
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }

    showModal = () => {
        this.setState({ show: true })
    }

    hideModal = () => {
        this.setState({ show: false })
    }

    render() {
        return (
            <main>
                <button type="button" onClick={this.showModal}>
                    IDENTIFIQUE-SE E POSTE
                </button>

                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <form onSubmit={e => {
                        e.preventDefault()
                        e.stopPropagation()
                    }}>
                        <label >Img de perfil</label>
                        <input type="text" placeholder="Ex: https://minhaimagem.com"
                            onChange={(dado) => {
                                // setImgAvatar(dado.target.value)
                            }}
                        />

                        <label >Seu @</label>
                        <input type="text" placeholder="seu_nome123"
                            onChange={(dado) => {
                                // setNomeUser(dado.target.value)
                            }}
                        />

                        <label >Post</label>
                        <input type="text" placeholder="Ex: https://minhaimagem.com"
                            // onChange={(dado) => setPost(dado.target.value)}
                        />

                        <button type="submit" onClick={this.hideModal}>Postar</button>
                        <button onClick={this.hideModal}>Sair</button>
                    </form>
                </Modal>
            </main>
        )
    }

}

export default Dashboard