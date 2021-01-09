import { CHANGE_LANG } from './LangActionType';

export const changeLang = lang => dispatch => {
	localStorage.setItem('chosenLanguage', lang)
	dispatch({ type: CHANGE_LANG, payload: lang });
};
