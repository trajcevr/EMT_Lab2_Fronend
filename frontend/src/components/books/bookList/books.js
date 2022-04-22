import React from 'react';
import BookTerm from '../bookTerm/BookTerm';
import {Link} from "react-router-dom";
import ReactPagination from "react-paginate";

class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            size: 5

        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nexPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.books.length / this.state.size);
        const books = this.getBooksPage(offset, nexPageOffset);
        return (
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"table table-bordered"}>
                        <table>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Category</th>
                                <th scope={"col"}>Author</th>
                                <th scope={"col"}>Available Copies</th>
                            </tr>
                            </thead>
                            <tbody>
                            {books}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col mb-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <Link className={"btn btn-block btn-info"} to={"/books/add"}>Add new book</Link>
                        </div>
                    </div>
                </div>
                <ReactPagination previousLabel={"back"}
                                 nextLabel={"next"}
                                 breakLabel={<a href="/#">...</a>}
                                 breakClassName={"break-me"}
                                 pageClassName={"ml-1"}
                                 pageCount={pageCount}
                                 marginPagesDisplayed={2}
                                 pageRangeDisplayed={5}
                                 onPageChange={this.handlePageClick}
                                 containerClassName={"pagination m-4 justify-content-center"}
                                 activeClassName={"active"}/>
            </div>
        )
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        })
    }
    getBooksPage = (offset, NextPageOffset) => {
        return this.props.books.map((term, index) => {
            return (
                <BookTerm term={term} onEdit={this.props.onEdit} onDelete={this.props.onDelete}
                          onMarkasTaken={this.props.onMarkasTaken}/>
            );
        }).filter((book, index) => {
            return index >= offset && index < NextPageOffset;
        })
    }

}

export default Books;