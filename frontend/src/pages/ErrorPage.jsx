import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", alignContent: "center" }}>
      <h1 style={{ fontSize: "30px", fontWeight: 700 }}>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
