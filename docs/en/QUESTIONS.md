# Open Questions and Roadmap

## Open Questions

### 1. Semantics of `Outcome`

The exact meaning of the `Outcome` field is still not fixed in the model.

What is known:

- in product logic, `Outcome` is not tied to `Schema`;
- `pending` and `true` have been used for this field before;
- the final logic for calculation and display is not yet defined.

What still needs to be fixed:

- the canonical enum;
- the update moment;
- the place where it is shown in the interface;
- the relationship between `Outcome` and the final dispute result.

### 2. `Options` in the Preview

The preview card includes the `Options` field, but its display rule is not fixed for every answer schema.

What is known:

- for `Answer options`, the field clearly represents the list of options;
- for `Yes/No` and `Plain text`, the display logic is not explicitly defined.

What still needs to be fixed:

- whether `Options` is a universal preview field;
- how it should be rendered for each `Schema`.

## Roadmap

### 1. `Rulebook` Approval Through `Oracle`

Current model:

- any participant may create a `Rulebook`;
- the `Rulebook` becomes active immediately after creation.

Planned model:

- `Rulebook` approval will go through `Oracle`;
- the `Rulebook` will become active after the corresponding question is completed in `Oracle`.

### 2. Question Description

A dedicated description field for `question` does not exist yet. It is planned.

### 3. Additional Arbitration Models

`Selected arbitrator` is already implemented in `Court`.

Planned:

- `Decentralized court`;
- `Mathematical model`.
