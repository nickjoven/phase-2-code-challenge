import React, { useState, useEffect } from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

// 1. See list of planeteers on the page, using the Planeteer component.The Planeteer component should 
// display the planeteer's image, name, bio, Twitter handle, and conditionally render where they are 
// based. If they are from the USA, the component should say "USA-based", otherwise it should say 
// "Working overseas".

// 2. Click on the image of the planeteer in the Planeteer component and see the quote for that 
// planeteer in place of the bio.If I click on the image again, the quote should again be replaced 
// with the bio.If I click on another planeteer's image, it toggles that planeteer's bio independent 
// of any other planeteer's.

// 3. Type in the SearchBar component and see the list of planeteers whose name or bio match the text 
// in the search bar.If there's no text in the search bar, all the planeteers should be rendered.

// Bonus 
// - See the age of the planeteer in the`Planeteer` component(To calculate the
//   age, first figure out how to get the current year in JavaScript and then
//   subtract the planeteer's birth year from it.)
// - Click the`RandomButton` to render a random planeteer to the list of
//   planeteers on the page.Additionally, the new random planeteer should be
//   persisted to the database.
// - Click on a checkbox in the`SearchBar` component that, when checked, sorts the
//   planeteers in the`PlaneteersContainer` from youngest to oldest.When
//   unchecked, the planeteers should be sorted by ID.When viewing a filtered list
//   of planeteers, the sort should only sort the filtered list.

const App = () => {
  const [planeteers, setPlaneteers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isSortByAge, setIsSortByAge] = useState(false)

  useEffect(() => {
    const fetchPlaneteers = async () => {
      let req = await fetch('http://localhost:8003/planeteers')
      let res = await req.json()
      setPlaneteers(res)
    }
    fetchPlaneteers()
  }, [])

  const filteredPlaneteers = planeteers.filter((planeteer) => {
    return (
      planeteer.name.toLowerCase().includes(searchTerm.toLowerCase()) 
      || planeteer.bio.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  const handleAddPlaneteer = (newPlaneteer) => {
    const updatedPlaneteers = [...planeteers, newPlaneteer]
    setPlaneteers(updatedPlaneteers)
  }

  const handleToggleSort = () => {
    setIsSortByAge(isSortByAge => !isSortByAge)
  }

  const compareAge = (a, b) => {
    return a.born - b.born
  }

  const sortedPlaneteers = filteredPlaneteers.slice().sort(compareAge)

  return (
    <div>
      <Header />
      <SearchBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        handleToggleSort={handleToggleSort}
      />
      <RandomButton handleAddPlaneteer={handleAddPlaneteer} />
      <PlaneteersContainer 
        planeteers={
          isSortByAge
          ? sortedPlaneteers
          : filteredPlaneteers
        } 
      />
    </div>
  );
}

export default App;
