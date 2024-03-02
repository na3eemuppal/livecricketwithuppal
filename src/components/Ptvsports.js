import React from 'react'


export default function Ptvsports() {
  return (
    <div class="tv-display col-md-12 mt-5 d-flex justify-content-center ptv-active">
        <iframe
        src="https://stream.crichd.vip/update/ptv.php"
        width="600"
        height="400"
        frameborder="0"
        allowfullscreen="true"
        allowtransparency="true"
        allow="autoplay, fullscreen"
        allowautoplay="yes"
        webkitallowfullscreen=""
        mozallowfullscreen=""
        ></iframe>
      </div>
  )
}
