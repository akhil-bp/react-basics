import React from "react";
import LazyLoad from 'react-lazyload'

export default class Footer extends React.Component {
    state = {
        data: null,
        selected: null
    }
    componentDidMount() {
        const num = [1, 2, 3, 5, 6, 7, 8, 9];
        const dd = num.map((d) => {
            return (
                <b key={d}>{d}</b>
            )
        })
        this.setState({ data: dd })
    }
    handleChange = (e) => {
        this.setState({ selected: e.target.value })
    }
    render() {

        return (
            <LazyLoad placeholder={<div>Scroll down to load footer component</div>}>
                <footer>{this.state.data}
                    <select onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option selected value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    <b>{this.state.selected}</b>
                    <h2>Footer</h2>
                </footer>
            </LazyLoad>
        )

    }
}