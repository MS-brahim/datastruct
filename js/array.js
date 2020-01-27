class info {
    constructor(f,l,d,p,t,a) {
    this.fname=f;
    this.lname=l;
    this.date=d;
    this.place=p;
    this.phone=t;
    this.address=a;
    }
}
function him() {

    let himos = new info(
    document.getElementById('fname').value,
    document.getElementById('lname').value,
    document.getElementById('date').value,
    document.getElementById('place').value,
    document.getElementById('phone').value,
    document.getElementById('address').value
    
    );

// creation de ligne
TR = document.createElement ("tr");

// creation de la 1eme cellule
TD1  = document.createElement ("td");
TXT1 = document.createTextNode (himos.fname);
TD1.appendChild (TXT1);


// creation de la 2eme cellule
TD2  = document.createElement ("td");
TXT2 = document.createTextNode (himos.lname);
TD2.appendChild (TXT2);


// creation de la 3eme cellule
TD3  = document.createElement ("td");
TXT3 = document.createTextNode (himos.date);
TD3.appendChild (TXT3);


// creation de la 4eme cellule
TD4  = document.createElement ("td");
TXT4 = document.createTextNode (himos.place);
TD4.appendChild (TXT4);


// creation de la 5eme cellule
TD5  = document.createElement ("td");
TXT5 = document.createTextNode (himos.phone);
TD5.appendChild (TXT5);


// creation de la 6eme cellule
TD6  = document.createElement ("td");
TXT6 = document.createTextNode (himos.address);
TD6.appendChild (TXT6);


// assemble les cellule a la ligne
TR.appendChild(TD1);
TR.appendChild(TD2);
TR.appendChild(TD3);
TR.appendChild(TD4);
TR.appendChild(TD5);
TR.appendChild(TD6);


// assembla la ligne au table
document.getElementById ('infotable').appendChild (TR);
}