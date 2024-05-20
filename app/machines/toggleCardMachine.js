import { createMachine, assign } from "xstate";

const toggleCardMachine = createMachine({
  id: "cardToggle",
  initial: "inactive",
  context: {
    activeCardId: null,
  },
  states: {
    inactive: {
      on: {
        TOGGLE_CARD: {
          target: "active",
          actions: assign({
            activeCardId: ({ _, event }) => event.cardId,
          }),
        },
      },
    },
    active: {
      on: {
        TOGGLE_CARD: {
          target: "inactive",
          actions: assign({
            activeCardId: ({ context, event }) =>
              context.activeCardId === event.cardId ? null : event.cardId,
          }),
        },
      },
    },
  },
});

export default toggleCardMachine;
