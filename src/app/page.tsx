import type { NextPage } from 'next';
import Container from './components/Container';
import Item from './components/Item';
import styles from './styles/globals.module.css';

const items = [
  { 
    title: 'Quarter 4, 2021',
    subtitle: "MetaBlox Founded",
    content: "MetaBlox was founded in fall 2021 by its team with extensive telco and crypto experience."
  },
  {
    title: "Quarter 2, 2022",
    subtitle: "MetaBlox Launches WiFi-Miner",
    content: "MetaBlox has launched the first miner series,MBWF-P100, its newest game-changing innovation: the WiFi-Miner."
  },
  {
    title: "Quarter 3, 2022",
    subtitle: "MetaBlox Joins the Wireless Broadband Alliance (WBA) as the Only Official Web3 Partner",
    content: "MetaBlox has launched the first miner series,MBWF-P100, its newest game-changing innovation: the WiFi-Miner."
  },
  {
    title: "Quarter 4, 2022",
    subtitle: "MetaBlox App Launches",
    content: "MetaBlox has launched the Roam app, enabling users to connect to over a million free, decentralized WiFi hotspots through OpenRoaming and generate a decentralized ID for passwordless, automatic internet access."
  },
  {
    title: "2023",
    subtitle: "Bear Market Building",
    content: "MetaBlox achieved several key milestones, including enabling its proprietary DID/VC-based OpenRoaming profiles on major mobile platforms, launching Miner v2, implementing app improvements and gamification quests, and fostering community building initiatives."
  },
  {
    title: "Quarter 2, 2024",
    subtitle: "MetaBlox Rebrands as Roam, Migrates to Solana",
    content: "MetaBlox has rebranded to Roam and officially migrated onto the Solana mainnet, boasting over 100,000 DePIN network nodes and a user base exceeding 50,000 app users."
  },
];

const Home: NextPage = () => {
  return (
    <Container>
      <div className={styles.container}>
        {items.map((item, index) => (
          <Item key={index} title={item.title} content={item.content} subtitle={item.subtitle} />
        ))}
      </div>
    </Container>
  );
};

export default Home;