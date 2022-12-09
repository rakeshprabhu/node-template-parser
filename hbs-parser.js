console.log("HTML Template Parsing using HBS");
console.log("-------------------------------");

let Handlebars = require("handlebars");

let data = {
    "firstname": "Rakesh",
    "Evaluations": [
        { "link": "https://test1.com/john", "round": "Screening", "candidate": "John" },
        { "link": "https://test1.com/bob", "round": "Essay", "candidate": "Bob" },
    ]
};

let template = `
Dear {{ firstname }},
 <table>
    <tr>
        <td>Candidate</td>
        <td>Round</td>
    </tr>
    {{#Evaluations}}
    <tr>
        <td>
            <a src="{{link}}">{{candidate}}</a> 
        </td>
        <td>
            {{round}}
        </td>
    </tr>
    {{/Evaluations}}
</table>`;

let templateHBS = Handlebars.compile(template);
let result = templateHBS(data);
console.log(result);