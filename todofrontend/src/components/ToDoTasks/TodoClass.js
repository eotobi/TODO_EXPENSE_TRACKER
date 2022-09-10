/**
 * import React, {Component} from 'react'



export class TodoClass extends Component {
    constructor(props) {
      super(props)
      this.state = {
        todoList:[],
        activeItem:{
          id:null,
          title:'',
          completed:false,
        },
        editing:false,
      }
    
      this.fetchTasks = this.fetchTasks.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.getCookie = this.getCookie.bind(this)
    }

    getCookie(name){
      var cookieValue = null;
      if (document.cookie && document.cookie !== ''){
        var cookies = document.cookie.split(';');
        for(var i=0; i<cookies.length;i++){
          //Does this string begine with the name we want?
          if(cookie.substring(0, name.length +1) === (name + "=")){
            cookieValue = documentURIComponent(cookie.substring(name.length+1))
            break
          }
        }
      }
      return cookieValue;
    }

    componentWillMount(){
        this.fetchTasks()
    }
    fetchTasks(){
      fetch('http://127.0.0.1:8000/api/tasks/')
        .then(resp => resp.json())
        .then(data =>
          this.setState({
            todoList:data
          }))
          .catch(error => console.log(error)) 
    }
    handleChange(e){
      var name = e.target.name
      var value = e.target.value
      console.log('Name:', name)
      console.log('Value:', value)

      this.setState({
        activeItem:{
          ...this.state.activeItem,
          title:value
        }
      })
    }
    handleSubmit(e){
        e.preventDefault()
        console.log("ITEM", this.state.activeItem)

        var crsftoken = this.getCookie('csrftoken')

        fetch("http://127.0.0.1:8000/api/tasks/", {
          method:'POST',
          headers:{
            'Content-type':'Application.json',
            'X-CSRFToken': crsftoken,
          },
          body:JSON.stringify(this.state.activeItem)
        })
        .then((response) =>{
          this.fetchTasks()
          this.setState({
            activeItem:{
              id:null,
              title:'',
              completed:false,
            }
          })
          .catch(error => console.log(error))
        })
    }
  render() {
    var tasks = this.state.todoList
    return (
      <div className='container'>
        <div id='task-container'>
            
          <div id='form-wrapper'>
              <form onSubmit={this.handleSubmit} id='form'>
                  <div className='flex-wrapper'>
                      <div style={{flex:6}}>
                          <input value={this.state.activeItem.title} onChange={this.handleChange} className='form-control' id='title' type='text' name='title' placeholder='Please add your task'/> 
                      </div>
                      <div style={{flex:1}}>
                          <input className='btn btn-warning' id='submit' type='submit' name='Add'/> 
                      </div>
                  </div>
              </form>
          </div>

          <div className='list-wrapper'>
            {tasks.map(function(task, index){
              return(
                <div key={index} className='task-wrapper flex-wrapper'>
                  <div style={{flex:7}}>
                    <span>{task.title}</span>
                  </div>
                  <div style={{flex:1}}>
                    <button className='btn btn-sm btn-outline-info'>Edit</button>
                  </div>
                  <div style={{flex:1}}>
                  <button className='btn btn-sm btn-outline-dark delete'>-</button>
                  </div>
                </div>
              )
            })}
              
          </div>

        </div> 
      </div>
    )
  }
}

export default TodoClass

*/
