//Componentes generales.
import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import theme from 'styled-theming';

const backgroundColor = theme('type', {
	success: '#4CB050',
	error: '#E51D24',
	warning: '#FF9700',
	information: '#1476FB'
});

const notificationIcon = theme('type', {
    success: 'url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDM4LjUzM3B4IiBoZWlnaHQ9IjQzOC41MzNweCIgdmlld0JveD0iMCAwIDQzOC41MzMgNDM4LjUzMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzMyA0MzguNTMzOyBmaWxsOiB3aGl0ZTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIGQ9Ik00MDkuMTMzLDEwOS4yMDNjLTE5LjYwOC0zMy41OTItNDYuMjA1LTYwLjE4OS03OS43OTgtNzkuNzk2QzI5NS43MzYsOS44MDEsMjU5LjA1OCwwLDIxOS4yNzMsMGMtMzkuNzgxLDAtNzYuNDcsOS44MDEtMTEwLjA2MywyOS40MDdjLTMzLjU5NSwxOS42MDQtNjAuMTkyLDQ2LjIwMS03OS44LDc5Ljc5NkM5LjgwMSwxNDIuOCwwLDE3OS40ODksMCwyMTkuMjY3YzAsMzkuNzgsOS44MDQsNzYuNDYzLDI5LjQwNywxMTAuMDYyYzE5LjYwNywzMy41OTIsNDYuMjA0LDYwLjE4OSw3OS43OTksNzkuNzk4YzMzLjU5NywxOS42MDUsNzAuMjgzLDI5LjQwNywxMTAuMDYzLDI5LjQwN3M3Ni40Ny05LjgwMiwxMTAuMDY1LTI5LjQwN2MzMy41OTMtMTkuNjAyLDYwLjE4OS00Ni4yMDYsNzkuNzk1LTc5Ljc5OGMxOS42MDMtMzMuNTk2LDI5LjQwMy03MC4yODQsMjkuNDAzLTExMC4wNjJDNDM4LjUzMywxNzkuNDg1LDQyOC43MzIsMTQyLjc5NSw0MDkuMTMzLDEwOS4yMDN6IE0zNjEuNDQ1LDE4NS44NjNMMjA2LjQyLDM0MC44ODljLTMuNjE3LDMuNjItNy45OTIsNS40MjgtMTMuMTM0LDUuNDI4Yy00Ljk0OCwwLTkuMjI5LTEuODA4LTEyLjg0Ny01LjQyOEw3Ny4wODMsMjM3LjUzOWMtMy40MjItMy40MjktNS4xMzctNy43MDMtNS4xMzctMTIuODQ3YzAtNS4zMjgsMS43MDktOS43MDksNS4xMzctMTMuMTM2bDI1Ljk4MS0yNS42OTNjMy42MjEtMy42MTYsNy44OTgtNS40MjQsMTIuODUtNS40MjRzOS4yMzUsMS44MDksMTIuODUsNS40MjRsNjQuNTI1LDY0LjUyM2wxMTYuNDg1LTExNi4xOTljMy42MTctMy42MTcsNy44OTgtNS40MjYsMTIuODQ3LTUuNDI2YzQuOTQ1LDAsOS4yMzMsMS44MDksMTIuODQ3LDUuNDI2bDI1Ljk4MSwyNS42OTdjMy40MzIsMy40MjQsNS4xNCw3LjgwMSw1LjE0LDEzLjEyOUMzNjYuNTg5LDE3OC4xNTQsMzY0Ljg4MSwxODIuNDM3LDM2MS40NDUsMTg1Ljg2M3oiLz48L2c+PC9zdmc+")',
	error: 'url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDM4LjUzM3B4IiBoZWlnaHQ9IjQzOC41MzNweCIgdmlld0JveD0iMCAwIDQzOC41MzMgNDM4LjUzMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzMyA0MzguNTMzOyBmaWxsOiB3aGl0ZTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIGQ9Ik00MDkuMTMzLDEwOS4yMDNjLTE5LjYwOC0zMy41OTItNDYuMjA1LTYwLjE4OS03OS43OTgtNzkuNzk2QzI5NS43MzYsOS44MDEsMjU5LjA1OCwwLDIxOS4yNzMsMGMtMzkuNzgxLDAtNzYuNDcsOS44MDEtMTEwLjA2MywyOS40MDdjLTMzLjU5NSwxOS42MDQtNjAuMTkyLDQ2LjIwMS03OS44LDc5Ljc5NkM5LjgwMSwxNDIuOCwwLDE3OS40ODksMCwyMTkuMjY3YzAsMzkuNzgsOS44MDQsNzYuNDYzLDI5LjQwNywxMTAuMDYyYzE5LjYwNywzMy41OTIsNDYuMjA0LDYwLjE4OSw3OS43OTksNzkuNzk4YzMzLjU5NywxOS42MDUsNzAuMjgzLDI5LjQwNywxMTAuMDYzLDI5LjQwN3M3Ni40Ny05LjgwMiwxMTAuMDY1LTI5LjQwN2MzMy41OTMtMTkuNjAyLDYwLjE4OS00Ni4yMDYsNzkuNzk1LTc5Ljc5OGMxOS42MDMtMzMuNTk2LDI5LjQwMy03MC4yODQsMjkuNDAzLTExMC4wNjJDNDM4LjUzMywxNzkuNDg1LDQyOC43MzIsMTQyLjc5NSw0MDkuMTMzLDEwOS4yMDN6IE0zMjIuNjIxLDI3MC45MzljMy42MTcsMy42MTMsNS40MjgsNy45MDUsNS40MjgsMTIuODU0YzAsNS4xMzMtMS44MTEsOS41MTQtNS40MjgsMTMuMTI3bC0yNS42OTMsMjUuNzAxYy0zLjYxNCwzLjYxMy03Ljk5NCw1LjQyLTEzLjEzNSw1LjQyYy00Ljk0OCwwLTkuMjM2LTEuODA3LTEyLjg0Ny01LjQybC01MS42NzYtNTEuNjgybC01MS42NzgsNTEuNjgyYy0zLjYxNiwzLjYxMy03Ljg5OCw1LjQyLTEyLjg0Nyw1LjQyYy01LjE0LDAtOS41MTctMS44MDctMTMuMTM0LTUuNDJsLTI1LjY5Ny0yNS43MDFjLTMuNjE2LTMuNjEzLTUuNDI0LTcuOTk0LTUuNDI0LTEzLjEyN2MwLTQuOTQ4LDEuODA5LTkuMjQsNS40MjQtMTIuODU0bDUxLjY3OC01MS42NzNsLTUxLjY3OC01MS42NzhjLTMuNjE2LTMuNjEyLTUuNDI0LTcuODk4LTUuNDI0LTEyLjg0N2MwLTUuMTQsMS44MDktOS41MTcsNS40MjQtMTMuMTM0bDI1LjY5Ny0yNS42OTNjMy42MTctMy42MTYsNy45OTQtNS40MjQsMTMuMTM0LTUuNDI0YzQuOTQ5LDAsOS4yMzEsMS44MDksMTIuODQ3LDUuNDI0bDUxLjY3OCw1MS42NzRsNTEuNjc2LTUxLjY3NGMzLjYxLTMuNjE2LDcuODk4LTUuNDI0LDEyLjg0Ny01LjQyNGM1LjE0MSwwLDkuNTIxLDEuODA5LDEzLjEzNSw1LjQyNGwyNS42OTMsMjUuNjkzYzMuNjE3LDMuNjE3LDUuNDI4LDcuOTk0LDUuNDI4LDEzLjEzNGMwLDQuOTQ4LTEuODExLDkuMjM1LTUuNDI4LDEyLjg0N2wtNTEuNjc1LDUxLjY3OEwzMjIuNjIxLDI3MC45Mzl6Ii8+PC9nPjwvc3ZnPg==")',
	warning: 'url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDM4LjUzM3B4IiBoZWlnaHQ9IjQzOC41MzNweCIgdmlld0JveD0iMCAwIDQzOC41MzMgNDM4LjUzMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzMyA0MzguNTMzOyBmaWxsOiB3aGl0ZTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIGQ9Ik00MDkuMTMzLDEwOS4yMDNjLTE5LjYwOC0zMy41OTItNDYuMjA1LTYwLjE4OS03OS43OTgtNzkuNzk2QzI5NS43MzYsOS44MDEsMjU5LjA1OCwwLDIxOS4yNzMsMGMtMzkuNzgxLDAtNzYuNDY2LDkuODAxLTExMC4wNjMsMjkuNDA3Yy0zMy41OTUsMTkuNjA0LTYwLjE5Miw0Ni4yMDEtNzkuOCw3OS43OTZDOS44MDEsMTQyLjgsMCwxNzkuNDg5LDAsMjE5LjI2N3M5LjgwNCw3Ni40NjMsMjkuNDA3LDExMC4wNjJjMTkuNjA3LDMzLjU4NSw0Ni4yMDQsNjAuMTg5LDc5Ljc5OSw3OS43OThjMzMuNTk3LDE5LjYwNSw3MC4yODMsMjkuNDA3LDExMC4wNjMsMjkuNDA3czc2LjQ3LTkuODAyLDExMC4wNjUtMjkuNDA3YzMzLjU5My0xOS42MDIsNjAuMTg5LTQ2LjIwNiw3OS43OTUtNzkuNzk4YzE5LjYwMy0zMy41OTksMjkuNDAzLTcwLjI4NywyOS40MDMtMTEwLjA2MkM0MzguNTMzLDE3OS40ODksNDI4LjczMiwxNDIuNzk1LDQwOS4xMzMsMTA5LjIwM3ogTTI1NS44MiwzNTYuMDIxYzAsMi42NjktMC44NjIsNC45LTIuNTczLDYuNzA3cy0zLjgwNiwyLjcxMS02LjI4MywyLjcxMWgtNTQuODE4Yy0yLjQ3MiwwLTQuNjYzLTAuOTUyLTYuNTY1LTIuODU0Yy0xLjkwNC0xLjkwMy0yLjg1NC00LjA5My0yLjg1NC02LjU2M1YzMDEuNzhjMC0yLjQ3OCwwLjk1LTQuNjY4LDIuODU0LTYuNTcxYzEuOTAzLTEuOTAyLDQuMDkzLTIuODUxLDYuNTY1LTIuODUxaDU0LjgxOGMyLjQ3OCwwLDQuNTc5LDAuOTA3LDYuMjgzLDIuNzA3YzEuNzExLDEuODE3LDIuNTczLDQuMDQ1LDIuNTczLDYuNzE1VjM1Ni4wMjF6IE0yNTUuMjQ2LDI1Ny44MTJjLTAuMTkyLDEuOTAyLTEuMTg4LDMuNTY4LTIuOTkxLDQuOTk2Yy0xLjgxMywxLjQyNC00LjA0NSwyLjEzNS02LjcwOCwyLjEzNWgtNTIuODIyYy0yLjY2NiwwLTQuOTUtMC43MTEtNi44NTMtMi4xMzVjLTEuOTA0LTEuNDI4LTIuODU3LTMuMDk0LTIuODU3LTQuOTk2TDE3OC4xNjIsODAuNTFjMC0yLjI4OCwwLjk1LTMuOTk3LDIuODUyLTUuMTRjMS45MDYtMS41MjEsNC4xOS0yLjI4NCw2Ljg1NC0yLjI4NGg2Mi44MTljMi42NjYsMCw0Ljk0OCwwLjc2LDYuODUxLDIuMjg0YzEuOTAzLDEuMTQzLDIuODQ4LDIuODU2LDIuODQ4LDUuMTRMMjU1LjI0NiwyNTcuODEyeiIvPjwvZz48L3N2Zz4=")',
	information: 'url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDM4LjUzM3B4IiBoZWlnaHQ9IjQzOC41MzNweCIgdmlld0JveD0iMCAwIDQzOC41MzMgNDM4LjUzMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzMyA0MzguNTMzOyBmaWxsOiB3aGl0ZTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIGQ9Ik00MDkuMTMzLDEwOS4yMDNjLTE5LjYwOC0zMy41OTItNDYuMjA1LTYwLjE4OS03OS43OTgtNzkuNzk2QzI5NS43MzYsOS44MDEsMjU5LjA1OCwwLDIxOS4yNzMsMGMtMzkuNzgxLDAtNzYuNDcsOS44MDEtMTEwLjA2MywyOS40MDdjLTMzLjU5NSwxOS42MDQtNjAuMTkyLDQ2LjIwMS03OS44LDc5Ljc5NkM5LjgwMSwxNDIuOCwwLDE3OS40ODksMCwyMTkuMjY3YzAsMzkuNzgsOS44MDQsNzYuNDYzLDI5LjQwNywxMTAuMDYyYzE5LjYwNywzMy41OTIsNDYuMjA0LDYwLjE4OSw3OS43OTksNzkuNzk4YzMzLjU5NywxOS42MDUsNzAuMjgzLDI5LjQwNywxMTAuMDYzLDI5LjQwN3M3Ni40Ny05LjgwMiwxMTAuMDY1LTI5LjQwN2MzMy41OTMtMTkuNjAyLDYwLjE4OS00Ni4yMDYsNzkuNzk1LTc5Ljc5OGMxOS42MDMtMzMuNTk2LDI5LjQwMy03MC4yODQsMjkuNDAzLTExMC4wNjJDNDM4LjUzMywxNzkuNDg1LDQyOC43MzIsMTQyLjc5NSw0MDkuMTMzLDEwOS4yMDN6IE0xODIuNzI3LDU0LjgxM2MwLTIuNjY2LDAuODU1LTQuODUzLDIuNTctNi41NjVjMS43MTItMS43MTEsMy45MDMtMi41Nyw2LjU2Ny0yLjU3aDU0LjgyYzIuNjYyLDAsNC44NTMsMC44NTksNi41NjEsMi41N2MxLjcxMSwxLjcxMiwyLjU3MywzLjg5OSwyLjU3Myw2LjU2NXY0NS42ODJjMCwyLjY2NC0wLjg2Miw0Ljg1NC0yLjU3Myw2LjU2NGMtMS43MDgsMS43MTItMy44OTgsMi41NjgtNi41NjEsMi41NjhoLTU0LjgyYy0yLjY2NCwwLTQuODU0LTAuODU2LTYuNTY3LTIuNTY4Yy0xLjcxNS0xLjcwOS0yLjU3LTMuOS0yLjU3LTYuNTY0VjU0LjgxM3ogTTI5Mi4zNTksMzU2LjMwOWMwLDIuNjYyLTAuODYzLDQuODUzLTIuNTcsNi41NjFjLTEuNzA0LDEuNzE0LTMuODk1LDIuNTctNi41NjMsMi41N0gxNTUuMzE3Yy0yLjY2NywwLTQuODU0LTAuODU2LTYuNTY3LTIuNTdjLTEuNzEyLTEuNzA4LTIuNTY4LTMuODk4LTIuNTY4LTYuNTY0di00NS42ODJjMC0yLjY3LDAuODU2LTQuODUzLDIuNTY4LTYuNTY3YzEuNzEzLTEuNzA4LDMuOTAzLTIuNTcsNi41NjctMi41N2gyNy40MXYtOTEuMzU4aC0yNy40MWMtMi42NjcsMC00Ljg1My0wLjg1NS02LjU2Ny0yLjU2OGMtMS43MTItMS43MTEtMi41NjgtMy45MDEtMi41NjgtNi41Njd2LTQ1LjY3OWMwLTIuNjY2LDAuODU2LTQuODUzLDIuNTY4LTYuNTY3YzEuNzE1LTEuNzEzLDMuOTA1LTIuNTY4LDYuNTY3LTIuNTY4aDkxLjM2N2MyLjY2MiwwLDQuODUzLDAuODU1LDYuNTYxLDIuNTY4YzEuNzExLDEuNzE0LDIuNTczLDMuOTAxLDIuNTczLDYuNTY3djE0Ni4xNzloMjcuNDAxYzIuNjY5LDAsNC44NTksMC44NTUsNi41NywyLjU2NmMxLjcwNCwxLjcxMiwyLjU2NiwzLjkwMSwyLjU2Niw2LjU2N3Y0NS42ODNIMjkyLjM1OXoiLz48L2c+PC9zdmc+")'
});

const show = (from) => keyframes`
	0% {
		${from}: -100%;
		opacity: 0;
	}
  	100% {
		${from}: 30px;
		opacity: 1;
	}
`;

const showWithBounce = (from) => keyframes`
	0% {
		${from}: -100%;
		opacity: 0;
	}
	80% {
		${from}: 50px;
		opacity: 1;
	}
	90% {
		${from}: 20px;
		opacity: 1;
	}
  	100% {
		${from}: 30px;
		opacity: 1;
	}
`;

const hide = (from) => keyframes`
	from {
        ${from}: 30px;
        opacity: 1;
	}
  	to {
        ${from}: -100%;
        opacity: 0;
	}
`;

const Layout = styled.div`
    background-color: ${backgroundColor};
	border-radius: 5px;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
	max-width: 420px;
    min-width: 250px;
    opacity: 0;
	padding: 15px;
	position: fixed;
    z-index: 996;
    
    ${props => props.side}: 30px;
    ${props => props.from}: -100%;
	
    ${props => props.show ? (props.showWithBounce ? `animation: ${showWithBounce(props.from)} 0.6s ease forwards;` : `animation: ${show(props.from)} 0.6s ease forwards;`) : ``}
    ${props => props.hide ? `animation: ${hide(props.from)} 0.6s ease forwards;` : ``}
	
	@media screen and (max-width: 767px) {
		border-radius: 0px;
		left: 0px;
	    width: 100%;
	}
	
	@media screen and (min-width: 768px) and (max-width: 991px) {
		border-radius: 0px;
		left: 0px;
	    width: 100%;
	}
`;

const CloseButton = styled.button`
    background-color: transparent;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzM5LjE3N3B4IiBoZWlnaHQ9IjMzOS4xNzdweCIgdmlld0JveD0iMCAwIDMzOS4xNzcgMzM5LjE3NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzM5LjE3NyAzMzkuMTc3OyBmaWxsOiB3aGl0ZTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIGQ9Ik0yNDcuMjQ0LDE2OS41OWw4My45MzgtODMuOTM4YzUuMzMyLTUuMzI3LDcuOTk0LTExLjc5OCw3Ljk5NC0xOS40MTRjMC03LjYxNC0yLjY2OS0xNC4wODQtNy45OTQtMTkuNDE0TDI5Mi4zNTUsNy45OTNDMjg3LjAyNiwyLjY2NSwyODAuNTU2LDAsMjcyLjk0NCwwYy03LjYxNywwLTE0LjA4NSwyLjY2NS0xOS40MTcsNy45OTNMMTY5LjU5LDkxLjkzMUw4NS42NTEsNy45OTNDODAuMzI1LDIuNjY1LDczLjg1NCwwLDY2LjIzNywwYy03LjYxMSwwLTE0LjA4MywyLjY2NS0xOS40MTQsNy45OTNMNy45OTQsNDYuODI0QzIuNjY3LDUyLjE1LDAsNTguNjI0LDAsNjYuMjM4YzAsNy42MTYsMi42NjQsMTQuMDg0LDcuOTk0LDE5LjQxNGw4My45MzcsODMuOTM4TDcuOTk0LDI1My41MjhDMi42NjcsMjU4Ljg1OSwwLDI2NS4zMjcsMCwyNzIuOTQ1YzAsNy42MSwyLjY2NCwxNC4wODIsNy45OTQsMTkuNDFsMzguODMsMzguODI4YzUuMzMsNS4zMzIsMTEuODAzLDcuOTk0LDE5LjQxNCw3Ljk5NGM3LjYxNiwwLDE0LjA4NC0yLjY2OSwxOS40MTQtNy45OTRsODMuOTM5LTgzLjkzOGw4My45NDQsODMuOTM4YzUuMzI4LDUuMzMyLDExLjc5Myw3Ljk5NCwxOS40MTcsNy45OTRjNy42MTEsMCwxNC4wODItMi42NjksMTkuNDExLTcuOTk0bDM4LjgyLTM4LjgyOGM1LjMzMi01LjMyNCw3Ljk5NC0xMS44LDcuOTk0LTE5LjQxYzAtNy42MTgtMi42NjItMTQuMDg2LTcuOTk0LTE5LjQxN0wyNDcuMjQ0LDE2OS41OXoiLz48L2c+PC9zdmc+");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 10px 10px;
    border: none;
    cursor: pointer;
    height: 10px;
	padding: 0px;
	position: absolute;
	right: 10px;
    top: 10px;
    width: 10px;
`;

const Icon = styled.div`
    background-image: ${notificationIcon};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 40px 40px;
    height: 40px;
    margin: 0px;
    padding: 0px;
    width: 40px;
`;

const LeftColumn = styled.div`
    display: inline-block;
    float: left;
    height: auto;
    margin: 0px;
    padding: 0px;
    width: 40px;
`;

const RightColumn = styled.div`
    box-sizing: border-box;
    display: inline-block;
    float: left;
    height: auto;
    margin: 0px;
    padding: 0px 0px 0px 15px;
    width: calc(100% - 40px);
`;

const Title = styled.label`
	color: #FFF;
	display: block;
	font-family: Open Sans;
	font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-right: 20px;
	text-align: left;
    white-space: nowrap;
    width: 100%;
`;

const Message = styled.label`
	color: #FFF;
	display: block;
	font-family: Open Sans;
    font-size: 12px;
    font-weight: normal;
	text-align: left;
	width: 100%;
`;

export class ToastNotifiaction extends React.Component {
	//*** CONSTRUCTOR ***
	constructor() {
		super();
		this.state = {
            show: false,
            hide: false
		};
	}
	//*** MÉTODOS ***
	show = () => {
		this.setState({ show: true, hide: false }, () => {
            if(this.props.timeout > 0) setTimeout(() => { this.setState({ show: false, hide: true }); }, (this.props.timeout * 1000));
        });
	}
	hide = () => {
		this.setState({ show: false, hide: true });
	}
	//*** RESULTADO ***
	render() {
		
		//M   M EEEEE N   N  SSSS  AAA  JJJJJ EEEEE       SSSS EEEEE  CCCC U   U N   N DDDD   AAA  RRRR  IIIII  OOO
		//MM MM E     NN  N S     A   A   J   E          S     E     C     U   U NN  N D   D A   A R   R   I   O   O
		//M M M EEE   N N N  SSS  AAAAA   J   EEE         SSS  EEE   C     U   U N N N D   D AAAAA RRRR    I   O   O
		//M   M E     N  NN     S A   A J J   E              S E     C     U   U N  NN D   D A   A R   R   I   O   O
		//M   M EEEEE N   N SSSS  A   A  J    EEEEE      SSSS  EEEEE  CCCC  UUU  N   N DDDD  A   A R   R IIIII  OOO
		
		let message;
		if(this.props.message != undefined && typeof this.props.message == 'object') {
			message = this.props.message;
		} else if(this.props.message != undefined && typeof this.props.message == 'string') {
			message = <Message>{this.props.message}</Message>;
		} else {
			message = null;
		}
		
		//RRRR  EEEEE  SSSS U   U L     TTTTT  AAA  DDDD   OOO
		//R   R E     S     U   U L       T   A   A D   D O   O
		//RRRR  EEE    SSS  U   U L       T   AAAAA D   D O   O
		//R   R E         S U   U L       T   A   A D   D O   O
		//R   R EEEEE SSSS   UUU  LLLLL   T   A   A DDDD   OOO
		
		return (
            <ThemeProvider theme={{ type: this.props.notificationType }}>
                <Layout show={this.state.show} hide={this.state.hide} from={this.props.from} side={this.props.side} showWithBounce={this.props.showWithBounce}>
                    <CloseButton type='button' onClick={(event) => {this.setState({ show: false, hide: true });}}/>
                    <LeftColumn>
                        <Icon/>
                    </LeftColumn>
                    <RightColumn>
                        <Title>{this.props.title}</Title>
                        {message}
                    </RightColumn>
                </Layout>
            </ThemeProvider>
		);
	}	
}

//PPPP  RRRR   OOO  PPPP  IIIII EEEEE DDDD   AAA  DDDD  EEEEE  SSSS
//P   P R   R O   O P   P   I   E     D   D A   A D   D E     S
//PPPP  RRRR  O   O PPPP    I   EEE   D   D AAAAA D   D EEE    SSS
//P     R   R O   O P       I   E     D   D A   A D   D E         S
//P     R   R  OOO  P     IIIII EEEEE DDDD  A   A DDDD  EEEEE SSSS

ToastNotifiaction.propTypes = {
    //Obligatorios.
    notificationType: PropTypes.oneOf(['success', 'error', 'warning', 'information']).isRequired,
    title: PropTypes.string.isRequired,
    //Opcionales.
    from: PropTypes.oneOf(['top', 'bottom']),
	message: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	showWithBounce: PropTypes.bool,
    side: PropTypes.oneOf(['left', 'right']),
    timeout: PropTypes.number
};

ToastNotifiaction.defaultProps = {
	from: 'bottom',
	showWithBounce: false,
    side: 'left',
    timeout: -1
};