import { data1 } from "api/MemberAPI";
import styles from "styles/Home/Team.module.css";
import Card from "./Card";
import React from "react";


const Team = () => {
  // Leader Card Map
  let leadCard = data1.leadList.map((lead) => {
    return <Card key={lead.id} data={lead} />;
  });

  return (
    <section id="Team">
      <div>
        <h2 className="section-title">Chapter Lead</h2>
        <div className={styles.container}>
          {<Card key={data1.chapterLead[0].id} data={data1.chapterLead[0]} />}
        </div>
        <h2 className="section-title">Team Leads</h2>
        <div className={styles.container}>{leadCard}</div>
      </div>
      <button className={styles.container1} Link to="/PreviousTeam.jsx">
        Previous Members
      </button>
    </section>
  );
};

export default Team;
