import * as React from 'react';
import './App.css';
import A from './components/a';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img
                        src={'https://gss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2018-04-30/9daf37d0dad5f2670d403a3a1348b497.jpg'}
                        className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                    <A/>
                </header>

            </div>
        );
    }
}

export default App;
