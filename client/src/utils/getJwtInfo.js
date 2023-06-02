/*
function to check which role the user has.
*/

function getJwtInfo() {
  const jwtToken = sessionStorage.getItem("user");
  if (jwtToken === null) {
    return;
  }

  let fetchedRole = JSON.parse(atob(jwtToken.split(".")[1]));
  return fetchedRole;
}

export default getJwtInfo;
