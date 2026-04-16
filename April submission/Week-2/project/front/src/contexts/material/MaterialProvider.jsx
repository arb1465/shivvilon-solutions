import { useState, useEffect } from "react";
import { MaterialContext } from "./materialContext";
import { getData, setData } from "../../utils/localStorage";

const MaterialProvider = ({children}) => {
  const [materials, setMaterials] = useState(() => {
    return getData("materials")
  })

  useEffect(() => {
    setData("materials", materials);
  }, [materials])

  return <MaterialContext.Provider value={{ materials, setMaterials }}>
    {children}
  </MaterialContext.Provider>
}

export default MaterialProvider;