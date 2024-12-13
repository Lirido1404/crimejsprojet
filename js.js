const tryfetchfichier = async () => {
    try {
        const res = await fetch("crimedata.csv");

        if (!res.ok) {
            throw new Error(res);
        }

        const csvData = await res.text(); 

        return Papa.parse(csvData, {
            header: true, 
            skipEmptyLines: true 
        }).data;
    } catch (err) {
        console.error("Erreur lors du chargement des données CSV :", err);
        return null; 
    }
};










let ville;
let villeInput = document.getElementById("ville");
villeInput.addEventListener('change',(e)=>{
    let value = e.target.value;
    ville = value;
    console.log(ville);
})





// Exemple d'utilisation
(async () => {
    const jsonData = await tryfetchfichier();

    if(jsonData){
        if(jsonData[0].CODGEO_2024 === 1001){
            console.log("même type")
        }else{
            let int = parseInt(jsonData[0].CODGEO_2024);
            if(int === 1001){
                console.log("même type2")
            }
        }
    }
    // if (jsonData) {
    //     const filteredData = jsonData.filter((el) => {
    //         return parseInt(el.CODGEO_2024, 10) === 1002;
    //     });

    //     console.log(filteredData);

    //     const numberOfObjectsWithCodeGeo1002 = filteredData.length;
    //     console.log(Nombre d'objets avec CODGEO_2024 = 1002 : ${numberOfObjectsWithCodeGeo1002});

    //     if (filteredData.length > 0) {
    //         console.log("Premier objet trouvé :", filteredData[0]);
    //     } else {
    //         console.log("Aucun objet avec CODGEO_2024 = 1002 trouvé.");
    //     }
    // }
})();