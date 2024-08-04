import React, {createContext, useContext, useReducer, useEffect, useLayoutEffect} from 'react';

// initial state
const initialState = {
  tasks: [],
  filter: 'all', // 'all', 'completed', 'uncompleted'
  sortBy: 'dateDesc', // 'dateAsc', 'dateDesc'
  searchTerm: '',
};

// reducer
const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, {...action.payload, id: Date.now(), completed: false, createdAt: new Date()}],
      };
    case 'GET_TASKS_FROM_LOCAL_STORAGE':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? {...task, ...action.payload} : task
        ),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? {...task, completed: !task.completed} : task
        ),
      };
    case 'SET_FILTER':
      return {...state, filter: action.payload};
    case 'SET_SORT':
      return {...state, sortBy: action.payload};
    case 'SET_SEARCH':
      return {...state, searchTerm: action.payload};
    default:
      return state;
  }
};

// add TaskContext
const TaskContext = createContext();

// add TaskProvider
export const TaskProvider = ({children}) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // load tasks from localStorage
  useLayoutEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      tasks.forEach(task => {
        dispatch({type: 'GET_TASKS_FROM_LOCAL_STORAGE', payload: task});
      });
    }
  }, []);

  // save tasks to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  }, [state.tasks]);

  const addTask = (title, content) => {
    dispatch({type: 'ADD_TASK', payload: {title, content}});
  };

  const updateTask = (id, updates) => {
    dispatch({type: 'UPDATE_TASK', payload: {id, ...updates}});
  };

  const deleteTask = (id) => {
    dispatch({type: 'DELETE_TASK', payload: id});
  };

  const toggleTask = (id) => {
    dispatch({type: 'TOGGLE_TASK', payload: id});
  };

  const setFilter = (filter) => {
    dispatch({type: 'SET_FILTER', payload: filter});
  };

  const setSort = (sortBy) => {
    dispatch({type: 'SET_SORT', payload: sortBy});
  };

  const setSearchTerm = (term) => {
    dispatch({type: 'SET_SEARCH', payload: term});
  };

  const getFilteredAndSortedTasks = () => {
    let filteredTasks = [...state.tasks]; // copy tasks

    // apply filter
    if (state.filter === 'completed') {
      filteredTasks = filteredTasks.filter(task => task.completed);
    } else if (state.filter === 'uncompleted') {
      filteredTasks = filteredTasks.filter(task => !task.completed);
    }

    // apply search
    if (state.searchTerm) {
      filteredTasks = filteredTasks.filter(task =>
        task.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        task.content.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    }

    // apply sort
    filteredTasks.sort((a, b) => {
      if (state.sortBy === 'dateAsc') {
        return new Date(a.createdAt) - new Date(b.createdAt);
      } else {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });

    return filteredTasks;
  };

  const value = {
    tasks: getFilteredAndSortedTasks(),
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
    setFilter,
    setSort,
    setSearchTerm,
    filter: state.filter,
    sortBy: state.sortBy,
    searchTerm: state.searchTerm,
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};

// create custom hook for using task context
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};