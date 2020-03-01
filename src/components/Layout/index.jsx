import React from 'react';
import styled                from 'styled-components';
import Header                from './Header';
import Main                  from './Main';

const Wrapper = styled.div`

	display:        flex;
	flex-direction: column;
	width:          100%;
	height:         auto;
	min-height:     100%;

`;

const Layout = (props) => {

	return (
		<Wrapper>

			<Header />

			<Main {...props}/>

		</Wrapper>
	);
};

export default Layout;