console.log("HTML Template Parsing using EJS");
console.log("-------------------------------");
let ejs = require('ejs');


let data = {
    "firstname": "rakesh Panel",
    "Evaluations": [
        { "link": "https://test", "round": "Screening", "candidate": "Rakesh" },
        { "link": "https://test1", "round": "Essay", "candidate": "Rakesh" },
    ]
};

let template = `Dear <%= data.firstname %>,
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

console.log('Handling using for statement. Content Follows:');
console.log('-----------------------------------------------')
let emailContent = ejs.render(template, { data: data });
console.log(emailContent);

let template1 = `Dear <%= data.firstname %>,
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

console.log('Handling using foreach statement. Content Follows:');
console.log('--------------------------------------------------')
console.log(ejs.render(template1, { data: data }));