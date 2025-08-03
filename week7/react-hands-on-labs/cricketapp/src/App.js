
const players = [
  { name: "Player 1", score: 90 },
  { name: "Player 2", score: 45 },
  { name: "Player 3", score: 76 },
  { name: "Player 4", score: 68 },
  { name: "Player 5", score: 88 },
  { name: "Player 6", score: 34 },
  { name: "Player 7", score: 55 },
  { name: "Player 8", score: 99 },
  { name: "Player 9", score: 78 },
  { name: "Player 10", score: 20 },
  { name: "Player 11", score: 66 }
];

const T20 = ["Player A", "Player B"];
const Ranji = ["Player C", "Player D"];

function App() {
  const flag = true;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cricket App</h1>
      {flag ? <ListOfPlayers /> : <IndianPlayers />}
    </div>
  );
}

function ListOfPlayers() {
  const below70 = players.filter(p => p.score < 70);
  return (
    <div>
      <h2>Players with score below 70</h2>
      {below70.map((player, index) => (
        <p key={index}>{player.name} - {player.score}</p>
      ))}
    </div>
  );
}

function IndianPlayers() {
  const [odd, even] = [
    players.filter((_, i) => i % 2 === 1),
    players.filter((_, i) => i % 2 === 0)
  ];
  const all = [...T20, ...Ranji];

  return (
    <div>
      <h2>Odd Team Players</h2>
      {odd.map((p, i) => <p key={i}>{p.name}</p>)}
      <h2>Even Team Players</h2>
      {even.map((p, i) => <p key={i}>{p.name}</p>)}
      <h2>Merged Players (T20 + Ranji)</h2>
      {all.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  );
}

export default App;
