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
        deckId: action.payload.deckId
      };
    }
    case CREATE_DECK: {
      const newDeck = {
        ...action.payload.deck,
        numberOfAttempts: 0,
        highestScore: 0,
        cards: []
      };
      showToast("A new deck was created!", "success");
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.payload.deck.title]: newDeck
        }
      };
    }
    case DELETE_DECK: {
      showToast("The deck was deleted.", "danger");
      let { [action.payload.deckId]: deletedItem, ...newDeck } = state.decks;
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
          [action.payload.deckId]: {
            ...state.decks[action.payload.deckId],
            cards: state.decks[action.payload.deckId].cards.concat(
              action.payload.card
            )
          }
        }
      };

    case SUBMIT_QUIZ:
      clearLocalNotification().then(setLocalNotification);
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.payload.deckId]: {
            ...state.decks[action.payload.deckId],
            numberOfAttempts:
              state.decks[action.payload.deckId].numberOfAttempts + 1,
            highestScore:
              state.decks[action.payload.deckId].highestScore <=
              action.payload.score
                ? action.payload.score
                : state.decks[action.payload.deckId].highestScore
          }
        }
      };

    default:
      return state;
  }
}

export default decksDetails;
