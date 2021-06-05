import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Home.css";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import UploadPostModal from "./UploadPostModal";
function Home() {
  const [post_show, setPost_show] = useState(null);
  return (
    <div className="home">
      <div className="feeds">
        <div className="ask">
          <span> Have something in mind?</span>
          <Button
            variant="contained"
            onClick={() => {
              setPost_show(true);
            }}
          >
            Post Something
          </Button>
        </div>
        <h3 className="latest_posts">Latest Posts</h3>
        <Posts />
      </div>
      <Sidebar />
      <UploadPostModal
        show={post_show}
        handleClose={() => {
          setPost_show(null);
        }}
      />
    </div>
  );
}

export default Home;
