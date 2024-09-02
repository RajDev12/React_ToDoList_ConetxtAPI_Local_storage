import { createContext, useContext } from "react";
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "TODO msg",
            completed: false
        },
        {}
    ],
    addTodo: (todo)=>{

    },
    updateTodo: (id,todo)=>{

    },
    deleteTodo: (id)=>{

    },
    toggleComplete: (id)=>{
        
    }

})


export const useTodo = () => {
    return useContext(TodoContext)
}
export const Todoprovider = TodoContext.Provider

// export const TodoContext =createContext({
//     todos: [],
//     addTodo: () => {},
//     toggleTodo: () => {},
//     removeTodo: () => {},
//     editTodo: () => {},
//     filterTodos: () => {},
//     setCurrentTodo: () => {},
//     clearTodos: () => {},
//     setTodos: () => {},
//     searchTodos: () => {},
//     setSearchText: () => {},
//     setSortBy: () => {},
//     setSortDirection: () => {},
//     getFilteredTodos: () => {},
//     getSortedTodos: () => {},
//     getFilteredAndSortedTodos: () => {},
//     getTodoById: () => {},
//     getTodosBySearchText: () => {},
//     getTodosBySortBy: () => {},
//     getTodosBySortDirection: () => {},
//     getTodoCountByStatus: () => {},
//     getTodoPercentageByStatus: () => {},
//     getTodoCompletionStatus: () => {},
//     getTodoCompletionPercentage: () => {},
//     getTodoProgress: () => {},
// })