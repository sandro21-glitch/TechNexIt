import { Comments } from "react-facebook";
const UserReviews = () => {
  return (
    <div className="pt-2">
      <Comments
        href="https://www.facebook.com/v16.0/plugins/comments.php?app_id=225581826747583&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df16b0fed4451c44%26domain%3Ditworks.ge%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fitworks.ge%252Ff1cbce450a9b3e4%26relation%3Dparent.parent&container_width=0&height=100&href=https%3A%2F%2Fitworks.ge%2Fprocessors%2F352&locale=en_US&numposts=5&sdk=joey&version=v16.0&width=500"
        numPosts={3}
      />
    </div>
  );
};

export default UserReviews;
