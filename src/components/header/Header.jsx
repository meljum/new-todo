import "./Header.css"

const Header = (props) => {
    return(
        <header className="header">
            Todo List({props.result}/{props.length})
        </header>
    )
}
export default Header