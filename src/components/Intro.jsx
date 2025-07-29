import '../index.css'

function Intro ({title, description}) {
    return(
        <div className="pageIntro">
            <h1 className="introTitle">{title}</h1>
            <div className="br"></div>
            <p className="description">{description}</p>
        </div>

    )
}

export default Intro;