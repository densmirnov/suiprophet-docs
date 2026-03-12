# DelfiN Documentation

DelfiN is a modular question and dispute resolution system in the Sui ecosystem. The core model is built around the `Rulebook -> Oracle -> Court` chain: rules are fixed in advance, an answer is published optimistically, and a dispute is routed to a separate resolution layer when needed.

In this documentation, `question` is the canonical term. The terms `question` and `assertion` refer to the same entity.

## Documentation Map

- [Product Overview](./product-overview.md)
- [Rulebook](./rulebook.md)
- [Oracle](./oracle.md)
- [Court](./court.md)

## End-to-End Flow

1. A `Rulebook` is created to define economics, time windows, `Policy Oracle`, `Policy Court`, and court parameters.
2. In `Oracle`, `Asker` creates a `question` based on the selected `Rulebook`, sets `Event time`, and pays `Reward`.
3. `Answerer` submits an answer and posts `Bond Answerer`.
4. The `Liveness` challenge window opens.
5. If there is no challenge, the `question` settles automatically and `Answerer` receives `Bond Answerer + Reward`.
6. If a `Disputer` appears, a case is opened in `Court`.
7. `Court` reviews evidence, allows appeals, and issues the final ruling.
8. After the case is finalized, `Oracle` settles the `question` and distributes funds.

If a dispute is opened and finalized in `Court`, the winner receives `Bond Answerer + Bond Disputer + Reward - Cost court`.

## Core Roles

- `Asker` creates the `question` and pays `Reward`.
- `Answerer` submits an answer and posts `Bond Answerer`.
- `Disputer` challenges the answer and posts `Bond Disputer`.
- `Claimant` is the party that opened the dispute; in `Oracle` this is `Disputer`.
- `Defendant` is the party whose answer is challenged; in `Oracle` this is `Answerer`.
