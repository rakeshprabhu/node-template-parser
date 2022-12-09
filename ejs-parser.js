console.log("HTML Template Parsing using EJS");
console.log("-------------------------------");
let ejs = require('ejs');

let data = {
    "firstname": "Rakesh",
    "Evaluations": [
        { "link": "https://test1.com/john", "round": "Screening", "candidate": "John" },
        { "link": "https://test1.com/bob", "round": "Essay", "candidate": "Bob" },
    ]
};

console.log('Handling using for statement. Content Follows:');
console.log('----------------------------------------------');

let templateFor = `Dear <%= data.firstname %>,
 <table>
    <tr>
        <td>Candidate</td>
        <td>Round</td>
    </tr>
  <% for(var i = 0; i < data.Evaluations.length; i++) { %>
    <tr>
        <td>
            <a src="<%= data.Evaluations[i].link %>"><%= data.Evaluations[i].candidate %></a> 
        </td>
        <td>
            <%= data.Evaluations[i].round %>
        </td>
    </tr>
  <% } %>
</table>`;

console.log(ejs.render(templateFor, { data: data }));

console.log('--------------------------------------------------');
console.log('Handling using foreach statement. Content Follows:');
console.log('--------------------------------------------------');

let templateForEach = `
Dear <%= data.firstname %>,
 <table>
    <tr>
        <td>Candidate</td>
        <td>Round</td>
    </tr>
    <% data.Evaluations.forEach(function(item) { %>
    <tr>
        <td>
            <a src="<%= item.link %>"><%= item.candidate %></a> 
        </td>
        <td>
            <%= item.round %>
        </td>
    </tr>
    <% }); %> 
</table>`;

console.log(ejs.render(templateForEach, { data: data }));