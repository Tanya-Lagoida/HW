import { InitialStateType } from '../HW8';

type SortActionType = {
  type: 'sort'
  payload: 'up' | 'down'
}
type CheckActionType = {
  type: 'check'
  payload: 18
}
export type ActionType = SortActionType | CheckActionType

export const homeWorkReducer = (state: InitialStateType[], action: ActionType): InitialStateType[] => {
  switch (action.type) {
    case 'sort': {
        const newState = [...state].sort(function (a, b) {
          if (a.name > b.name) return 1
          else if (a.name < b.name) return -1
          else return 0
        })
      return action.payload === 'up' ? newState : newState.reverse()
    }
    case 'check': {
      return state.filter(u => u.age >= action.payload );
    }
    default:
      return state;
  }
};