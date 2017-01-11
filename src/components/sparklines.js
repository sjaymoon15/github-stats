import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';

const Graph = (props) => {
	return (
		<div>
			<Sparklines data={props.data}>
				<SparklinesLine color='orange' />
			</Sparklines>
			{props.totalCommits} total commits
		</div>
	);
}
export default Graph;
