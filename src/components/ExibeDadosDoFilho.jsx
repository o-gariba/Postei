const ExibeDadosDoFilho = ({ posts }) => {

    return (
        <>
            <ul>
                {posts.map((post, index) => {
                    return (
                        <li key={index}>
                            <h1>{post.img}</h1>
                            <h2>{post.user}</h2>
                            <h3>{post.post}</h3>
                        </li>
                    )
                })}
                <li>
                    <h1>teste</h1>
                    <h2>teste</h2>
                    <h3>teste</h3>
                </li>
                <li>
                    <h1>teste</h1>
                    <h2>teste</h2>
                    <h3>teste</h3>
                </li>
            </ul>
        </>
    )
}

export default ExibeDadosDoFilho