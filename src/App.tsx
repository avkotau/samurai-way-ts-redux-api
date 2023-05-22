import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import s from './components/Routes/RouterApp.module.css'
import RoutesApp from "./components/Routes/RoutesApp";

import { addMessage, StateType, updatingMessageText } from "./redux";


type TypeProps = {

    state: StateType
    addPost: () => void
    updatingTextPost: (textPost: string) => void
    addMessage: () => void
    updatingMessageText: (textMessage: string) => void

}

// const App: React.FC<Props> = (
//     {
//         state,
//         addPost,
//         updatingTextPost,
//         addMessage,
//         updatingMessageText,
//     }
// ) => {
//
//     return (
//         <div className='app'>
//             <Header/>
//             <Navbar sitePanelFriendsData={state.sitePanelFriendsData}/>
//
//             <div className={s.routers}>
//                 <RoutesApp
//                     state={state}
//                     addPost={addPost}
//                     updatingTextPost={updatingTextPost}
//                     addMessage={addMessage}
//                     updatingMessageText={updatingMessageText}
//
//                 />
//             </div>
//         </div>
//
//     );
// }

class App extends Component<TypeProps> {

    render() {
        const {state, addPost, updatingTextPost, addMessage, updatingMessageText} = this.props

        return (
            <div className='app'>
                <Header/>
                <Navbar sitePanelFriendsData={state.sitePanelFriendsData}/>

                <div className={s.routers}>
                    <RoutesApp
                        state={state}
                        addPost={addPost}
                        updatingTextPost={updatingTextPost}
                        addMessage={addMessage}
                        updatingMessageText={updatingMessageText}

                    />
                </div>
            </div>
        )
    }
}

export default App;
