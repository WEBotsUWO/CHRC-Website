import {
  competition2027,
  confirmedCompetitors,
  publicAsset,
  remainingTeamSpots,
} from "../site";

export function ConfirmedCompetitors({ showSlots = false }: { showSlots?: boolean }) {
  const slots = Array.from(
    { length: showSlots ? competition2027.teamCapacity : confirmedCompetitors.length },
    (_, index) => confirmedCompetitors[index],
  );

  return (
    <section id="competitors" aria-labelledby="competitors-heading">
      <div className="section-intro compact-intro">
        <p className="section-label">
          {showSlots && remainingTeamSpots > 0
            ? "Register now before spots fill up"
            : "CHRC 2027"}
        </p>
        <h2 id="competitors-heading">Confirmed competitors</h2>
      </div>
      <ul className={showSlots ? "competitor-list competitor-slots" : "competitor-list"} role="list">
        {slots.map((team, index) =>
          team ? (
            <li key={team.name}>
              {team.logo && (
                <img
                  className="competitor-logo"
                  src={publicAsset(team.logo)}
                  alt=""
                  width={72}
                  height={72}
                  loading="lazy"
                />
              )}
              <div>
                <h3>{team.name}</h3>
                <p>{team.institution}</p>
              </div>
            </li>
          ) : (
            <li
              className="competitor-slot-open"
              key={index}
              aria-label="Open team spot"
            />
          ),
        )}
      </ul>
    </section>
  );
}
