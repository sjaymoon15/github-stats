import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';

const Graph = (props) => {
	return (
		<div>
			<div className='graph'>
				<Sparklines data={props.data}>
					<SparklinesLine color='#1e6823' />
				</Sparklines>
			</div>
			<div className="align-right">{props.totalCommits} total commits</div>
		</div>
	);
}
export default Graph;
