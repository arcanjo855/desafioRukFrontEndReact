export const ButtomClick = () => {
    function HandleClick(){
        alert(`a`)
    }

    return (
        <>
        <button type="click" onClick={HandleClick}>click</button>
        </>
    )
}