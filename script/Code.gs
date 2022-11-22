function doGet(request) {
  return HtmlService.createTemplateFromFile('Index').evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME)
.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
 
//GET DATA FROM GOOGLE SHEET AND RETURN AS AN ARRAY
function getData(){
  var spreadSheetId = "1D9wJeuvdHy4TUNYs2SfnG5dR6SfeU9OecBSqi-HFkB8"; //CHANGE
  var dataRange     = "KurenieAktualne!A2:F"; //CHANGE
 
  var range   = Sheets.Spreadsheets.Values.get(spreadSheetId,dataRange);
  var values  = range.values;
 
  return values;
}
 
//INCLUDE JAVASCRIPT AND CSS FILES
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

