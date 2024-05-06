import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchDog() {
  const [breed, setBreed] = useState("random");
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "https://dog.ceo/api/breeds/image/random";
        if (breed !== "random") {
          url = `https://dog.ceo/api/breed/${breed}/images/random`;
        }
        const response = await axios.get(url);
        setDogImage(response.data.message);
      } catch (error) {
        console.error("Error fetching dog image:", error);
      }
    };

    fetchData();

    return () => {
      setDogImage(null);
    };
  }, [breed]);

  const handleBreedChange = (e) => {
    setBreed(e.target.value);
  };

  return (
    <div className="dog-search">
      <br /><br />
      <select value={breed} onChange={handleBreedChange}>
        <option value="random">Random</option>
        <option value="beagle">Beagle</option>
        <option value="boxer">Boxer</option>
        <option value="dalmatian">Dalmatian</option>
        <option value="husky">Husky</option>
      </select>
      <br /><br />
      {dogImage ? (
        <div>
          <img src={dogImage} alt="dog" style={{ maxWidth: "300px" }} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SearchDog;
