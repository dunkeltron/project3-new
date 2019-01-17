import React, {Component} from "react";

class Nav extends Component {
  state = {
    mode:this.props.mode,
    user:this.props.user,
    project:this.props.project
  }
  componentDidMount(){
    
  }
  
  render(){
  return (
    <nav className="navbar navbar-expand-lg border-bottom border-secondary">
      <a className="navbar-brand " href="/">Test IDE</a>
      { (this.state.mode==="project")? 
          <ul className="navbar-nav ml-0">
            
              <li className="nav-text align-middle"  id="project-brand" >
                <span className=" project-name-banner ">{this.props.project.name }</span>
                
              </li>
            
                {/* COmments and settings  should be their own buttons
                    The comment modal should pop up with the comments array passed through from EditorContainer
                    put number of comments in a circle or something*/}
            <li className="nav-text  mr-0">
              <form className="form-inline ml-5 ">
                <button className="btn btn-success" type="button">Comments {this.state.project.comments.length}</button>
                <button className="btn btn-secondary ml-3" type="button">Settings</button>
              </form>
            </li>
          </ul>
          :
          <ul className="navbar-nav ml-0">
            <li className="nav-text  mr-0">
              <form className="form-inline ml-5 ">
                <button className="btn btn-secondary ml-3" type="button">New Project</button>
              </form>
            </li>
          </ul>
      }
      <ul className="navbar-nav ml-auto mr-0 dropdown-menu-left">
      
      
        <li className="nav-item   dropdown  ">
          <a className="nav-link dropdown-toggle  " href={"/"+this.props.user} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           {this.props.user.username}
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href={"/"+this.props.user.username}>Account</a>
            <a className="dropdown-item" href={"/"+this.props.user.username+"/project/newProject"}>New Project</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/">Log Out</a>
          </div>
        </li>
      
    </ul>
    
  </nav>
  );
}
}

export default Nav;
