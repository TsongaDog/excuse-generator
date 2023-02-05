export const Category = (props) => {
    return (
        <div className="button_container">
            <h1 className="title"> EXCUSE GENERATOR </h1>
            <div className="App-header">
                <button onClick={() => props.fetchCategory("office")}>Office</button>
                <button onClick={() => props.fetchCategory("children")}>Children</button>
                <button onClick={() => props.fetchCategory("college")}>College</button>
                <button onClick={() => props.fetchCategory("party")}>Party</button>
                <button onClick={() => props.fetchCategory("funny")}>Funny</button>
                <button onClick={() => props.fetchCategory("unbelievable")}>Unbelievable</button>
                <button onClick={() => props.fetchCategory("developers")}>Developers</button>
                <button onClick={() => props.fetchCategory("gaming")}>Gaming</button>
                <button onClick={props.fetchRandomExcuse}>Get Random Excuse</button>
            </div>
            <h1 className="excuse">{props.excuse}</h1>
        </div>
    )
}