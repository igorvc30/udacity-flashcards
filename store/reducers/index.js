import {
  SET_DECKID,
  CREATE_DECK,
  DELETE_DECK,
  ADD_CARD,
  SUBMIT_QUIZ
} from "../actions";
import {
  clearLocalNotification,
  setLocalNotification
} from "../../utils/helpers";
import showToast from "./../../utils/toastr";

function decksDetails(state = {}, action) {
  switch (action.type) {
    case SET_DECKID: {
      return {
        ...state,
        deckId: action.deckId
      };
    }
    case CREATE_DECK: {
      const newDeck = {
        ...action.deck,
        numberOfAttempts: 0,
        highestScore: 0,
        cards: []
      };
      showToast("A new deck was created!", "success");
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.deck.title]: newDeck
        }
      };
    }
    case DELETE_DECK: {
      showToast("The deck was deleted.", "danger");
      let { [action.deckId]: deletedItem, ...newDeck } = state.decks;
      return {
        ...state,
        decks: newDeck
      };
    }

    case ADD_CARD:
      showToast("A new card was added!", "success");
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.deckId]: {
            ...state.decks[action.deckId],
            cards: state.decks[action.deckId].cards.concat(action.card)
          }
        }
      };

    case SUBMIT_QUIZ:
      clearLocalNotification().then(setLocalNotification);
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.deckId]: {
            ...state.decks[action.deckId],
            numberOfAttempts: state.decks[action.deckId].numberOfAttempts + 1,
            highestScore:
              state.decks[action.deckId].highestScore <= action.score
                ? action.score
                : state.decks[action.deckId].highestScore
          }
        }
      };

    default:
      return state;
  }
}

export default decksDetails;
