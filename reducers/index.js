import { CREATE_DECK, DELETE_DECK } from "../actions";

function decks(state = {}, action) {
  switch (action.type) {
    case CREATE_DECK: {
      const newDeck = {
        ...action.deck,
        color: "#008000",
        numberOfAttempts: 0,
        highestScore: 0
      };
      return {
        ...state,
        [action.deck.title]: newDeck
      };
    }

    case DELETE_DECK:
      return {
        ...state,
        ...action.entry
      };
    default:
      return state;
  }
}

export default decks;
