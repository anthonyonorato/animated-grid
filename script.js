class App extends React.Component {
    state = {
      columns: 0,
      rows: 0,
      total: 1
    };
     
    handleStagger = (i) => {
        const { columns, rows } = this.state;
        const el = i.target.id;
        anime({
          targets: ".grid-item",
          backgroundColor: randomColor(),
          delay: anime.stagger(50, { grid: [columns, rows], from: el })
        });
      };
    
      getGridSize = () => {
        const columns = Math.floor(document.body.clientWidth / 50);
        const rows = Math.floor(document.body.clientHeight / 50);
    
    