// Calm About AI: anonymous answer logging (Google Apps Script)
// 1. Create a Google Sheet. 2. Extensions > Apps Script, paste this file, Save.
// 3. Deploy > New deployment > Web app: Execute as "Me", Who has access "Anyone".
// 4. Copy the Web app URL into LOG_URL at the top of the script in index.html.
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["timestamp", "bank_version", "score", "level", "items", "correct"]);
  }
  const d = JSON.parse(e.postData.contents);
  // "correct" is a string of 1s and 0s in the same order as "items".
  sheet.appendRow([new Date(), d.bank_version, d.score, d.level, d.items, "'" + d.correct]);
  return ContentService.createTextOutput("ok");
}
