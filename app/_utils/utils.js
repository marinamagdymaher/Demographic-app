export const formattedPath = (path) =>
  path
    .split("/")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" / ");


export const headerLinks=()=>{
  let headerLinks = [];
  if (path === "/analytics") headerLinks = ["Overview", "Demographics"];
  if (path === "/profile")
    headerLinks = ["Overview", "Profile", "Experience", "Media"];
}
