import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
  const [currentUrl, setCurrentUrl] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentUrl(window.location.href.replace(
      "http://localhost:3001/",
      ""
    )
    .split('/'));
    // const parts = urlWithoutPrefix.split("/");
    // setCurrentUrl(urlWithoutPrefix);
  }, []);

  const HandleClick = (index) =>{
    let linker = '/' + currentUrl.slice(0,index +1).join('/');
    navigate(linker);
    // console.log(linker)
  }

  return (
    <div className="px-2 py-4">
      <div className="flex gap-2 justify-start">
        {currentUrl.map((part, index) => (
          <React.Fragment key={index}>
            {index !== 0 && <span className="text-gray-500"> &gt; </span>}
            <div
              onClick={() => HandleClick(index)}
              key={index}
              className="cursor-pointer text-blue-500"
            >
              {part}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
