const initState = {
  isLoading: false
};

type ActionsType = LoadingActionCreatorType
type LoadingActionCreatorType = {
  isLoading: boolean
  type: 'CHANGE_LOADING'
}

export const loadingReducer = (state = initState, action: ActionsType): typeof initState => {
  switch (action.type) {
    case 'CHANGE_LOADING': {
      return {
        ...state,
        isLoading: action.isLoading
      };
    }
    default:
      return state;
  }
};

export const loadingAC = (isLoading: boolean): LoadingActionCreatorType => {
  return { type: 'CHANGE_LOADING', isLoading };
};