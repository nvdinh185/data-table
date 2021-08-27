import React from 'react';
import DataTable from "react-data-table-component";

const App = () => {

    const columns = [
        {
            name: "Chỉnh sửa",
            cell: (row, index, column, id) => {
                console.log(index + " " + id);
                console.log(row);
                console.log(column);
                return (
                    <>
                        <button>{id}</button>
                    </>
                );
            },
            width: "100px",
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Director',
            selector: row => row.director,
            sortable: true,
        },
        {
            name: 'Year',
            selector: row => row.year,
            sortable: true,
        },
    ];

    const data = [
        {
            id: 1,
            title: "Beetlejuice",
            director: "Beetlejuice",
            year: "1988"
        },
        {
            id: 2,
            title: "The Cotton Club",
            director: "The Cotton Club",
            year: "1984",
        },
        {
            id: 3,
            title: "The Shawshank Redemption",
            director: "The Shawshank Redemption",
            year: "1994",
        },
        {
            id: 4,
            title: "The Redemption",
            director: "The Redemption",
            year: "1996",
        },
    ];

    return (
        <DataTable
            title="Movie List"
            columns={columns}
            data={data}
        />
    );
};

export default App