import React from 'react'

export default function Tensports() {
  return (
    <div className="tv-display col-md-12 mt-5 d-flex justify-content-center">
        <iframe className="iframe" title="live score" 
          src="https://stream.crichd.vip/update/tensp.php"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen="" __idm_id__="2211841" frameborder="0" 
          ></iframe>
      </div>
  )
}
