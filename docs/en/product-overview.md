# Product Overview

## What DelfiN Is

DelfiN is an infrastructure layer for optimistic dispute resolution on Sui. The project closes the gap between on-chain business logic and off-chain facts: a protocol can fix rules in advance, accept a default answer, and route a dispute into a separate resolution mechanism when needed.

Practical value:

- avoid building a custom dispute and bond layer inside every protocol;
- formalize off-chain events and B2B obligations;
- drive outcomes to on-chain finalization through a single lifecycle.

## The Gap It Solves

Sui already has a mature price oracle stack, but two pieces are still missing:

- a standardized dispute resolution layer;
- a mechanism for resolving factual events that originate off-chain.

Because of this, application protocols are forced to design their own enforcement logic. DelfiN acts as a shared primitive that absorbs this responsibility.

## Architecture

The architecture is split into three layers.

### 1. Rulebook

`Rulebook` fixes:

- correctness conditions for a `question`;
- participant roles;
- time windows;
- economic parameters;
- the selected dispute resolution mechanism.

After creation, `Rulebook` becomes the instruction set for every `question` created in `Oracle` on top of it. All `question` objects are created only through `Rulebook`.

### 2. Oracle

`Oracle`:

- accepts a `question` from `Asker`;
- receives an answer from `Answerer`;
- opens the answer challenge window, which `Disputer` may use;
- pauses finalization when a dispute appears;
- distributes funds after the question is closed.

`Oracle` is not the final dispute arbiter. Its role is to handle question intake, answer publication, and routing to the dispute layer.

### 3. Court / Dispute Resolution

The dispute resolution layer:

- manages the challenge process;
- accepts evidence;
- issues the final ruling;
- returns the final outcome back to `Oracle`.

This layer is modular: a protocol can choose the specific resolution model and lock it into `Rulebook`.

In the current terminology, `question` and `assertion` refer to the same entity. DelfiN documentation uses `question`.

## Why Sui

The choice of Sui is based on four properties:

- the object model: questions and disputes exist as independent on-chain objects;
- parallel execution: unrelated cases do not create a global bottleneck;
- predictable economics: the cost of challenge is known in advance;
- `Move`: strict ownership and resource typing reduce logical and financial risk.

## What Protocols Gain

DelfiN is designed to unlock three categories of effects for the ecosystem:

- lower development complexity through a shared dispute primitive;
- new classes of applications that need to finalize event-driven obligations;
- more on-chain activity through repeated `claim -> challenge -> finality` cycles.

## Base Process

The end-to-end sequence is:

1. A `Rulebook` is created.
2. A `question` is published in `Oracle` with `Reward`, an answer `Schema`, and `Event time`.
3. `Answerer` submits an answer and posts `Bond Answerer`.
4. The answer may be challenged during `Liveness`.
5. If there is no dispute, the `question` settles automatically.
6. If there is a dispute, `Court` reviews the case and finalizes the result.
7. The resulting outcome object becomes available to connected protocols.
