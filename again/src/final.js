import React from 'react';
// import App from './App';
import Info from './Info';
const Content = {
    text: 'Hihihi',
    info: {
        name: "CCCC",
        age: 20
    }
}
function Final() {
    return (
        <div>
            {/* <App text={Content.text} /> */}
            <Info infoo={Content.info} />
        </div >
    );
};
export default Final;