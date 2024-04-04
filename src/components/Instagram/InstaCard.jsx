import React from "react";
// Using react-social-media-embed
import { InstagramEmbed } from "react-social-media-embed";
function InstaCard() {
  return (
    <div className=" ">
      <div className=" "  style={{ display: "flex", justifyContent: "center" , borderRadius:'20%' }}>
        <InstagramEmbed
          url="https://www.instagram.com/reel/C4NqbLgNjzv/?utm_source=ig_embed&amp;utm_campaign=loading"
          width={400}
        />
      </div>
    </div>
  );
}

export default InstaCard;
