import { Component } from "react";
import Modal from './Modal'
import ModalPost from "./ModalPost";

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
                    <ModalPost />
                </Modal>
            </main>
        )
    }

}

export default Dashboard