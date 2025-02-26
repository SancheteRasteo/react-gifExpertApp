

export const GifChart = ({title, gif}) => {    

    return (
        <div className="card">
            <a href={gif} target="_blank">
                <img src={gif} alt={title}/>
            </a>
            {/* <p>{ title }</p> */}
        </div>
    )

}