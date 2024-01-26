import { useSelector } from "react-redux"

const GiphyResults = () => {
    const results = useSelector(store => store.input)

    if (results.data) {
        return (
            <>
                {/* <table>
                    <tbody>
                        {results.data.map((gif) => {
                            return <tr key={gif.id}><td>{gif.embed_url}</td></tr>
                        })}
                    </tbody>
                </table> */}
                <div>
                    {results.data.map((gif) => {
                        return <img key={gif.id} src={gif.images.original.webp} alt={gif.title}/>
                    })}
                </div>
            </>

        )
    }
    return <p>Nothing to show here!</p>
}

export default GiphyResults