// ==UserScript==
// @name         Shepherd_Ticket_Creation
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Redirection From Shepherd risks UI to ticket.corp.amazon.com with data points extraction.
// @author       vedpramo
// @match        https://shepherd.a2z.com/issues/*
// @grant        none
// @updateURL    https://drive.corp.amazon.com/documents/vedpramo@/Scripts/ShepherTicket.user.js#download=true
// @downloadURL https://code.amazon.com/packages/PcimbScripts/blobs/mainline/--/ShepherTicket.user.js?download=true
// ==/UserScript==
// Replace with your ticket  details here
const Category= 'Company-wide Services'; // add your ticket category
const Type = 'Services'; // add your ticket type
const Item ='Robin'; // add your ticket item
const Group = 'Stations Compliance Support'; // add your resolver group
const Assiginee= 'pesalasr' // add your assiginee
const Severity= 'FOUR' // add your severity


let styleSheet = `
.Createbtn {
    background-color: #EC7211;
    padding: 4px 15px;
    font-size: 14px;
    color: rgb(255, 255, 255);
    border-radius: 10px;
    cursor: pointer;
    font-family:  Lato,'Helvetica', 'Arial', sans-serif;
    font-weight: bold;
    border-style: solid;
    letter-spacing: 0.02em;
}
`;
//<style type = 'text/css'>styleSheet</style>
let s = document.createElement('style');
s.type = "text/css";
s.innerHTML = styleSheet;
(document.head || document.documentElement).appendChild(s);

setTimeout(function() {
    let headerData = document.querySelectorAll("h5.MuiTypography-root");//creates a list of all elements that are h5 with class name MuiTypography-root
    let pointer_head = 0;
    let insideData=document.querySelectorAll("h4 div");
    let data = document.querySelectorAll("p.MuiTypography-root.MuiTypography-body1.MuiTypography-paragraph")
    insideData.forEach(function(row) {
        let btn = document.createElement("button");
        btn.innerHTML = "Create ticket";
        btn.className ="Createbtn";
        let titleData = row.innerText.split("\t");
        let url =row.baseURI;
        let s= 'Shepherd link :-'+String(url);
        for(let i=0;i<data.length;i++)
        {
            s=s+"\n"
            if (headerData[pointer_head + 1] != undefined)
            {
                let headinfo = headerData[++pointer_head].innerText; // create a temporary variable
                s = s + "\n" + headinfo + "\n" + data[i].innerText; // add header and paragraph information after adding space in between them.
            }

        }
        btn.onclick = () => { // do something on button click
            let Title= '[Shepherd Risk]: '+titleData
            let baseurl= String(url)
            let content= s
            window.open(encodeURI("https://t.corp.amazon.com/create/options?title="+Title+"+&description="+content+"+&ticket_type=Regular+Ticket&severity="+Severity+"&category="+Category+"&type="+Type+"&item="+Item+"&group="+Group+"&assignee="+Assiginee+"&tags=satc-"+Assiginee+",ticket-creation-tool"),"_blank");
        }
        row.appendChild(btn, row.childNodes[0]);
    });

}, 5000);