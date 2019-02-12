export default [
  {label: 'Todays Journal Entry', name: 'body', noValueError:'You must enter todays journal entry', type:'text'},
  {label: 'Todays Low Score (0-100)', name: 'lowScore', noValueError:'Enter value between 0 and high score', type:'number'},
  {label: 'Todays High Score (0-100)', name: 'highScore', noValueError:'Enter value between low score and 100', type:'number'}
];
