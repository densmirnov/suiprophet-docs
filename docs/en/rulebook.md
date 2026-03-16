# Rulebook

Пока в MVP создана 1 версия Rulebook доступная по ссылке https://oracle.suiprophet.app/rulebooks/0x0ddf1d5d3307fc2c196f3238931650ab260957dc7e7599376960d982b84dc414

## Purpose

`Rulebook` is the on-chain ruleset of DelfiN that defines how `question` objects are resolved in `Oracle` and how disputes on them are handled in `Court`.

The base lifecycle of a `question` through `Rulebook` is:

`Rulebook -> Question -> Answer -> Challenge -> Dispute -> Settlement`

All `question` objects created under the same `Rulebook` inherit:

- `Reward`;
- `Bond Answerer`;
- `Bond Disputer`;
- the `Liveness` challenge window;
- the parameters of the selected court.

## Place in the System

`Rulebook` serves several functions at once:

- standardizes how `question` objects behave inside one scenario;
- fixes economics and time windows without manual tuning for each case;
- connects `Oracle` and `Court` through one rule set;
- acts as the attachment point for the dispute mechanism in `Court`.

The specific dispute resolution system is chosen in `Rulebook` in advance and fixed in the rules.

## Lifecycle

1. Any participant may create a `Rulebook`.
2. Roles, timeframes, economic parameters, and the selected resolution mechanism are written into it.
3. The `Rulebook` becomes active immediately after creation.
4. All `question` objects in `Oracle` are created only from an active `Rulebook`.
5. `Policy Oracle` and `Policy Court` texts are generated from the `Rulebook` parameters.

## Rulebook Parameters

### General Parameters

| Parameter | Meaning |
| :---- | :---- |
| `Rulebook Name` | Short name shown in `Rulebook` lists, `Oracle`, and `Court`. |
| `Rulebook Description` | Description of the scenarios and event types this `Rulebook` is meant for. |
| `Rulebook Expiration Date` | After this date no new questions may be created, but existing ones keep working and may still be disputed. |

### Oracle Parameters

| Parameter | Meaning |
| :---- | :---- |
| `Reward (SUI)` | Reward for answering. Paid by `Asker` when the `question` is created. |
| `Bond Answerer (SUI)` | Bond that `Answerer` must post when publishing an answer. |
| `Bond Disputer (SUI)` | Bond that `Disputer` must post to open a dispute. |
| `Liveness (second)` | Duration of the challenge window after an answer is published. |

Model constraint: `Bond Answerer` and `Bond Disputer` must not be lower than `Cost court`.

### Court Parameters

| Parameter | Meaning |
| :---- | :---- |
| `Name Court` | Name of the court that will handle disputes for questions under this `Rulebook`. |
| `Description Court` | Description of the court model and decision logic, such as participant arbitration, expert court, or DAO voting. |
| `Evidence submission period` | Window during which parties may submit evidence. |
| `Appeal period` | Window during which an appeal may be filed. |
| `Appeal price (SUI)` | Cost of filing an appeal. |
| `Max appeals` | Maximum number of appeals for one case. |
| `Cost court (SUI)` | Cost of hearing a case in court. |

## What a Question Inherits from Rulebook

Because every `question` in `Oracle` is created from `Rulebook`, the following values are auto-filled:

- `Liveness`;
- `Reward`;
- `Bond Answerer`;
- `Bond Disputer`;
- `Name Court`;
- the remaining court parameters required for a dispute.

Once auto-filled, these parameters cannot be changed manually. That makes `Rulebook` a strict behavioral template rather than a descriptive reference.

## Policy Oracle and Policy Court

The system uses two policy texts generated automatically:

- `Policy Oracle` for question and answer handling in `Oracle`;
- `Policy Court` for case handling in `Court`.

Their practical purpose is to:

- make the rules transparent before any dispute starts;
- lock economics and deadlines in advance;
- reduce the risk of conflicting interpretations.
