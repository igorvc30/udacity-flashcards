export const CREATE_DECK = "CREATE_DECK";
export const DELETE_DECK = "DELETE_DECK";

export function createDeck(deck) {
  return {
    type: CREATE_DECK,
    deck
  };
}

export function deleteDeck(deckName) {
  return {
    type: DELETE_DECK,
    deckName
  };
}
