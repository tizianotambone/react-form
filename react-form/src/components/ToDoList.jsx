import React from 'react'

function ToDoList() {
    const articoli = [
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

  return (
    articoli.map((articolo, index) => (
        <ul>
            <li key={index}>{articolo}</li>
        </ul>
    ))
  )
}

export default ToDoList
