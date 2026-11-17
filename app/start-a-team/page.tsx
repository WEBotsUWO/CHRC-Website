import { siteBasePath } from "../site";

const registrationUrl = siteBasePath + "/competition-signup/";

export default function LegacyTeamPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={"0; url=" + registrationUrl} />
      <div className="section container">
        <a className="button button-primary" href={registrationUrl}>
          Register for CHRC 2027
        </a>
      </div>
    </>
  );
}
