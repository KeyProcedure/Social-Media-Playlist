"use client";
import React, { useState, useEffect, Suspense } from "react";
// import { CustomButton } from "../../components/CustomButton";
// import { IconButton } from "../../components/IconButton";
// import { CommentSubmit } from "../../components/PostPage/CommentSubmit";
// import { ProfilePicture } from "../../components/ProfilePicture";
// import { LikeButton } from "../../components/PostPage/LikeButton";
// import { ProfileCard } from "../../components/PostPage/ProfileCard";
// import { CommentCard } from "../../components/PostPage/CommentCard";
// import { AIRecommendation } from "../../components/PostPage/AIRecommendation";
// import { Playlist } from "../../components/PostPage/Playlist";
// import { Spinner } from "react-bootstrap";
import ProfilePageLayout from "../components/Profile/ProfilePageLayout";
import apiClient from "../../../helpers/libs/app.js";

export default function ProfilePage({ params }) {
  // const userId = "66196eea3d32090c634ac567";

  // const getData = async () => {
  //   const response = await apiClient.post("/getuser", { userId });
  //   console.log("data of alll", response);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    // <CustomButton variant="outline" text={"Follow"}></CustomButton>
    // <IconButton icon={<PiMagicWand />} onClick={() => console.log("clicked")} contextValues={{ style: { height: "30px", width: "30px" } }} />
    <div>
      {/* <h1>Test</h1> */}
      {/* <Playlist postId={postId} /> */}
      <ProfilePageLayout />

      {/* {playlist && <AIRecommendation playlist={playlist} />} */}
      {/* <LikeButton width={"50px"} height={"50px"} params={params} /> */}
      {/* <CommentSubmit params={params} /> */}
      {/* <LikeButton height={"50px"} width={"50px"} params={params} />i( */}
      {/* <ProfilePicture /> 
      <LikeButton width={"50px"} height={"50px"} />
            <ProfilePicture src={"https://imageio.forbes.com/specials-images/imageserve/62d700cd6094d2c180f269b9/0x0.jpg?format=jpg&crop=959,959,x0,y0,safe&height=416&width=416&fit=bounds"}/> */}
    </div>

    // <IconButton icon={<SendButton />} />
  );
}
