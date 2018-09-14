//Módulos genéricos.
import React, { Component } from 'react';

//IIIII M   M PPPP   OOO  RRRR  TTTTT  AAA   CCCC IIIII  OOO  N   N      DDDD  IIIII N   N  AAA  M   M IIIII  CCCC  AAA
//  I   MM MM P   P O   O R   R   T   A   A C       I   O   O NN  N      D   D   I   NN  N A   A MM MM   I   C     A   A
//  I   M M M PPPP  O   O RRRR    T   AAAAA C       I   O   O N N N      D   D   I   N N N AAAAA M M M   I   C     AAAAA
//  I   M   M P     O   O R   R   T   A   A C       I   O   O N  NN      D   D   I   N  NN A   A M   M   I   C     A   A
//IIIII M   M P      OOO  R   R   T   A   A  CCCC IIIII  OOO  N   N      DDDD  IIIII N   N A   A M   M IIIII  CCCC A   A

class DynamicImport extends Component {
    constructor() {
        super();
        this.state = {
            component: null
        };
    }
    componentDidMount() {
        this.props.load()
        .then(component => {
            this.setState({
                component: component.default ? component.default : component
            });
        })
    }
    render() {
        return(this.props.children(this.state.component));
    }
}

// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT EEEEE  SSSS
//C     O   O MM MM P   P O   O NN  N E     NN  N   T   E     S
//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   EEE    SSS
//C     O   O M   M P     O   O N  NN E     N  NN   T   E         S
// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   EEEEE SSSS

const StorybookVol1 = (props) => (
    <DynamicImport load={() => import('./storybooks/storybook-vol1')}>
        {
            (Component) => Component === null ?
            <p>Loading...</p> :
            <Component {...props}/>
        }
    </DynamicImport>
);
const StorybookVol2 = (props) => (
    <DynamicImport load={() => import('./storybooks/storybook-vol2')}>
        {
            (Component) => Component === null ?
            <p>Loading...</p> :
            <Component {...props}/>
        }
    </DynamicImport>
);
const StorybookVol3 = (props) => (
    <DynamicImport load={() => import('./storybooks/storybook-vol3')}>
        {
            (Component) => Component === null ?
            <p>Loading...</p> :
            <Component {...props}/>
        }
    </DynamicImport>
);

//RRRR  U   U TTTTT  AAA   SSSS
//R   R U   U   T   A   A S
//RRRR  U   U   T   AAAAA  SSS
//R   R U   U   T   A   A     S
//R   R  UUU    T   A   A SSSS

const routes = [
    { 
        componentToRender: StorybookVol1,
        exact: true,
        isPrivate: false,
        path: '/'
    },
    { 
        componentToRender: StorybookVol1,
        exact: true,
        isPrivate: false,
        path: '/storybook-vol1'
    },
    {
        componentToRender: StorybookVol2,
        exact: true,
        isPrivate: false,
        path: '/storybook-vol2'
    },
    {
        componentToRender: StorybookVol3,
        exact: true,
        isPrivate: false,
        path: '/storybook-vol3'
    }
];

export default routes;