import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todos/todoSlice'
import { Trash } from 'lucide-react'
import { fetchUser } from '../features/User/userSlice'

const Todos = () => {
  const savedTodos = useSelector(state => state.todos.todos)
  const {user, isLoading, error} = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUser())
  }, [])
  console.log(savedTodos)
  if(isLoading){
    return <h1>Loading...</h1>
  }
  if (user) {
    console.log(user.users)
  }
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        My Todos
      </h1>
      <div className="space-y-3">
        {savedTodos.map((todo) => (
          <div 
            key={todo.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="p-4 flex items-center justify-between">
              <span className="text-gray-700">{todo.text}</span>
              <button 
                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                <Trash size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {savedTodos.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No todos yet. Add some tasks to get started!
        </p>
      )}
    </div>
  )
}

export default Todos