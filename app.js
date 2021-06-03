//jshint esversion:6

require('dotenv').config();
const https = require("https");
const express = require("express");
const bodyParser = require("body-parser");
var request = require('request');
const ejs = require("ejs");
const _ = require("lodash");
const app = express();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", 'ejs');

const client = require('twilio')(process.env.ACCOUNT_SID, process,env.AUTH_TOKEN);

app.get("/", function(req, res) {
    res.render("home");
});

// ////////////////////////// whatsapp sending opertations/////////////////////////


app.post("/sms", function(req, res) {

    const http = require("https");

    const options = {
        "method": "GET",
        "hostname": "corona-virus-world-and-india-data.p.rapidapi.com",
        "port": null,
        "path": "/api_india",
        "headers": {
            "x-rapidapi-key": process.env.COVID_API_KEY,
            "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
            "useQueryString": true
        }
    };

    const request = http.request(options, function(response) {
        const chunks = [];
        response.on("data", function(chunk) {
            chunks.push(chunk);
        });
        response.on("end", function() {
            const body = Buffer.concat(chunks);
            const strBody = (body.toString());
            const jBody = JSON.parse(strBody);
            const incomingText = req.body.Body;
            const seprate = incomingText.split(" ");
            const distFname = _.capitalize(seprate[(seprate.length) - 1]);
            const stateFname = _.capitalize(seprate[0]);
            var dist;
            var state;
            try {
                ////////////////// States ///////////////////////////
                switch (stateFname) {
                    case "Andhrapradesh":
                        state = "Andhra Pradesh";
                        break;
                    case "Tamilnadu":
                        state = "Tamil Nadu";
                        break;
                    case "Uttarpradesh":
                        state = "Uttar Pradesh";
                        break;
                    case "Westbengal":
                        state = "West Bengal";
                        break;
                    case "Madhyapradesh":
                        state = "Madhya Pradesh";
                        break;
                    case "Jammuandkashmir":
                        state = "Jammu and Kashmir";
                        break;
                    case "Himachalpradesh":
                        state = "Himachal Pradesh";
                        break;
                    case "Arunachalpradesh":
                        state = "Arunachal Pradesh";
                        break;
                    case "Andamanandnikobar":
                        state = "Andaman and Nicobar Islands"
                        break;
                    case "Unassigned":
                        state = "State Unassigned"
                        break;
                    default:
                        state = stateFname

                }
                /////////////////////////////////Andhra Pradesh//////////////////////////
                switch (distFname) {
                    case "Eastgodavari":
                        dist = "East Godavari";
                        break;
                    case "Westgodavari":
                        dist = "West Godavari";
                        break;
                    case "Nellore":
                        dist = "S.P.S. Nellore";
                        break;
                    case "Kadapa":
                        dist = "Y.S.R. Kadapa";
                        break;
                        ///////////////////////////////////// Arunachal Pradesh /////////////////////
                    case "Eastkameng":
                        dist = "East Kameng";
                        break;
                    case "Eastsiang":
                        dist = "East Siang";
                        break;
                    case "Kradaadi":
                        dist = "Kra Daadi";
                        break;
                    case "Leparada":
                        dist = "Lepa Rada";
                        break;
                    case "Lowersubansiri":
                        dist = "Lower Subansiri"
                        break;
                    case "Papumpare":
                        dist = "Papum Pare"
                        break;
                    case "TawangTown":
                        dist = "Tawang Town";
                        break;
                    case "Lowerdibangvaleey":
                        dist = "Lower Dibang Valley";
                        break;
                    case "Uppersiang":
                        dist = "Upper Siang";
                        break;
                    case "Lowersiang":
                        dist = "Lower Siang";
                        break;
                    case "Uppersubansiri":
                        dist = "Upper Subansiri";
                        break;
                    case "Pakkekessang":
                        dist = "Pakke Kessang";
                        break;
                    case "Shiyomi":
                        dist = "Shi Yomi";
                        break;
                    case "Westkameng":
                        dist = "West Kameng";
                        break;
                    case "Westsiang":
                        dist = "West Siang";
                        break;
                    case "Upperdibangvalley":
                        dist = "Upper Dibang Valley";
                        break;
                    case "Kurungkumey":
                        dist = "Kurung Kumey";
                        break;
                        //////////////////////////////////// Assam ////////////////////////////////
                    case "Kamrupmetropolitan":
                        dist = "Kamrup Metropolitan";
                        break;
                    case "Dimahasao":
                        dist = "Dima Hasao";
                        break;
                    case "Karbianglong":
                        dist = "Karbi Anglong";
                        break;
                    case "Southsalamaramankachar":
                        dist = "South Salamara Mankachar";
                        break;
                    case "Westkarbianglong":
                        dist = "West Karbi Anglong";
                        break;
                        /////////////////////////////// Bihar ///////////////////////
                    case "Eastchamparan":
                        dist = "East Champaran";
                        break;
                    case "Westchamparan":
                        dist = "West Champaran";
                        break;
                    case "Purbichamparan":
                        dist = "Purbi Champaran";
                        break;
                    case "Pashchimchamparan":
                        dist = "Pashchim Champaran";
                        break;
                        ////////////////////////////// Chhattisgar ////////////////
                    case "Balodabazar":
                        dist = "Baloda Bazar";
                        break;
                    case "Dakshinbastardantewada":
                        dist = "Dakshin Bastar Dantewada";
                        break;
                    case "Uttarbastarkanker":
                        dist = "Uttar Bastar Kanker";
                        break;
                    case "Gaurelapendramarwahi":
                        dist = "Gaurela Pendra Marwahi";
                        break;
                    case "Janjgirchampa":
                        dist = "Janjgir Champa";
                        break;
                        //////////////////////// Goa  ////////////////////////////
                    case "Northgoa":
                        dist = "North Goa";
                        break;
                    case "Southgoa":
                        dist = "South Goa";
                        break;
                        /////////////////// Gujarat //////////////////////////////
                    case "Chhotaudaipur":
                        dist = "Chhota Udaipur";
                        break;
                    case "Devbhoomidwarka":
                        dist = "Devbhoomi Dwarka";
                        break;
                    case "Girsomnath":
                        dist: "Gir Somnath";
                        break;
                    case "Thedangs":
                        dist = "The Dangs";
                        break;
                        /////////////////////  Haryana ///////////////////////////
                    case "Charkhidadri":
                        dist = "Charkhi Dadri";
                        break;
                        //////////////////// Himachal Pradesh ////////////////////
                    case "Lahulandspiti":
                        dist = "Lahul and Spiti";
                        break;
                        /////////////////////  Jharkhand  //////////////////////
                    case "Eastsinghbhum":
                        dist = "East Singhbhum";
                        break;
                    case "Saraikelakharsawan":
                        dist = "Saraikela-Kharsawan";
                        break;
                    case "Westsinghbhum":
                        dist = "West Singhbhum";
                        break;
                        ////////////////////////  Karnataka  /////////////////
                    case "Bengalururural":
                        dist = "Bengaluru Rural";
                        break;
                    case "Bengaluruurba":
                        dist = "Bengaluru Urba";
                        break;
                    case "Dakshinakannada":
                        dist = "Dakshina Kannada";
                        break;
                    case "Uttarakannada":
                        dist = "Uttara Kannada";
                        break;
                        /////////////// Madhya Pradesh ////////////////
                    case "Agarmalwa":
                        dist = "Agar Malwa";
                        break;
                        //////////// Maharashtra ////////////////////
                    case "Mumbaisuburban":
                        dist = "Mumbai Suburban";
                        break;
                        //////////////// Manipur ////////////////////
                    case "Imphaleast" || "Eastimphal":
                        dist = "Imphal East";
                        break;
                    case "Imphalwest" || "Westimphal":
                        dist = "Imphal West";
                        break;
                        ///////////// Meghalaya ///////////////////
                    case "Eastgarohills":
                        dist = "East Garo Hills";
                        break;
                    case "Eastjaintiahills":
                        dist = "East Jaintia Hills";
                        break;
                    case "'Eastkhasihills":
                        dist = "'East Khasi Hills";
                        break;
                    case "Northgarohills":
                        dist = "North Garo Hills";
                        break;
                    case "Southgarohills":
                        dist = "South Garo Hills";
                        break;
                    case "Southwestgarohills":
                        dist = "South West Garo Hills";
                        break;
                    case "Southwestkhasihills":
                        dist = "South West Khasi Hills";
                        break;
                    case "Westgarohills":
                        dist = "West Garo Hills";
                        break;
                    case "Westjaintiahill":
                        dist = "West Jaintia Hill";
                        break;
                    case "Westkhasihills":
                        dist = "West Khasi Hills";
                        break;
                        ////////////  punjab //////////////////////
                    case "Fatehgarhsahib":
                        dist = "Fatehgarh Sahib";
                        break;
                    case "SASNagar":
                        dist = "S.A.S. Nagar";
                        break;
                    case "Shahidbhagatsinghnagar":
                        dist = "Shahid Bhagat Singh Nagar";
                        break;
                    case "Srimuktsarsahib":
                        dist = "Sri Muktsar Sahib";
                        break;
                    case "Tarntaran":
                        dist = "Tarn Taran";
                        break;
                        //////////   Rajasthan  ///////////////////
                    case "Sawaimadhopur":
                        dist = "Sawai Madhopur";
                        break;
                        ///////////// Sikkim ////////////
                    case "Eastsikkim":
                        dist = "East Sikkim";
                        break;
                    case "Northsikkim":
                        dist = "North Sikkim";
                        break;
                    case "Southsikkim":
                        dist = "South Sikkim";
                        break;
                    case "Westsikkim":
                        dist = "West Sikkim";
                        break;
                        /////////////// Tripura ////////////////
                    case "Northtripura":
                        dist = "North Tripura";
                        break;
                    case "Southtripura":
                        dist = "South Tripura";
                        break;
                    case "Westtripura":
                        dist = "West Tripura";
                        break;
                        ///////////////// Uttar Pradesh ////////
                    case "Ambedkarnagar":
                        dist = "Ambedkar Nagar";
                        break;
                    case "Gautambuddhanagar":
                        dist = "Gautam Buddha Nagar";
                        break;
                    case "Kanpurdehat":
                        dist = "Kanpur Dehat";
                        break;
                    case "Kanpurnagar":
                        dist = "Kanpur Nagar";
                        break;
                    case "Lakhimpurkheri":
                        dist = "Lakhimpur Kheri";
                        break;
                    case "Raebareli":
                        dist = "Rae Bareli";
                        break;
                    case "Santkabirnagar":
                        dist = "Sant Kabir Nagar";
                        break;
                        ///////////////// West Bengal /////////////////////
                    case "Coochbehar":
                        dist = "Cooch Behar";
                        break;
                    case "Dakshindinajpur":
                        dist = "Dakshin Dinajpur";
                        break;
                    case "Paschimbardhaman":
                        dist = "Paschim Bardhaman";
                        break;
                    case "Paschimmedinipur":
                        dist = "Paschim Medinipur";
                        break;
                    case "Purbabardhaman":
                        dist = "Purba Bardhaman";
                        break;
                    case "Purbamedinipur":
                        dist = "Purba Medinipur";
                        break;
                    case "North24parganas":
                        dist = "North 24 Parganas";
                        break;
                    case "South24parganas":
                        dist = "South 24 Parganas";
                        break;
                    case "Uttardinajpur":
                        dist = "Uttar Dinajpur";
                        break;
                        ////////////////// Delhi /////////////////
                    case "'Centraldelhi":
                        dist = "'Central Delhi";
                        break;
                    case "Eastdelhi":
                        dist = "East Delhi";
                        break;
                    case "Newdelhi":
                        dist = "New Delhi";
                        break;
                    case "Northdelhi":
                        dist = "North Delhi";
                        break;
                    case "Northeastdelhi":
                        dist = "North East Delhi";
                        break;
                    case "Northwestdelhi":
                        dist = "North West Delhi";
                        break;
                    case "Southdelhi":
                        dist = "South Delhi";
                        break;
                    case "Southeastdelhi":
                        dist = "South East Delhi";
                        break;
                    case "Southwestdelhi":
                        dist = "South West Delhi";
                        break;
                    case "Westdelhi":
                        dist = "West Delhi";
                        break;
                        ////////////////// Telangana /////////////////////
                    case "Bhadradrikothagudem":
                        dist = "Bhadradri Kothagudem";
                        break;
                    case "Jayashankarbhupalapally":
                        dist = "Jayashankar Bhupalapally";
                        break;
                    case "Jogulambagadwal":
                        dist = "Jogulamba Gadwal";
                        break;
                    case "Komarambheem":
                        dist = "Komaram Bheem";
                        break;
                    case "Medchalmalkajgiri":
                        dist = "Medchal Malkajgiri";
                        break;
                    case "Rajannasircilla":
                        dist = "Rajanna Sircilla";
                        break;
                    case "Rangareddy":
                        dist = "Ranga Reddy";
                        break;
                    case "Warangal Rural":
                        dist = "Warangal Rural";
                        break;
                    case "Warangalurban":
                        dist = "Warangal Urban";
                        break;
                    case "Yadadribhuvanagiri":
                        dist = "Yadadri Bhuvanagiri";
                        break;

                    default:
                        dist = distFname;
                }
                const distCasesStr = "jBody.state_wise['" + state + "'].district['" + dist + "']";
                const distCases = eval(distCasesStr);
                const deltaCasesStr = distCasesStr + ".delta";
                const deltaCases = eval(deltaCasesStr);
                client.messages
                    .create({
                        from: 'whatsapp:+14155238886',
                        //body:"not found",
                        body: " Covide cases in *last 24 HOURS* in *" + dist + "* =\n [\n" + " confimed : *" + deltaCases.confirmed + "* \n deceased : *" + deltaCases.deceased + "* \n recovered : *" + deltaCases.recovered +
                            "* \n] \nTotal = \n { \n active cases : *" + distCases.active + "* \n confirmed : *" + distCases.confirmed + "* \n deceased : *" + distCases.deceased + "* \n recovered : *" + distCases.recovered + "*\n } ",
                        to: 'whatsapp:+' + req.body.WaId
                    })
                    .then(message => {})
                    .done();
                res.send("details sent");

            } catch (err) {
                client.messages
                    .create({
                        from: 'whatsapp:+14155238886',
                        //body:"not found",
                        body: "you have enterd :\n State Name : *" + state + "*\n District Name: *" + dist + "*\n Please read the following. \n 2.make sure *Spelling* is correct. \n 3. *No two-word named* states or districts are added. \n 4. *State belongs* to *India* . \n 5. *districts* belong to the *state name* entered. \n \t *thank you* for using the service \n \t for  more *help  contact* me at \n \t *9620816859* ",
                        to: 'whatsapp:+' + req.body.WaId
                    })
                    .then(message => {})

                    .done();
            }
        });
    });
    request.end();
});

app.listen(process.env.PORT || 3000, function() {
    console.log("up and running on port 3000");
});
