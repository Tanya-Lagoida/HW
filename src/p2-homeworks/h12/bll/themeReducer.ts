const initState:ThemeStateType = {
  theme: 'dark'
};

export type ThemeType = 'dark' | 'red' | 'some';

type ThemeStateType = {
  theme: ThemeType
}

type ThemeActionType = {
  type: 'CHANGE_THEME'
  theme: ThemeType
}

export const themeReducer = (state = initState, action: ThemeActionType): ThemeStateType  => {
  switch (action.type) {
    case 'CHANGE_THEME': {
      return {
        ...state,
        theme: action.theme
      };
    }
    default:
      return state;
  }
};

export const changeThemeAC = (theme: ThemeType): ThemeActionType => {
  return { type: 'CHANGE_THEME', theme}
};