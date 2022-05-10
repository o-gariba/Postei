// import { useState, useEffect, useContext, createContext } from "react"

// const ModalPost = () => {

//     function criarPost() {
//         // console.log(`Novo post criado: ${[imgAvatar, nomeUser, post]}`)
//     }

//     return (
//         <form onSubmit={e => {
//             e.preventDefault()
//             e.stopPropagation()
//             // console.log({ imgAvatar, nomeUser, post })
//             // criarPost()
//         }}>
//             <label >Img de perfil</label>
//             <input type="text" placeholder="Ex: https://minhaimagem.com"
//                 onChange={(dado) => {
//                     // setImgAvatar(dado.target.value)
//                 }}
//             />

//             <label >Seu @</label>
//             <input type="text" placeholder="seu_nome123"
//                 onChange={(dado) => {
//                     // setNomeUser(dado.target.value)
//                 }}
//             />

//             <label >Post</label>
//             <input type="text" placeholder="Ex: https://minhaimagem.com"
//                 // onChange={(dado) => setPost(dado.target.value)}
//             />

//             <button type="submit">Postar</button>
//         </form>
//     )
// }

// export default ModalPost