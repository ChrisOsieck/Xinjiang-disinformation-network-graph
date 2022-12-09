import React, { FC } from "react";
import { BsInfoCircle } from "react-icons/bs";

import Panel from "./Panel";

const DescriptionPanel: FC = () => {
  return (
    <Panel
      initiallyDeployed
      title={
        <>
          <BsInfoCircle className="text-muted" /> Description
        </>
      }
    >
      <p>
        This visualisation represents a <i>network</i> of{" "}
          social-media profiles
        that are connected to {" "}
 the Ministry of Foreign Affairs of the People's Republic of China. 
        Each{" "}
        <i>node</i> represent Twitter accounts, and vary in size based on the engagement of the account. Larger nodes represent more followers and interactions, <i>edges</i> display the relationship between the accounts. In this visualization, quote tweets, retweets, and replies are pictured.
      </p>
      <p>
        The social media channels were identified by the following researchers{" "}
        <a target="_blank" rel="noreferrer" href="https://twitter.com/ChrisOsieck">
          Chris Osieck, 
        </a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/MischaU8">
           Mischa Untaga
        </a>{" "}and{" "}
        <a target="_blank" rel="noreferrer" href="https://twitter.com/rosa_noctis">
          Morsaki
        </a>
        .
        The entities were identified using the {" "}
        <a target="_blank" rel="noreferrer" href="https://scrapy.org/">
          Scrapy framework
        </a>
        .
      </p>
      <p>
        Tristan Lee from{" "}
        <a target="_blank" rel="noreferrer" href="https://www.bellingcat.com/">
          Bellingcat
        </a>
         contributed to this visualization, using{" "}
        <a target="_blank" rel="noreferrer" href="https://reactjs.org/">
          react
        </a>{" "}
        and{" "}
        <a target="_blank" rel="noreferrer" href="https://www.sigmajs.org">
          sigma.js
        </a>
        . You can read the source code{" "}
        <a target="_blank" rel="noreferrer" href="https://github.com/jacomyal/sigma.js/tree/main/demo">
          on GitHub
        </a>
        .
      </p>
      <p>
        Node sizes are related to the number of followers and interactions.
      </p>
      <p>
        Nodes are colored randomly.
      </p>
      <p>
        The tool that was used to make this network analysis was the open source visualization platform{" "}
        <a target="_blank" rel="noreferrer" href="https://gephi.org/">
          Gephi
        </a>
        .
      </p>
    </Panel>
  );
};

export default DescriptionPanel;
