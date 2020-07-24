var myCodeMirror = CodeMirror(document.body, {
  value: "function myScript(){return 100;}\n",
  mode: "javascript"
});
// Use above to make default text
let body = document.querySelect('#code-editor')
body.append(myCodeMirror)