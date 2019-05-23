import { CREATE_DECK, DELETE_DECK, ADD_CARD } from "../actions";

function decks(state = {}, action) {
  switch (action.type) {
    case CREATE_DECK: {
      const newDeck = {
        ...action.deck,
        color: "#008000",
        numberOfAttempts: 0,
        highestScore: 0,
        cards: []
      };
      return {
        ...state,
        [action.deck.title]: newDeck
      };
    }
    case DELETE_DECK:
      delete state[`${action.deckId}`];
      return state;

    case ADD_CARD:
      return {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          cards: [...state[action.deckId], action.card]
        }
      };

    default:
      return state;
  }
}

export default decks;
