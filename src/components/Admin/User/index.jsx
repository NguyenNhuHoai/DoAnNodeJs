
import { useSelector } from "react-redux";

function User() {
  const postuser = useSelector((state) => state.AUTH.articlePostUser);
  console.log("postuser", postuser);
  return (
    <>
    
    </>
  );
}

export default User;
