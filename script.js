fetch('https://www.data.gouv.fr/api/1/discussions/?sort=-created&page=1&page_size=20')
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log(`Il existe ${response.total} demandes`)
        console.log(`Le titre de la première demande est ${response.date[0].title}`)
    })
    .catch(error => {
        console.log(`Erreur ${error}`)
    })