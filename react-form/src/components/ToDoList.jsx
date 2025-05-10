import React from 'react'
import { useState } from 'react'

const articles = [
    "Come migliorare la produttività lavorando da casa",
    "Guida introduttiva a JavaScript per principianti",
    "I 10 libri da leggere assolutamente nel 2025",
    "Strategie per risparmiare sulle spese mensili",
    "Le migliori destinazioni per viaggiare in primavera",
    "Cos'è l'intelligenza artificiale e come sta cambiando il mondo",
    "Alimentazione sana: 5 consigli pratici",
    "Come creare un sito web con HTML e CSS",
    "La storia del cinema italiano in 10 film",
    "Esercizi semplici per mantenersi in forma a casa"
];

function ToDoList() {
    const [articolo, setArticolo] = useState("");
    const [articoli, setArticles] = useState(articles);

    const addArticle = (e) => {
        e.preventDefault();

        if(articolo == ''){
            alert("Inserisci un valore valido");
            return;
        }
        if(articoli.includes(articolo)){
            alert("articolo già presente");
            return;
        }

        setArticles([...articoli, articolo]);
        setArticolo("");
    }

  return (
    <>
    {
        articoli.map((articolo, index) => (
            <ul>
                <li key={index}>{articolo}</li>
            </ul>
        ))
    }
    <form onSubmit={addArticle}>
        <hr/>
        <label htmlFor="articolo">Aggiungi un articolo:</label>
        <input type="text" id="articolo" name="articolo" value={articolo} onChange={(e)=>{setArticolo(e.target.value)}} placeholder='nuovo articolo'/>
        <button type="submit">Aggiungi</button>
    </form>
    </>
  )
}

export default ToDoList
