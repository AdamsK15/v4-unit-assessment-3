import React, { Component } from 'react'
import data from '../data'
import SearchClearSec from './SearchClearSec';
import ClearShelfSec from './ClearShelfSec'

class BookPool extends Component {
    constructor() {
        super();
        this.state = {
            data,
        }

    }

    render() {

        return (
            <div>
                <SearchClearSec />
                <ClearShelfSec />
                <section>
                    {/* {this.state.data} */}
                </section>
            </div>
        )
    }

}


export default BookPool