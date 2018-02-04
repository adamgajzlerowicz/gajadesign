import React from 'react'
import Link from 'gatsby-link'


class Foo extends React.Component {
	state = {
		tick: 0
	}
	componentDidMount(){
		setInterval(()=>{
			this.setState({tick: this.state.tick + 1})
		}, 1000)
	}
	render(){
		return (
			<div>
			dupa
			{this.state.tick}
			</div>
			)
	}
}

const IndexPage = () => (
	<div>
	<Foo />
	<Link to="/page-2/">Go to page 2</Link>
	</div>
	)

export default IndexPage
