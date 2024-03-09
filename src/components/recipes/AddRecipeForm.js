import { useState } from "react";
import "../../styles/recipes.scss";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../config/firebase";
import { v4 } from "uuid";

const AddRecipeForm = () => {
  let [name, setName] = useState("");
  let [ingredients, setIngredients] = useState([]);
  let [directions, setDirections] = useState([]);
  let [imageUpload, setImageUpload] = useState(null);
  let [imageURL, setImageURL] = useState("");

  const handleIngredients = (str) => {
    str = str.split(",");
    setIngredients(str);
  };

  const handleDirections = (str) => {
    str = str.split(",");
    setDirections(str);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const collectionRef = collection(db, "recipes");
    const payload = { name, ingredients, directions, imageURL };
    await addDoc(collectionRef, payload);
  };

  const uploadImage = (e) => {
    e.preventDefault();
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("image uploaded");
      getDownloadURL(imageRef).then((url) => {
        setImageURL(url);
      });
    });
  };

  return (
    <div className="addRecipe">
      <div className="addRecipe__content">
        <h2>add a new recipe</h2>
        <form onSubmit={handleSubmit}>
          <label>Recipe Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Ingredients</label>
          <input
            type="text"
            required
            value={ingredients}
            onChange={(e) => handleIngredients(e.target.value)}
          />
          <label>Directions</label>
          <input
            type="text"
            required
            value={directions}
            onChange={(e) => handleDirections(e.target.value)}
          />
          <label>Upload an Image</label>
          <input
            type="file"
            onChange={(e) => {
              setImageUpload(e.target.files[0]);
            }}
            className="imgUploadLabel"
          />
          <button onClick={uploadImage} className="imgUploadButton">
            Upload Image
          </button>
          <input type="submit" className="submitButton" />
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
