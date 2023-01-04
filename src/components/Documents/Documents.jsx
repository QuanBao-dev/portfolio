import { Link, useNavigate, useParams } from "react-router-dom";
import About from "../../pages/About/About";
import Home from "../../pages/Home/Home";
import Portfolio from "../../pages/Portfolio/Portfolio";
import "./Documents.css";
import { useEffect, useState } from "react";
import { globalStore } from "../../Stores/globalStore";
import { useInitStore } from "../../Hooks/useInitStore";
import { timer } from "rxjs";
const Documents = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const [globalState, setGlobalState] = useState(globalStore.currentState());
  useInitStore(globalStore, setGlobalState);
  useEffect(() => {
    globalStore.updateData({
      isActive: false,
    });
    const subscription = timer(500).subscribe(() => {
      globalStore.updateData({
        transition: "0.5s ease-in-out",
      });
    });
    if (page === "about") {
      swapOrder(1);
      globalStore.updateData({ page: 2, prevPage: 2 });
    }
    if (page === "portfolio") {
      swapOrder(2);
      globalStore.updateData({ page: 3, prevPage: 3 });
    }
    if (!page) {
      swapOrder(0);
      globalStore.updateData({ page: 1, prevPage: 1 });
    }
    return () => {
      subscription.unsubscribe();
    };
  }, [page, globalState.trigger]);
  return (
    <ul
      className="documents-container"
      style={{
        height: window.innerHeight,
      }}
    >
      <li
        className={`${globalState.orderPages[0]}${
          globalState.page !== 0
            ? globalState.page === 1
              ? " active"
              : " hidden-page"
            : ""
        }`}
        style={{
          transition: globalState.transition,
          cursor: globalState.page === 0 ? "pointer" : "",
        }}
        onClick={() => {
          navigate("/");
          globalStore.updateData({
            trigger: !globalStore.currentState().trigger,
          });
        }}
      >
        <Home />
      </li>
      <li
        onClick={() => {
          navigate("/about");
          globalStore.updateData({
            trigger: !globalStore.currentState().trigger,
          });
        }}
        className={`${globalState.orderPages[1]}${
          globalState.page !== 0
            ? globalState.page === 2
              ? " active"
              : " hidden-page"
            : ""
        }`}
        style={{
          transition: globalState.transition,
          cursor: globalState.page === 0 ? "pointer" : "",
        }}
      >
        <About />
      </li>
      <li
        onClick={() => {
          navigate("/portfolio");
          globalStore.updateData({
            trigger: !globalStore.currentState().trigger,
          });
        }}
        className={`${globalState.orderPages[2]}${
          globalState.page !== 0
            ? globalState.page === 3
              ? " active"
              : " hidden-page"
            : ""
        }`}
        style={{
          transition: globalState.transition,
          cursor: globalState.page === 0 ? "pointer" : "",
        }}
      >
        <Portfolio />
      </li>
      <li className={`page-0${globalState.page === 0 ? " nav-active" : ""}`}>
        <section className="menu-section-container">
          <ul className="menu-list">
            <Link
              to="/"
              className="menu-item"
              onClick={() => {
                globalStore.updateData({
                  trigger: !globalStore.currentState().trigger,
                });
              }}
            >
              <li>Home</li>
            </Link>
            <Link
              to="/about"
              className="menu-item"
              onClick={() => {
                globalStore.updateData({
                  trigger: !globalStore.currentState().trigger,
                });
              }}
            >
              <li>About me</li>
            </Link>
            <Link
              to="/portfolio"
              className="menu-item"
              onClick={() => {
                globalStore.updateData({
                  trigger: !globalStore.currentState().trigger,
                });
              }}
            >
              <li>Portfolio</li>
            </Link>
          </ul>
        </section>
      </li>
    </ul>
  );
};

function swapOrder(index) {
  const orderPages = [...globalStore.currentState().orderPages];
  let pickNumber = [1, 2, 3];
  const orderNumberPages = orderPages.map((v) =>
    parseInt(v.match(/[0-9]/g)[0])
  );
  for (let i = 0; i < orderNumberPages.length; i++) {
    if (i === index) {
      orderNumberPages[i] = pickNumber[0];
      pickNumber[0] = null;
      pickNumber = pickNumber.filter((v) => v !== null);
    }
  }
  for (let i = 0; i < orderNumberPages.length; i++) {
    if (i !== index) {
      for (let j = 0; j < pickNumber.length; j++) {
        if (orderNumberPages[i] !== pickNumber[j]) {
          orderNumberPages[i] = pickNumber[j];
          pickNumber = pickNumber.filter((v) => v !== orderNumberPages[i]);
        }
      }
    }
  }

  globalStore.updateData({
    orderPages: orderNumberPages.map((v) => "page-" + v),
  });
}

export default Documents;
