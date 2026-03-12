# Court

## Court Role

`Court` is the final dispute resolution layer of DelfiN. It receives a case after an answer is challenged in `Oracle`, accepts evidence, allows appeals, and returns the final result.

Court interface: `https://court.suiprophet.app/`.

## Place in the Architecture

`Court` is also the `Dispute Resolution Layer`:

- a protocol may choose a specific resolution model;
- that choice is fixed in `Rulebook`;
- the dispute layer is separate from question publication and answer publication.

This means `Oracle` handles the optimistic flow, while `Court` provides finality in disputed cases.

## How a Dispute Reaches Court

Normalized flow:

1. `Answerer` publishes an answer in `Oracle`.
2. `Disputer` appears during `Liveness`.
3. A case is opened in `Court`, with parameters already defined through `Rulebook`.
4. After the court process is completed, the result is returned to `Oracle`.

In addition to the oracle-driven scenario, `Court` also allows manual case creation. Such a case must always be attached to a `Rulebook`.

## Case Participants

The court interface uses two roles:

- `Claimant` is the party that opened the dispute; in `Oracle` this is `Disputer`;
- `Defendant` is the party whose answer is challenged; in `Oracle` this is `Answerer`.

## Case Statuses

| Status | Meaning |
| :---- | :---- |
| `Waiting` | The case is open and waiting for review to begin. |
| `Evidence submission` | Parties may submit evidence until `Evidence submission period` expires. |
| `Under review` | The court is reviewing the case materials. There is no explicit time limit for this stage. |
| `Appeal period` | The appeal window is open until `Appeal period` expires. |
| `Finalized` | The ruling is final and, if the dispute came from `Oracle`, the result is returned there. |

## Evidence

Through the `Evidence` section, any user may attach evidence. Accepted materials include:

- text descriptions;
- links;
- documents;
- other supporting materials.

All evidence must be visible to the participants of the case.

## Appeals

An appeal may only be filed by the losing side. Its parameters are defined in `Rulebook`:

- `Appeal period`;
- `Appeal price`;
- `Max appeals`.

If no appeal is filed in time, or the maximum number of appeals is reached, the decision becomes final.

## Arbitration Models

The `Court` layer remains modular. Different arbitration mechanisms may be connected on top of the common interface.

| Mechanism | Status | Description |
| :---- | :---- | :---- |
| `Selected arbitrator` | Implemented | The dispute is assigned to a specific arbitrator or arbitration party. |
| `Decentralized court` | Planned | The dispute is reviewed by a group of independent arbitrators. |
| `Mathematical model` | Planned | The dispute is resolved automatically according to agreed rules. |

### Selected arbitrator

The dispute is assigned to a specific arbitrator or arbitration party.

- Clear accountability.
- Suitable for B2B and legal scenarios.
- Fast dispute resolution.

### Mathematical model

The dispute is resolved automatically based on agreed rules.

- Minimal costs.
- No subjective interpretation.
- Suitable for formalizable events, including insurance and games.

### Decentralized court

The dispute is assigned to a group of independent arbitrators.

- Maximum decentralization.
- Greater resistance to abuse.
- Reputation and stake mechanics.

How `Decentralized court` works:

- the first round is reviewed by a group of `N` judges;
- if the result is challenged, the appeal goes to a panel of `N+2` judges;
- the decision must rely on `policy`, `Rulebook`, and the submitted evidence.

## What Is Inherited from Rulebook

For each case, `Court` uses the parameters fixed in `Rulebook` in advance:

| Parameter | Meaning |
| :---- | :---- |
| `Name Court` | Name of the court that will handle disputes for questions under this `Rulebook`. |
| `Description Court` | Description of the court model and decision logic, such as participant arbitration, expert court, or DAO voting. |
| `Evidence submission period` | Window during which parties may submit evidence. |
| `Appeal period` | Window during which an appeal may be filed. |
| `Appeal price (SUI)` | Cost of filing an appeal. |
| `Max appeals` | Maximum number of appeals for one case. |
| `Cost court (SUI)` | Cost of hearing a case in court. |
