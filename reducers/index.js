import { SET_DECKID, CREATE_DECK, DELETE_DECK, ADD_CARD } from "../actions";

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
        color: "#008000",
        numberOfAttempts: 0,
        highestScore: 0,
        cards: []
      };
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.deck.title]: newDeck
        }
      };
    }
    case DELETE_DECK:
      delete state.decks[`${action.deckId}`];
      return state;

    case ADD_CARD:
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

    default:
      return state;
  }
}

export default decksDetails;
