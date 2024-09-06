import axios from "axios";

async function saveFile (id, content) {
  // console.log(id, content);
  const response = await axios.put(
    `${import.meta.env.VITE_SERVER}/api/file/${id}`,
    {
      content: content
    }
  )
  console.log("response ", response);
}

export default saveFile;