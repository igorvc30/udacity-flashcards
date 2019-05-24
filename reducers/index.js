import {
  SET_DECKID,
  CREATE_DECK,
  DELETE_DECK,
  ADD_CARD,
  SUBMIT_QUIZ
} from "../actions";

const initial = {
  decks: {
    teste: {
      title: "teste",
      color: "#008000",
      cards: [
        { question: "teste1", answer: "teste1" },
        { question: "teste2", answer: "teste2" },
        { question: "teste3", answer: "teste3" }
      ],
      numberOfAttempts: 0,
      highestScore: 0
    }
  }
};

function decksDetails(state = initial, action) {
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

    case SUBMIT_QUIZ:
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
