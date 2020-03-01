import React from 'react';
import styled                from 'styled-components';
import Header                from './Header';
import Main                  from './Main';

const Wrapper = styled.div`

	display:        flex;
	flex-direction: column;
	position: absolute;
	width:          100%;
	height:         100%;

`;

const Layout = ({noneHeader, ...props}) => {
	console.log('props', props);
	return (
		<Wrapper>

			{
				!noneHeader && <Header />
			}

			<Main {...props}/>

		</Wrapper>
	);
};

export default Layout;