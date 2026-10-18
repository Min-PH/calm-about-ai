# Calm About AI: How Ready Are You?

A 3-minute check of everyday AI habits. 15 questions drawn from a 40-item bank, a short takeaway after each answer, and a friendly result level.
Based on the textbook *AI in Public Health* by Min Wu (Springer, 2026).

An informal self-check, not a formal assessment.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole test. No server or database needed. |
| `items.json` | The question bank, title, result levels and feedback. Edit this to change questions. |
| `apps-script.gs` | Optional: records anonymous right/wrong answers to a Google Sheet. |

## Put it online (GitHub Pages, about 10 minutes)

1. On GitHub, create a new **public** repository under `Min-PH`, for example `calm-about-ai`.
2. Click **Add file > Upload files**, drag in `index.html`, `items.json` and this `README.md`, then **Commit changes**.
3. Go to **Settings > Pages**. Under *Build and deployment*, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then **Save**.
4. After a minute or two, the test is live at `https://min-ph.github.io/calm-about-ai/`.

## Link it from Ghost

Write a short post or page, then either:
- add a **Button** card linking to the GitHub Pages address, or
- add an **HTML** card with:
  `<iframe src="https://min-ph.github.io/calm-about-ai/" style="width:100%;height:760px;border:0" title="Calm About AI"></iframe>`

## Optional: record answers anonymously

1. Create a Google Sheet. Open **Extensions > Apps Script**, paste in `apps-script.gs`, and save.
2. **Deploy > New deployment**, type **Web app**, *Execute as* **Me**, *Who has access* **Anyone**. Approve the permissions.
3. Copy the Web app URL. In `index.html` on GitHub, click the pencil icon and paste it between the quotes in `const LOG_URL = "";`. Commit.

The start screen will then tell users that answers are recorded anonymously. Each row stores the time, bank version, score, level, the 15 question IDs, and a string of 1s and 0s for right and wrong. No names, emails or IP addresses are kept.

After about 60–100 completed tests, the share of people who get each question right shows which questions are easy or hard. That is the data for a version 2 that balances difficulty.

## Edit questions

Open `items.json` on GitHub and click the pencil icon. Each item looks like:

```json
{ "id": "C5-01", "chapter": "Ch5", "type": "mc",
  "stem": "AI is only as good as its...",
  "options": ["Screen", "Data", "Price"],
  "answer": 1,
  "explanation": "Data writes the recipe." }
```

`answer` counts from 0, so `1` means the second option. Multiple-choice options are shuffled on screen. When you add or change questions, raise `bank_version` (for example to `0.3`) so recorded data from different versions stays separate. To change how many questions come from each chapter, edit `draw_per_test`.
