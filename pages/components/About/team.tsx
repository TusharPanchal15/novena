import Image from "next/image";
import React from "react";
import { TeamMock } from "@/pages/Mockdata/About/Team";

import Link from "next/link";

const team = () => {
  return (
    <section className="section team">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              <h2 className="mb-4">{TeamMock.teamTitle}</h2>
              <div className="divider mx-auto my-4"></div>
              <p>{TeamMock.teamPara}</p>
            </div>
          </div>
        </div>

        <div className="row">
          {TeamMock.teamList.map((team, index: number) => {
            return (
              <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                <div className="team-block mb-5 mb-lg-0">
                  <Image
                    src={team.teamImg.src}
                    alt={team.teamImg.alt}
                    className="img-fluid w-100"
                  />

                  <div className="content">
                    <h4 className="mt-4 mb-0">
                      <Link href={team.teamLink}>{team.teamName}</Link>
                    </h4>
                    <p>{team.teamOccupation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default team;
