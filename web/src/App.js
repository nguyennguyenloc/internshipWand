import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Headline from './HeadLine';
import ItemList from './ItemList';
import Aside from './Aside';
import BoxList from './BoxList';
import Footer from './Footer';
// function App() {
//   return (
//     <div id="layout">
//       <header>Header</header>
//       <main>
//         <section id="content">
//           <h1>Big Title</h1>
//           <ul className="item-list">
//             <li>
//               <h2>Title 01</h2>
//               <div>
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//               </div>
//             </li>
//             <li>
//               <h2>Title 02</h2>
//               <div>
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//               </div>
//             </li>
//             <li>
//               <h2>Title 03</h2>
//               <div>
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//               </div>
//             </li>
//           </ul>
//         </section>
//         <aside>
//           aside
//         </aside>
//         <ul className="box-list">
//           <li>a</li>
//           <li>a</li>
//           <li>a</li>
//           <li>a</li>
//         </ul>
//       </main>
//       <footer>footer</footer>
//     </div>
//   );
// }
class App extends Component {
  render() {
    return (
      <div id="layout">
        <Header />
        <main>
          <section id="content">
            <Headline bigTitle={blog.bigTitle} />
            <ItemList itemList={blog.itemList} />
          </section>
          <Aside />
          <BoxList boxList={blog.boxList} />
        </main>
        <Footer />
      </div>
    )
  };
}
const blog = {
  bigTitle: "Tiêu đề",
  itemList: [
    { title: "Title 01", info: "Miêu tả 01" },
    { title: "Title 02", info: "Miêu tả 02" },
    { title: "Title 03", info: "Miêu tả 03" },
    { title: "Title 04", info: "Miêu tả 04" }
  ],
  boxList: [
    'aaaaaa',
    'bbbbb',
    'ccccccc'
  ]
};
export default App;
