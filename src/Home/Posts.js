import { Avatar, IconButton } from "@material-ui/core";
import {
  Comment,
  Favorite,
  MoreVert,
  PersonAdd,
  Share,
  ThumbDown,
  ThumbUp,
} from "@material-ui/icons";
import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/components/prism-clike";
import "../prism.css";
import "./Posts.css";
function Posts() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="posts">
      <div className="posts_top">
        <Avatar />
        <div className="posts_info">
          <h3 className="posts_name">Noob dev</h3>
          <p>undergrate at IIITP</p>
        </div>
        <IconButton>
          <Share />
        </IconButton>
        <IconButton>
          <PersonAdd />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </div>
      <p className="posts_desc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ex tempore
        eum facere magni et, fugiat officiis numquam debitis quia veritatis,
        expedita magnam velit. Natus, nesciunt veritatis provident commodi ab
        reiciendis dignissimos error earum nihil placeat consequatur recusandae
        voluptatem eum laborum sint porro quaerat iusto? Minus id temporibus
        molestiae ex?
      </p>
      <div className="code">
        <pre className="custom_prism">
          <code className="language-py">
            {`
            # Python program to check if year is a leap year or not

year = 2000

# To get year (integer input) from the user
# year = int(input("Enter a year: "))

if (year % 4) == 0:
   if (year % 100) == 0:
       if (year % 400) == 0:
           print("{0} is a leap year".format(year))
       else:
           print("{0} is not a leap year".format(year))
   else:
       print("{0} is a leap year".format(year))
else:
   print("{0} is not a leap year".format(year))
  `}
          </code>
          <div className="posts_language">
            <h4>python</h4>
          </div>
        </pre>
        <pre className="custom_prism">
          <code className="language-clike">
            {`
#include <iostream>
using namespace std;

int main()
{
    int a = 5, b = 10, temp;

    cout << "Before swapping." << endl;
    cout << "a = " << a << ", b = " << b << endl;

    temp = a;
    a = b;
    b = temp;

    cout << "\nAfter swapping." << endl;
    cout << "a = " << a << ", b = " << b << endl;

    return 0;
}
  `}
          </code>
          <div className="posts_language">
            <h4>c++</h4>
          </div>
        </pre>
      </div>
      <div className="posts_bottom">
        <div className="posts_activity">
          <ThumbUp />
          <span>Like</span>
        </div>
        <div className="posts_activity">
          <ThumbDown />
          <span>Dislike</span>
        </div>
        <div className="posts_activity">
          <Comment />
          <span>Response</span>
        </div>
        <div className="posts_activity">
          <Favorite />
          <span>Add to Favorite</span>
        </div>
      </div>
    </div>
  );
}
export default Posts;
