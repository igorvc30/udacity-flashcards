export const SET_DECKID = "SET_DECKID";
export const CREATE_DECK = "CREATE_DECK";
export const DELETE_DECK = "DELETE_DECK";
export const EDIT_DECK = "EDIT_DECK";
export const ADD_CARD = "ADD_CARD";
export const SUBMIT_QUIZ = "SUBMIT_QUIZ";

export function setDeckId(deckId) {
  return {
    type: SET_DECKID,
    deckId
  };
}

export function createDeck(deck) {
  return {
    type: CREATE_DECK,
    deck
  };
}

export function editDeck(deckId, deck) {
  return {
    type: EDIT_DECK,
    deckId,
    deck
  };
}

export function deleteDeck(deckId) {
  return {
    type: DELETE_DECK,
    deckId
  };
}

export function addCard(deckId, card) {
  return {
    type: ADD_CARD,
    card,
    deckId
  };
}

export function submitQuiz(deckId, score) {
  return {
    type: SUBMIT_QUIZ,
    score,
    deckId
  };
}
