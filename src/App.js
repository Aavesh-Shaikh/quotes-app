import "./App.css";

import { useEffect, useState } from "react";
import QuoteList from "./components/QuoteList/QuoteList";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function App() {
  const [tagsList, setTagsList] = useState();

  const filterTags = tagsList?.map((tags) => {
    return tags.name;
  });

  useEffect(() => {
    fetch("https://api.quotable.io/tags", {
      method: "GET",
      headers: { "X-Api-Key": "YOUR_API_KEY" },
      contentType: "application/json",
    })
      .then((response) => response.json())
      .then((data) => setTagsList(data))
      .catch((error) => console.log("Error Fetching Data", error));
  }, []);

  const [seletedTag, setSeletedTag] = React.useState("");
  console.log(seletedTag, "seletedTag");

  const handleChange = (event) => {
    setSeletedTag(event.target.value);
  };

  // useEffect(() => {
  //   localStorage.setItem("quoteCategory", seletedTag);
  // }, [seletedTag]);

  return (
    <>
      <div className="App">
        <div>
          <FormControl sx={{ m: 1, width: "300px" }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={seletedTag}
              onChange={handleChange}
              autoWidth
              label="Category"
            >
              {filterTags &&
                filterTags.map((tag, i) => {
                  return (
                    <MenuItem sx={{ width: "300px" }} value={tag}>
                      {tag}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </div>
        <QuoteList seletedTag={seletedTag} />
      </div>
    </>
  );
}

export default App;
