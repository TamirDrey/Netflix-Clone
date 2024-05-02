import { useEffect, useState } from "react";

interface ErrorProps {
  message: any;
}

const Error: React.FC<ErrorProps> = ( {message} ) => {

  const [errorMessage, setErrorMessage] = useState<any>(undefined); 

  useEffect(() => {
    if(message){
      if ("data" in message || "error" in message) {
        setErrorMessage(message.data.error)
      } 
    }
  })

  return <div className="text-white">{errorMessage} </div>;
};
export default Error;
