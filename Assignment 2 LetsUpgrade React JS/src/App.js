import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./styles.css";

let card_data = [
  {
    title: "Tony Stark",
    subtitle: "Tony stark, Iron Man",
    post_image:
      "https://wallpapercave.com/download/uwp-477031",
    desp:
      "Anthony Edward Stark, more commonly known as Tony Stark, is a fictional character portrayed by Robert Downey Jr. in the Marvel Cinematic Universe (MCU) film franchise—based on the Marvel Comics character of the same name—commonly known by his alter ego, Iron Man.",
    get_me: "https://en.wikipedia.org/wiki/Tony_Stark_(Marvel_Cinematic_Universe)"
  },
  {
    title: "Deadpool",
    subtitle: "Deadpool, The Dead Pool.",
    post_image:
      "https://wallpapercave.com/download/deadpool-computer-wallpapers-wp8157762",
    desp:
      "Deadpool is a 2016 American superhero film based on the Marvel Comics character of the same name. Distributed by 20th Century Fox, it is the eighth film in the X-Men film series. Directed by Tim Miller from a screenplay by Rhett Reese and Paul Wernick.",
    get_me: "https://en.wikipedia.org/wiki/Deadpool_(film)"
  },
  {
    title: "Black Panther",
    subtitle: " Chadwick Boseman, Black Panther",
    post_image:
      "https://wallpapercave.com/download/uwp-578812",
    desp:
      "Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 18th film in the Marvel Cinematic Universe (MCU).",
    get_me: "https://en.wikipedia.org/wiki/Black_Panther_(film)"
  },
  {
    title: "Hulk",
    subtitle: "Bruce Banner, The Hulk",
    post_image:
      "https://wallpapercave.com/download/uwp-1190312",
    desp:
      "The Hulk is a fictional character and superhero appearing in publications by the American publisher Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk (May 1962).",
    get_me: "https://en.wikipedia.org/wiki/Hulk"
  },
  {
    title: "Wolverine",
    subtitle: "Hugh Jackman, Wolverine",
    post_image:
      "https://wallpapercave.com/download/wolverine-claws-desktop-wallpapers-wp7452707",
    desp:
      "The Wolverine[b] is a 2013 superhero film featuring the Marvel Comics character Wolverine. It is the sixth installment in the X-Men film series, the second installment in the trilogy of Wolverine films after X-Men Origins: Wolverine (2009)",
    get_me: "https://en.wikipedia.org/wiki/The_Wolverine_(film)"
  }
];

export default function App() {
  return (
    <div className="App">
      <Header />
      <h3 className="task">LetsUpgrade Assignment: 2</h3>
      <div className="card-container">
        {card_data.map((c_data, index) => (
          <Card key={index} {...c_data} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
