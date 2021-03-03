import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import api from '../../services/api'

const GoogleDocs = () => {

  const { level } = useParams()

  const [src, setSrc] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(async () => {
    switch (level) {
      case 'a':
        setUrl('/api/levels/A')
        break;
      case 'b':
        setUrl('/api/levels/B')
        break;
      case 'c':
        setUrl('/api/levels/C')
        break;
      case 'teacher':
        setUrl('/api/teacher')
        break;
      default:
        setUrl('')
        break;
    }
  }, [])

  useEffect(async () => {
    try {
      const response = await api.get(url)
      setSrc(response.data.exercise)
    } catch (error) {
      console.log(error)
    }
  }, [src, url])


  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      {src && (
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          allowFullScreen
          src={src}
          title="WTP Iframe"
          />
      )}
    </div>
  );
};

export default GoogleDocs;
