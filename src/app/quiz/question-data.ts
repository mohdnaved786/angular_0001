import { Question } from './question.model';

export const QUESTIONS_ANGULAR: Question[] = [
  {
    question: 'What command is used to create a new Angular project?',
    options: ['ng new', 'ng init', 'ng start', 'ng create'],
    answer: 'ng new'
  },
  {
    question: 'Which file is the root module of an Angular application?',
    options: ['main.ts', 'app.component.ts', 'app.module.ts', 'index.html'],
    answer: 'app.module.ts'
  },
  {
    question: 'What decorator is used to define an Angular component?',
    options: ['@Directive', '@Injectable', '@NgModule', '@Component'],
    answer: '@Component'
  },
  {
    question: 'Which directive is used to display data conditionally in Angular?',
    options: ['*ngIf', '*ngFor', '*ngSwitch', '*ngModel'],
    answer: '*ngIf'
  },
  {
    question: 'Which lifecycle hook is called after a component’s view has been fully initialized?',
    options: ['ngOnInit', 'ngAfterViewInit', 'ngAfterContentInit', 'ngDoCheck'],
    answer: 'ngAfterViewInit'
  },
  {
    question: 'What Angular feature allows two-way data binding?',
    options: ['[(ngBind)]', '[(ngModel)]', '[ngModel]', '{{}}'],
    answer: '[(ngModel)]'
  },
  {
    question: 'Which Angular CLI command is used to add external libraries to a project?',
    options: ['ng install', 'ng add', 'ng get', 'ng import'],
    answer: 'ng add'
  },
  {
    question: 'Which file contains configuration for routes in an Angular app?',
    options: ['app.routes.ts', 'app.module.ts', 'app-routing.module.ts', 'main.ts'],
    answer: 'app-routing.module.ts'
  },
  {
    question: 'What is the purpose of Angular services?',
    options: [
      'To create UI components',
      'To handle business logic and data sharing',
      'To define routing paths',
      'To apply styles to components'
    ],
    answer: 'To handle business logic and data sharing'
  },
  {
    question: 'What is the default change detection strategy in Angular?',
    options: ['OnPush', 'Default', 'Manual', 'Reactive'],
    answer: 'Default'
  }
];

export const QUESTIONS_CSS: Question[] = [
  {
    question: 'What does CSS stand for?',
    options: ['Cascading Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'],
    answer: 'Cascading Style Sheets'
  },
  {
    question: 'Which property is used to change the text color of an element?',
    options: ['background-color', 'text-color', 'font-color', 'color'],
    answer: 'color'
  },
  {
    question: 'How do you select an element with id "main"?',
    options: ['.main', '#main', 'main', '*main'],
    answer: '#main'
  },
  {
    question: 'Which CSS property controls the size of text?',
    options: ['text-size', 'font-style', 'font-size', 'text-style'],
    answer: 'font-size'
  },
  {
    question: 'How do you make a list display horizontally instead of vertically?',
    options: ['display: block;', 'display: inline;', 'display: flex;', 'display: horizontal;'],
    answer: 'display: flex;'
  },
  {
    question: 'Which property is used to change the background color?',
    options: ['color', 'bgcolor', 'background-color', 'background-style'],
    answer: 'background-color'
  },
  {
    question: 'How do you apply a style to all `<p>` elements inside a `<div>`?',
    options: ['div p', 'div.p', 'div + p', 'p > div'],
    answer: 'div p'
  },
  {
    question: 'Which value of the position property makes an element stay in place even when the page is scrolled?',
    options: ['absolute', 'relative', 'fixed', 'sticky'],
    answer: 'fixed'
  },
  {
    question: 'What does the "z-index" property control?',
    options: ['Text size', 'Layer order', 'Element color', 'Screen zoom'],
    answer: 'Layer order'
  },
  {
    question: 'Which unit is relative to the root element’s font size?',
    options: ['em', '%', 'rem', 'vh'],
    answer: 'rem'
  }
];

export const QUESTIONS_HTML: Question[] = [
  {
    question: 'What does HTML stand for?',
    options: ['HyperText Markdown Language', 'HyperText Markup Language', 'HighText Machine Language', 'Hyper Transfer Markup Language'],
    answer: 'HyperText Markup Language'
  },
  {
    question: 'Which HTML element is used to create a hyperlink?',
    options: ['<link>', '<a>', '<href>', '<url>'],
    answer: '<a>'
  },
  {
    question: 'Which tag is used to define a table row in HTML?',
    options: ['<td>', '<th>', '<tr>', '<table>'],
    answer: '<tr>'
  },
  {
    question: 'What attribute is used to specify an image source in HTML?',
    options: ['href', 'src', 'link', 'path'],
    answer: 'src'
  },
  {
    question: 'Which HTML element is used to define an unordered list?',
    options: ['<ol>', '<ul>', '<li>', '<list>'],
    answer: '<ul>'
  },
  {
    question: 'How can you make text bold in HTML?',
    options: ['<b>', '<strong>', 'Both <b> and <strong>', '<bold>'],
    answer: 'Both <b> and <strong>'
  },
  {
    question: 'Which doctype declaration is correct for HTML5?',
    options: ['<!DOCTYPE HTML PUBLIC>', '<!DOCTYPE html>', '<HTML5>', '<!HTML>'],
    answer: '<!DOCTYPE html>'
  },
  {
    question: 'What tag is used to insert a line break?',
    options: ['<br>', '<hr>', '<line>', '<break>'],
    answer: '<br>'
  },
  {
    question: 'Which tag is used to display a numbered list?',
    options: ['<ul>', '<ol>', '<li>', '<list>'],
    answer: '<ol>'
  },
  {
    question: 'What is the correct HTML element for inserting a comment?',
    options: ['<!-- comment -->', '// comment', '# comment', '<comment>'],
    answer: '<!-- comment -->'
  }
];

export const QUESTIONS_REACT: Question[] = [
  {
    question: 'What is React primarily used for?',
    options: ['Building databases', 'Server-side scripting', 'Building user interfaces', 'Styling web pages'],
    answer: 'Building user interfaces'
  },
  {
    question: 'What is a component in React?',
    options: ['A database table', 'Reusable piece of UI', 'CSS style', 'JavaScript function only'],
    answer: 'Reusable piece of UI'
  },
  {
    question: 'What hook is used to manage state in functional components?',
    options: ['useEffect', 'useState', 'useRef', 'useContext'],
    answer: 'useState'
  },
  {
    question: 'Which syntax is used to embed JavaScript inside JSX?',
    options: ['{{ }}', '()', '{}', '""'],
    answer: '{}'
  },
  {
    question: 'What is JSX?',
    options: ['A CSS framework', 'A JavaScript XML syntax', 'A database', 'A state management tool'],
    answer: 'A JavaScript XML syntax'
  },
  {
    question: 'What hook is used for side effects in React?',
    options: ['useEffect', 'useState', 'useMemo', 'useCallback'],
    answer: 'useEffect'
  },
  {
    question: 'How do you pass data from parent to child in React?',
    options: ['Using state', 'Using props', 'Using hooks', 'Using Redux'],
    answer: 'Using props'
  },
  {
    question: 'Which method is used to render React elements to the DOM?',
    options: ['render()', 'React.render()', 'ReactDOM.render()', 'ReactDOM.display()'],
    answer: 'ReactDOM.render()'
  },
  {
    question: 'What is the default port for a React development server?',
    options: ['3000', '8000', '4200', '5000'],
    answer: '3000'
  },
  {
    question: 'Which hook is used to access context values?',
    options: ['useContext', 'useState', 'useEffect', 'useReducer'],
    answer: 'useContext'
  }
];

export const QUESTIONS_JAVASCRIPT: Question[] = [
  {
    question: 'Which company developed JavaScript?',
    options: ['Netscape', 'Microsoft', 'Google', 'Oracle'],
    answer: 'Netscape'
  },
  {
    question: 'Which of the following is a JavaScript data type?',
    options: ['Number', 'String', 'Boolean', 'All of the above'],
    answer: 'All of the above'
  },
  {
    question: 'Which keyword is used to declare a variable in JavaScript?',
    options: ['var', 'let', 'const', 'All of the above'],
    answer: 'All of the above'
  },
  {
    question: 'How do you write a comment in JavaScript?',
    options: ['// comment', '<!-- comment -->', '# comment', '** comment **'],
    answer: '// comment'
  },
  {
    question: 'What will `typeof null` return?',
    options: ['"null"', '"object"', '"undefined"', '"boolean"'],
    answer: '"object"'
  },
  {
    question: 'What does `NaN` stand for?',
    options: ['Not a Name', 'No assigned Number', 'Not a Number', 'New async Name'],
    answer: 'Not a Number'
  },
  {
    question: 'Which method is used to parse a JSON string?',
    options: ['JSON.stringify()', 'JSON.parse()', 'JSON.convert()', 'JSON.decode()'],
    answer: 'JSON.parse()'
  },
  {
    question: 'Which operator is used for strict equality comparison?',
    options: ['==', '=', '===', '!='],
    answer: '==='
  },
  {
    question: 'Which function is used to delay code execution?',
    options: ['setDelay()', 'setInterval()', 'setTimeout()', 'wait()'],
    answer: 'setTimeout()'
  },
  {
    question: 'What is the result of `typeof undefined`?',
    options: ['"undefined"', '"null"', '"object"', '"NaN"'],
    answer: '"undefined"'
  }
];
