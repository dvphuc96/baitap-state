import React, { Component } from "react";
import style from "./TryGlasses.module.css";
const data = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];
export default class TryGlasses extends Component {
  state = {
    spChiTiet: {
      name: "",
      url: "",
      desc: "",
    },
  };
  renderGlass = () => {
    return data.map((item, index) => {
      return (
        <div className="col-2 mt-2" key={index}>
          <button
            className={`${style["btn-change-glass"]}`}
            onClick={() => {
              this.setState({
                spChiTiet: item,
              });
            }}
          >
            <img src={item.url} alt="..." className="w-100" />
          </button>
        </div>
      );
    });
  };
  render() {
    // <img src={url} alt="..." className={`${style["img-glass"]}`} />
    // <div className={`${style["content-sanpham"]}`}>
    //   <h3 className={`${style["content-sanpham-name"]}`}>{name}</h3>
    //   <p className={`${style["content-sanpham-desc"]}`}>{desc}</p>
    // </div>
    const { name, url, desc } = this.state.spChiTiet;
    return (
      <div className={`${style["bg-page"]}`}>
        <div className={`${style["over-lay"]}`}></div>
        <div className={`${style["glass"]}`}>
          <div className="container">
            <h3 className="text-center mb-3">TRY GLASSES APP ONLINE</h3>
            <div
              className={`${style["content-top"]} text-center mx-auto d-block`}
            >
              <div className="row">
                <div className="col-6 text-center mx-auto d-flex justify-content-center">
                  <div className={`${style["model-left"]}`}>
                    {url !== "" && name !== "" && desc !== "" ? (
                      <>
                        <img
                          src={url}
                          alt="..."
                          className={`${style["img-glass-change"]}`}
                        />
                        <div className={`${style["content-sanpham"]}`}>
                          <h3 className={`${style["content-sanpham-name"]}`}>
                            {name}
                          </h3>
                          <p className={`${style["content-sanpham-desc"]}`}>
                            {desc}
                          </p>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="col-6">
                  <img
                    src="./glassesImage/model.jpg"
                    alt=""
                    className={`${style["img-glass"]}`}
                  />
                </div>
              </div>
            </div>
            <div
              className={`${style["content-bottom"]} text-center mx-auto bg-white mt-5`}
            >
              <div className="row">{this.renderGlass()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
