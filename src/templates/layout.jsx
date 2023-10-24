import "../styles/styles.css";

function Layout ({children}) {
    const [headerComponent, addTasksComponent, tasksGroupComponent] = children;
    
    return (
        <div className="container">
            <header>{headerComponent}</header>
            <div className="add-tasks">{addTasksComponent}</div>
            <div className="tasks-group">{tasksGroupComponent}</div>
        </div>
    )
}

export default Layout;