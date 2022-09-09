class App extends React.Component {
    state = {
      columns: 0,
      rows: 0,
      total: 1
    };
     
      getGridSize = () => {
        const columns = Math.floor(document.body.clientWidth / 50);
        const rows = Math.floor(document.body.clientHeight / 50);
    
        this.setState({ columns, rows, total: rows * columns });
        anime({
          targets: ".grid-item",
          backgroundColor: "#fff",
          duration: 0,
          easing: "linear"
        });
      };

    