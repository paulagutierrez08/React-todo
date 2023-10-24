import headerImg from "../assets/todo-bg.jpeg"

import "../styles/styles.css"

function Header () {
return <div className="header-container">
    <img src={headerImg} alt="Todo list" />
    <span className="header-todo-label">To-Do List</span>
</div>
}

export default Header;