//Componentes generales.
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//Funciones.
import { capitalizeString } from '../scripts/string-functions';

//Componentes locales.
import { IconButton } from '../buttons/buttons';

const TabIconButton = styled(IconButton)`
    border-radius: unset;
`;

//TTTTT EEEEE M   M  AAA
//  T   E     MM MM A   A
//  T   EEE   M M M AAAAA
//  T   E     M   M A   A
//  T   EEEEE M   M A   A

const border = (theme) => {
	switch(theme) {
		case 'red': return '1px solid #FF456A';
		case 'blue': return '1px solid #1476FB';
		case 'green': return '1px solid #4CB050';
		case 'yellow': return '1px solid #FFE200';
		case 'gray': return '1px solid #858585';
		case 'orange': return '1px solid #FF9700';
		case 'black': return '1px solid #242424';
		case 'IENTC': return '1px solid #FF0000';
	}
};

//EEEEE  SSSS TTTTT IIIII L      OOO   SSS
//E     S       T     I   L     O   O S
//EEE    SSS    T     I   L     O   O  SSS
//E         S   T     I   L     O   O     S
//EEEEE SSSS    T   IIIII LLLLL  OOO  SSSS

const Layout = styled.div`
    box-sizing: border-box;
    height: auto;
    margin: 0px;
    padding: 0px;
    width: 100%;
`;

const TabsHeader = styled.div`
    border: ${props => border(props.theme)};
    border-radius: 5px 5px 0px 0px;
    box-sizing: border-box;
    height: auto;
    margin: 0px;
    overflow: hidden;
    padding: 0px;
    width: 100%;
`;

const TabsContent = styled.div`
    border: ${props => border(props.theme)};
    border-radius: 0px 0px 5px 5px;
    border-top: unset;
    box-sizing: border-box;
    height: auto;
    margin: 0px;
    overflow: hidden;
    padding: 10px;
    width: 100%;
`;

// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT EEEEE
//C     O   O MM MM P   P O   O NN  N E     NN  N   T   E
//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   EEE
//C     O   O M   M P     O   O N  NN E     N  NN   T   E
// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   EEEEE

export class Tabs extends React.Component {
    //*** CONSTRUCTOR ***
    constructor(props) {
        super(props);
        //Pestaña activa.
        let activeTab = '';
        if(this.props.tabs.length > 0) {
            activeTab = this.props.tabs[0].id;
        }
        //Estado.
        this.state = {
            activeTab
        };
    }
    //*** MÉTODOS ***
    getSelectedTab = () => {
        if(this.props.tabs.length > 0 && this.state.activeTab != '') {
            let selectedTab = -1;
            this.props.tabs.forEach((tab, index) => {
                if(tab.id === this.state.activeTab) {
                    selectedTab = index;
                    //break;
                }
            });
            return selectedTab;
        } else {
            return -1;
        }
    }
    setSelectedTab = (tabID) => {
        if(typeof tabID === "string") {
            let activeTab = this.props.tabs.filter(tab => tab.id === tabID);
            if(activeTab.length > 0) {
                this.setState({ activeTab: activeTab[0].id });
            }
        } else if(typeof tabID === "number") {
            if(this.props.tabs.length > 0 && parseInt(tabID) < this.props.tabs.length) {
                this.setState({ activeTab: this.props.tabs[tabID].id });
            }
        }
    }
    //*** RESULTADO ***
    render() {

        let selectedTab = this.props.tabs.filter(tab => tab.id === this.state.activeTab);
        let selectedTabContent = selectedTab.length > 0 ? selectedTab[0].content : null;

        return(
            <Layout>
                <TabsHeader theme={this.props.theme}>
                    {
                        this.props.tabs.map((tab, index) => {
                            if(this.state.activeTab === tab.id) {
                                return(<TabIconButton key={`tab-${tab.id}-${index}`} icon={tab.icon} theme={this.props.theme} size='medium' /*onClick={(event) => { event.preventDefault(); this.setState({ activeTab: tab.id}); }}*/>{tab.title}</TabIconButton>);
                            } else {
                                let theme = `flat${capitalizeString(this.props.theme)}`;
                                return(<TabIconButton key={`tab-${tab.id}-${index}`} icon={tab.icon} theme={theme} size='medium' onClick={(event) => { event.preventDefault(); this.setState({ activeTab: tab.id}, () => { if(this.props.onTabChange) this.props.onTabChange(index); }); }}>{tab.title}</TabIconButton>);
                            }
                        })
                    }
                </TabsHeader>
                <TabsContent theme={this.props.theme}>
                    {selectedTabContent}
                </TabsContent>
            </Layout>
        );
    }
}

Tabs.propTypes = {
    //Obligatorios.
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            icon: PropTypes.string,
            content: PropTypes.object.isRequired
          })
    ).isRequired,
    //Opcionales.
    theme: PropTypes.oneOf([
		'red',
		'blue',
		'green',
		'yellow',
		'gray',
		'orange',
		'black',
		'IENTC',
    ]),
    //Funciones.
    onTabChange: PropTypes.func
}

Tabs.defaultProps = {
    theme: 'red'
}