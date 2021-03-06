import { useState } from "react";
import Button from '@mui/material/Button';
import "./App.css";

export default function App() {
  const INITIAL_MOVIES = [
    {
      id: "100",
      name: "Iron man 2",
      pic: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU",
      language: "english",
    },
    {
      id: "101",
      name: "No Country for Old Men",
      pic: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      trailer: "https://www.youtube.com/embed/38A__WT3-o0",
      language: "english",
    },
    {
      id: "102",
      name: "Jai Bhim",
      pic: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
      language: "tamil",
    },
    {
      id: "103",
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      pic: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
      language: "english",
    },
    {
      id: "105",
      name: "Baahubali",
      pic: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8.5,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
      language: "telugu",
    },
    {
      id: "106",
      name: "Ratatouille",
      pic: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
      language: "english",
    },
    {
      id: "104",
      name: "Interstellar",
      pic: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
      language: "english",
    },
  ];
  const [movies, setMovies] = useState(INITIAL_MOVIES);
  const [movieName, setMoviename] = useState("");
  const [moviePoster, setMovieposter] = useState("");
  const [movieDesc, setMoviedesc] = useState("");
  const newMovie = {
    name: movieName,
    pic: moviePoster,
    summary: movieDesc,
  };
  const addMovie = () => {
    setMovies([...movies, newMovie]);
  };

  return (
    <section>
      <div className="movie-form">
        <input
          value={movieName}
          onChange={(event) => setMoviename(event.target.value)}
          placeholder="Enter a Movie Name"
        />
        <input
          value={moviePoster}
          onChange={(event) => setMovieposter(event.target.value)}
          placeholder="Enter a Movie Poster URL"
        />
        <input
          value={movieDesc}
          onChange={(event) => setMoviedesc(event.target.value)}
          placeholder="Enter a Movie Description"
        />
        {/* <button onClick={addMovie}>Add Movie</button> */}
        <Button variant="contained" onClick={addMovie}>Add Movie</Button>
      </div>
      <div className="App">
        {/* <Color /> */}

        {movies.map((user, index) => {
          return (
            <div>
              <Movie
                key={index}
                name={user.name}
                pic={user.pic}
                summary={user.summary}
              />
              <button
                onClick={() => {
                  // const copyMovies = [...movies];
                  const removeIdx = index;
                  setMovies(movies.filter((mv,idx)=> idx!==removeIdx));
                  
                }}
              >
                Delete Movie
              </button>
              
            </div>
          );
        })}
      </div>
    </section>
  );
}

// function Color() {
//   const [color, setColor] = useState("blue");

//   const styles = { backgroundColor: color, fontSize: "1rem", margin:"10px 0px" };
//   // const InitalColors = ["red", "pink", "yellow"]
//   const  [colors, setColors] = useState([]);
//   return (
//     <div>
//       <input
//         value={color}
//         style={styles}
//         onChange={(event) => setColor(event.target.value)}
//         placeholder="Enter a Color"
//       />
//       <button className="addMovieButton" onClick={()=>setColors([...colors , color])}>Add Color</button>
//       {colors.map((clr)=><ColorBox color={clr}/>)}

//     </div>
//   );
// }
// function ColorBox({color}){
//   const styles = { backgroundColor: color, height:"100px", width:"100px"}
//   // const [boxcolor, setBoxcolor] = useState(colors)
// return(
//   <div style={styles}></div>
//   )
// }

function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>????{like}</button>
      {/* <p>{like}</p> */}
      <button onClick={() => setDisLike(dislike + 1)}>????{dislike}</button>
      {/* <p>{dislike}</p> */}
    </div>
  );
}

function Movie({ name, pic, summary }) {
  const [show, setShow] = useState(false);
  //conditional styling
  // const styles = {display:show ? "block" : "none" }
  return (
    <div>
      <img className="poster" src={pic} alt={name} />
      <Counter />
      
      <h1>{name}</h1>
      <button onClick={() => setShow(!show)}>Show Description</button>
      {/*conditioanal render  */}
      {/* <p style={styles}>{summary}</p> */}
      {show ? <p>{summary}</p> : ""}
    </div>
  );
}
