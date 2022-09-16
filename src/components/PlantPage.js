import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [ plants, setPlants ] = useState([])
  const [ searchPlant, setSearchPlant] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(resp => resp.json())
    .then(data => setPlants(data))
  }, [])

  function handleUpdatedPlants(newPlant) {
    setPlants([...plants, newPlant])
  }

  function handleSearch(search) {
    setSearchPlant(search)
  }

  const plantsToDisplay = plants.filter((plant) => {
    if (searchPlant === '') {
      return plant
    } else {
      return plant.name.toLowerCase().match(searchPlant)
    }
  })

  return (
    <main>
      <NewPlantForm onAddPlant={handleUpdatedPlants}/>
      <Search onSearchPlant={setSearchPlant}/>
      <PlantList plants = {plantsToDisplay} />
    </main>
  );
}

export default PlantPage;
