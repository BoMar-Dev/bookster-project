/*
function to check if the user has the role ADMIN.
*/

function getJwtInfo() {
  const jwtToken = sessionStorage.getItem("user");
  if (jwtToken === null) {
    return false;
  }
  const jwtPayload = JSON.parse(atob(jwtToken.split(".")[1]));

  if (jwtPayload.role === "ADMIN") {
    return jwtPayload.role;
  } else {
    return false;
  }
}

export default getJwtInfo;
