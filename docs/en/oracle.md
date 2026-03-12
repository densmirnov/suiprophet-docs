# Oracle

## Oracle Role

`Oracle` is the DelfiN layer where `question` objects are created, answers are published, and the challenge window opens. It does not resolve disputes finally; it routes them to `Court`.

Oracle interface: `https://oracle.suiprophet.app/`.

In project terminology, `question` and `assertion` refer to the same entity. This documentation uses `question`.

## Base Flow

1. `Asker` creates a `question` and pays `Reward`.
2. `Answerer` publishes an answer and posts `Bond Answerer`.
3. The `Liveness` period opens, during which the answer may be challenged.
4. If nobody objects, the `question` settles automatically and `Answerer` receives `Bond Answerer + Reward`.
5. If a `Disputer` appears, a case is opened in the selected `Court`.
6. After the court decision, `Oracle` settles the question and distributes funds.

## Roles

Three roles participate in a question:

- `Asker` is the wallet of the question creator;
- `Answerer` is the wallet of the participant who posted the answer;
- `Disputer` is the wallet of the participant who opened the dispute.

The same wallet may hold multiple roles.

## Answer Schemas

The system supports three answer schemas:

- `Yes/No`;
- `Answer options`;
- `Plain text`.

Each schema also includes `Unable to answer` as an additional answer option.

## Question Creation

All `question` objects in `Oracle` are created only after selecting a `Rulebook`.

When creating a question, the user provides:

| Field | Meaning |
| :---- | :---- |
| `What question are you asking?` | Question text. |
| `Rulebook Selection` | One of the active `Rulebook` objects. |
| `Schema` | Type of answer schema. |
| `Event time` | Time after which the question may be answered. |

After `Rulebook` is selected, the following fields are auto-filled:

| Field | Meaning |
| :---- | :---- |
| `Reward (SUI)` | Fixed reward for the answer. Paid by `Asker` when the question is created. |
| `Bond Answerer (SUI)` | Bond that `Answerer` must post when publishing an answer. It cannot be lower than `Cost court`. |
| `Bond Disputer (SUI)` | Bond that `Disputer` must post to open a dispute. It cannot be lower than `Cost court`. |
| `Liveness (second)` | Number of seconds after the answer is published during which it may be challenged. |
| `Name Court` | Name of the court that will handle disputes for this `Rulebook`. |
| `Policy` | Link to `Policy Oracle` and `Policy Court` of the selected `Rulebook`. |

These auto-filled fields cannot be changed after `Rulebook` selection.

If `Event time` has not yet arrived, the `question` remains in `Event pending`. Once `Event time` is reached, the `question` moves to `Answer required` and stays there until the first answer is published.

## Answer Publication

When publishing an answer, `Answerer`:

- pays `Bond Answerer`;
- selects one answer option according to `Schema`;
- may use `Unable to answer` as an additional answer option.

## Question Economics

Funds are distributed as follows:

- if the answer is not disputed, `Answerer` receives `Bond Answerer + Reward`;
- if a dispute is opened and completed in court, the winner receives `Bond Answerer + Bond Disputer + Reward - Cost court`.

If nobody answers after `Event time`, the `question` remains in `Answer required` until an answer is published.

## Question Statuses

| Status | Meaning |
| :---- | :---- |
| `Pending` | Rare error case: the question was created in the interface but the transaction was not recorded correctly on-chain. This object is visible only to its creator as a preview and does not get a standalone page. |
| `Event pending` | The question is recorded on-chain, but `Event time` has not arrived yet. |
| `Answer required` | `Event time` has arrived, but no answer has been published yet. |
| `Settle pending` | An answer has been published and the `Liveness` window has not expired yet. |
| `Disputed` | The answer has been challenged and a case is open in `Court`. |
| `Settled` | The question is finalized and funds have been distributed. |

## Question Page

The detailed question page includes the following data blocks.

### Header and Basic Fields

- question status;
- question title;
- question transaction with a `suivision.xyz` link;
- `Schema`;
- link to the last event.

### Participants

- `Asker`;
- `Answerer`;
- `Disputer`.

`Answerer` and `Disputer` remain empty until those roles appear in the flow.

### Question Details

- `Event time`;
- `Deadline`;
- `Answer`;
- `Options`;
- `Reward`;
- `Bond Answerer`;
- `Bond Disputer`;
- link to `Rulebook` when the question was created from it.

`Deadline` behaves as follows:

- it is `Unknown` until an answer is published for the `question`;
- after the answer is published, it is calculated as `time(answer) + Liveness`;
- after the challenge window closes, it marks the moment after which a dispute can no longer be opened.

### Court Block

The `Court` block shows:

- `Name Court`;
- links to the court contract;
- `Dispute ID`;
- links to the case in `court.suiprophet.app`;
- status of the court case.

The full set of court statuses that must appear in this block is:

- `Waiting`;
- `Evidence submission`;
- `Under review`;
- `Appeal period`;
- `Finalized`.

## Question Preview

The preview card includes:

- badge status;
- title;
- text status;
- timer until the next status or since the deadline;
- `Reward`;
- `Bond`;
- `Schema`;
- `Options`;
- question identifier;
- `Asker`;
- `Explorer` and `Last tx` links.

Until somebody answers, `Bond` is shown as `0 SUI` in the preview.
