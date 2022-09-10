import React, {useEffect,useState} from 'react'


function TodoFunction() {
  const [tasks, setTasks] = useState([])

  useEffect(() =>{
  fetch('http://127.0.0.1:8000/api/tasks/', {
    'method':'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(resp => resp.json())
  .then(resp => setTasks(resp))
  .catch(error => console.log(error))
  }, [])

    return (
      <div className='container'>
        <div id='task-container'>
          <div id='form-wrapper'>
                <form className='form-control'>
                    <div className='flex-wrapper'>
                        <div style={{flex:6}}>
                          <input className='form-control'/>
                        </div>
                        <div style={{flex:1}}>
                          <input className='btn btn-warning' id='submit' type='submit' name='Add'/>
                        </div> 
                    </div>
                </form>
            <div className='list-wrapper'>
              {
                tasks.map(task=>{
                  return(
                    <div key={task.id} className='task-wrapper flex-wrapper'>
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
                })
              }
            </div>
          </div>
        </div>
      </div>   
    )
}
export default TodoFunction