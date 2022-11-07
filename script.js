var table=document.createElement("table");
table.setAttribute("class","table");

var thead=document.createElement("thead");
thead.setAttribute("class","thead-dark");

var tr=document.createElement("tr");

var th1=document.createElement("th");
th1.setAttribute("scope","col");
th1.innerHTML="First";

var th2=document.createElement("th");
th2.setAttribute("scope","col");
th2.innerHTML="Middle";


var th3=document.createElement("th");
th3.setAttribute("scope","col");
th3.innerHTML="Last";

var tbody=document.createElement("tbody");

var tr=document.createElement("tr");

var td1=document.createElement("td");
td1.innerHTML="mark";

var td2=document.createElement("td");
td2.innerHTML ="otto";

var td3=document.createElement("td");
td3.innerHTML="mdo";

tr.append(td1,td2,td3);
tbody.append(tr);
tr.append(th1,th2,th3);

thead.append(tr);
table.append(thead,tbody);
document.body.append(table);


