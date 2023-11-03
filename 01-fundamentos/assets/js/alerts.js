alert('hello world');

let nameText = prompt('What is your name?', 'without name');
console.log('%c Name', 'color: blue; font-weight: bold', nameText)

let selection = confirm('Do you want to delete it?');

console.log('Confirm: ', selection);