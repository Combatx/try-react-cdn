const root = ReactDOM.createRoot(document.getElementById("root"));

// event handling
// function padaSaatAkudiklik(msg) {
//   alert(msg);
// }

// const element = (
//   <button onClick={padaSaatAkudiklik.bind(this, "Aku di click")}>
//     Clik Me
//   </button>
// );

// react state

// function App() {
//   const [count, setCount] = React.useState(0);

//   return (
//     <>
//       <button
//         onClick={function () {
//           setCount(count - 1);
//         }}
//       >
//         -
//       </button>
//       <span>{count}</span>
//       <button
//         onClick={function () {
//           setCount(count + 1);
//         }}
//       >
//         +
//       </button>
//     </>
//   );
// }

// componet life cycle

// function App() {
//   // useeffect akan mengeksekusi fucntion ketika component telah di
//   //   render sehingga menghindari null ketika terdapat delay pada saat render
//   //   dan ketika digabung dengan state, maka setiap nilai state berubah maka akan di jalankan kembail
//   // akan tetapi jika nilai state yg berubah sama lagi misal dari false ke true dan jalankan lagi state pasti nilai ny telah berubah
//   // menjadi true dan kita jalankan kembali maka nilai tersebut tetapi true maka useeffect tidak di jalankan kembali di karenakan
//   // nilai yg ada di state sama atau tidak berubah di karenakan nilai tersebut tidak berubah maka tidak di render ulang
//   React.useEffect(
//     () => {
//       console.log(document.getElementById("judul"));

//       // pertama kali run tidak akan mendestroy carousel
//       console.log("init carousel");

//       // kita harus mengahapus atau destroy carousel yg lama agar tidak memberatkan memory dan tidak double intance
//       return function () {
//         console.log("destry coreousel");
//       };
//     }
//     //   kita bisa memasukan parameter kedua dalam bentuk array atau depedency state yaitu state yg ingin kita pantau sehingga tidak mempengaruhi state lain atau tidak ke trigger
//     // state lain , kecuali state yg di masukan k parameter kedua
//   );

//   return <h1 id="judul">Teses</h1>;
// }

// // Conditional rendering

// function App() {
//   const [login, setLogin] = React.useState(false);

//   // if (login) {
//   //   console.log("a");
//   //   return (
//   //     <>
//   //       <h1>Udah Login, Bang!</h1>
//   //       <button
//   //         onClick={() => {
//   //           setLogin(false);
//   //         }}
//   //       >
//   //         Logout
//   //       </button>
//   //     </>
//   //   );
//   // }

//   return (
//     <>
//       <h1>Application</h1>
//       {/* menggunakan && sama seperti ternary operator */}
//       <p>{login && <b>Sudah Login</b>}</p>
//       <button
//         onClick={() => {
//           setLogin(true);
//         }}
//       >
//         Login
//       </button>
//     </>
//   );
// }

// // DOM Manipulation menggunakan useRef

// function App() {
//   const [login, setLogin] = React.useState(false);
//   const judulRef = React.useRef(null);

//   React.useEffect(() => {
//     // manipulasi dom biasa
//     // const judul = document.getElementById("judul");
//     // setTimeout(() => {
//     //   judul.textContent = "Aplikasi";
//     // }, 1000);

//     // menggunakan ref
//     setTimeout(() => {
//       judulRef.current.textContent = "Aplikasi";
//     }, 1000);
//   }),
//     [];

//   return (
//     <>
//       <h1 ref={judulRef}>Application</h1>
//     </>
//   );
// }

// // React List dan keys

// function App() {
//   const fruits = ["Apple", "Orange", "Grape", "Avocado"];

//   return (
//     <ul>
//       {fruits.map((fruits, i) => {
//         return <li key={i}>{fruits}</li>;
//       })}
//     </ul>
//   );
// }

// // Form

// function App() {
//   // // uncontrol
//   // const namaRef = React.useRef(null);
//   // const ketikaSubmit = (event) => {
//   //   event.preventDefault();
//   //   const nama = namaRef.current.value;
//   //   console.log("Nama : ", nama);
//   // };

//   // control component
//   const [nama, setNama] = React.useState("Ridho");

//   const ketikaSubmit = (event) => {
//     event.preventDefault();
//     console.log("Nama : ", nama);
//   };

//   return (
//     <form onSubmit={ketikaSubmit}>
//       <div>
//         <label>Nama: </label>
//         <input
//           type="text"
//           name="nama"
//           value={nama}
//           onChange={(event) => {
//             setNama(event.target.value);
//           }}
//         />
//       </div>
//       <button type="submit">Kirim</button>
//     </form>
//   );
// }

// featch

function App() {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // const getData = fetch("https://api.spaceflightnewsapi.net/v3/blogs")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   });

    async function getData() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/blogs"
      );

      const response = await request.json();

      setNews(response);
      setLoading(false);
    }

    getData();
  }, []);
  return (
    <>
      <h1>Data Fetch</h1>
      {loading ? (
        <i>Loading data ..</i>
      ) : (
        <ul>
          {news.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      )}
    </>
  );
}

root.render(<App />);
