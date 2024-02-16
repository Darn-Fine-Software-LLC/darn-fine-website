"use client";

import Head from "next/head";
import Script from "next/script";

export default function ChamberLogo() {
  return (
    <div className="mt-4 w-full flex flex-row items-center justify-center">
      <div className="w-40">
        <div id="mni-membership-638436742933307795" />
      </div>
      <Script
        src="https://hilliardchamber.chambermaster.com/Content/Script/Member.js"
        onLoad={() => {
          new window.MNI.Widgets.Member("mni-membership-638436742933307795", {
            member: 4658,
            styleTemplate:
              "#@id{text-align:center;position:relative}#@id .mn-widget-member-name{display: none}#@id .mn-widget-member-logo{max-width:100%}",
          }).create();
        }}
      />
    </div>
  );
}
