import moment from 'moment';

function applyAddTodo(state, action) {
  return state.concat(action.todo);
}
  function applyToggleTodo(state, action) {
    return state.map(todo =>
      todo.id === action.todo.id
        ? Object.assign({}, todo, { completed: !todo.completed })
        : todo
    );
}
export default function reducer(state, action) {
    switch(action.type) {
      case 'TODO_ADD' : {
        return applyAddTodo(state, action);
      }
      case 'TODO_TOGGLE' : {
        return applyToggleTodo(state, action);
      }
      case 'SELECT_AUTH_EMPLOYEE' : {
        let auxState = {...state}
        auxState.employeeAuth = action.employee
        return auxState
      }
      case 'SCHEDULE_ON_CHECK' : {
        let auxState = {...state}
        auxState.scheduleOnCheck = action.schedule
        // let auxSchedule;
        // let auxState = {...state}
        // let auxEmployee = auxState.employees.find((auxFind) => {
        //   return auxFind.id == action.idEmployee
        // })
        // if (!auxEmployee) {
        //   return state;
        // }
        // auxSchedule = auxEmployee.find((auxFind) => {
        //   return auxFind.id == action.idSchedule
        // })
        return auxState
      }
      case 'CHECK_SCHEDULE' : {
        let auxSchedule;
        let auxState = {...state}
        let auxEmployee = auxState.company.employees.find((auxFind) => {
          return auxFind.id == action.payload.idEmployee
        })
        if (!auxEmployee) {
          return state;
        }
        auxSchedule = auxEmployee.schedule.find((auxFind) => {
          return auxFind.id == action.payload.idSchedule
        })
        auxSchedule.status = 'CHECKED'
        auxSchedule.registeredTime = moment() // hora actual
        return auxState
      }
      default : return state;
    }
  }